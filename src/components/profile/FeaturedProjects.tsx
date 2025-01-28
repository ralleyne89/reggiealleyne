import React from 'react';
import { Star } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with dark theme",
      tech: "React, TypeScript",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with 3D elements",
      tech: "Next.js, Three.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <Star className="w-4 h-4 text-[#916CE7]" />
          <span>Featured Work</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-lg font-semibold mb-6">
          Recent Projects
        </div>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[rgba(20,20,20,1)] border p-4 rounded-xl border-[rgba(255,255,255,0.05)] border-solid hover:bg-[rgba(25,25,25,1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex gap-5">
              <div className="relative group w-32 h-20 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-[rgba(230,230,230,1)] text-base font-semibold">
                  {project.title}
                </h3>
                <p className="text-[rgba(153,153,153,1)] text-sm mt-1.5">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-3">
                  {project.tech.split(', ').map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-[rgba(145,108,231,0.1)] text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;