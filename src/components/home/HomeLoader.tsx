import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

const LOADER_PROGRESS_DURATION = 1100;
const LOADER_EXIT_DURATION = 400;
const LOADER_HARD_FINISH = 1600;
const LOADER_COMPLETE_EVENT = "home-loader:complete";
const LOADER_SEEN_KEY = "reggie-home-loader-seen";
let hasRunHomeLoaderThisVisit = false;

const hasSeenHomeLoader = () => {
  if (hasRunHomeLoaderThisVisit) {
    return true;
  }

  if (typeof window === "undefined") {
    return false;
  }

  try {
    const seenInSession = window.sessionStorage.getItem(LOADER_SEEN_KEY) === "true";

    if (seenInSession) {
      hasRunHomeLoaderThisVisit = true;
    }

    return seenInSession;
  } catch {
    return false;
  }
};

const markHomeLoaderSeen = () => {
  hasRunHomeLoaderThisVisit = true;

  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(LOADER_SEEN_KEY, "true");
  } catch {
    // Session storage can be unavailable in some privacy modes; the loader still completes normally.
  }
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HomeLoader = () => {
  const shouldReduceMotion = useReducedMotion();
  const [shouldRunLoader] = useState(
    () => !hasSeenHomeLoader() && !prefersReducedMotion(),
  );
  const [progress, setProgress] = useState(shouldRunLoader ? 0 : 100);
  const [isHandoff, setIsHandoff] = useState(false);
  const [isVisible, setIsVisible] = useState(shouldRunLoader);

  useLayoutEffect(() => {
    if (!shouldRunLoader || shouldReduceMotion) {
      markHomeLoaderSeen();
      setIsVisible(false);
      document.body.dataset.homeLoaderState = "complete";
      window.dispatchEvent(new CustomEvent(LOADER_COMPLETE_EVENT));
      return undefined;
    }

    markHomeLoaderSeen();
    document.body.dataset.homeLoaderState = "loading";

    let animationFrame = 0;
    let exitFrame = 0;
    let completeEventTimeout = 0;
    let hardFinishTimeout = 0;
    let startTime = 0;
    let hasStartedExit = false;
    let hasSignaledComplete = false;

    const signalComplete = () => {
      if (hasSignaledComplete) {
        return;
      }

      hasSignaledComplete = true;
      markHomeLoaderSeen();
      document.body.dataset.homeLoaderState = "complete";
      window.dispatchEvent(new CustomEvent(LOADER_COMPLETE_EVENT));
    };

    const startExit = () => {
      if (hasStartedExit) {
        return;
      }

      hasStartedExit = true;
      setProgress(100);
      setIsHandoff(true);
      exitFrame = window.requestAnimationFrame(() => {
        setIsVisible(false);
        completeEventTimeout = window.setTimeout(
          signalComplete,
          LOADER_EXIT_DURATION + 24,
        );
      });
    };

    const tick = (time: number) => {
      if (!startTime) {
        startTime = time;
      }

      const elapsed = time - startTime;
      const nextProgress = Math.min(
        100,
        Math.round((elapsed / LOADER_PROGRESS_DURATION) * 100),
      );
      setProgress(nextProgress);

      if (elapsed < LOADER_PROGRESS_DURATION) {
        animationFrame = window.requestAnimationFrame(tick);
        return;
      }

      startExit();
    };

    animationFrame = window.requestAnimationFrame(tick);
    hardFinishTimeout = window.setTimeout(() => {
      setIsVisible(false);
      signalComplete();
    }, LOADER_HARD_FINISH);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(exitFrame);
      window.clearTimeout(completeEventTimeout);
      window.clearTimeout(hardFinishTimeout);

      if (document.body.dataset.homeLoaderState === "loading") {
        document.body.dataset.homeLoaderState = "complete";
        window.dispatchEvent(new CustomEvent(LOADER_COMPLETE_EVENT));
      }
    };
  }, [shouldReduceMotion, shouldRunLoader]);

  return (
    <AnimatePresence>
      {shouldRunLoader && isVisible ? (
        <motion.div
          className="home-loader"
          data-handoff={isHandoff ? "true" : "false"}
          initial={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  clipPath: "inset(50% 0% 50% 0% round 1.5rem)",
                  opacity: 0.08,
                  scale: 1.015,
                }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : LOADER_EXIT_DURATION / 1000,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-live="polite"
          aria-label="Loading Reggie Alleyne portfolio"
        >
          <div className="home-loader__grid" aria-hidden="true" />
          <div className="home-loader__aperture" aria-hidden="true" />
          <div className="home-loader__shutter home-loader__shutter--top" aria-hidden="true" />
          <div className="home-loader__shutter home-loader__shutter--bottom" aria-hidden="true" />
          <div className="home-loader__selection" aria-hidden="true">
            <span className="home-loader__handle home-loader__handle--tl" />
            <span className="home-loader__handle home-loader__handle--tr" />
            <span className="home-loader__handle home-loader__handle--bl" />
            <span className="home-loader__handle home-loader__handle--br" />
            <span className="home-loader__label">home / hero stage</span>
          </div>
          <div className="home-loader__cursor" aria-hidden="true">
            <span>Reggie</span>
          </div>

          <div className="home-loader__content">
            <p className="home-loader__eyebrow">Reggie Alleyne</p>
            <div className="home-loader__counter">
              {String(progress).padStart(3, "0")}
            </div>
            <div className="home-loader__bar" aria-hidden="true">
              <span style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
            <p className="home-loader__caption">
              Framing the work before the scroll starts.
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HomeLoader;
