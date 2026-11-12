import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { gsap } from "gsap";
import { figmaFrameSrc, type FigmaFile, type FigmaFrame } from "@/config/figmaCanvas";

/** 1 world unit = 100 Figma px. Figma's y runs down, the scene's runs up. */
const UNIT = 100;
const FOV = 30;
const HALF_FOV_TAN = Math.tan((FOV * Math.PI) / 360);
const OVERVIEW_TILT = 0.34;
const CANVAS_COLOR = 0x17171b;
const ACCENT = 0x8b6cf6;

type Bounds = { cx: number; cy: number; width: number; height: number };

type FrameNode = {
  frame: FigmaFrame;
  mesh: Mesh<PlaneGeometry, MeshBasicMaterial>;
  shadow: Mesh<PlaneGeometry, ShaderMaterial>;
  outline: LineLoop<BufferGeometry, LineBasicMaterial>;
  label: HTMLSpanElement;
  holder: Group;
  rest: { x: number; y: number };
  size: { width: number; height: number };
};

type PageNode = { group: Group; frames: FrameNode[]; bounds: Bounds };

export type FigmaCanvasCallbacks = {
  onReady: () => void;
  onHover: (frameIndex: number | null) => void;
  onFocus: (frameIndex: number | null) => void;
  onZoom: (percent: number) => void;
};

export type FigmaCanvasApi = {
  setPage: (index: number) => void;
  focusFrame: (index: number | null) => void;
  zoomBy: (factor: number) => void;
  fit: () => void;
  dispose: () => void;
};

const shadowMaterial = (width: number, height: number, pad: number) =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      uHalf: { value: new Vector2(width / 2, height / 2) },
      uPad: { value: pad },
      uOpacity: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vPos;
      void main() {
        vPos = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec2 uHalf;
      uniform float uPad;
      uniform float uOpacity;
      varying vec2 vPos;
      void main() {
        vec2 d = max(abs(vPos) - uHalf, 0.0);
        float falloff = 1.0 - smoothstep(0.0, uPad, length(d));
        gl_FragColor = vec4(0.0, 0.0, 0.0, falloff * falloff * 0.55 * uOpacity);
      }
    `,
  });

const gridMaterial = () =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: false,
    uniforms: { uSoft: { value: 0.02 }, uStrength: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec2 vPos;
      void main() {
        vPos = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uSoft;
      uniform float uStrength;
      varying vec2 vPos;
      void main() {
        float cell = 1.0;
        vec2 p = (fract(vPos / cell) - 0.5) * cell;
        float dotAlpha = 1.0 - smoothstep(0.03, 0.03 + uSoft, length(p));
        float fade = 1.0 - smoothstep(60.0, 150.0, length(vPos));
        gl_FragColor = vec4(1.0, 1.0, 1.0, dotAlpha * 0.2 * uStrength * fade);
      }
    `,
  });

