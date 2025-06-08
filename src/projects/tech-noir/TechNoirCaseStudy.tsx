
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
import { Clock, Users, User, Palette, Monitor, Search } from 'lucide-react';

const TechNoirCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Extract persona data from techNoirData - restructured to match UserPersonaProps
  const techNoirPersonaData = {
    imageSrc: "/lovable-uploads/tech-noir-persona.png",
    imageAlt: "Alex Chen - Tech Noir User Persona",
    name: "Alex Chen",
    details: [
      { label: "Age", value: "28" },
      { label: "Occupation", value: "Cybersecurity Analyst" },
      { label: "Location", value: "Neo Tokyo" },
      { label: "Tech Comfort", value: "Expert" },
      { label: "Preferred Devices", value: "PC, VR Headset" }
    ],
    goals: [
      { text: "Solve complex digital mysteries" },
      { text: "Explore immersive tech-noir narratives" },
      { text: "Experience cutting-edge interactive storytelling" }
    ],
    frustrations: [
      { text: "Predictable storylines in current games" },
      { text: "Lack of meaningful choices in narratives" },
      { text: "Limited cyberpunk content with depth" }
    ],
    needs: [
      { text: "Compelling narrative choices that matter" },
      { text: "Rich, atmospheric cyberpunk environments" },
      { text: "Advanced interactive storytelling mechanics" }
    ]
  };

  // Extract project overview data - using actual Lucide icon components
  const techNoirOverviewData = {
    description: [
      "Tech Noir is an immersive interactive narrative experience that blends cyberpunk aesthetics with detective mystery gameplay. Players navigate a neon-lit dystopian city, making choices that shape both the story and the world around them.",
      "The project focused on creating a seamless blend of visual storytelling and user agency, where every decision carries weight and consequences ripple through the narrative structure."
    ],
    projectDetails: [
      { label: "Duration", value: "4 months", icon: Clock },
      { label: "Team Size", value: "5 members", icon: Users },
      { label: "My Role", value: "UX Designer & Researcher", icon: User }
    ],
    toolDetails: [
      { label: "Design", value: "Figma, Adobe XD", icon: Palette },
      { label: "Prototyping", value: "Unity, Principle", icon: Monitor },
      { label: "Research", value: "UserTesting, Miro", icon: Search }
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
