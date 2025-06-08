
import React, { useState } from 'react';
import ProjectOverviewComponent from '@/components/project/common/ProjectOverview';
import UserPersonaComponent from '@/components/project/common/UserPersona';
import ResearchDiscovery from '@/components/project/tech-noir/ResearchDiscovery';
import ProblemSpace from '@/components/project/tech-noir/ProblemSpace';
import IdeationStrategy from '@/components/project/tech-noir/IdeationStrategy';
import FinalUIDesign from '@/components/project/tech-noir/FinalUIDesign';
import OutcomesImpact from '@/components/project/tech-noir/OutcomesImpact';
import ChallengesLearnings from '@/components/project/tech-noir/ChallengesLearnings';
import Reflection from '@/components/project/tech-noir/Reflection';
import { techNoirData } from './data/techNoirData';

const TechNoirCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Extract persona data from techNoirData
  const techNoirPersonaData = {
    name: "Alex Chen",
    age: "28",
    occupation: "Cybersecurity Analyst",
    location: "Neo Tokyo",
    bio: "Tech-savvy professional working in corporate cybersecurity, fascinated by the intersection of technology and mystery.",
    goals: [
      "Solve complex digital mysteries",
      "Explore immersive tech-noir narratives",
      "Experience cutting-edge interactive storytelling"
    ],
    frustrations: [
      "Predictable storylines in current games",
      "Lack of meaningful choices in narratives",
      "Limited cyberpunk content with depth"
    ],
    techComfort: "Expert",
    preferredDevices: ["PC", "VR Headset"],
    imageUrl: "/lovable-uploads/tech-noir-persona.png"
  };

  // Extract project overview data
  const techNoirOverviewData = {
    description: techNoirData.overview.description,
    projectDetails: [
      { label: "Duration", value: "4 months", icon: "Clock" as const },
      { label: "Team Size", value: "5 members", icon: "Users" as const },
      { label: "My Role", value: "UX Designer & Researcher", icon: "User" as const }
    ],
    toolDetails: [
      { label: "Design", value: "Figma, Adobe XD", icon: "Palette" as const },
      { label: "Prototyping", value: "Unity, Principle", icon: "Monitor" as const },
      { label: "Research", value: "UserTesting, Miro", icon: "Search" as const }
    ]
  };

  return (
    <div className="space-y-16">
      <ProjectOverviewComponent {...techNoirOverviewData} />
      <UserPersonaComponent {...techNoirPersonaData} />
      <ResearchDiscovery />
      <ProblemSpace />
      <IdeationStrategy />
      <FinalUIDesign handleImageClick={handleImageClick} />
      <OutcomesImpact />
      <ChallengesLearnings />
      <Reflection />
      
      {/* Modal for full-size image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Full size project visual" 
              className="w-full h-full object-cover"
            />
            <button 
              className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechNoirCaseStudy;
