import { useEffect, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { SPRING } from "@/lib/motion";
import {
  getCursorLabel,
  setCursorLabel,
  subscribeCursorLabel,
} from "@/lib/cursorState";

const SiteCursorIcon = () => (
  <svg
    aria-hidden="true"
    className="size-8 overflow-visible"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.004 5.996C8.004 5.62458 8.10743 5.26049 8.3027 4.94454C8.49797 4.62859 8.77736 4.37325 9.10957 4.20715C9.44178 4.04104 9.81369 3.97073 10.1836 4.00408C10.5535 4.03744 10.9069 4.17315 11.204 4.396L27.2 16.4C28.736 17.552 27.92 20 26 20H18.106C17.7996 19.9998 17.4972 20.0701 17.2222 20.2053C16.9472 20.3405 16.7069 20.5372 16.52 20.78L11.588 27.21C10.426 28.726 8.002 27.904 8.002 25.992L8.004 5.996Z"
      fill="oklch(0.996 0.004 275)"
      stroke="oklch(0.19 0.024 268)"
      strokeLinejoin="round"
      strokeWidth={3.2}
      style={{ paintOrder: "stroke fill" }}
    />
  </svg>
);

const getServerCursorLabel = () => null;

const SiteCursor = () => {
  const shouldReduceMotion = useReducedMotion();
  const cursorLabel = useSyncExternalStore(
    subscribeCursorLabel,
    getCursorLabel,
    getServerCursorLabel,
  );
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const cursorOpacity = useMotionValue(0);
  const smoothX = useSpring(cursorX, SPRING.cursor);
  const smoothY = useSpring(cursorY, SPRING.cursor);
  const smoothOpacity = useSpring(cursorOpacity, {
    damping: 24,
    stiffness: 520,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      document.body.classList.remove("site-custom-cursor-active");
      return undefined;
    }

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const syncCursorMode = () => {
      document.body.classList.toggle(
        "site-custom-cursor-active",
        pointerQuery.matches,
      );
      if (!pointerQuery.matches) {
        cursorOpacity.set(0);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!pointerQuery.matches || event.pointerType !== "mouse") {
        return;
      }

      cursorX.set(event.clientX - 4);
      cursorY.set(event.clientY - 6);
      cursorOpacity.set(1);
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (!pointerQuery.matches) {
        return;
      }

      const target = event.target as Element | null;
      const labelled = target?.closest?.("[data-cursor-label]") ?? null;
      setCursorLabel(labelled?.getAttribute("data-cursor-label") ?? null);
    };

    const hideCursor = () => {
      cursorOpacity.set(0);
      setCursorLabel(null);
    };

    // Labelled elements are nearly always links — clear on click so the
    // balloon never lingers after a route change removes its anchor.
    const handleClick = () => setCursorLabel(null);

    syncCursorMode();
    pointerQuery.addEventListener("change", syncCursorMode);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerover", handlePointerOver, {
      passive: true,
    });
    document.addEventListener("click", handleClick);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.body.classList.remove("site-custom-cursor-active");
      setCursorLabel(null);
      pointerQuery.removeEventListener("change", syncCursorMode);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorOpacity, cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  const hasLabel = Boolean(cursorLabel);

  return (
    <motion.div
      aria-hidden="true"
      className="site-you-cursor pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      style={{ opacity: smoothOpacity, x: smoothX, y: smoothY }}
    >
      <motion.div
        layout
        transition={{ type: "spring", ...SPRING.bouncy }}
        initial={false}
        animate={{
          scale: hasLabel ? 1.08 : 1,
          backgroundColor: hasLabel ? "#7C3AED" : "#FDFCFF",
          color: hasLabel ? "#FFFFFF" : "#141414",
        }}
        className="absolute left-6 top-[27px] flex items-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2 shadow-[0_0_0_1px_rgba(20,20,20,0.16),0_14px_34px_rgba(15,23,42,0.16)]"
      >
        <motion.span layout="position" className="font-sans text-sm leading-[22px]">
          {cursorLabel ?? "You"}
        </motion.span>
        {hasLabel ? (
          <motion.span
            layout="position"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm leading-[22px]"
          >
            ↗
          </motion.span>
        ) : null}
      </motion.div>
      <div className="absolute left-0 top-0 flex size-[40px] -rotate-[15deg] items-center justify-center">
        <SiteCursorIcon />
      </div>
    </motion.div>
  );
};

export default SiteCursor;
