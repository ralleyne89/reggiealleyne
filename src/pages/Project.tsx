import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectDeliverables from '../components/project/ProjectDeliverables';
import ProjectConclusion from '../components/project/ProjectConclusion';

const Project = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This would normally come from an API, but for now we'll use mock data
  const project = {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React",
    fullDescription: "A comprehensive e-commerce platform designed to provide seamless shopping experiences. The project focused on user-centered design principles and intuitive navigation patterns.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
    tags: ["React", "TypeScript", "Tailwind"],
    role: "Lead UX/UI Designer",
    duration: "3 months",
    year: "2024",
    challenge: "The main challenge was creating an intuitive shopping experience that would work seamlessly across all devices while maintaining high conversion rates.",
    process: [
      "User Research & Interviews",
      "Competitive Analysis",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Visual Design",
      "Design System Creation"
    ],
    deliverables: [
      "User Personas",
      "User Flow Diagrams",
      "Wireframes",
      "High-fidelity Prototypes",
      "Design System",
      "Component Library"
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
    ],
    conclusion: {
      impact: "The redesigned platform saw a 45% increase in user engagement and a 30% improvement in conversion rates within the first quarter after launch.",
      learnings: "This project reinforced the importance of user-centered design and iterative testing in creating successful digital experiences.",
      nextSteps: "Moving forward, we're implementing a continuous feedback loop with users to further enhance the platform based on real-world usage patterns."
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white flex items-center justify-center">
        <p className="text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white pb-0">
      <ProjectHeader 
        image={project.image}
        tags={project.tags}
        title={project.title}
        description={project.description}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <ProjectDetails 
          role={project.role}
          duration={project.duration}
          year={project.year}
        />
        
        <ProjectProcess 
          challenge={project.challenge}
          process={project.process}
        />
        
        <ProjectDeliverables 
          deliverables={project.deliverables}
          images={project.images}
        />
      </div>

      <ProjectConclusion conclusion={project.conclusion} />
    </div>
  );
};

export default Project;