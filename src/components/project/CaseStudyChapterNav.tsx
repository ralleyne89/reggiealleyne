import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { scrollToElement } from "@/components/layout/SmoothScroll";

export type CaseStudyChapter = {
  id: string;
  label: string;
};

type CaseStudyChapterNavProps = {
  chapters: CaseStudyChapter[];
};

/**
 * Reading progress bar (all viewports) + sticky chapter rail (desktop).
 * Uses CSS sticky + Framer useScroll — deliberately no ScrollTrigger pinning,
 * which leaves ghost spacers behind during route wipes.
 */
const CaseStudyChapterNav = ({ chapters }: CaseStudyChapterNavProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 36,
    mass: 0.6,
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (chapters.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [chapters]);

  const handleJump = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      scrollToElement(element);
    }
  };

  if (chapters.length === 0) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-primary"
        style={{ scaleX: shouldReduceMotion ? scrollYProgress : progress }}
      />

      <nav aria-label="On this page" className="mx-auto max-w-6xl px-4 pb-4 pt-20 sm:px-6 xl:hidden">
        <details className="rounded-lg border border-gray-300 bg-white p-4">
          <summary className="cursor-pointer py-2 font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">On this page</summary>
          <ul className="mt-2 grid grid-cols-2 gap-1">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`} className="flex min-h-11 items-center rounded px-2 text-sm font-medium text-primary underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" aria-current={chapter.id === activeId ? "location" : undefined}>{chapter.label}</a>
              </li>
            ))}
          </ul>
        </details>
      </nav>
      <nav
        aria-label="Case study chapters"
        className="fixed right-5 top-1/2 z-[55] hidden -translate-y-1/2 xl:block"
      >
        <ul className="flex flex-col items-end gap-3">
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;

            return (
              <li key={chapter.id}>
                <button
                  type="button"
                  onClick={() => handleJump(chapter.id)}
                  className="group flex items-center gap-2.5"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={
                      isActive
                        ? "rounded-md bg-[oklch(var(--color-surface-raised)/0.92)] px-2 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-primary opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                        : "rounded-md bg-[oklch(var(--color-surface-raised)/0.92)] px-2 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-text-muted opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                    }
                  >
                    {chapter.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={
                      isActive
                        ? "h-2.5 w-2.5 rounded-full bg-primary transition-[transform,background-color] duration-200"
                        : "h-2 w-2 rounded-full bg-text-muted/40 transition-[transform,background-color] duration-200 group-hover:scale-125 group-hover:bg-primary/60"
                    }
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default CaseStudyChapterNav;
