import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const LOADER_DURATION = 1900;
const REDUCED_MOTION_DURATION = 350;
const LOADER_COMPLETE_EVENT = "home-loader:complete";

const HomeLoader = () => {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isHandoff, setIsHandoff] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.dataset.homeLoaderState = "loading";

    const duration = shouldReduceMotion
      ? REDUCED_MOTION_DURATION
      : LOADER_DURATION;
    let animationFrame = 0;
    let hideTimeout = 0;
    let handoffEventTimeout = 0;
    let startTime = 0;

    const completeLoader = () => {
      setIsVisible(false);
      handoffEventTimeout = window.setTimeout(
        () => {
          document.body.dataset.homeLoaderState = "complete";
          window.dispatchEvent(new CustomEvent(LOADER_COMPLETE_EVENT));
        },
        shouldReduceMotion ? 0 : 160,
      );
    };

    const tick = (time: number) => {
      if (!startTime) {
        startTime = time;
      }

      const elapsed = time - startTime;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed < duration) {
        animationFrame = window.requestAnimationFrame(tick);
        return;
      }

      setProgress(100);
      setIsHandoff(true);
      hideTimeout = window.setTimeout(
        completeLoader,
        shouldReduceMotion ? 40 : 860,
      );
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(hideTimeout);
      window.clearTimeout(handoffEventTimeout);
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
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
            duration: shouldReduceMotion ? 0.12 : 0.78,
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
