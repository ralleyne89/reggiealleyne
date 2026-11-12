import { useEffect, useRef } from "react";
import {
  Group,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  TextureLoader,
  WebGLRenderer,
} from "three";
import { gsap } from "gsap";

type HeroBustProps = {
  portrait: string;
  depth: string;
};

const IMAGE_ASPECT = 1122 / 1402;
const PLANE_HEIGHT = 2;
const DEPTH_SCALE = 0.36;
const FOV = 14;

const vertexShader = /* glsl */ `
  uniform sampler2D uDepth;
  uniform float uDepthScale;
  varying vec2 vUv;
  varying float vLight;

  void main() {
    vUv = uv;
    float step = 1.0 / 220.0;
    float height = texture2D(uDepth, uv).r;
    float right = texture2D(uDepth, uv + vec2(step, 0.0)).r;
    float left = texture2D(uDepth, uv - vec2(step, 0.0)).r;
    float up = texture2D(uDepth, uv + vec2(0.0, step)).r;
    float down = texture2D(uDepth, uv - vec2(0.0, step)).r;

    // Surface normal from the relief, turned with the bust so the light
    // slides across the form as it rotates.
    vec3 normal = normalize(vec3((left - right) * 2.4, (down - up) * 2.4, 1.0));
    vec3 viewNormal = normalize(normalMatrix * normal);
    vLight = dot(viewNormal, normalize(vec3(0.35, 0.3, 1.0)));

    vec3 displaced = position + vec3(0.0, 0.0, height * uDepthScale);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying float vLight;

  void main() {
    vec4 color = texture2D(uMap, vUv);
    if (color.a < 0.02) discard;
    color.rgb *= 0.86 + 0.2 * vLight;
    gl_FragColor = color;
    #include <colorspace_fragment>
  }
`;

/**
 * The portrait as a relief bust: the same image, pushed into depth by a
 * height map so it turns toward the pointer with real parallax. It draws on
 * its own small canvas inside the portrait's place in the layout, so it keeps
 * its position between the wordmark and the panels. The <img> underneath
 * stays as the poster, the alt text and the fallback.
 */
const HeroBust = ({ portrait, depth }: HeroBustProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return undefined;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new Scene();
    const camera = new PerspectiveCamera(FOV, 1, 0.1, 40);
    const distance = PLANE_HEIGHT / 2 / Math.tan((FOV * Math.PI) / 360);
    camera.position.set(0, 0, distance);

    const loader = new TextureLoader();
    let loaded = 0;
    let disposed = false;
    const onLoad = () => {
      loaded += 1;
      if (loaded === 2 && !disposed) {
        renderer.render(scene, camera);
        canvas.dataset.ready = "true";
      }
    };

    const map = loader.load(portrait, onLoad);
    map.colorSpace = SRGBColorSpace;
    const depthMap = loader.load(depth, onLoad);

    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uMap: { value: map },
        uDepth: { value: depthMap },
        uDepthScale: { value: DEPTH_SCALE },
      },
    });
    const geometry = new PlaneGeometry(
      PLANE_HEIGHT * IMAGE_ASPECT,
      PLANE_HEIGHT,
      180,
      224,
    );
    const mesh = new Mesh(geometry, material);
    // Turn around a point inside the form, not its back face.
    mesh.position.z = -DEPTH_SCALE * 0.55;
    const bust = new Group();
    bust.add(mesh);
    scene.add(bust);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      // Keep the whole image in frame, like object-fit: contain.
      const fitsHeight = camera.aspect >= IMAGE_ASPECT;
      camera.zoom = fitsHeight ? 1 : camera.aspect / IMAGE_ASPECT;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let inView = true;
    const viewObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    viewObserver.observe(host);

    const render = (time: number) => {
      if (!inView || document.hidden || loaded < 2) return;

      eased.x += (pointer.x - eased.x) * 0.06;
      eased.y += (pointer.y - eased.y) * 0.06;
      bust.rotation.y = eased.x * 0.34 + Math.sin(time * 0.5) * 0.025;
      bust.rotation.x = eased.y * 0.12;
      renderer.render(scene, camera);
    };
    gsap.ticker.add(render);

    return () => {
      disposed = true;
      gsap.ticker.remove(render);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      viewObserver.disconnect();
      geometry.dispose();
      material.dispose();
      map.dispose();
      depthMap.dispose();
      renderer.dispose();
    };
  }, [portrait, depth]);

  return <canvas ref={canvasRef} className="hero-bust" aria-hidden="true" />;
};

export default HeroBust;
