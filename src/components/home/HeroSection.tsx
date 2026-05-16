import { type MouseEvent, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

import { cn } from "@/lib/utils";

const assetBase = "/images/figma/hero-white";

const heroAssets = {
  portrait: `${assetBase}/portrait.png`,
  wordmark: `${assetBase}/reggie-alleyne-wordmark-chatgpt-flat.png`,
  search: `${assetBase}/search-thin.svg`,
  type: `${assetBase}/type-thin.svg`,
  list: `${assetBase}/list-vector.svg`,
  image: `${assetBase}/image-group.svg`,
  separator: `${assetBase}/separator-cursor.svg`,
};

const toolPanelItems = [
  { label: "Paragraph", icon: heroAssets.type, iconClassName: "size-6" },
  { label: "Heading", icon: heroAssets.list, iconClassName: "h-3.5 w-4" },
  { label: "Typography", icon: heroAssets.list, iconClassName: "h-3.5 w-4" },
  { label: "Image", icon: heroAssets.image, iconClassName: "size-6" },
];

const keywords = [
  "Design System",
  "User Interface",
  "Product Design",
  "Web Application",
  "AI Automations",
  "Frontend Dev",
  "Vibe Coding",
  "AI Workflows",
];

const keywordRailLabel = keywords.join(", ");

type AssetIconProps = {
  src: string;
  className?: string;
};

const AssetIcon = ({ src, className }: AssetIconProps) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    className={cn("shrink-0", className)}
  />
);

type SearchChipProps = {
  label: string;
  className?: string;
  tone?: "glass" | "solid";
};

const SearchChip = ({ label, className, tone = "glass" }: SearchChipProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      data-hero-search-chip
      className={cn(
        "flex h-[43px] items-center rounded-lg py-[10px] pl-[9px] pr-10 text-white",
        tone === "glass" ? "hero-liquid-glass-chip" : "hero-tool-panel-input",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-[9px]">
        <AssetIcon src={heroAssets.search} className="size-[18px]" />
        <span className="flex min-w-0 items-center gap-1">
          <span className="whitespace-nowrap font-sans text-sm leading-[22px]">
            {label}
          </span>
          <motion.span
            aria-hidden="true"
            className="h-[18px] w-px shrink-0 rounded-full bg-white/95 shadow-[0_0_8px_rgba(255,255,255,0.55)]"
            initial={{ opacity: 1 }}
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    times: [0, 0.48, 0.49, 1],
                  }
            }
          />
        </span>
      </div>
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
    <SearchChip label="Components" tone="solid" className="w-full pr-6" />

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

const CursorPointerIcon = ({ outlined }: { outlined: boolean }) => (
  <svg
    aria-hidden="true"
    className="size-8 overflow-visible"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.004 5.996C8.004 5.62458 8.10743 5.26049 8.3027 4.94454C8.49797 4.62859 8.77736 4.37325 9.10957 4.20715C9.44178 4.04104 9.81369 3.97073 10.1836 4.00408C10.5535 4.03744 10.9069 4.17315 11.204 4.396L27.2 16.4C28.736 17.552 27.92 20 26 20H18.106C17.7996 19.9998 17.4972 20.0701 17.2222 20.2053C16.9472 20.3405 16.7069 20.5372 16.52 20.78L11.588 27.21C10.426 28.726 8.002 27.904 8.002 25.992L8.004 5.996Z"
      fill="#7C3AED"
      stroke={outlined ? "rgba(255,255,255,0.96)" : "transparent"}
      strokeLinejoin="round"
      strokeWidth={outlined ? 3.2 : 0}
      className="transition-[stroke,filter] duration-150 ease-out"
      style={{ paintOrder: "stroke fill" }}
    />
  </svg>
);

const CursorBadge = ({
  className,
  outlined,
}: {
  className?: string;
  outlined: boolean;
}) => (
  <div className={cn("absolute h-[78px] w-[118px]", className)}>
    <div
      className={cn(
        "absolute left-6 top-[27px] rounded-full bg-[#7C3AED] px-4 py-2 text-white transition-[box-shadow] duration-150 ease-out",
        outlined &&
          "shadow-[0_0_0_2px_rgba(255,255,255,0.96),0_12px_30px_rgba(30,10,80,0.24)]",
      )}
    >
      <span className="font-sans text-sm leading-[22px]">Reggie</span>
    </div>
    <div className="absolute left-0 top-0 flex size-[40px] -rotate-[15deg] items-center justify-center">
      <CursorPointerIcon outlined={outlined} />
    </div>
  </div>
);

type CursorState = {
  isVisible: boolean;
  isOverPurple: boolean;
  x: number;
  y: number;
};

const DesktopHeroCursor = ({ cursor }: { cursor: CursorState }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-hero-desktop-cursor
      data-cursor-over-purple={cursor.isOverPurple ? "true" : "false"}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[78px] w-[118px] lg:block"
      animate={{
        opacity: cursor.isVisible ? 1 : 0,
        x: cursor.x - 4,
        y: cursor.y - 6,
      }}
      initial={false}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
        : { duration: 0.12, ease: "easeOut" }
      }
    >
      <CursorBadge className="left-0 top-0" outlined={cursor.isOverPurple} />
    </motion.div>
  );
};

