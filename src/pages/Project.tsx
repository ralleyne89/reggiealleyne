import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This would typically come from an API or database
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
    ]
  };

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(5,5,5,1)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        {/* Navigation */}
        <Link 
          to="/works" 
          className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[rgba(230,230,230,1)]">{project.title}</h1>
          <p className="text-xl text-[rgba(153,153,153,1)] max-w-3xl">{project.description}</p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#9b87f5]">Role</h3>
            <p className="text-[rgba(153,153,153,1)]">{project.role}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#9b87f5]">Duration</h3>
            <p className="text-[rgba(153,153,153,1)]">{project.duration}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#9b87f5]">Year</h3>
            <p className="text-[rgba(153,153,153,1)]">{project.year}</p>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-[rgba(230,230,230,1)]">The Challenge</h2>
          <p className="text-[rgba(153,153,153,1)] max-w-3xl">{project.challenge}</p>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.process.map((step, index) => (
              <div 
                key={index}
                className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] transition-all duration-300"
              >
                <span className="text-[#9b87f5] text-sm mb-2 block">Step {index + 1}</span>
                <h3 className="text-[rgba(230,230,230,1)] font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.deliverables.map((deliverable, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4"
              >
                <div className="h-2 w-2 rounded-full bg-[#9b87f5]"></div>
                <span className="text-[rgba(230,230,230,1)]">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {project.images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)]"
            >
              <img 
                src={image} 
                alt={`Project visual ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;