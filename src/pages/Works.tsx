import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Footer from "@/components/layout/Footer";
import WorksHeader from "@/components/works/WorksHeader";
import WorksLoadingSkeleton from "@/components/works/WorksLoadingSkeleton";
import { getAllProjects } from "@/services/api";
import {
  getCaseStudyBrief,
  getFeaturedConfig,
  isFeaturedProject,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    retry: 1,
  });

  const uniqueProjects = projects.filter(
    (project, index, self) =>
      project &&
      project.title &&
      index === self.findIndex((item) => item?.title === project?.title),
  );

  const featuredProjects = orderFeaturedProjects(uniqueProjects);
  const additionalProjects = sortProjectsNewestFirst(
    uniqueProjects.filter(
      (project) => isPrimaryWorksProject(project) && !isFeaturedProject(project),
    ),
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white pt-24 text-text-primary">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorksHeader />
          <WorksLoadingSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-24 text-text-primary">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorksHeader />
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h2 className="text-2xl font-bold text-red-700">
              Error loading projects
            </h2>
            <p className="mt-3 text-red-600">
              Please refresh the page or use the contact link if the issue
              persists.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <main className="pb-24 pt-24 md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorksHeader />

          <section className="w-full max-w-4xl min-w-0 pb-10 pt-4 sm:pb-12 sm:pt-6">
            <motion.p
              className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Work index
            </motion.p>
            <motion.h1
              className="break-words font-display text-[2.35rem] leading-[1.08] text-gray-950 [text-wrap:balance] sm:text-display-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Product decisions, not just polished screens.
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              The featured case studies are curated for AI/product-design
              review. Each one highlights the problem, constraint, decision, and
              evidence behind the interface.
            </motion.p>
          </section>

          <section className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const brief = getCaseStudyBrief(project.slug);

              return (
                <motion.article
                  key={project.id}
                  className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link
                    to={`/project/${project.slug || project.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                      <div className="liquid-glass-control absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-gray-950">
                        Featured
                      </div>
                    </div>
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
                    <p className="text-xs font-semibold uppercase leading-5 text-primary">
                      {project.curation.eyebrow}
                    </p>
                    <h2 className="mt-3 break-words font-display text-2xl leading-tight text-gray-950 sm:text-heading-lg">
                      {project.curation.featuredTitle}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-text-secondary">
                      {project.curation.impactSummary}
                    </p>

                    {brief ? (
                      <dl className="mt-5 space-y-3 border-t border-gray-200 pt-5 text-sm">
                        <div>
                          <dt className="font-semibold text-gray-950">
                            Key decision
                          </dt>
                          <dd className="mt-1 text-gray-600">
                            {brief.coreDecision}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-gray-950">
                            Evidence
                          </dt>
                          <dd className="mt-1 text-gray-600">
                            {brief.evidence}
                          </dd>
                        </div>
                      </dl>
                    ) : null}

                    <Link
                      to={`/project/${project.slug || project.id}`}
                      className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-primary hover:text-primary-dark sm:pt-6"
                    >
                      Read case study
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </section>

          <section className="mt-10 border-t border-gray-200 py-10 sm:mt-14 sm:py-12">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="break-words font-display text-3xl leading-tight text-gray-950 sm:text-heading-xl">
                  Additional selected work
                </h2>
                <p className="mt-2 max-w-2xl text-text-secondary">
                  Supporting examples that show range across education,
                  security, entertainment, and product systems.
                </p>
              </div>
            </div>

            <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
              {additionalProjects.map((project) => {
                const config = getFeaturedConfig(project.slug);

                return (
                  <Link
                    key={project.id}
                    to={`/project/${project.slug || project.id}`}
                    className="group grid min-w-0 gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-primary/30 hover:bg-white sm:grid-cols-[9rem_1fr]"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 768px) 144px, 100vw"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase text-primary">
                        {config?.eyebrow ||
                          project.category ||
                          project.tags?.[0] ||
                          "Product design"}
                      </p>
                      <h3 className="mt-2 break-words text-lg font-semibold leading-snug text-gray-950 transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {project.fullDescription || project.description}
                      </p>
                      <div className="mt-3 flex min-w-0 flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span>{project.year}</span>
                        <span>{project.role}</span>
                        {project.liveUrl ? (
                          <span className="inline-flex items-center gap-1 text-primary">
                            Live
                            <ExternalLink size={12} />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Works;