const FlowNode = ({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "violet" | "signal";
}) => (
  <div
    data-purple-cursor-zone={tone === "violet" ? "true" : undefined}
    className={cn(
      "rounded-full px-2 py-1 font-sans text-[0.62rem] font-semibold leading-3",
      tone === "violet" && "bg-[#7C3AED] text-white",
      tone === "signal" && "bg-[#d9f6ef] text-[#047857]",
      tone === "neutral" && "bg-[#eef2f7] text-[#4b5563]",
    )}
  >
    {label}
  </div>
);

const UserFlowCard = ({ className }: { className?: string }) => (
  <div
    data-hero-card
    className={cn(
      "pointer-events-none absolute w-[196px] rounded-xl border border-[#7C3AED]/15 bg-[#fbfaff] p-3 text-[#141414] shadow-2xl shadow-gray-950/12",
      className,
    )}
    aria-hidden="true"
  >
    <div className="mb-3 flex items-center justify-between">
      <p className="font-sans text-[0.68rem] font-semibold leading-4">
        User flow
      </p>
      <span className="size-2 rounded-full bg-[#7C3AED]" />
    </div>
    <div className="flex items-center gap-1.5">
      <FlowNode label="Need" />
      <span className="h-px flex-1 bg-[#c7d2fe]" />
      <FlowNode label="Map" tone="violet" />
      <span className="h-px flex-1 bg-[#c7d2fe]" />
      <FlowNode label="Test" tone="signal" />
    </div>
  </div>
);

const WireframeCard = ({ className }: { className?: string }) => (
  <div
    data-hero-card
    className={cn(
      "pointer-events-none absolute w-[172px] rounded-xl border border-gray-200 bg-white/95 p-3 text-[#141414] shadow-2xl shadow-gray-950/12",
      className,
    )}
    aria-hidden="true"
  >
    <div className="mb-2 flex items-center gap-2">
      <span className="grid size-4 grid-cols-2 gap-0.5">
        <span className="rounded-[2px] bg-[#6b7280]" />
        <span className="rounded-[2px] bg-[#d1d5db]" />
        <span className="rounded-[2px] bg-[#d1d5db]" />
        <span className="rounded-[2px] bg-[#6b7280]" />
      </span>
      <p className="font-sans text-[0.68rem] font-semibold leading-4">
        Wireframe
      </p>
    </div>
    <div className="space-y-1.5">
      <span className="block h-2 rounded-full bg-[#d1d5db]" />
      <span className="block h-8 rounded-md bg-[#eef2f7]" />
      <div className="grid grid-cols-3 gap-1.5">
        <span className="h-5 rounded bg-[#e5e7eb]" />
        <span className="h-5 rounded bg-[#e5e7eb]" />
        <span className="h-5 rounded bg-[#d9f6ef]" />
      </div>
    </div>
  </div>
);

