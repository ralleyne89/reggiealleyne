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

const FeaturedProjectsSection = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
    retry: 1,
  });

  const featuredProjects = useMemo(
    () => orderFeaturedProjects(projects).slice(0, 2),
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
              Case studies with room for the decision.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-body-md lg:justify-self-end">
            Start with the two projects that best show how I move from product
            questions to working interfaces.
          </p>
        </div>

        {isLoading ? (
          <div className="grid w-full grid-cols-1 gap-5">
            {[1, 2].map((item) => (
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
                        aria-label={`Read case study: ${project.curation.featuredTitle}`}
                        data-cursor-label="View case study"
                      >
                        <div className="portfolio-cinema-card__media-inner">
                          <img
                            src={project.image}
                            alt=""
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            fetchPriority={index === 0 ? "high" : "auto"}
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

            <div className="mt-10 flex justify-center">
              <Link
                to="/work"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-[oklch(var(--color-surface-raised))] px-6 py-3 font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                View all work
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
