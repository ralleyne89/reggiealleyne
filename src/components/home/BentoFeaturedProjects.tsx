import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "@/types/project";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Code, Palette, Layout, Monitor, ArrowUpRight } from "lucide-react";

interface BentoFeaturedProjectsProps {
  projects?: ProjectType[];
  isLoading: boolean;
  error: Error | null;
}

// Map of project ID to icon component
const projectIcons = {
  2: Palette, // Tutor D - UI/UX Design focus
  3: Code, // Tech Noir - Development focus
  1: Layout, // Cllctve
  4: Monitor, // Other projects
};

const BentoFeaturedProjects = ({
  projects,
  isLoading,
  error,
}: BentoFeaturedProjectsProps) => {
  const navigate = useNavigate();

  if (error) {
    return (
      <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid">
        <p className="text-red-500">Error loading projects</p>
      </div>
    );
  }

  if (isLoading || !projects) {
    return (
      <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-64 bg-[rgba(20,20,20,1)] rounded-xl"></div>
            <div className="h-64 bg-[rgba(20,20,20,1)] rounded-xl"></div>
            <div className="h-64 bg-[rgba(20,20,20,1)] rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  // Define the specific projects to show
  const featuredProjectIds = [3, 2, 1]; // Tech Noir, Tutor D, Cllctve

  // Filter to get only the specified projects in the right order
  const featuredProjects = featuredProjectIds
    .map((id) => projects?.find((project) => project.id === id))
    .filter((project) => project !== undefined) as ProjectType[];

  // Prepare data for the BentoGrid
  const bentoFeatures = featuredProjects.map((project) => {
    const IconComponent = projectIcons[project.id] || Monitor;

    return {
      name: project.title,
      description: project.description,
      Icon: IconComponent,
      href: project.slug
        ? `/project/${project.slug}`
        : `/project/${project.id}`,
      background: (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              console.error(`Image failed to load: ${project.image}`);
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
      ),
      className:
        project.id === 3
          ? "md:col-span-2" // Tech Noir spans 2 columns on medium screens
          : "col-span-1",
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <BentoGrid className="md:auto-rows-auto grid-rows-auto">
        {bentoFeatures.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </motion.div>
  );
};

export default BentoFeaturedProjects;
