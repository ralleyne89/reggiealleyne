import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/services/api";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";
import WorksHeader from "@/components/works/WorksHeader";
import WorksLoadingSkeleton from "@/components/works/WorksLoadingSkeleton";
import { ProjectType } from "@/types/project";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Works page: fetches and presents a curated set of projects.
// - Data comes from a combined API (predefined + Supabase)
// - Mobile: vertical stack of fully expanded project cards
// - Desktop: two-column layout with click-based navigation between projects
const Works = () => {
  const navigate = useNavigate();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch all projects from the central API (predefined + Supabase-backed)
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    retry: 1,
  });

  // Handle navigation to the individual project detail page
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
      project.slug,
    );

    // Navigate to the project using its slug if available
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  // Memoized, cleaned list of projects:
  // - filters out invalid entries
  // - de-duplicates by title (projects can come from multiple sources)
  // - sorts by year (newest first) for a consistent presentation order
  const sortedProjects = useMemo(() => {
    if (!projects) return [];

    // Keep Labs/experiments out of the Works page, and hide older projects
    // that you explicitly don't want in the primary navigation / Work list.
    const excludedProjectIds = new Set<number>([
      7, // Chill Vibes (Labs)
      8, // Bob's Big Break (Labs)
      12, // ScentStack (Labs)
      3, // Tech Noir (remove from navigation)
      4, // Doggy Date (remove from navigation)
      5, // Improv Learning (remove from navigation)
    ]);

    const uniqueProjects = projects.filter(
      (project, index, self) =>
        project &&
        project.title &&
        index === self.findIndex((p) => p?.title === project?.title),
    );

    const visibleProjects = uniqueProjects.filter(
      (project) => !excludedProjectIds.has(project.id),
    );

    return [...visibleProjects].sort((a, b) => {
      const yearA = a.year ? parseInt(a.year.toString()) : 0;
      const yearB = b.year ? parseInt(b.year.toString()) : 0;
      return yearB - yearA;
    });
  }, [projects]);

  // If the filtered list changes, keep the active index in bounds.
  useEffect(() => {
    if (activeProjectIndex >= sortedProjects.length) {
      setActiveProjectIndex(0);
    }
  }, [activeProjectIndex, sortedProjects.length]);

  // Current project whose details are shown in the desktop left column
  const activeProject = sortedProjects[activeProjectIndex];

  // Navigation handlers for desktop
  const goToNextProject = () => {
    if (activeProjectIndex < sortedProjects.length - 1) {
      setActiveProjectIndex(activeProjectIndex + 1);
    }
  };

  const goToPrevProject = () => {
    if (activeProjectIndex > 0) {
      setActiveProjectIndex(activeProjectIndex - 1);
    }
  };

  const selectProject = (index: number) => {
    setActiveProjectIndex(index);
  };

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
              // Certain projects need special treatment for imagery/layout
              const isChillVibesProject =
                project.title === "Chill Vibes Music Player";
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
                      <div className="text-sm text-gray-500">
                        {project.year}
                      </div>
                      <div className="text-sm text-primary font-medium uppercase tracking-wider">
                        {project.category ||
                          (project.tags && project.tags[0]) ||
                          "Product"}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-2xl sm:text-3xl text-gray-900">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {project.fullDescription || project.description}
                      </p>

                      {project.solution && (
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      )}
                    </div>

                    {/* Project Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 mb-1">Role</div>
                        <div className="text-gray-900">{project.role}</div>
                      </div>

                      <div>
                        <div className="text-gray-500 mb-1">Duration</div>
                        <div className="text-gray-900">{project.duration}</div>
                      </div>

                      {project.teamSize && (
                        <div>
                          <div className="text-gray-500 mb-1">Team</div>
                          <div className="text-gray-900">
                            {project.teamSize}
                          </div>
                        </div>
                      )}

                      {project.liveUrl && (
                        <div>
                          <div className="text-gray-500 mb-1">
                            Visit Website
                          </div>
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

          {/* Desktop: Two Column Layout with Click-based Navigation */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Project Details */}
            <div className="lg:sticky lg:top-24">
              {activeProject && (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Project {activeProjectIndex + 1} of{" "}
                      {sortedProjects.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={goToPrevProject}
                        disabled={activeProjectIndex === 0}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Previous project"
                      >
                        <ChevronLeft size={20} className="text-gray-700" />
                      </button>
                      <button
                        onClick={goToNextProject}
                        disabled={
                          activeProjectIndex === sortedProjects.length - 1
                        }
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Next project"
                      >
                        <ChevronRight size={20} className="text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Year and Category */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
                    <div className="text-sm text-gray-500">
                      {activeProject.year}
                    </div>
                    <div className="text-sm text-primary font-medium uppercase tracking-wider">
                      {activeProject.category ||
                        (activeProject.tags && activeProject.tags[0]) ||
                        "Product"}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-4xl lg:text-5xl text-gray-900 leading-tight">
                    {activeProject.title}
                  </h3>

                  {/* Project Description */}
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {activeProject.fullDescription ||
                        activeProject.description}
                    </p>

                    {activeProject.solution && (
                      <p className="text-gray-500 text-base leading-relaxed">
                        {activeProject.solution}
                      </p>
                    )}
                  </div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-gray-500 mb-2">Role</div>
                      <div className="text-gray-900">{activeProject.role}</div>
                    </div>

                    <div>
                      <div className="text-gray-500 mb-2">Duration</div>
                      <div className="text-gray-900">
                        {activeProject.duration}
                      </div>
                    </div>

                    {activeProject.teamSize && (
                      <div>
                        <div className="text-gray-500 mb-2">Team</div>
                        <div className="text-gray-900">
                          {activeProject.teamSize}
                        </div>
                      </div>
                    )}

                    {activeProject.liveUrl && (
                      <div>
                        <div className="text-gray-500 mb-2">Visit Website</div>
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

            {/* Right Column - Clickable Project Thumbnails */}
            <div className="space-y-6">
              {/* Active Project Large Image */}
              {activeProject && (
                <motion.div
                  key={`main-${activeProject.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden"
                >
                  <img
                    src={
                      activeProject.title === "Chill Vibes Music Player"
                        ? "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png"
                        : activeProject.image
                    }
                    alt={activeProject.title}
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </motion.div>
              )}

              {/* Project Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {sortedProjects.map((project, index) => {
                  // Thumbnail clicks control which project is active on the left
                  const isActive = index === activeProjectIndex;
                  const isChillVibes =
                    project.title === "Chill Vibes Music Player";

                  return (
                    <button
                      key={project.id}
                      onClick={() => selectProject(index)}
                      className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-200 ${
                        isActive
                          ? "ring-2 ring-primary ring-offset-2 scale-105"
                          : "opacity-60 hover:opacity-100 hover:scale-102"
                      }`}
                      aria-label={`View ${project.title}`}
                    >
                      <img
                        src={
                          isChillVibes
                            ? "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png"
                            : project.image
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-primary/10" />
                      )}
                    </button>
                  );
                })}
              </div>
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
