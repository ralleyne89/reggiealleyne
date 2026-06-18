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
      className="relative scroll-mt-24 overflow-hidden bg-[oklch(var(--color-surface-soft))] py-16 text-text-primary sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,oklch(var(--color-surface-page)),oklch(var(--color-surface-soft)/0))]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid w-full min-w-0 gap-6 border-b border-gray-200 pb-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <div className="mb-4">
              <SectionRule index="01" label="Selected work" />
            </div>
            <h2 className="max-w-2xl break-words font-display text-[2.25rem] font-semibold leading-[1.05] text-gray-950 [text-wrap:balance] sm:text-[3.1rem]">
              Two case studies worth reading first.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-body-md lg:justify-self-end">
            Start here if you want the clearest view of how I connect product
            thinking, UX decisions, and frontend execution.
          </p>
        </div>

        {isLoading ? (
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="h-[32rem] animate-pulse rounded-lg border border-gray-200 bg-white"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-5 lg:grid-cols-2">
              {featuredProjects.map((project, index) => {
                const brief = getCaseStudyBrief(project.slug);

                return (
                  <article
                    key={project.id}
                    className="group grid min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md"
                  >
                    <Link
                      to={getProjectPath(project)}
                      className="relative block aspect-[16/10] overflow-hidden bg-gray-950"
                      aria-label={`Read case study: ${project.curation.featuredTitle}`}
                      data-cursor-label="Read case study"
                    >
                      <img
                        src={project.image}
                        alt=""
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "auto"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                        sizes="(min-width: 1024px) 40rem, 100vw"
                        onError={(event) => {
                          event.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-950 shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>

                    <div className="grid gap-7 p-5 sm:p-6">
                      <div>
                        <p className="text-xs font-semibold uppercase leading-5 text-primary">
                          {project.curation.eyebrow}
                        </p>
                        <h3 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-gray-950 [text-wrap:balance] sm:text-[2.55rem]">
                          {project.curation.featuredTitle}
                        </h3>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                          {project.curation.impactSummary}
                        </p>
                      </div>

                      <dl className="grid gap-4 border-y border-gray-200 py-5 sm:grid-cols-2">
                        <div>
                          <dt className="text-xs font-semibold uppercase leading-5 text-gray-500">
                            Decision
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-gray-700">
                            {brief?.coreDecision ||
                              "Shape the interface around the user's next useful move."}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase leading-5 text-gray-500">
                            Proof
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-gray-700">
                            {brief?.evidence ||
                              "The case study keeps implementation notes and visible artifacts close to the claim."}
                          </dd>
                        </div>
                      </dl>

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase leading-5 text-gray-500">
                          <span>{project.role}</span>
                          <span aria-hidden="true">/</span>
                          <span>{project.year}</span>
                        </div>
                        <Link
                          to={getProjectPath(project)}
                          className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-gray-300 px-4 text-sm font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary"
                        >
                          Read case study
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
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
