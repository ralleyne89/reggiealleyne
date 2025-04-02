
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import WorksHeader from '@/components/works/WorksHeader';
import WorksLoadingSkeleton from '@/components/works/WorksLoadingSkeleton';
import ProjectsCategory from '@/components/works/ProjectsCategory';
import { ProjectType } from '@/types/project';

const Works = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        console.log('Fetching all projects');
        const projects = await getAllProjects();
        console.log('Fetched projects:', projects);
        return projects;
      } catch (err) {
        console.error('Error fetching projects:', err);
        throw err;
      }
    },
    retry: 1
  });

  // Handle project navigation
  const handleProjectClick = (project: ProjectType) => {
    if (!project) {
      toast.error("Project information is missing");
      return;
    }
    
    console.log("Navigating to project:", project.title, "with ID:", project.id, "and slug:", project.slug);
    
    // Navigate to the project using its slug if available
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };
  
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary-dark text-white pt-24">
        <div className="container mx-auto px-4">
          <WorksLoadingSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Projects error:', error);
    return (
      <div className="min-h-screen bg-secondary-dark text-white pt-24 px-4">
        <div className="container mx-auto">
          <p className="text-red-500 mb-4">Error loading projects: {error instanceof Error ? error.message : 'Unknown error'}</p>
          <button 
            onClick={() => navigate('/')}
            className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Process the projects array to remove duplicates and ensure validity
  const uniqueProjects = projects ? 
    projects.filter((project, index, self) =>
      project && project.title && index === self.findIndex((p) => p?.title === project?.title)
    ) : [];

  // Group projects by category
  const categories: Record<string, ProjectType[]> = {};
  uniqueProjects.forEach(project => {
    if (!project.category) return;
    
    if (!categories[project.category]) {
      categories[project.category] = [];
    }
    
    categories[project.category].push(project);
  });
  
  // Projects without category
  const uncategorizedProjects = uniqueProjects.filter(project => !project.category);

  return (
    <div className="min-h-screen bg-secondary-dark text-white pt-24">
      <div className="container mx-auto px-4">
        <WorksHeader />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Display projects by category */}
          {Object.keys(categories).map((category) => (
            <ProjectsCategory 
              key={category} 
              categoryTitle={category} 
              projects={categories[category]} 
              onProjectClick={handleProjectClick} 
            />
          ))}
          
          {/* Display projects without category */}
          {uncategorizedProjects.length > 0 && (
            <ProjectsCategory 
              categoryTitle="Other Projects" 
              projects={uncategorizedProjects} 
              onProjectClick={handleProjectClick} 
            />
          )}
        </motion.div>
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
