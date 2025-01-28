import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectDeliverables from '../components/project/ProjectDeliverables';
import ProjectConclusion from '../components/project/ProjectConclusion';

// This would normally come from an API, but for now we'll use mock data
const projectsData = {
  1: {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React",
    fullDescription: "A comprehensive e-commerce platform designed to provide seamless shopping experiences.",
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
  },
  2: {
    id: 2,
    title: "Health & Wellness App",
    description: "A mobile-first wellness tracking application",
    fullDescription: "An innovative health tracking platform that helps users maintain their wellness goals.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800",
    tags: ["React Native", "Firebase", "Health API"],
    role: "Product Designer",
    duration: "6 months",
    year: "2023",
    challenge: "Creating an engaging and intuitive interface that motivates users to maintain their health goals while handling sensitive health data securely.",
    process: [
      "User Interviews",
      "Health Data Research",
      "UX Flow Design",
      "Security Implementation",
      "Beta Testing",
      "Performance Optimization"
    ],
    deliverables: [
      "Security Protocol",
      "User Journey Maps",
      "Interactive Prototypes",
      "Analytics Dashboard",
      "API Documentation",
      "Testing Reports"
    ],
    images: [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800"
    ],
    conclusion: {
      impact: "Achieved 100,000+ downloads in the first month with a 4.8/5 star rating on app stores.",
      learnings: "The importance of user privacy and data security in health applications cannot be overstated.",
      nextSteps: "Expanding features to include social connectivity and gamification elements."
    }
  },
  3: {
    id: 3,
    title: "Financial Dashboard",
    description: "Enterprise-grade financial analytics platform",
    fullDescription: "A comprehensive financial analytics dashboard for enterprise clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tags: ["React", "D3.js", "Node.js"],
    role: "Technical Lead",
    duration: "9 months",
    year: "2023",
    challenge: "Building a high-performance dashboard capable of handling large datasets while maintaining real-time updates and responsive design.",
    process: [
      "Technical Architecture",
      "Data Flow Design",
      "Performance Testing",
      "Security Audit",
      "User Testing",
      "Documentation"
    ],
    deliverables: [
      "Technical Documentation",
      "Performance Reports",
      "Security Certificates",
      "User Manual",
      "API Documentation",
      "Training Materials"
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    conclusion: {
      impact: "Reduced data processing time by 70% and improved client reporting efficiency by 85%.",
      learnings: "The importance of scalable architecture and efficient data handling in enterprise applications.",
      nextSteps: "Implementing machine learning capabilities for predictive analytics."
    }
  }
};

const Project = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData[Number(id)];

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