export const createFigmaCanvasScene = (
  container: HTMLElement,
  labelLayer: HTMLElement,
  slug: string,
  file: FigmaFile,
  callbacks: FigmaCanvasCallbacks,
): FigmaCanvasApi => {
  const renderer = new WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(new Color(CANVAS_COLOR), 1);
  renderer.outputColorSpace = SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.className = "fc-canvas";
  canvas.setAttribute("aria-hidden", "true");
  container.prepend(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 2000);
  const loader = new TextureLoader();
  const raycaster = new Raycaster();
  const pointerNdc = new Vector2(2, 2);
  const scratch = new Vector3();
  const maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const grid = new Mesh(new PlaneGeometry(400, 400), gridMaterial());
  grid.position.z = -0.05;
  grid.renderOrder = -1;
  scene.add(grid);

  const disposables: Array<{ dispose: () => void }> = [grid.geometry, grid.material];

  // ---------- Build pages ----------
  const pages: PageNode[] = file.pages.map((page) => {
    const minX = Math.min(...page.frames.map((frame) => frame.x));
    const maxX = Math.max(...page.frames.map((frame) => frame.x + frame.width));
    const minY = Math.min(...page.frames.map((frame) => frame.y));
    const maxY = Math.max(...page.frames.map((frame) => frame.y + frame.height));
    const originX = (minX + maxX) / 2;
    const originY = (minY + maxY) / 2;

    const group = new Group();
    group.visible = false;
    scene.add(group);

    const frames = page.frames.map((frame) => {
      const width = frame.width / UNIT;
      const height = frame.height / UNIT;
      const rest = {
        x: (frame.x + frame.width / 2 - originX) / UNIT,
        y: -(frame.y + frame.height / 2 - originY) / UNIT,
      };

      const holder = new Group();
      holder.position.set(rest.x, rest.y, 0);
      group.add(holder);

      const pad = 0.9;
      const shadowGeometry = new PlaneGeometry(width + pad * 2, height + pad * 2);
      const shadow = new Mesh(shadowGeometry, shadowMaterial(width, height, pad));
      shadow.position.set(0, -0.18, -0.02);
      shadow.renderOrder = 0;
      holder.add(shadow);

      const geometry = new PlaneGeometry(width, height);
      const material = new MeshBasicMaterial({
        color: 0x2a2a31,
        transparent: true,
        opacity: 0,
        toneMapped: false,
      });
      const mesh = new Mesh(geometry, material);
      mesh.renderOrder = 1;
      holder.add(mesh);

      const outlineGeometry = new BufferGeometry();
      const hw = width / 2;
      const hh = height / 2;
      outlineGeometry.setAttribute(
        "position",
        new Float32BufferAttribute([-hw, -hh, 0, hw, -hh, 0, hw, hh, 0, -hw, hh, 0], 3),
      );
      const outlineMaterial = new LineBasicMaterial({ color: ACCENT, toneMapped: false, depthTest: false });
      const outline = new LineLoop(outlineGeometry, outlineMaterial);
      outline.position.z = 0.01;
      outline.renderOrder = 2;
      outline.visible = false;
      holder.add(outline);

      const label = document.createElement("span");
      label.className = "fc-label";
      label.textContent = frame.name;
      label.hidden = true;
      labelLayer.appendChild(label);

      disposables.push(shadowGeometry, shadow.material, geometry, material, outlineGeometry, outlineMaterial);

      return { frame, mesh, shadow, outline, label, holder, rest, size: { width, height } };
    });

    return {
      group,
      frames,
      bounds: { cx: 0, cy: 0, width: (maxX - minX) / UNIT, height: (maxY - minY) / UNIT },
    };
  });

  // ---------- Textures ----------
  const loadPage = (page: PageNode) =>
    Promise.all(
      page.frames.map(
        (node) =>
          new Promise<void>((resolve) => {
            if (node.mesh.material.map) return resolve();
            loader.load(
              figmaFrameSrc(slug, node.frame),
              (texture) => {
                texture.colorSpace = SRGBColorSpace;
                texture.anisotropy = maxAnisotropy;
                node.mesh.material.map = texture;
                node.mesh.material.color.set(0xffffff);
                node.mesh.material.needsUpdate = true;
                disposables.push(texture);
                wake();
                resolve();
              },
              undefined,
              () => resolve(),
            );
          }),
      ),
    );

  // ---------- Camera ----------
  const view = { x: 0, y: 0, dist: 40, tilt: 1.0, yaw: 0 };
  const target = { x: 0, y: 0, dist: 40, tilt: OVERVIEW_TILT, yaw: 0 };
  let dampRate = 2.4;
  let fitDist = 40;
  let size = { width: 1, height: 1 };

  const distanceFor = (width: number, height: number, padding: number) =>
    Math.max(height / 2 / HALF_FOV_TAN, width / 2 / (HALF_FOV_TAN * camera.aspect)) * padding;

  let pageIndex = 0;
  let focusIndex: number | null = null;
  let hoverIndex: number | null = null;
  let disposed = false;
  let started = false;
  let inView = false;
  let ready = false;
  let awake = true;
  let lastZoom = -1;
  let busyUntil = 0;

  const wake = () => {
    awake = true;
  };

  const goOverview = () => {
    const { bounds } = pages[pageIndex];
    // Very tall pages open on their top rows instead of shrinking to a sliver.
    const shownHeight = Math.min(bounds.height, (bounds.width / camera.aspect) * 2.6);
    fitDist = distanceFor(bounds.width, shownHeight, 1.22);
    target.x = 0;
    target.y = bounds.height / 2 - shownHeight / 2 - shownHeight * 0.04;
    target.dist = fitDist;
    target.tilt = OVERVIEW_TILT;
    wake();
  };

  const applyOutlines = () => {
    pages[pageIndex].frames.forEach((node, index) => {
      const active = index === hoverIndex || index === focusIndex;
      node.outline.visible = active;
      node.label.classList.toggle("fc-label--active", active);
    });
    wake();
  };

  const setFocus = (index: number | null) => {
    focusIndex = index;
    if (index === null) {
      goOverview();
    } else {
      const node = pages[pageIndex].frames[index];
      // Tall frames open at their top, the way a page is read.
      const visibleHeight = Math.min(node.size.height, node.size.width / camera.aspect * 1.25);
      target.dist = distanceFor(node.size.width, visibleHeight, 1.16);
      target.x = node.rest.x;
      target.y = node.rest.y + node.size.height / 2 - visibleHeight / 2;
      target.tilt = 0;
    }
    dampRate = 6;
    applyOutlines();
    callbacks.onFocus(index);
  };

  const keepBusy = (seconds: number) => {
    busyUntil = Math.max(busyUntil, performance.now() + seconds * 1000);
    wake();
  };

  const tweenTargets = (node: FrameNode) => [
    node.holder.position,
    node.holder.rotation,
    node.holder.scale,
    node.mesh.material,
    node.shadow.material.uniforms.uOpacity,
  ];

  /** Frames start as a tilted stack above the canvas and deal out to their places. */
  const dealIn = (page: PageNode, delay = 0) => {
    page.group.visible = true;
    keepBusy(delay + page.frames.length * 0.075 + 1.7);
    page.frames.forEach((node, index) => {
      gsap.killTweensOf(tweenTargets(node));
      const side = index % 2 === 0 ? -1 : 1;
      node.label.hidden = false;
      node.holder.position.set(index * 0.5, -index * 0.35, 9 + index * 1.4);
      node.holder.rotation.set(-0.95, side * 0.18, side * 0.14);
      node.holder.scale.setScalar(0.55);
      node.mesh.material.opacity = 0;
      node.shadow.material.uniforms.uOpacity.value = 0;

      const at = delay + index * 0.075;
      gsap.to(node.holder.position, { x: node.rest.x, y: node.rest.y, z: 0, duration: 1.35, delay: at, ease: "expo.out", onUpdate: wake });
      gsap.to(node.holder.rotation, { x: 0, y: 0, z: 0, duration: 1.5, delay: at, ease: "expo.out" });
      gsap.to(node.holder.scale, { x: 1, y: 1, z: 1, duration: 1.2, delay: at, ease: "expo.out" });
      gsap.to(node.mesh.material, { opacity: 1, duration: 0.5, delay: at, ease: "power2.out" });
      gsap.to(node.shadow.material.uniforms.uOpacity, { value: 1, duration: 0.9, delay: at + 0.5, ease: "power2.out" });
    });
    wake();
  };

  const dealOut = (page: PageNode) => {
    keepBusy(0.8);
    page.frames.forEach((node, index) => {
      gsap.killTweensOf(tweenTargets(node));
      node.label.hidden = true;
      node.outline.visible = false;
      gsap.to(node.holder.position, { z: -4, y: node.rest.y - 1.5, duration: 0.4, delay: index * 0.02, ease: "power2.in", onUpdate: wake });
      gsap.to(node.shadow.material.uniforms.uOpacity, { value: 0, duration: 0.2 });
      gsap.to(node.mesh.material, {
          opacity: 0,
          duration: 0.32,
          delay: index * 0.02,
          ease: "power2.in",
          onComplete: () => {
            if (pages[pageIndex] !== page) page.group.visible = false;
          },
        });
    });
  };

  const start = () => {
    if (started || !ready || !inView) return;
    started = true;
    goOverview();
    view.x = target.x;
    view.y = target.y - 6;
    view.dist = fitDist * 1.55;
    view.tilt = 1.02;
    dampRate = 2.2;
    dealIn(pages[0], 0.1);
    gsap.delayedCall(1.6, () => {
      dampRate = 6;
    });
  };

  // ---------- Pointer ----------
  let drag: { x: number; y: number; moved: boolean } | null = null;

  const worldPerPixel = () => (2 * view.dist * HALF_FOV_TAN) / size.height;

  const updateHover = () => {
    if (drag?.moved || !started) return;
    raycaster.setFromCamera(pointerNdc, camera);
    const meshes = pages[pageIndex].frames.map((node) => node.mesh);
    const hit = raycaster.intersectObjects(meshes, false)[0];
    const next = hit ? meshes.indexOf(hit.object as (typeof meshes)[number]) : null;
    if (next !== hoverIndex) {
      hoverIndex = next;
      canvas.style.cursor = next === null ? "grab" : "pointer";
      applyOutlines();
      callbacks.onHover(next);
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointerNdc.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1,
    );

    if (drag) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) > 4) {
        drag.moved = true;
        canvas.style.cursor = "grabbing";
      }
      if (drag.moved) {
        const scale = worldPerPixel();
        target.x -= dx * scale;
        target.y += dy * scale;
        view.x = target.x;
        view.y = target.y;
        drag.x = event.clientX;
        drag.y = event.clientY;
      }
    } else if (focusIndex === null) {
      target.yaw = pointerNdc.x * 0.06;
    }

    updateHover();
    wake();
  };

  const onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY, moved: false };
    canvas.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: PointerEvent) => {
    if (!drag) return;
    const wasDrag = drag.moved;
    drag = null;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    canvas.style.cursor = hoverIndex === null ? "grab" : "pointer";
    if (wasDrag) return;

    if (hoverIndex !== null && hoverIndex !== focusIndex) setFocus(hoverIndex);
    else if (focusIndex !== null) setFocus(null);
  };

  const onPointerLeave = () => {
    pointerNdc.set(2, 2);
    target.yaw = 0;
    if (hoverIndex !== null) {
      hoverIndex = null;
      applyOutlines();
      callbacks.onHover(null);
    }
    wake();
  };

  const clampDist = (value: number) => Math.min(fitDist * 6, Math.max(fitDist * 0.06, value));

  // Only pinch or Ctrl/Cmd + wheel zooms, so the page keeps its scroll.
  const onWheel = (event: WheelEvent) => {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    target.dist = clampDist(target.dist * Math.exp(event.deltaY * 0.0022));
    dampRate = 10;
    wake();
  };

  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerUp);
  canvas.addEventListener("pointerleave", onPointerLeave);
  canvas.addEventListener("wheel", onWheel, { passive: false });
  canvas.style.cursor = "grab";

  // ---------- Loop ----------
  const placeLabels = () => {
    pages[pageIndex].frames.forEach((node) => {
      if (node.label.hidden) return;
      node.holder.updateWorldMatrix(true, false);
      scratch.set(-node.size.width / 2, node.size.height / 2, 0).applyMatrix4(node.holder.matrixWorld).project(camera);
      const left = ((scratch.x + 1) / 2) * size.width;
      const top = ((1 - scratch.y) / 2) * size.height;
      scratch.set(node.size.width / 2, node.size.height / 2, 0).applyMatrix4(node.holder.matrixWorld).project(camera);
      const right = ((scratch.x + 1) / 2) * size.width;
      const span = right - left;
      const shown = scratch.z < 1 && span > 54 && node.mesh.material.opacity > 0.6;
      node.label.style.opacity = shown ? "1" : "0";
      node.label.style.maxWidth = `${Math.max(54, span)}px`;
      node.label.style.transform = `translate3d(${left.toFixed(1)}px, ${(top - 22).toFixed(1)}px, 0)`;
    });
  };

  let previous = performance.now();
  const tick = () => {
    if (disposed || !inView || document.hidden) {
      previous = performance.now();
      return;
    }
    if (!awake && performance.now() > busyUntil) return;

    const now = performance.now();
    const dt = Math.min(0.05, (now - previous) / 1000);
    previous = now;
    const k = 1 - Math.exp(-dt * dampRate);

    view.x += (target.x - view.x) * k;
    view.y += (target.y - view.y) * k;
    view.dist += (target.dist - view.dist) * k;
    view.tilt += (target.tilt - view.tilt) * k;
    view.yaw += (target.yaw - view.yaw) * k;

    camera.position.set(
      view.x + Math.sin(view.yaw) * view.dist,
      view.y - Math.sin(view.tilt) * view.dist,
      Math.cos(view.tilt) * Math.cos(view.yaw) * view.dist,
    );
    scratch.set(view.x, view.y, 0);
    camera.up.set(0, 1, 0);
    camera.lookAt(scratch);
    camera.updateMatrixWorld();

    const gridUniforms = (grid.material as ShaderMaterial).uniforms;
    gridUniforms.uSoft.value = Math.max(0.012, view.dist * 0.0016);
    gridUniforms.uStrength.value = Math.min(1, 26 / view.dist);

    renderer.render(scene, camera);
    placeLabels();

    const zoom = Math.round((fitDist / view.dist) * 100);
    if (zoom !== lastZoom && started) {
      lastZoom = zoom;
      callbacks.onZoom(zoom);
    }

    const settled =
      Math.abs(target.x - view.x) < 0.002 &&
      Math.abs(target.y - view.y) < 0.002 &&
      Math.abs(target.dist - view.dist) < 0.004 &&
      Math.abs(target.tilt - view.tilt) < 0.0006 &&
      Math.abs(target.yaw - view.yaw) < 0.0006;
    if (settled) awake = false;
  };

  gsap.ticker.add(tick);

  // ---------- Observers ----------
  const resize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;
    size = { width, height };
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (started && focusIndex === null) goOverview();
    wake();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      if (entry.intersectionRatio > 0.3) start();
      wake();
    },
    { threshold: [0, 0.3] },
  );
  intersectionObserver.observe(container);

  const onContextLost = (event: Event) => {
    event.preventDefault();
    inView = false;
  };
  const onContextRestored = () => {
    inView = true;
    wake();
  };
  canvas.addEventListener("webglcontextlost", onContextLost);
  canvas.addEventListener("webglcontextrestored", onContextRestored);

  loadPage(pages[0]).then(() => {
    if (disposed) return;
    ready = true;
    callbacks.onReady();
    start();
    // Other pages load when they are opened; the next one is warmed up.
    if (pages[1]) void loadPage(pages[1]);
  });

  return {
    setPage: (index) => {
      if (index === pageIndex || !pages[index]) return;
      const previousPage = pages[pageIndex];
      pageIndex = index;
      hoverIndex = null;
      focusIndex = null;
      callbacks.onHover(null);
      callbacks.onFocus(null);
      if (!started) return;
      dealOut(previousPage);
      void loadPage(pages[index]);
      goOverview();
      dampRate = 3.2;
      view.tilt = Math.max(view.tilt, 0.7);
      dealIn(pages[index], 0.22);
    },
    focusFrame: (index) => {
      if (!started) return;
      setFocus(index);
    },
    zoomBy: (factor) => {
      target.dist = clampDist(target.dist / factor);
      dampRate = 8;
      wake();
    },
    fit: () => {
      if (!started) return;
      dampRate = 6;
      setFocus(null);
    },
    dispose: () => {
      disposed = true;
      gsap.ticker.remove(tick);
      pages.forEach((page) => page.frames.forEach((node) => gsap.killTweensOf(tweenTargets(node))));
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      disposables.forEach((item) => item.dispose());
      pages.forEach((page) => page.frames.forEach((node) => node.label.remove()));
      renderer.dispose();
      canvas.remove();
    },
  };
};
