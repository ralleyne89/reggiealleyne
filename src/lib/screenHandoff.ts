import { gsap } from "gsap";
import { EASE } from "@/lib/motion";

const TARGET_SELECTOR = "[data-cs-cover]";
const GIVE_UP_AFTER_MS = 2600;

/**
 * Carries a project screen from a work tile to the case-study cover across
 * the route change: a fixed copy of the image floats above the page wipe,
 * then settles onto the cover once the new page has mounted and scrolled to
 * the top. If the cover never appears, the copy just fades away.
 */
export const startScreenHandoff = (source: HTMLImageElement | null | undefined) => {
  if (!source) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const from = source.getBoundingClientRect();
  if (from.width === 0 || from.height === 0) return;

  document.querySelector(".screen-handoff")?.remove();

  const copy = document.createElement("img");
  copy.src = source.currentSrc || source.src;
  copy.alt = "";
  copy.setAttribute("aria-hidden", "true");
  copy.className = "screen-handoff";
  Object.assign(copy.style, {
    left: `${from.left}px`,
    top: `${from.top}px`,
    width: `${from.width}px`,
    height: `${from.height}px`,
  });
  document.body.appendChild(copy);

  const startedAt = performance.now();
  const startPath = window.location.pathname;

  const finish = () => {
    gsap.to(copy, {
      autoAlpha: 0,
      duration: 0.35,
      ease: "power1.out",
      onComplete: () => copy.remove(),
    });
  };

  const settle = () => {
    const target = document.querySelector<HTMLElement>(TARGET_SELECTOR);
    const arrived =
      target && window.location.pathname !== startPath && window.scrollY < 4;

    if (arrived && target) {
      const to = target.getBoundingClientRect();
      gsap.to(copy, {
        left: to.left,
        top: to.top,
        width: to.width,
        height: to.height,
        borderRadius: 14,
        duration: 0.8,
        ease: EASE.gsapOut,
        onComplete: finish,
      });
      return;
    }

    if (performance.now() - startedAt > GIVE_UP_AFTER_MS) {
      finish();
      return;
    }

    window.requestAnimationFrame(settle);
  };

  window.requestAnimationFrame(settle);
};
