
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
  const handleProjectClick = (project) => {
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
  
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary-dark text-white pt-24">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-40 bg-secondary rounded"></div>
            <div className="h-12 w-80 bg-secondary rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-80 bg-secondary rounded-xl"></div>
              ))}
            </div>
          </div>
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
  const categories = {};
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
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl font-heading font-bold mt-6 text-white">Works Gallery</h1>
            <p className="text-gray-400 mt-2 max-w-xl">Explore my portfolio of design and development projects, showcasing my skills and expertise in creating beautiful and functional digital experiences.</p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Display projects by category */}
          {Object.keys(categories).map((category, categoryIndex) => (
            <motion.div key={category} variants={fadeInUp}>
              <h2 className="text-2xl font-heading font-semibold mb-6 text-white">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[category].map((project, projectIndex) => (
                  <motion.div 
                    key={project.id}
                    className="bg-secondary border border-gray-800 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    onClick={() => handleProjectClick(project)}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-52">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          console.error(`Image failed to load: ${project.image}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags?.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-xs bg-primary/10 rounded-full text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags && project.tags.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-400">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{project.year}</span>
                        <span className="text-primary text-sm font-medium">View Project</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Display projects without category */}
          {uncategorizedProjects.length > 0 && (
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-heading font-semibold mb-6 text-white">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uncategorizedProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="bg-secondary border border-gray-800 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    onClick={() => handleProjectClick(project)}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-52">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          console.error(`Image failed to load: ${project.image}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags?.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-xs bg-primary/10 rounded-full text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags && project.tags.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-400">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{project.year}</span>
                        <span className="text-primary text-sm font-medium">View Project</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
