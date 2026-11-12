import { useEffect, useId, useState, type RefObject } from "react";

/**
 * Real refraction for a glass pill, the way Apple's Liquid Glass bends what
 * is behind it at the rim. An SVG displacement map is generated to the
 * element's exact size and used as its backdrop filter.
 *
 * Only Chromium renders `backdrop-filter: url(...)`; everywhere else the
 * element keeps its CSS blur, so the hook reports whether it took effect.
 */

const BEZEL = 20; // px of rim that bends light
const STRENGTH = 70; // max displacement in px at the very edge

const supportsBackdropUrl = () =>
  typeof navigator !== "undefined" &&
  "userAgentData" in navigator &&
  typeof CSS !== "undefined" &&
  CSS.supports("backdrop-filter", "url(#a)");

/** Signed distance from a point to the inside edge of a rounded rect. */
const insetDistance = (x: number, y: number, w: number, h: number, r: number) => {
  const qx = Math.abs(x - w / 2) - (w / 2 - r);
  const qy = Math.abs(y - h / 2) - (h / 2 - r);
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  const inside = Math.min(Math.max(qx, qy), 0);
  return -(outside + inside - r);
};

const buildMap = (w: number, h: number, r: number) => {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const image = context.createImageData(w, h);
  const bezel = Math.min(BEZEL, r);

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const px = x + 0.5;
      const py = y + 0.5;
      const d = insetDistance(px, py, w, h, r);
      let dx = 0;
      let dy = 0;

      if (d >= 0 && d < bezel) {
        // Gradient of the distance field = inward normal.
        const nx = insetDistance(px + 1, py, w, h, r) - insetDistance(px - 1, py, w, h, r);
        const ny = insetDistance(px, py + 1, w, h, r) - insetDistance(px, py - 1, w, h, r);
        const length = Math.hypot(nx, ny) || 1;
        const t = 1 - d / bezel;
        // A convex rim: almost flat toward the middle, steep at the edge.
        const bend = 1 - Math.sqrt(1 - t * t);
        dx = (nx / length) * bend;
        dy = (ny / length) * bend;
      }

      const index = (y * w + x) * 4;
      image.data[index] = Math.round(127.5 + dx * 127.5);
      image.data[index + 1] = Math.round(127.5 + dy * 127.5);
      image.data[index + 2] = 128;
      image.data[index + 3] = 255;
    }
  }

  context.putImageData(image, 0, 0);
  return canvas.toDataURL("image/png");
};

export const useLiquidGlass = (ref: RefObject<HTMLElement>) => {
  const filterId = `lg-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const [map, setMap] = useState<{ href: string; width: number; height: number } | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !supportsBackdropUrl()) return undefined;
    if (window.matchMedia("(prefers-reduced-transparency: reduce)").matches) return undefined;

    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = Math.round(element.offsetWidth);
        const height = Math.round(element.offsetHeight);
        if (width < 8 || height < 8) return;
        const radius = Math.min(
          parseFloat(getComputedStyle(element).borderTopLeftRadius) || height / 2,
          height / 2,
          width / 2,
        );
        const href = buildMap(width, height, radius);
        if (href) setMap({ href, width, height });
      });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [ref]);

  return { filterId, map, strength: STRENGTH };
};
