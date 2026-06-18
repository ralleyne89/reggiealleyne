import { type RefObject, useEffect, useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";
import { EASE, SCRUB } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const LOADER_COMPLETE_EVENT = "home-loader:complete";
const assetBase = "/images/figma/hero-white";

const heroAssets = {
  portrait: `${assetBase}/portrait.png`,
  wordmark: `${assetBase}/reggie-alleyne-wordmark-chatgpt-flat.png`,
  type: `${assetBase}/type-thin.svg`,
  list: `${assetBase}/list-vector.svg`,
  image: `${assetBase}/image-group.svg`,
};

const toolPanelItems = [
  { label: "Paragraph", icon: heroAssets.type, iconClassName: "size-6" },
  { label: "Heading", icon: heroAssets.list, iconClassName: "h-3.5 w-4" },
  { label: "Typography", icon: heroAssets.list, iconClassName: "h-3.5 w-4" },
  { label: "Image", icon: heroAssets.image, iconClassName: "size-6" },
];

const capabilityItems = [
  {
    label: "Read the product",
    detail: "Turn the messy brief into a clear flow.",
    chip: "Frame",
  },
  {
    label: "Shape the system",
    detail: "Components, states, and responsive rules.",
    chip: "System",
  },
  {
    label: "Make AI usable",
    detail: "Assessments, tools, and review paths.",
    chip: "AI UX",
  },
  {
    label: "Build the surface",
    detail: "React screens with motion that helps.",
    chip: "Ship",
  },
];

const capabilityDockLabel = capabilityItems
  .map((capability) => capability.label)
  .join(", ");

type AssetIconProps = {
  src: string;
  className?: string;
};

const AssetIcon = ({ src, className }: AssetIconProps) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    decoding="async"
    className={cn("shrink-0", className)}
  />
);

type SearchChipProps = {
  label: string;
  className?: string;
  tone?: "glass" | "solid";
};

const SearchChip = ({ label, className, tone = "glass" }: SearchChipProps) => {
  return (
    <div
      data-hero-search-chip
      aria-hidden="true"
      className={cn(
        "pointer-events-none flex h-[43px] cursor-default select-none items-center justify-center rounded-lg px-4 py-[10px] text-white",
        tone === "glass" ? "hero-liquid-glass-chip" : "hero-tool-panel-input",
        className,
      )}
    >
      <span className="whitespace-nowrap font-sans text-sm leading-[22px]">
        {label}
      </span>
    </div>
  );
};

