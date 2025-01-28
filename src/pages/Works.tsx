import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution built with React",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website with dark mode",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      tags: ["Next.js", "Tailwind", "Framer Motion"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      tags: ["React", "Redux", "Node.js"]
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      tags: ["React", "D3.js", "Material UI"]
    }
  ];

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mt-4">Works Gallery</h1>
          <p className="text-gray-400 mt-2">A collection of my recent projects and works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;