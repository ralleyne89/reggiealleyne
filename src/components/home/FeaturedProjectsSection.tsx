import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import {
  getCaseStudyBrief,
  orderFeaturedProjects,
} from "@/config/portfolioCuration";
import { getProjectPath } from "@/lib/projectRoutes";
import SectionRule from "@/components/motion/SectionRule";

const moreSelectedProjectSlugs = [
  "covelo-timecard-system",
  "symptom-checkr",
] as const;

const FeaturedProjectsSection = () => {
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

  const moreSelectedProjects = useMemo(
    () =>
      moreSelectedProjectSlugs.flatMap((slug) => {
        const project = projects.find((candidate) => candidate.slug === slug);
        return project ? [project] : [];
      }),
    [projects],
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-clip bg-[oklch(var(--color-surface-soft))] py-16 text-text-primary sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,oklch(var(--color-surface-page)),oklch(var(--color-surface-soft)/0))]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid w-full min-w-0 gap-6 border-b border-gray-200 pb-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <div className="mb-4">
              <SectionRule index="01" label="Selected work" />
            </div>
            <h2 className="max-w-2xl break-words font-display text-[2.25rem] font-semibold leading-[1.05] text-gray-950 [text-wrap:balance] sm:text-[3.1rem]">
              Three case studies built around product decisions.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-body-md lg:justify-self-end">
            Start with three projects that show product questions moving into
            working interfaces.
          </p>
        </div>

        {isLoading ? (
          <div className="grid w-full grid-cols-1 gap-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[28rem] animate-pulse rounded-2xl border border-gray-200 bg-white sm:h-[34rem]"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="portfolio-cinema-list">
              {featuredProjects.map((project, index) => {
                const brief = getCaseStudyBrief(project.slug);

                return (
                  <div
                    key={project.id}
                    className="portfolio-cinema-card-shell portfolio-cinema-card-shell--static"
                  >
                    <article
                      className="portfolio-cinema-card group"
                      aria-labelledby={`home-featured-${project.id}`}
                    >
                      <span
                        className="portfolio-cinema-card__scan"
                        aria-hidden="true"
                      />
                      <span
                        className="portfolio-cinema-card__index"
                        aria-hidden="true"
                      >
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
                          data-cursor-label="Read case study"
                        >
                          Read case study
                          <ArrowUpRight size={16} />
                        </Link>

                        <dl className="portfolio-cinema-card__proof">
                          <div>
                            <dt>Decision</dt>
                            <dd>
                              {brief?.coreDecision ||
                                "Shape interface around the user's next useful move."}
                            </dd>
                          </div>
                          <div>
                            <dt>Proof</dt>
                            <dd>
                              {brief?.evidence ||
                                "The case study keeps implementation notes and visible artifacts close to claim."}
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
                        aria-label={`Read case study: ${project.curation.featuredTitle}`}
                        data-cursor-label="Read case study"
                      >
                        <div className="portfolio-cinema-card__media-inner">
                          <img
                            src={project.image}
                            alt=""
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            fetchPriority={index === 0 ? "high" : "auto"}
                            className="h-full w-full object-cover"
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

            {moreSelectedProjects.length > 0 ? (
              <div
                className="mt-12 border-t border-gray-200 pt-8"
                data-supporting-work
              >
                <div className="mb-5 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-gray-950">
                      More selected work
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
                      Two product systems: a workforce timecard portal and a
                      cautious health guidance flow.
                    </p>
                  </div>
                  <Link
                    to="/work"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    View all work
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid divide-y divide-gray-200 border-y border-gray-200">
                  {moreSelectedProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={getProjectPath(project)}
                      className="portfolio-work-row group py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4"
                      data-cursor-label="View project"
                    >
                      <div className="relative z-10 grid min-w-0 gap-3 pr-0 lg:max-w-[58%] lg:pr-10">
                        <p className="portfolio-work-row__title portfolio-work-row__title--compact">
                          {project.title}
                        </p>
                        <p className="max-w-2xl text-sm leading-6 text-gray-600">
                          {project.description}
                        </p>
                        <p className="text-xs font-semibold uppercase leading-5 text-primary">
                          {project.category ||
                            project.tags?.[0] ||
                            "Product design"}
                        </p>
                      </div>
                      <span
                        className="portfolio-work-row__preview"
                        aria-hidden="true"
                      >
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
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
