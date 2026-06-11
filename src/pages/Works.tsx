import { useEffect } from "react";
import { scrollToTop } from "@/components/layout/SmoothScroll";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import WorksHeader from "@/components/works/WorksHeader";
import WorksLoadingSkeleton from "@/components/works/WorksLoadingSkeleton";
import WorkRow from "@/components/works/WorkRow";
import SectionRule from "@/components/motion/SectionRule";
import { getAllProjects } from "@/services/api";
import { getAllPredefinedProjectsSync } from "@/services/api/predefinedProjects";
import {
  getFeaturedConfig,
  isFeaturedProject,
  isPrimaryWorksProject,
  orderFeaturedProjects,
  sortProjectsNewestFirst,
} from "@/config/portfolioCuration";
import { DUR, EASE, STAGGER } from "@/lib/motion";

const Works = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    placeholderData: getAllPredefinedProjectsSync,
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
              className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.base, ease: EASE.out }}
            >
              Work
            </motion.p>
            <motion.h1
              className="break-words font-display text-[2.35rem] leading-[1.08] text-gray-950 [text-wrap:balance] sm:text-display-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.base, ease: EASE.out }}
            >
              The product decisions behind the interface.
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.base, delay: 0.08, ease: EASE.out }}
            >
              The featured case studies focus on AI and product-design
              judgment. Each one shows the problem, constraint, decision, and
              evidence behind the interface.
            </motion.p>
          </section>

          <section aria-label="Featured case studies">
            <SectionRule index="01" label="Featured case studies" className="mb-2" />
            <motion.div
              className="divide-y divide-gray-200 border-y border-gray-200"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: STAGGER.base } },
              }}
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: DUR.base, ease: EASE.out },
                    },
                  }}
                >
                  <WorkRow
                    project={project}
                    index={index}
                    title={project.curation.featuredTitle}
                    eyebrow={project.curation.eyebrow}
                    summary={project.curation.impactSummary}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mt-14 sm:mt-20" aria-label="Additional selected work">
            <SectionRule index="02" label="Additional selected work" className="mb-2" />
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {additionalProjects.map((project, index) => {
                const config = getFeaturedConfig(project.slug);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: DUR.base, ease: EASE.out }}
                  >
                    <WorkRow
                      project={project}
                      index={index}
                      eyebrow={config?.eyebrow}
                      size="compact"
                    />
                  </motion.div>
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
