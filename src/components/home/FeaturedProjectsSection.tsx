import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import ProjectCard from "@/components/home/ProjectCard";

const FeaturedProjectsSection = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        console.log("Fetching all projects from Index page");
        return await getAllProjects();
      } catch (err) {
        console.error("Error fetching projects from Index:", err);
        return [];
      }
    },
    retry: 1,
  });

  return (
    <section id="projects" className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2
            className="font-display text-display-md text-gray-900 mb-4 reveal"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            Featured <span className="text-primary italic">Work</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-body-md reveal"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            Real projects, real impact. Here's how design and code solved actual
            business problems.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-3xl h-80 border border-gray-200"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const featuredProjectIds = [10, 9, 1];
              const featuredProjects = featuredProjectIds
                .map((id) => projects?.find((project) => project.id === id))
                .filter((project) => project !== undefined);

              // Enhanced project data with problem-first descriptions (Senior-level framing)
              const enhancedProjects = featuredProjects.map((project) => {
                let enhancedTitle = project.title;
                let impactMetric = "";

                if (project.id === 10) {
                  // Litmus AI - Lead with the problem solved
                  enhancedTitle = "AI Literacy Certification Platform";
                  impactMetric = "Solving 'buzzword literacy' with 5-minute adaptive testing";
                } else if (project.id === 9) {
                  // SymptomCheckr - Lead with the strategic choice
                  enhancedTitle = "Explainable AI Symptom Checker";
                  impactMetric = "78% anxiety reduction through algorithmic transparency";
                } else if (project.id === 1) {
                  // CLLCTVE - Lead with the strategic bet
                  enhancedTitle = "Gen Z Portfolio Platform";
                  impactMetric = "500+ creators, 85% retention by building what Behance wouldn't";
                }

                return {
                  ...project,
                  enhancedTitle,
                  impactMetric,
                };
              });

              return enhancedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.enhancedTitle}
                  description={project.description}
                  image={project.image}
                  slug={project.slug || project.id.toString()}
                  tags={project.tags}
                  featured={false}
                  index={index}
                />
              ));
            })()}
          </div>
        )}

        <div className="mt-12 text-center">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-medium hover:border-primary transition-colors duration-300"
            >
              View All Work
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
