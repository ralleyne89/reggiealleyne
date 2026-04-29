import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import {
  isFeaturedProject,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";
import ProjectCard from "@/components/home/ProjectCard";
import { getProjectPath } from "@/lib/projectRoutes";

const FeaturedProjectsSection = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    retry: 1,
  });

  const featuredProjects = orderFeaturedProjects(projects);
  const supportingProjects = sortProjectsNewestFirst(
    projects.filter(
      (project) => isPrimaryWorksProject(project) && !isFeaturedProject(project),
    ),
  ).slice(0, 4);

  return (
    <section id="projects" className="relative scroll-mt-24 bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 w-full max-w-3xl min-w-0 text-center sm:mb-12">
          <motion.p
            className="mb-3 text-xs font-semibold uppercase leading-5 text-primary sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Selected work
          </motion.p>
          <motion.h2
            className="break-words font-display text-[2.1rem] font-semibold leading-[1.08] tracking-normal text-gray-950 [text-wrap:balance] sm:text-[2.8rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Three case studies built around the decisions behind the work.
          </motion.h2>

          <motion.p
            className="mt-4 text-base leading-7 text-text-secondary sm:text-body-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            The set covers AI literacy, creator platforms, and hospitality AI,
            with the problem, constraint, decision, and evidence kept close to
            the surface.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[24rem] animate-pulse rounded-2xl border border-gray-200 bg-white sm:h-[28rem]"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.curation.featuredTitle}
                  description={project.description}
                  image={project.image}
                  href={getProjectPath(project)}
                  tags={project.tags || []}
                  eyebrow={project.curation.eyebrow}
                  impactSummary={project.curation.impactSummary}
                  reviewerSignal={project.curation.reviewerSignal}
                  role={project.role}
                  year={project.year}
                  index={index}
                />
              ))}
            </div>

            <div className="mx-auto mt-8 w-full max-w-5xl rounded-2xl border border-gray-200 bg-white p-4 sm:mt-10 sm:p-5">
              <div className="mb-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-950">
                    Additional selected work
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    More work across education, security, and product systems.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {supportingProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={getProjectPath(project)}
                    className="group flex min-h-16 min-w-0 items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-white"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-950 transition-colors group-hover:text-primary">
                        {project.title}
                      </p>
                      <p className="truncate text-xs text-gray-500">
                        {project.category ||
                          (project.tags && project.tags[0]) ||
                          "Product design"}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-gray-400 transition-colors group-hover:text-primary"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/works"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-950 transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            View the full work index
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