const ToolPanel = ({ className }: { className?: string }) => (
  <div
    data-hero-tool-panel
    className={cn(
      "hero-liquid-glass-panel flex h-[291px] w-[246px] flex-col items-start gap-6 rounded-lg p-9 text-white",
      className,
    )}
  >
    <SearchChip label="Components" tone="solid" className="w-full" />

    <div className="flex flex-col gap-[20px]">
      {toolPanelItems.map((item) => (
        <div key={item.label} className="flex items-center gap-5">
          <AssetIcon src={item.icon} className={item.iconClassName} />
          <span className="whitespace-nowrap font-sans text-xs leading-[18px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const CursorPointerIcon = ({
  outlined,
  tone,
}: {
  outlined: boolean;
  tone: "reggie" | "you";
}) => (
  <svg
    aria-hidden="true"
    className="size-8 overflow-visible"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.004 5.996C8.004 5.62458 8.10743 5.26049 8.3027 4.94454C8.49797 4.62859 8.77736 4.37325 9.10957 4.20715C9.44178 4.04104 9.81369 3.97073 10.1836 4.00408C10.5535 4.03744 10.9069 4.17315 11.204 4.396L27.2 16.4C28.736 17.552 27.92 20 26 20H18.106C17.7996 19.9998 17.4972 20.0701 17.2222 20.2053C16.9472 20.3405 16.7069 20.5372 16.52 20.78L11.588 27.21C10.426 28.726 8.002 27.904 8.002 25.992L8.004 5.996Z"
      fill={tone === "you" ? "oklch(0.996 0.004 275)" : "#7C3AED"}
      stroke={
        tone === "you"
          ? "oklch(0.19 0.024 268)"
          : outlined
            ? "rgba(255,255,255,0.96)"
            : "transparent"
      }
      strokeLinejoin="round"
      strokeWidth={tone === "you" || outlined ? 3.2 : 0}
      className="transition-[stroke,filter] duration-150 ease-out"
      style={{ paintOrder: "stroke fill" }}
    />
  </svg>
);

const CursorBadge = ({
  className,
  label,
  outlined,
  tone = "reggie",
}: {
  className?: string;
  label: "Reggie" | "You";
  outlined: boolean;
  tone?: "reggie" | "you";
}) => (
  <div className={cn("absolute h-[78px] w-[118px]", className)}>
    <div
      className={cn(
        "absolute left-6 top-[27px] rounded-lg px-4 py-2 transition-[box-shadow,transform] duration-150 ease-out",
        tone === "reggie" &&
          "bg-[#7C3AED] text-white shadow-[0_18px_42px_rgba(30,10,80,0.24)]",
        tone === "you" &&
          "bg-[oklch(var(--color-surface-raised))] text-[#141414] shadow-[0_0_0_1px_rgba(20,20,20,0.16),0_14px_34px_rgba(15,23,42,0.16)]",
        tone === "reggie" &&
          outlined &&
          "shadow-[0_0_0_2px_rgba(255,255,255,0.96),0_12px_30px_rgba(30,10,80,0.24)]",
      )}
    >
      <span className="font-sans text-sm leading-[22px]">{label}</span>
    </div>
    <div className="absolute left-0 top-0 flex size-[40px] -rotate-[15deg] items-center justify-center">
      <CursorPointerIcon outlined={outlined} tone={tone} />
    </div>
  </div>
);

const AutonomousReggieCursor = ({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement>;
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let frameId = 0;
    let retryCount = 0;
    let cleanupCursorMotion: (() => void) | undefined;

    const setupCursorMotion = () => {
      const cursor = cursorRef.current;
      const section = sectionRef.current;

      if (!cursor || !section) {
        retryCount += 1;
        if (retryCount <= 8) {
          frameId = window.requestAnimationFrame(setupCursorMotion);
        }
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(cursor, {
          autoAlpha: 1,
          x: window.innerWidth * 0.62,
          y: window.innerHeight * 0.38,
        });
        cleanupCursorMotion = () => {
          gsap.killTweensOf(cursor);
        };
        return;
      }

      const pointFor = (
        selector: string,
        fallbackX: number,
        fallbackY: number,
        index = 0,
        xRatio = 0.48,
        yRatio = 0.5,
      ) => {
        const target = section.querySelectorAll<HTMLElement>(selector)[index];

        if (!target) {
          return {
            x: window.innerWidth * fallbackX,
            y: window.innerHeight * fallbackY,
          };
        }

        const rect = target.getBoundingClientRect();
        return {
          x: rect.left + rect.width * xRatio - 10,
          y: rect.top + rect.height * yRatio - 12,
        };
      };

      gsap.set(cursor, {
        autoAlpha: 0,
        rotate: -6,
        x: () => pointFor("[data-hero-tool-panel]", 0.36, 0.38).x,
        y: () => pointFor("[data-hero-tool-panel]", 0.36, 0.38).y,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        repeat: -1,
        repeatDelay: 0.45,
        repeatRefresh: true,
        paused: true,
      });

      timeline
        .to(cursor, {
          autoAlpha: 1,
          duration: 0.22,
          ease: "power3.out",
        })
        .to(cursor, {
          duration: 1.15,
          rotate: -2,
          x: () =>
            pointFor("[data-hero-tool-panel]", 0.36, 0.38, 0, 0.54, 0.2).x,
          y: () =>
            pointFor("[data-hero-tool-panel]", 0.36, 0.38, 0, 0.54, 0.2).y,
        });
      timeline
        .to(cursor, {
          duration: 0.88,
          rotate: 3,
          x: () =>
            pointFor("[data-hero-search-chip]", 0.67, 0.29, 0, 0.42, 0.5).x,
          y: () =>
            pointFor("[data-hero-search-chip]", 0.67, 0.29, 0, 0.42, 0.5).y,
        })
        .to(cursor, { duration: 0.16, rotate: 1 });
      timeline
        .to(cursor, {
          duration: 1.02,
          rotate: 4,
          x: () =>
            pointFor("[data-hero-search-chip]", 0.66, 0.63, 2, 0.46, 0.48).x,
          y: () =>
            pointFor("[data-hero-search-chip]", 0.66, 0.63, 2, 0.46, 0.48).y,
        })
        .to(cursor, {
          duration: 1.35,
          ease: "power1.inOut",
          rotate: -5,
          x: () => pointFor("[data-hero-portrait]", 0.52, 0.35, 0, 0.52, 0.18).x,
          y: () => pointFor("[data-hero-portrait]", 0.52, 0.35, 0, 0.52, 0.18).y,
        });

      const heroTrigger = ScrollTrigger.create({
        end: "bottom 78%",
        onEnter: () => {
          gsap.to(cursor, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
          timeline.play();
        },
        onEnterBack: () => {
          gsap.to(cursor, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
          timeline.play();
        },
        onLeave: () => {
          timeline.pause();
          gsap.to(cursor, { autoAlpha: 0, duration: 0.18, overwrite: "auto" });
        },
        onLeaveBack: () => {
          timeline.pause();
          gsap.to(cursor, { autoAlpha: 0, duration: 0.18, overwrite: "auto" });
        },
        start: "top bottom",
        trigger: section,
      });

      ScrollTrigger.refresh();
      cleanupCursorMotion = () => {
        heroTrigger.kill();
        timeline.kill();
      };
    };

    frameId = window.requestAnimationFrame(setupCursorMotion);

    return () => {
      window.cancelAnimationFrame(frameId);
      cleanupCursorMotion?.();
    };
  }, [sectionRef]);

  return (
    <div
      ref={cursorRef}
      data-hero-reggie-cursor
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[71] hidden h-[78px] w-[118px] lg:block"
    >
      <CursorBadge
        className="left-0 top-0"
        label="Reggie"
        outlined={false}
        tone="reggie"
      />
    </div>
  );
};

const HeroCanvasLayer = ({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !section || !context) {
      return undefined;
    }

    const state = {
      active: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      height: 1,
      inView: false,
      pointerX: 0.5,
      pointerY: 0.5,
      easedX: 0.5,
      easedY: 0.5,
      rafId: 0,
      width: 1,
    };

    const nodes = Array.from({ length: 18 }, (_, index) => {
      const xSeed = Math.sin(index * 91.7) * 10000;
      const ySeed = Math.sin(index * 47.3 + 8) * 10000;

      return {
        alpha: 0.045 + (index % 5) * 0.016,
        drift: 0.28 + (index % 7) * 0.075,
        size: 3 + (index % 6) * 1.8,
        x: xSeed - Math.floor(xSeed),
        y: ySeed - Math.floor(ySeed),
      };
    });

    const resize = () => {
      const rect = section.getBoundingClientRect();
      state.width = Math.max(1, rect.width);
      state.height = Math.max(1, rect.height);
      state.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(state.width * state.dpr);
      canvas.height = Math.round(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      draw(performance.now(), true);
    };

    function draw(timestamp: number, once = false) {
      state.easedX += (state.pointerX - state.easedX) * 0.055;
      state.easedY += (state.pointerY - state.easedY) * 0.055;

      context.clearRect(0, 0, state.width, state.height);

      const radial = context.createRadialGradient(
        state.width * state.easedX,
        state.height * state.easedY,
        20,
        state.width * state.easedX,
        state.height * state.easedY,
        Math.max(state.width, state.height) * 0.56,
      );
      radial.addColorStop(0, "rgba(124, 58, 237, 0.16)");
      radial.addColorStop(0.42, "rgba(16, 185, 129, 0.08)");
      radial.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = radial;
      context.fillRect(0, 0, state.width, state.height);

      nodes.forEach((node, index) => {
        const phase = shouldReduceMotion
          ? index
          : timestamp * 0.00016 * node.drift + index;
        const x =
          node.x * state.width +
          Math.sin(phase) * 18 +
          (state.easedX - 0.5) * 54;
        const y =
          node.y * state.height +
          Math.cos(phase) * 18 +
          (state.easedY - 0.5) * 42;

        context.fillStyle = `rgba(20, 20, 20, ${node.alpha})`;
        context.fillRect(x, y, node.size, node.size);
      });

      if (state.active && !once && !shouldReduceMotion) {
        state.rafId = window.requestAnimationFrame(draw);
      }
    }

    const startLoop = () => {
      if (state.active || shouldReduceMotion || !state.inView || document.hidden) {
        return;
      }

      state.active = true;
      state.rafId = window.requestAnimationFrame(draw);
    };

    const stopLoop = () => {
      state.active = false;
      window.cancelAnimationFrame(state.rafId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      state.pointerX = (event.clientX - rect.left) / rect.width;
      state.pointerY = (event.clientY - rect.top) / rect.height;
    };

    const handlePointerLeave = () => {
      state.pointerX = 0.5;
      state.pointerY = 0.5;
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      state.inView = entry.isIntersecting;

      if (entry.isIntersecting) {
        startLoop();
      } else {
        stopLoop();
      }
    });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
        return;
      }

      startLoop();
    };

    resizeObserver.observe(section);
    resize();

    if (!shouldReduceMotion) {
      intersectionObserver.observe(section);
      document.addEventListener("visibilitychange", handleVisibilityChange);
      section.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      section.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [sectionRef, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas-layer"
      aria-hidden="true"
      data-hero-canvas
    />
  );
};

const HeroTitleLayer = () => (
  <h1
    data-hero-title
    aria-label="Reggie Alleyne"
    className="pointer-events-none absolute left-1/2 top-[3.65rem] z-0 w-[min(92vw,34rem)] -translate-x-1/2 overflow-visible sm:top-12 sm:w-[min(116vw,82rem)] lg:top-16"
  >
    <img
      data-hero-title-word
      src={heroAssets.wordmark}
      alt=""
      aria-hidden="true"
      loading="eager"
      decoding="async"
      fetchpriority="high"
      className="block h-auto w-full select-none"
    />
  </h1>
);

const HeroLightAperture = () => (
  <>
    <div
      data-hero-light-hole
      aria-hidden="true"
      className="hero-light-hole pointer-events-none absolute left-1/2 top-[27.4rem] z-[15] h-[8.5rem] w-[28rem] -translate-x-1/2 sm:top-[30.7rem] sm:h-[10rem] sm:w-[38rem]"
    />
  </>
);

const CapabilitySwitchboard = ({ className }: { className?: string }) => {
  return (
    <div
      data-hero-keyword-rail
      className={cn(
        "hero-capability-switchboard pointer-events-none text-gray-950",
        className,
      )}
      aria-label={capabilityDockLabel}
    >
      <div className="hero-capability-switchboard__inner">
        <div className="hero-capability-switchboard__header">
          <span className="hero-capability-switchboard__kicker">
            Design to build
          </span>
          <span className="hero-capability-switchboard__signal" />
          <span className="hero-capability-switchboard__note">
            from research to shipped UI
          </span>
        </div>

        <ul className="hero-capability-switchboard__list">
          {capabilityItems.map((capability, index) => (
            <li
              key={capability.label}
              className="hero-capability-switchboard__module"
            >
              <span className="hero-capability-switchboard__node" />
              <span className="hero-capability-switchboard__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{capability.chip}</span>
              </span>
              <span className="hero-capability-switchboard__label">
                {capability.label}
              </span>
              <span className="hero-capability-switchboard__detail">
                {capability.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HeroArtwork = () => (
  <div
    data-hero-artwork
    className="relative mx-auto mt-8 h-[36rem] w-full max-w-[34rem] sm:mt-16 sm:h-[38rem] sm:max-w-[44rem] lg:mt-8 lg:h-[650px] lg:max-w-[980px]"
  >
    <div className="hero-artboard-outline" aria-hidden="true" />
    <HeroTitleLayer />

    <div className="absolute left-1/2 top-[3.4rem] z-20 h-[29rem] w-[21rem] -translate-x-1/2 sm:top-0 sm:h-[638px] sm:w-[511px]">
      <img
        data-hero-portrait
        src={heroAssets.portrait}
        alt="Digital portrait of Reggie Alleyne"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        sizes="(min-width: 1024px) 511px, min(100vw, 34rem)"
        className="h-full w-full object-contain"
      />
    </div>
    <HeroLightAperture />

    <ToolPanel className="absolute left-3 top-[18.8rem] z-30 origin-top-left scale-[0.58] sm:left-[calc(50%-300px)] sm:top-[178px] sm:scale-90 lg:left-[calc(50%-458px)] lg:scale-100" />

    <SearchChip
      label="Design"
      className="absolute right-8 top-[9.6rem] z-30 w-[126px] origin-top-right scale-[0.82] sm:left-[calc(50%+168px)] sm:right-auto sm:top-[155px] sm:w-[174px] sm:scale-100"
    />
    <SearchChip
      label="Code"
      className="absolute right-8 top-[16.25rem] z-30 w-[116px] origin-top-right scale-[0.82] sm:left-[calc(50%+217px)] sm:right-auto sm:top-[259px] sm:w-[174px] sm:scale-100"
    />
    <SearchChip
      label="Prototype"
      className="absolute right-3 top-[27.4rem] z-40 w-[138px] origin-top-right scale-[0.82] sm:left-[calc(50%+105px)] sm:right-auto sm:top-[468px] sm:w-[174px] sm:scale-100"
    />
  </div>
);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cleanupCallbacks: Array<() => void> = [];

    const context = gsap.context(() => {
      const revealTargets = gsap.utils.toArray<HTMLElement>(
        [
          "[data-hero-title-word]",
          "[data-hero-portrait]",
          "[data-hero-light-hole]",
          "[data-hero-tool-panel]",
          "[data-hero-search-chip]",
          "[data-hero-keyword-rail]",
          "[data-hero-scroll-handoff]",
        ].join(", "),
      );

      if (reduceMotion) {
        gsap.set(revealTargets, {
          autoAlpha: 1,
          clearProps: "clipPath,filter,transform",
        });
        return;
      }

      let introDelay: gsap.core.Tween | null = null;
      let hasPlayedIntro = false;
      const timeline = gsap.timeline({
        defaults: {
          duration: 0.82,
          ease: EASE.gsapOut,
        },
        paused: true,
      });

      gsap.set("[data-hero-title-word]", { transformOrigin: "50% 100%" });
      gsap.set("[data-hero-portrait]", {
        clipPath: "ellipse(14% 4% at 50% 84%)",
        transformOrigin: "50% 88%",
      });
      gsap.set("[data-hero-light-hole]", { transformOrigin: "50% 54%" });
      gsap.set("[data-hero-scroll-handoff]", { autoAlpha: 0, y: 40 });

      timeline
        .fromTo(
          "[data-hero-title-word]",
          {
            autoAlpha: 0,
            filter: "blur(10px)",
            rotationX: -26,
            yPercent: 118,
          },
          {
            autoAlpha: 1,
            clearProps: "filter,transform",
            filter: "blur(0px)",
            rotationX: 0,
            stagger: 0.08,
            yPercent: 0,
          },
          0.08,
        )
        .fromTo(
          "[data-hero-light-hole]",
          {
            autoAlpha: 0,
            filter: "blur(24px)",
            scaleX: 0.12,
            scaleY: 0.06,
          },
          {
            autoAlpha: 1,
            duration: 1.45,
            filter: "blur(0px)",
            scaleX: 1.05,
            scaleY: 1,
          },
          0.34,
        )
        .fromTo(
          "[data-hero-portrait]",
          {
            autoAlpha: 0,
            clipPath: "ellipse(18% 4% at 50% 88%)",
            filter: "blur(24px)",
            scale: 0.86,
            y: 178,
          },
          {
            autoAlpha: 1,
            clearProps: "clipPath,filter,transform",
            clipPath: "ellipse(115% 115% at 50% 50%)",
            duration: 2.35,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
          },
          0.62,
        )
        .fromTo(
          "[data-hero-tool-panel]",
          { autoAlpha: 0, rotationY: -14, x: -92, y: 34 },
          {
            autoAlpha: 1,
            clearProps: "transform",
            duration: 0.9,
            rotationY: 0,
            x: 0,
            y: 0,
          },
          0.66,
        )
        .fromTo(
          "[data-hero-search-chip]",
          { autoAlpha: 0, scale: 0.85, x: 76, y: 14 },
          {
            autoAlpha: 1,
            clearProps: "transform",
            duration: 0.72,
            ease: EASE.gsapBack,
            scale: 1,
            stagger: { each: 0.09, from: "start" },
            x: 0,
            y: 0,
          },
          0.8,
        )
        .fromTo(
          "[data-hero-keyword-rail]",
          { autoAlpha: 0, y: 38 },
          {
            autoAlpha: 1,
            clearProps: "transform",
            duration: 0.7,
            y: 0,
          },
          1.18,
        );

      const playIntro = () => {
        if (hasPlayedIntro) {
          return;
        }

        hasPlayedIntro = true;
        timeline.play(0);
        ScrollTrigger.refresh();
      };

      const scheduleIntro = () => {
        introDelay?.kill();
        introDelay = gsap.delayedCall(0.08, playIntro);
      };

      const loaderAlreadyComplete =
        document.body.dataset.homeLoaderState === "complete" ||
        !document.querySelector(".home-loader");

      if (loaderAlreadyComplete) {
        introDelay = gsap.delayedCall(0.16, playIntro);
      } else {
        window.addEventListener(LOADER_COMPLETE_EVENT, scheduleIntro, {
          once: true,
        });
      }

      cleanupCallbacks.push(() => {
        introDelay?.kill();
        window.removeEventListener(LOADER_COMPLETE_EVENT, scheduleIntro);
      });

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=460",
            anticipatePin: 1,
            scrub: SCRUB.tight,
          },
        })
        .to("[data-hero-artwork]", { scale: 0.88, y: -118 }, 0)
        .to(
          "[data-hero-title-word]",
          { autoAlpha: 0.18, rotationX: 8, scale: 1.16, yPercent: -25 },
          0,
        )
        .to("[data-hero-portrait]", { scale: 0.9, y: -116 }, 0)
        .to(
          "[data-hero-tool-panel]",
          { autoAlpha: 0.64, rotate: -4, x: -96, y: -58 },
          0.03,
        )
        .to(
          "[data-hero-search-chip]",
          {
            autoAlpha: 0.7,
            stagger: { each: 0.04, from: "end" },
            x: 82,
            y: -54,
          },
          0.02,
        )
        .fromTo(
          "[data-hero-scroll-handoff]",
          { autoAlpha: 0, y: 46 },
          { autoAlpha: 1, y: -22 },
          0.1,
        )
        .fromTo(
          "[data-hero-scroll-beam]",
          { scaleX: 0.14 },
          { scaleX: 1 },
          0.18,
        )
        .fromTo(
          "[data-hero-scroll-mark]",
          { autoAlpha: 0, x: -32, y: 16 },
          {
            autoAlpha: 1,
            stagger: { each: 0.06, from: "start" },
            x: 0,
            y: 0,
          },
          0.24,
        )
        .to("[data-hero-keyword-rail]", { autoAlpha: 1, y: -76 }, 0);
    }, section);

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[760px] overflow-hidden bg-white pb-8 text-[#141414] sm:min-h-[860px] sm:pb-10 md:min-h-[900px] lg:min-h-[900px] lg:pb-0"
    >
      <AutonomousReggieCursor sectionRef={sectionRef} />
      <HeroCanvasLayer sectionRef={sectionRef} />

      <div
        data-hero-sticky
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pt-8 sm:px-6 sm:pt-16 md:pt-20 lg:px-8 lg:pt-16"
      >
        <HeroArtwork />

        <CapabilitySwitchboard className="relative left-1/2 z-50 -mt-36 w-screen -translate-x-1/2 px-4 sm:-mt-28 sm:px-6 lg:-mt-32 lg:px-8" />
      </div>

      <div data-hero-scroll-handoff className="hero-scroll-handoff" aria-hidden="true">
        <span data-hero-scroll-beam className="hero-scroll-handoff__beam" />
        <span data-hero-scroll-mark className="hero-scroll-handoff__mark hero-scroll-handoff__mark--one" />
        <span data-hero-scroll-mark className="hero-scroll-handoff__mark hero-scroll-handoff__mark--two" />
        <span data-hero-scroll-mark className="hero-scroll-handoff__mark hero-scroll-handoff__mark--three" />
      </div>
    </section>
  );
};

export default HeroSection;
