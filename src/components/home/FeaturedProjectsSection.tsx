import { Link } from "react-router-dom";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import {
  getCaseStudyBrief,
  isFeaturedProject,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";
import { getProjectPath } from "@/lib/projectRoutes";
import { EASE, SCRUB, STAGGER } from "@/lib/motion";
import TextReveal from "@/components/motion/TextReveal";
import RollingText from "@/components/motion/RollingText";
import SectionRule from "@/components/motion/SectionRule";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardShellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const supportingRowRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
    retry: 1,
  });

  const featuredProjects = useMemo(
    () => orderFeaturedProjects(projects).slice(0, 3),
    [projects],
  );

  const supportingProjects = useMemo(
    () =>
      sortProjectsNewestFirst(
        projects.filter(
          (project) =>
            isPrimaryWorksProject(project) && !isFeaturedProject(project),
        ),
      ).slice(0, 4),
    [projects],
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section || isLoading || featuredProjects.length === 0) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const rowCleanups: Array<() => void> = [];

    const context = gsap.context(() => {
      const shells = cardShellRefs.current.filter(Boolean) as HTMLDivElement[];
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      const media = mediaRefs.current.filter(Boolean) as HTMLDivElement[];
      const rows = supportingRowRefs.current.filter(Boolean) as HTMLAnchorElement[];
      const progress = progressRef.current;

      if (reduceMotion) {
        gsap.set([...cards, ...media, ...rows], {
          autoAlpha: 1,
          clearProps: "clipPath,filter,transform",
        });
        return;
      }

      gsap.from("[data-cinema-header]", {
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.gsapOut,
        stagger: STAGGER.base,
        y: 34,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      shells.forEach((shell, index) => {
        const card = cardRefs.current[index];
        const image = mediaRefs.current[index];
        const content = card?.querySelector(".portfolio-cinema-card__content");
        const scan = card?.querySelector(".portfolio-cinema-card__scan");

        // Entrance owns clipPath/alpha only; the dim tween below owns
        // scale/opacity. Keeping the property sets disjoint stops the two
        // tweens fighting mid-handoff.
        if (card) {
          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              clipPath: "inset(8% 5% 8% 5% round 1rem)",
            },
            {
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0% round 1rem)",
              duration: 0.8,
              ease: EASE.gsapOut,
              scrollTrigger: {
                trigger: shell,
                start: "top 78%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        if (content) {
          gsap.fromTo(
            content.children,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              duration: 0.76,
              ease: EASE.gsapOut,
              stagger: STAGGER.tight,
              y: 0,
              scrollTrigger: {
                trigger: shell,
                start: "top 66%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.12, xPercent: 4, yPercent: 4 },
            {
              ease: "none",
              scale: 1.02,
              xPercent: -18,
              yPercent: -10,
              scrollTrigger: {
                trigger: shell,
                start: "top bottom",
                end: "bottom top",
                scrub: SCRUB.base,
              },
            },
          );
        }

        if (scan) {
          gsap.fromTo(
            scan,
            { xPercent: -80 },
            {
              ease: "none",
              xPercent: 80,
              scrollTrigger: {
                trigger: shell,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        }

        ScrollTrigger.create({
          trigger: shell,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveProjectIndex(index),
          onEnterBack: () => setActiveProjectIndex(index),
        });

        const nextShell = shells[index + 1];
        if (card && nextShell) {
          gsap.fromTo(
            card,
            {
              scale: 1,
            },
            {
              ease: "none",
              immediateRender: false,
              scale: 0.95,
              scrollTrigger: {
                trigger: nextShell,
                start: "top bottom",
                end: "top 12%",
                scrub: true,
              },
            },
          );
        }
      });

      rows.forEach((row) => {
        const onMove = (event: PointerEvent) => {
          const rect = row.getBoundingClientRect();
          row.style.setProperty(
            "--preview-shift-y",
            `${event.clientY - rect.top - rect.height / 2}px`,
          );
          row.style.setProperty(
            "--preview-shift-x",
            `${Math.max(-24, Math.min(24, event.clientX - rect.left - rect.width * 0.72))}px`,
          );
        };
        const onLeave = () => {
          row.style.setProperty("--preview-shift-y", "0px");
          row.style.setProperty("--preview-shift-x", "2rem");
        };

        row.addEventListener("pointermove", onMove);
        row.addEventListener("pointerleave", onLeave);
        rowCleanups.push(() => {
          row.removeEventListener("pointermove", onMove);
          row.removeEventListener("pointerleave", onLeave);
        });
      });

      if (progress && shells.length > 0) {
        ScrollTrigger.create({
          trigger: shells[0],
          start: "top 62%",
          endTrigger: shells[shells.length - 1],
          end: "bottom 35%",
          onEnter: () =>
            progress.classList.add("portfolio-cinema-progress--visible"),
          onEnterBack: () =>
            progress.classList.add("portfolio-cinema-progress--visible"),
          onLeave: () =>
            progress.classList.remove("portfolio-cinema-progress--visible"),
          onLeaveBack: () =>
            progress.classList.remove("portfolio-cinema-progress--visible"),
        });
      }

      if (rows.length > 0) {
        gsap.from(rows, {
          autoAlpha: 0,
          duration: 0.62,
          ease: "power3.out",
          stagger: STAGGER.base,
          y: 28,
          scrollTrigger: {
            trigger: "[data-supporting-work]",
            start: "top 82%",
            once: true,
          },
        });
      }
    }, section);

    return () => {
      rowCleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [featuredProjects.length, isLoading, supportingProjects.length]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-clip bg-[oklch(var(--color-surface-soft))] py-16 text-text-primary sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,oklch(var(--color-surface-page)),oklch(var(--color-surface-soft)/0))]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid w-full min-w-0 gap-6 border-b border-gray-200 pb-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div data-cinema-header className="mb-4">
              <SectionRule index="01" label="Selected work" />
            </div>
            <TextReveal
              as="h2"
              split="lines"
              className="max-w-2xl break-words font-display text-[2.25rem] font-semibold leading-[1.05] text-gray-950 [text-wrap:balance] sm:text-[3.1rem]"
            >
              Case studies with room for the decision.
            </TextReveal>
          </div>

          <p
            data-cinema-header
            className="max-w-2xl text-base leading-7 text-text-secondary sm:text-body-md lg:justify-self-end"
          >
            A slower pass through the strongest work: what changed, which
            constraint mattered, and where the proof sits in the interface.
          </p>
        </div>

        {isLoading ? (
          <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[24rem] animate-pulse rounded-2xl border border-gray-200 bg-white sm:h-[28rem]"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="relative pb-4 lg:pb-[12vh]">
              <div
                ref={progressRef}
                className="portfolio-cinema-progress hidden lg:flex"
              >
                {featuredProjects.map((project, index) => (
                  <span
                    key={project.id}
                    aria-label={project.curation.featuredTitle}
                    className={
                      index === activeProjectIndex
                        ? "portfolio-cinema-progress__pip portfolio-cinema-progress__pip--active"
                        : "portfolio-cinema-progress__pip"
                    }
                  />
                ))}
              </div>

              {featuredProjects.map((project, index) => {
                const brief = getCaseStudyBrief(project.slug);

                return (
                  <div
                    key={project.id}
                    ref={(node) => {
                      cardShellRefs.current[index] = node;
                    }}
                    className="portfolio-cinema-card-shell"
                  >
                    <article
                      ref={(node) => {
                        cardRefs.current[index] = node;
                      }}
                      className="portfolio-cinema-card group"
                      aria-labelledby={`home-featured-${project.id}`}
                    >
                      <span className="portfolio-cinema-card__scan" aria-hidden="true" />
                      <span className="portfolio-cinema-card__index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="portfolio-cinema-card__content">
                        <div>
                          <p className="portfolio-cinema-card__eyebrow">
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {project.curation.eyebrow}
                          </p>
                          <h3
                            id={`home-featured-${project.id}`}
                            className="portfolio-cinema-card__title"
                          >
                            {project.curation.featuredTitle}
                          </h3>
                          <p className="portfolio-cinema-card__summary">
                            {project.curation.impactSummary}
                          </p>
                        </div>

                        <Link
                          to={getProjectPath(project)}
                          className="portfolio-cinema-card__cta"
                          aria-label={`Read case study: ${project.curation.featuredTitle}`}
                        >
                          Read case study
                          <ArrowUpRight size={16} />
                        </Link>

                        <dl className="portfolio-cinema-card__proof">
                          <div>
                            <dt>Decision</dt>
                            <dd>
                              {brief?.coreDecision ||
                                "Shape the interface around the user's next useful move."}
                            </dd>
                          </div>
                          <div>
                            <dt>Proof</dt>
                            <dd>
                              {brief?.evidence ||
                                "The case study keeps implementation notes and visible artifacts close to the claim."}
                            </dd>
                          </div>
                        </dl>

                        <div className="portfolio-cinema-card__footer">
                          <div className="portfolio-cinema-card__meta">
                            <span>{project.role}</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={getProjectPath(project)}
                        className="portfolio-cinema-card__media"
                        aria-hidden="true"
                        tabIndex={-1}
                        data-cursor-label="View case study"
                      >
                        <div
                          ref={(node) => {
                            mediaRefs.current[index] = node;
                          }}
                          className="portfolio-cinema-card__media-inner"
                        >
                          <img
                            src={project.image}
                            alt=""
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            fetchpriority={index === 0 ? "high" : "auto"}
                            sizes="(min-width: 1024px) 760px, 100vw"
                            onError={(event) => {
                              event.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                      </Link>
                    </article>
                  </div>
                );
              })}
            </div>

            <div
              data-supporting-work
              className="mt-12 border-t border-gray-200 pt-8 sm:mt-16"
            >
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-gray-950 sm:text-3xl">
                    More selected work
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Compact rows for projects that still deserve a quick read.
                  </p>
                </div>
                <Link
                  to="/work"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  View all work
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {supportingProjects.map((project, index) => (
                  <Link
                    key={project.id}
                    to={getProjectPath(project)}
                    ref={(node) => {
                      supportingRowRefs.current[index] = node;
                    }}
                    className="portfolio-work-row group"
                    data-cursor-label="View project"
                  >
                    <div className="relative z-10 grid min-w-0 gap-2 py-6 sm:grid-cols-[1fr_12rem] sm:items-center sm:py-8">
                      <div className="min-w-0">
                        <p className="portfolio-work-row__title">
                          {project.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-gray-600 sm:hidden">
                          {project.category ||
                            (project.tags && project.tags[0]) ||
                            "Product design"}
                        </p>
                      </div>
                      <div className="hidden text-right text-xs font-semibold uppercase leading-5 text-gray-500 sm:block">
                        {project.category ||
                          (project.tags && project.tags[0]) ||
                          "Product design"}
                      </div>
                    </div>

                    <div className="portfolio-work-row__preview" aria-hidden="true">
                      <img
                        src={project.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        sizes="18rem"
                        onError={(event) => {
                          event.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    <div className="relative z-10 mt-3 flex min-w-0 items-center justify-between gap-4 sm:hidden">
                      <div className="aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={project.image}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          sizes="7rem"
                          onError={(event) => {
                            event.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/work"
                className="rolling-trigger inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-[oklch(var(--color-surface-raised))] px-6 py-3 font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                <RollingText>View all Work</RollingText>
                <ArrowRight size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
