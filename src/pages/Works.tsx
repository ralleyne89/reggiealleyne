
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";
import WorksHeader from "@/components/works/WorksHeader";
import WorksLoadingSkeleton from "@/components/works/WorksLoadingSkeleton";
import { ProjectType } from "@/types/project";
import { ExternalLink } from "lucide-react";

const Works = () => {
  const navigate = useNavigate();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        console.log("Fetching all projects");
        const projects = await getAllProjects();
        console.log("Fetched projects:", projects);
        return projects;
      } catch (err) {
        console.error("Error fetching projects:", err);
        throw err;
      }
    },
    retry: 1,
  });

  // Handle project navigation
  const handleProjectClick = (project: ProjectType) => {
    if (!project) {
      toast.error("Project information is missing");
      return;
    }

    console.log(
      "Navigating to project:",
      project.title,
      "with ID:",
      project.id,
      "and slug:",
      project.slug
    );

    // Navigate to the project using its slug if available
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  // Scroll handler to switch active project
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveProjectIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  // Process the projects array to remove duplicates and ensure validity
  const uniqueProjects = projects
    ? projects.filter(
        (project, index, self) =>
          project &&
          project.title &&
          index === self.findIndex((p) => p?.title === project?.title)
      )
    : [];

  // Sort projects by year in descending order (newest first)
  const sortedProjects = [...uniqueProjects].sort((a, b) => {
    const yearA = a.year ? parseInt(a.year.toString()) : 0;
    const yearB = b.year ? parseInt(b.year.toString()) : 0;
    return yearB - yearA;
  });

  // Get current active project
  const activeProject = sortedProjects[activeProjectIndex];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-text-primary pt-24">
        <div className="container mx-auto px-4">
          <WorksHeader />
          <WorksLoadingSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white text-text-primary pt-24">
        <div className="container mx-auto px-4">
          <WorksHeader />
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Error loading projects
            </h2>
            <p className="text-text-secondary">
              Please try refreshing the page or contact support if the problem
              persists.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <div className="pt-24">
        <div className="container mx-auto px-4">
          <WorksHeader />
        </div>

        {/* Main Content with Mobile-Optimized Layout */}
        <div className="container mx-auto px-4 mt-8 lg:mt-16">
          <motion.h2
            className="font-display text-display-lg mb-8 lg:mb-16 text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Selected <span className="text-primary italic">Work</span>
          </motion.h2>
          <motion.div
            className="mb-8 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-body-lg text-text-secondary max-w-2xl leading-relaxed">
              Check out a curated selection of my work, there have been a lot
              but these are my favorites.
            </p>
          </motion.div>

          {/* Mobile: Stack Layout */}
          <div className="block lg:hidden space-y-12">
            {sortedProjects.map((project, index) => {
              const isChillVibesProject = project.title === "Chill Vibes Music Player";
              const isBobsProject = project.title === "Bob's Big Break";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-6"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={
                        isChillVibesProject
                          ? "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png"
                          : project.image
                      }
                      alt={project.title}
                      className={`w-full h-auto rounded-lg ${
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

                  {/* Project Details */}
                  <div className="space-y-4">
                    {/* Year and Category */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="text-sm text-text-muted">{project.year}</div>
                      <div className="text-sm text-primary font-medium uppercase tracking-wider">
                        {project.category ||
                          (project.tags && project.tags[0]) ||
                          "Product"}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-heading-xl text-text-primary">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-text-secondary text-base leading-relaxed">
                        {project.fullDescription || project.description}
                      </p>

                      {project.solution && (
                        <p className="text-text-muted text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      )}
                    </div>

                    {/* Project Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-text-muted mb-1">Role</div>
                        <div className="text-text-primary">{project.role}</div>
                      </div>

                      <div>
                        <div className="text-text-muted mb-1">Duration</div>
                        <div className="text-text-primary">{project.duration}</div>
                      </div>

                      {project.teamSize && (
                        <div>
                          <div className="text-text-muted mb-1">Team</div>
                          <div className="text-text-primary">{project.teamSize}</div>
                        </div>
                      )}

                      {project.liveUrl && (
                        <div>
                          <div className="text-text-muted mb-1">Visit Website</div>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
                          >
                            {project.liveUrl.replace(/^https?:\/\//, "")}
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* View Project Button */}
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      View Project Details
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16">
            {/* Left Column - Sticky Project Details */}
            <div className="lg:sticky lg:top-24 lg:h-screen lg:overflow-hidden">
              {activeProject && (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Year and Category */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
                    <div className="text-sm text-text-muted">
                      {activeProject.year}
                    </div>
                    <div className="text-sm text-primary font-medium uppercase tracking-wider">
                      {activeProject.category ||
                        (activeProject.tags && activeProject.tags[0]) ||
                        "Product"}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-display-md text-text-primary">
                    {activeProject.title}
                  </h3>

                  {/* Project Description */}
                  <div className="space-y-6">
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {activeProject.fullDescription ||
                        activeProject.description}
                    </p>

                    {activeProject.solution && (
                      <p className="text-text-muted text-base leading-relaxed">
                        {activeProject.solution}
                      </p>
                    )}
                  </div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-text-muted mb-2">Role</div>
                      <div className="text-text-primary">
                        {activeProject.role}
                      </div>
                    </div>

                    <div>
                      <div className="text-text-muted mb-2">Duration</div>
                      <div className="text-text-primary">
                        {activeProject.duration}
                      </div>
                    </div>

                    {activeProject.teamSize && (
                      <div>
                        <div className="text-text-muted mb-2">Team</div>
                        <div className="text-text-primary">
                          {activeProject.teamSize}
                        </div>
                      </div>
                    )}

                    {activeProject.liveUrl && (
                      <div>
                        <div className="text-text-muted mb-2">
                          Visit Website
                        </div>
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
                        >
                          {activeProject.liveUrl.replace(/^https?:\/\//, "")}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* View Project Button */}
                  <button
                    onClick={() => handleProjectClick(activeProject)}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    View Project Details
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right Column - Scrollable Project Images */}
            <div className="space-y-32">
              {sortedProjects.map((project, index) => {
                const isChillVibesProject =
                  project.title === "Chill Vibes Music Player";
                const isBobsProject = project.title === "Bob's Big Break";

                return (
                  <div
                    key={project.id}
                    ref={(el) => (projectRefs.current[index] = el)}
                    className="space-y-8 min-h-screen flex flex-col justify-center"
                  >
                    {/* Main Project Image */}
                    <div className="relative">
                      <img
                        src={
                          isChillVibesProject
                            ? "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png"
                            : project.image
                        }
                        alt={project.title}
                        className={`w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02] ${
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
                    {project.images && project.images.length > 1 && (
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.slice(1, 5).map((image, imgIndex) => (
                          <div key={imgIndex} className="relative">
                            <img
                              src={image}
                              alt={`${project.title} - Image ${imgIndex + 2}`}
                              className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-20"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Works;
