import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname, search } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    if (!hash) return;

    let targetId: string;

    try {
      targetId = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }

    const timeoutIds: number[] = [];
    const retryDelays = [0, 80, 180, 360, 720, 1200, 1800];
    let frameId: number | null = null;
    let attempts = 0;
    let hasScrolled = false;

    const scrollToTarget = () => {
      if (hasScrolled) return;

      const target = document.getElementById(targetId);

      if (target) {
        hasScrolled = true;
        target.scrollIntoView({ behavior: "auto", block: "start" });

        window.history.replaceState(
          window.history.state,
          "",
          `${pathname}${search}`,
        );

        return;
      }

      attempts += 1;
      const nextDelay = retryDelays[attempts];

      if (nextDelay !== undefined) {
        timeoutIds.push(window.setTimeout(scrollToTarget, nextDelay));
      }
    };

    frameId = window.requestAnimationFrame(() => {
      scrollToTarget();
    });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      timeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
    };
  }, [hash, pathname, search]);

  return null;
};

export default ScrollToHash;
