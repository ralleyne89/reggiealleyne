import { useEffect, useRef, type RefObject } from "react";
import {
  BufferGeometry,
  Color,
  Group,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  Texture,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";

gsap.registerPlugin(ScrollTrigger);

type HeroDepthSceneProps = {
  sectionRef: RefObject<HTMLElement>;
};

type FrameSpec = {
  slug: string;
  position: [number, number, number];
  rotationY: number;
  width: number;
};

/**
 * Where each product screen stands in the canvas. They sit behind and around
 * the HTML hero, at different depths, so pointer and scroll movement read as
 * a walk through a design file.
 */
const FRAMES: FrameSpec[] = [
  { slug: "motorflow", position: [-5.5, 1.9, -2.2], rotationY: 0.34, width: 3.3 },
  { slug: "staybooked", position: [5.6, 2.1, -3.6], rotationY: -0.36, width: 3.3 },
  { slug: "tech-noir", position: [-6.6, -1.3, -6.2], rotationY: 0.42, width: 3.6 },
  { slug: "litmus-ai", position: [6.3, -1.1, -1.4], rotationY: -0.44, width: 2.9 },
  { slug: "covelo-timecard-system", position: [0.4, 3.9, -9.5], rotationY: 0, width: 4 },
];

const FRAME_ASPECT = 16 / 10;
const ACCENT = new Color("#7c5cf0");

const gridVertex = /* glsl */ `
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const gridFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uCamera;
  uniform float uOpacity;
  varying vec3 vWorld;
  void main() {
    vec2 cell = vWorld.xz / 1.25;
    vec2 line = abs(fract(cell - 0.5) - 0.5) / fwidth(cell);
    float mask = 1.0 - min(min(line.x, line.y), 1.0);
    float fade = smoothstep(30.0, 5.0, distance(vWorld.xz, uCamera.xz));
    gl_FragColor = vec4(uColor, mask * fade * uOpacity);
  }
`;

/** Crop a texture so it covers a 16:10 frame, anchored to the top of the screen. */
const coverTexture = (texture: Texture) => {
  const image = texture.image as { width: number; height: number };
  const imageAspect = image.width / image.height;

  if (imageAspect > FRAME_ASPECT) {
    texture.repeat.set(FRAME_ASPECT / imageAspect, 1);
    texture.offset.set((1 - texture.repeat.x) / 2, 0);
  } else {
    texture.repeat.set(1, imageAspect / FRAME_ASPECT);
    texture.offset.set(0, 1 - texture.repeat.y);
  }
};

/**
 * The hero's one WebGL moment: a canvas grid floor and real product screens
 * standing in depth behind the HTML hero. Everything a visitor reads or
 * clicks stays in the DOM above it; this layer can fail or be skipped and the
 * hero is unchanged.
 */
const HeroDepthScene = ({ sectionRef }: HeroDepthSceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return undefined;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);

    const scene = new Scene();
    const camera = new PerspectiveCamera(35, 1, 0.1, 80);
    const disposables: Array<{ dispose: () => void }> = [];

    // Floor: the design canvas grid, fading with distance.
    const gridMaterial = new ShaderMaterial({
      vertexShader: gridVertex,
      fragmentShader: gridFragment,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uColor: { value: ACCENT.clone() },
        uCamera: { value: new Vector3() },
        uOpacity: { value: 0 },
      },
    });
    const gridGeometry = new PlaneGeometry(90, 90);
    const grid = new Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -3.1;
    scene.add(grid);
    disposables.push(gridMaterial, gridGeometry);

    // Product screens, each inside a selection frame.
    const projects = getAllPredefinedProjectsSync();
    const loader = new TextureLoader();
    const frames: Array<{
      group: Group;
      material: MeshBasicMaterial;
      outline: LineBasicMaterial;
      spec: FrameSpec;
    }> = [];

    FRAMES.forEach((spec) => {
      const project = projects.find((candidate) => candidate.slug === spec.slug);
      if (!project?.image) return;

      const width = spec.width;
      const height = width / FRAME_ASPECT;
      const group = new Group();
      group.position.set(...spec.position);
      group.rotation.y = spec.rotationY;

      const material = new MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        color: 0xffffff,
      });
      const geometry = new PlaneGeometry(width, height);
      group.add(new Mesh(geometry, material));

      const outlinePoints = [
        new Vector3(-width / 2, -height / 2, 0.002),
        new Vector3(width / 2, -height / 2, 0.002),
        new Vector3(width / 2, height / 2, 0.002),
        new Vector3(-width / 2, height / 2, 0.002),
      ];
      const outlineGeometry = new BufferGeometry().setFromPoints(outlinePoints);
      const outline = new LineBasicMaterial({
        color: ACCENT,
        transparent: true,
        opacity: 0,
      });
      group.add(new LineLoop(outlineGeometry, outline));

      const handleGeometry = new PlaneGeometry(0.09, 0.09);
      outlinePoints.forEach((point) => {
        const handle = new Mesh(handleGeometry, outline);
        handle.position.set(point.x, point.y, 0.004);
        group.add(handle);
      });

      loader.load(project.image, (texture) => {
        texture.colorSpace = SRGBColorSpace;
        texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
        coverTexture(texture);
        material.map = texture;
        material.needsUpdate = true;
        disposables.push(texture);

        // Each screen arrives from deeper in the canvas once its image is ready.
        gsap.fromTo(
          group.position,
          { z: spec.position[2] - 5 },
          { z: spec.position[2], duration: 1.5, ease: "expo.out" },
        );
        gsap.to(material, { opacity: 0.96, duration: 0.9, ease: "power2.out" });
        gsap.to(outline, { opacity: 0.9, duration: 0.9, delay: 0.25, ease: "power2.out" });
        canvas.dataset.ready = "true";
      });

      scene.add(group);
      frames.push({ group, material, outline, spec });
      disposables.push(material, geometry, outlineGeometry, outline, handleGeometry);
    });

    gsap.to(gridMaterial.uniforms.uOpacity, { value: 0.34, duration: 1.4, delay: 0.3 });

    // Scroll: the camera walks forward and down through the frames.
    const travel = { progress: 0 };
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        travel.progress = self.progress;
      },
    });

    // Pointer: damped parallax, never 1:1.
    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const { width, height } = section.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);

    let inView = true;
    const viewObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    viewObserver.observe(section);

    let lastScroll = window.scrollY;
    let tilt = 0;

    const render = (time: number) => {
      if (!inView || document.hidden) return;

      const scroll = window.scrollY;
      const velocity = gsap.utils.clamp(-60, 60, scroll - lastScroll);
      lastScroll = scroll;
      tilt += (velocity * 0.004 - tilt) * 0.08;

      eased.x += (pointer.x - eased.x) * 0.05;
      eased.y += (pointer.y - eased.y) * 0.05;

      const progress = travel.progress;
      camera.position.set(
        eased.x * 0.7,
        0.35 - progress * 1.5 - eased.y * 0.35,
        11 - progress * 7.5,
      );
      camera.lookAt(eased.x * 0.25, 0.2 - progress * 2.2, -4);
      gridMaterial.uniforms.uCamera.value.copy(camera.position);

      frames.forEach(({ group, spec }, index) => {
        // Screens drift apart as the camera passes and flex with scroll speed.
        group.position.x = spec.position[0] * (1 + progress * 0.45);
        group.position.y =
          spec.position[1] + Math.sin(time * 0.6 + index * 1.7) * 0.06;
        group.rotation.x = tilt;
        group.rotation.y = spec.rotationY + eased.x * 0.05;
      });

      renderer.render(scene, camera);
    };
    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      trigger.kill();
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      viewObserver.disconnect();
      frames.forEach(({ group, material, outline }) => {
        gsap.killTweensOf([group.position, material, outline]);
      });
      gsap.killTweensOf(gridMaterial.uniforms.uOpacity);
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
    };
  }, [sectionRef]);

  return (
    <canvas ref={canvasRef} className="hero-depth-scene" aria-hidden="true" />
  );
};

export default HeroDepthScene;
