
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import ProjectCard from "@/components/home/ProjectCard";

const FeaturedProjectsSection = () => {
  const {
    data: projects,
    isLoading
  } = useQuery({
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
    retry: 1
  });

  return (
    <section id="projects" className="py-12 bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4 reveal" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            Featured <span className="text-primary">Work</span>
          </motion.h2>

          <motion.p className="text-text-secondary reveal" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            Browse through my carefully crafted projects showcasing my passion
            for creating beautiful and functional digital experiences.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map(n => <div key={n} className="bg-secondary rounded-3xl h-80"></div>)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const featuredProjectIds = [9, 1, 2];
              const featuredProjects = featuredProjectIds.map(id => projects?.find(project => project.id === id)).filter(project => project !== undefined);
              return featuredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  title={project.title} 
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
          <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            <Link to="/works" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-text-primary px-6 py-3 rounded-full font-medium hover:border-primary transition-colors duration-300">
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
