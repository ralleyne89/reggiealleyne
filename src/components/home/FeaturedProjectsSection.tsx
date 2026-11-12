import { Link } from "react-router-dom";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import { orderFeaturedProjects } from "@/config/portfolioCuration";
import { getProjectPath } from "@/lib/projectRoutes";
import { DUR, EASE, STAGGER } from "@/lib/motion";
import { cn } from "@/lib/utils";
import SectionRule from "@/components/motion/SectionRule";
import SelectionFrame from "@/components/project/SelectionFrame";
import { startScreenHandoff } from "@/lib/screenHandoff";

gsap.registerPlugin(ScrollTrigger);

const moreSelectedProjectSlugs = [
  "litmus-ai",
  "covelo-timecard-system",
  "cllctve-platform",
  "symptom-checkr",
] as const;

const padIndex = (index: number) => String(index + 1).padStart(2, "0");

/**
 * Home work section. The three lead case studies scroll past a screen that
 * holds still inside a selection frame; the frame retargets to whichever
 * project is centred. Supporting work follows as compact rows.
 */
const FeaturedProjectsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
    retry: 1,
  });

  const leadProjects = useMemo(
    () => orderFeaturedProjects(projects).slice(0, 3),
    [projects],
  );

  const moreSelectedProjects = useMemo(
    () =>
      moreSelectedProjectSlugs.flatMap((slug) => {
        const project = projects.find((candidate) => candidate.slug === slug);
        return project ? [project] : [];
      }),
    [projects],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = itemRefs.current.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, [leadProjects.length]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldReduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-lw-stage]",
        { clipPath: "inset(14% 10% 14% 10%)", autoAlpha: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          autoAlpha: 1,
          duration: DUR.reveal,
          ease: EASE.gsapOut,
          scrollTrigger: { trigger: "[data-lw-stage]", start: "top 85%", once: true },
        },
      );

      ScrollTrigger.batch("[data-lw-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (elements) =>
          gsap.from(elements, {
            y: 28,
            autoAlpha: 0,
            duration: DUR.slow,
            ease: EASE.gsapOut,
            stagger: STAGGER.base,
          }),
      });
    }, section);

    return () => context.revert();
  }, [shouldReduceMotion, leadProjects.length]);

  const activeProject = leadProjects[active] ?? leadProjects[0];

  // Carry the project's screen across the route change into the case study.
  const handoff = (event: MouseEvent, index: number) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const image = wide
      ? sectionRef.current?.querySelectorAll<HTMLImageElement>(".lw-stage__screen")[index]
      : itemRefs.current[index]?.querySelector<HTMLImageElement>(".lw-item__media img");
    startScreenHandoff(image);
  };

  return (
    <section
      id="projects"
      data-layer="Selected work"
      ref={sectionRef}
      className="lw-section relative scroll-mt-24 text-text-primary"
    >
      <div className="lw-shell">
        <div className="mb-4">
          <SectionRule index="01" label="Selected work" />
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="lw-heading">
            Three case studies built around product decisions.
          </h2>
          <p className="max-w-xl text-base leading-7 text-text-secondary lg:justify-self-end">
            Start with three projects that show product questions moving into
            working interfaces.
          </p>
        </div>

        <div className="lw-grid">
          <ol className="lw-list">
            {leadProjects.map((project, index) => (
              <li
                key={project.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className={cn("lw-item", index === active && "is-active")}
              >
                <Link
                  to={getProjectPath(project)}
                  onClick={(event) => handoff(event, index)}
                  className="lw-item__media"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <SelectionFrame label={`${project.curation.featuredTitle} / Cover`}>
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </SelectionFrame>
                </Link>

                <p className="lw-item__index">
                  {padIndex(index)}
                  <span>{project.curation.eyebrow}</span>
                </p>
                <h3 className="lw-item__title">
                  <Link
                    to={getProjectPath(project)}
                  onClick={(event) => handoff(event, index)}
                    data-cursor-label="Read case study"
                  >
                    {project.curation.featuredTitle}
                  </Link>
                </h3>
                <p className="lw-item__summary">
                  {project.curation.impactSummary}
                </p>
                <p className="lw-item__signal">
                  {project.curation.reviewerSignal}
                </p>
                <p className="lw-item__meta">
                  {project.role} · {project.year}
                </p>
                <Link to={getProjectPath(project)}
                  onClick={(event) => handoff(event, index)} className="lw-item__cta">
                  Read case study
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>

          {activeProject ? (
            <div className="lw-stage-wrap" aria-hidden="true">
              <Link
                to={getProjectPath(activeProject)}
                onClick={(event) => handoff(event, active)}
                tabIndex={-1}
                className="block"
                data-cursor-label="Read case study"
                data-lw-stage
              >
                <SelectionFrame
                  label={`${activeProject.curation.featuredTitle} / Cover`}
                >
                  <div className="lw-stage">
                    {leadProjects.map((project, index) => (
                      <img
                        key={project.id}
                        src={project.image}
                        alt=""
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className={cn(
                          "lw-stage__screen",
                          index === active && "is-active",
                        )}
                      />
                    ))}
                  </div>
                </SelectionFrame>
              </Link>
              <p className="lw-stage__count">
                <span>{padIndex(active)}</span> / {padIndex(leadProjects.length - 1)}
              </p>
            </div>
          ) : null}
        </div>

        {moreSelectedProjects.length > 0 ? (
          <div className="mt-16 sm:mt-24" data-supporting-work data-layer="More work">
            <div className="mb-5 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
              <h3 className="font-display text-2xl font-semibold leading-tight">
                More selected work
              </h3>
              <Link
                to="/work"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                View all work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid divide-y divide-gray-200 border-y border-gray-200">
              {moreSelectedProjects.map((project) => (
                <Link
                  key={project.id}
                  to={getProjectPath(project)}
                  className="portfolio-work-row group py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4"
                  data-cursor-label="View project"
                  data-lw-reveal
                >
                  <div className="relative z-10 grid min-w-0 gap-3 pr-0 lg:max-w-[58%] lg:pr-10">
                    <p className="portfolio-work-row__title portfolio-work-row__title--compact">
                      {project.title}
                    </p>
                    <p className="max-w-2xl text-sm leading-6 text-text-secondary">
                      {project.description}
                    </p>
                    <p className="text-xs font-semibold uppercase leading-5 text-primary">
                      {project.category || project.tags?.[0] || "Product design"}
                    </p>
                  </div>
                  <span className="portfolio-work-row__preview" aria-hidden="true">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