const UsabilityCard = ({ className }: { className?: string }) => (
  <div
    data-hero-card
    className={cn(
      "pointer-events-none absolute w-[178px] rounded-xl border border-[#10B981]/20 bg-[#f7fffc] p-3 text-[#141414] shadow-2xl shadow-gray-950/12",
      className,
    )}
    aria-hidden="true"
  >
    <div className="mb-2 flex items-center justify-between">
      <p className="font-sans text-[0.68rem] font-semibold leading-4">
        Usability
      </p>
      <span className="rounded-full bg-[#d9f6ef] px-2 py-1 font-sans text-[0.58rem] font-semibold leading-3 text-[#047857]">
        3/3 clear
      </span>
    </div>
    <div className="space-y-1.5 font-sans text-[0.62rem] font-medium leading-3 text-[#4b5563]">
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-[#10B981]" />
        Label matches action
      </div>
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-[#10B981]" />
        Next step is visible
      </div>
    </div>
  </div>
);

const UxDesignCards = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 text-[#141414]",
      className,
    )}
  >
    <UserFlowCard className="left-[calc(50%+96px)] top-[19.7rem] z-10 hidden opacity-95 sm:block lg:left-[calc(50%+116px)] lg:top-[20rem]" />
    <WireframeCard className="left-[calc(50%-350px)] top-[28.7rem] z-10 hidden opacity-95 sm:block lg:left-[calc(50%-360px)] lg:top-[29.2rem]" />
    <UsabilityCard className="left-[calc(50%+226px)] top-[30.2rem] z-30 hidden sm:block lg:left-[calc(50%+260px)] lg:top-[31rem]" />

    <UserFlowCard className="right-[-3.4rem] top-[18.2rem] z-10 scale-[0.56] opacity-90 sm:hidden" />
    <WireframeCard className="left-[-1.8rem] top-[27.3rem] z-10 scale-[0.58] opacity-90 sm:hidden" />
    <UsabilityCard className="right-[-1.9rem] top-[28.2rem] z-30 scale-[0.55] opacity-95 sm:hidden" />
  </div>
);

