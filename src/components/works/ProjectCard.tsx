import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "@/types/project";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectType;
  onProjectClick: (project: ProjectType) => void;
}

const ProjectCard = ({ project, onProjectClick }: ProjectCardProps) => {
  // Get the primary category/tag for display
  const primaryCategory =
    project.category || (project.tags && project.tags[0]) || "Product";

  // Check if this is the Chill Vibes project for special image handling
  const isChillVibesProject = project.title === "Chill Vibes Music Player";
  const isBobsProject = project.title === "Bob's Big Break";

  return (
    <motion.div
      className="group cursor-pointer py-16 border-b border-gray-800/30 last:border-b-0"
      onClick={() => onProjectClick(project)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Year and Category Header */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 mb-8">
        <div className="text-sm text-gray-500">{project.year}</div>
        <div className="text-sm text-primary font-medium uppercase tracking-wider">
          {primaryCategory}
        </div>
      </div>

      {/* Project Title */}
      <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white group-hover:text-primary transition-colors duration-300 mb-12">
        {project.title}
      </h2>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Project Details */}
        <div className="space-y-8">
          {/* Project Description */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Additional description if available */}
            {project.solution && (
              <p className="text-gray-400 text-base leading-relaxed">
                {project.solution}
              </p>
            )}
          </div>

          {/* Project Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-gray-500 mb-2">Role</div>
              <div className="text-white">{project.role}</div>
            </div>

            <div>
              <div className="text-gray-500 mb-2">Duration</div>
              <div className="text-white">{project.duration}</div>
            </div>

            {project.deliverables && project.deliverables.length > 0 && (
              <div className="sm:col-span-2">
                <div className="text-gray-500 mb-2">Deliverables</div>
                <div className="text-white">
                  {project.deliverables.join(", ")}
                </div>
              </div>
            )}

            {project.teamSize && (
              <div>
                <div className="text-gray-500 mb-2">Team</div>
                <div className="text-white">{project.teamSize}</div>
              </div>
            )}

            {project.liveUrl && (
              <div>
                <div className="text-gray-500 mb-2">Visit Website</div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.liveUrl.replace(/^https?:\/\//, "")}
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Project Images */}
        <div className="space-y-4">
          {/* Main Project Image */}
          <div className="relative group/image">
            <img
              src={
                isChillVibesProject
                  ? "/lovable-uploads/a6e65372-edc9-4098-aa00-82ee5a49def0.png"
                  : project.image
              }
              alt={project.title}
              className={`w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02] ${
                isChillVibesProject || isBobsProject
                  ? "object-contain bg-gray-900"
                  : "object-cover"
              }`}
              onError={(e) => {
                console.error(`Image failed to load: ${project.image}`);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          {/* Additional Images if available */}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(0, 4).map((image, index) => (
                <div key={index} className="relative group/image">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Result/Status Indicator */}
      {project.conclusion?.impact && (
        <div className="mt-8 pt-6 border-t border-gray-800/30">
          <div className="text-sm">
            <span className="text-gray-500">Result</span>
            <br />
            <span className="text-white">{project.conclusion.impact}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
