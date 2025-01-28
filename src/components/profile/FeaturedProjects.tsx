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
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold mb-4">
          Recent Projects
        </div>
      </div>
      
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[rgba(20,20,20,1)] border p-3 rounded-xl border-[rgba(255,255,255,0.05)] border-solid hover:bg-[rgba(25,25,25,1)] transition-all duration-300"
          >
            <div className="flex gap-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-24 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-[rgba(230,230,230,1)] text-sm font-semibold">
                  {project.title}
                </h3>
                <p className="text-[rgba(153,153,153,1)] text-xs mt-1">
                  {project.description}
                </p>
                <div className="text-[#916CE7] text-xs mt-2 font-medium">
                  {project.tech}
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