const HeroTitleLayer = () => (
  <h1
    data-hero-title
    aria-label="Reggie Alleyne"
    className="pointer-events-none absolute left-1/2 top-[3.65rem] z-0 w-[min(108vw,36rem)] -translate-x-1/2 overflow-visible sm:top-12 sm:w-[min(116vw,82rem)] lg:top-16"
  >
    <img
      data-hero-title-word
      src={heroAssets.wordmark}
      alt=""
      aria-hidden="true"
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

const KeywordRail = ({ className }: { className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      data-hero-keyword-rail
      className={cn(
        "pointer-events-none overflow-hidden text-gray-950",
        className,
      )}
      aria-label={keywordRailLabel}
    >
      <motion.div
        aria-hidden="true"
        className="flex w-max items-center"
        animate={shouldReduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 44,
                ease: "linear",
                repeat: Infinity,
              }
        }
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 items-center gap-5 pr-5"
          >
            {keywords.map((keyword) => {
              const [muted, ...strongParts] = keyword.split(" ");
              const strong = strongParts.join(" ");

              return (
                <div
                  key={`${groupIndex}-${keyword}`}
                  className="flex shrink-0 items-center gap-5"
                >
                  <p className="whitespace-nowrap font-sans text-3xl font-black leading-[1.1] tracking-normal sm:text-[2.75rem]">
                    <span className="text-[#6b7280]">{muted}</span>
                    <span> {strong}</span>
                  </p>
                  <AssetIcon src={heroAssets.separator} className="size-8" />
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const HeroArtwork = () => (
  <div
    className="relative mx-auto mt-8 h-[36rem] w-full max-w-[34rem] sm:mt-16 sm:h-[38rem] sm:max-w-[44rem] lg:mt-8 lg:h-[650px] lg:max-w-[980px]"
  >
    <HeroTitleLayer />
    <UxDesignCards />

    <div className="absolute left-1/2 top-[3.4rem] z-20 h-[29rem] w-[21rem] -translate-x-1/2 sm:top-0 sm:h-[638px] sm:w-[511px]">
      <img
        data-hero-portrait
        src={heroAssets.portrait}
        alt="Digital portrait of Reggie Alleyne"
        className="h-full w-full object-contain"
      />
    </div>
    <HeroLightAperture />

    <ToolPanel className="absolute left-3 top-[18.8rem] z-30 origin-top-left scale-[0.58] sm:left-[calc(50%-300px)] sm:top-[178px] sm:scale-90 lg:left-[calc(50%-458px)] lg:scale-100" />

    <SearchChip
      label="Design"
      className="absolute right-8 top-[9.6rem] z-30 w-[126px] origin-top-right scale-[0.82] pr-6 sm:left-[calc(50%+168px)] sm:right-auto sm:top-[155px] sm:w-[174px] sm:scale-100"
    />
    <SearchChip
      label="Code"
      className="absolute right-8 top-[16.25rem] z-30 w-[116px] origin-top-right scale-[0.82] pr-6 sm:left-[calc(50%+217px)] sm:right-auto sm:top-[259px] sm:w-[174px] sm:scale-100"
    />
    <SearchChip
      label="Prototype"
      className="absolute right-3 top-[27.4rem] z-40 w-[138px] origin-top-right scale-[0.82] pr-6 sm:left-[calc(50%+105px)] sm:right-auto sm:top-[468px] sm:w-[174px] sm:scale-100"
    />
  </div>
);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [desktopCursor, setDesktopCursor] = useState<CursorState>({
    isVisible: false,
    isOverPurple: false,
    x: 0,
    y: 0,
  });

  const isPurpleCursorZone = (x: number, y: number) => {
    const titleImage =
      sectionRef.current?.querySelector<HTMLElement>("[data-hero-title-word]");
    const titleRect = titleImage?.getBoundingClientRect();
    const isOverPurpleTitle =
      titleRect &&
      x >= titleRect.left &&
      x <= titleRect.right &&
      y >= titleRect.top + titleRect.height * 0.46 &&
      y <= titleRect.bottom;

    if (isOverPurpleTitle) {
      return true;
    }

    return document
      .elementsFromPoint(x, y)
      .some((element) => element.closest("[data-purple-cursor-zone]"));
  };

  const handleCursorMove = (event: MouseEvent<HTMLElement>) => {
    setDesktopCursor({
      isVisible: true,
      isOverPurple: isPurpleCursorZone(event.clientX, event.clientY),
      x: event.clientX,
      y: event.clientY,
    });
  };

  const hideDesktopCursor = () => {
    setDesktopCursor((cursor) => ({
      ...cursor,
      isOverPurple: false,
      isVisible: false,
    }));
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const revealTargets = gsap.utils.toArray<HTMLElement>(
        [
          "[data-hero-title-word]",
          "[data-hero-portrait]",
          "[data-hero-light-hole]",
          "[data-hero-tool-panel]",
          "[data-hero-search-chip]",
          "[data-hero-card]",
          "[data-hero-keyword-rail]",
        ].join(", "),
      );

      if (reduceMotion) {
        gsap.set(revealTargets, {
          autoAlpha: 1,
          clearProps: "clipPath,filter,transform",
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.82,
          ease: "expo.out",
        },
      });

      gsap.set("[data-hero-title-word]", { transformOrigin: "50% 100%" });
      gsap.set("[data-hero-portrait]", {
        clipPath: "ellipse(14% 4% at 50% 84%)",
        transformOrigin: "50% 88%",
      });
      gsap.set("[data-hero-light-hole]", { transformOrigin: "50% 54%" });

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
          { autoAlpha: 0, x: 76, y: 14 },
          {
            autoAlpha: 1,
            clearProps: "transform",
            duration: 0.72,
            stagger: { each: 0.09, from: "start" },
            x: 0,
            y: 0,
          },
          0.8,
        )
        .fromTo(
          "[data-hero-card]",
          {
            autoAlpha: 0,
            x: (index) => (index % 2 === 0 ? 34 : -34),
            y: 42,
          },
          {
            autoAlpha: 1,
            clearProps: "transform",
            duration: 0.76,
            stagger: { each: 0.08, from: "center" },
            x: 0,
            y: 0,
          },
          0.98,
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
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[900px] overflow-hidden bg-white pt-8 text-[#141414] sm:min-h-[980px] sm:pt-20 md:pt-28 lg:min-h-[960px] lg:cursor-none lg:pt-32"
      onMouseEnter={handleCursorMove}
      onMouseLeave={hideDesktopCursor}
      onMouseMove={handleCursorMove}
    >
      <DesktopHeroCursor cursor={desktopCursor} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroArtwork />

        <KeywordRail className="relative left-1/2 z-50 mt-10 w-screen -translate-x-1/2 pb-36 lg:hidden" />
      </div>

      <KeywordRail className="absolute inset-x-0 bottom-14 z-10 hidden lg:block" />
    </section>
  );
};

export default HeroSection;
