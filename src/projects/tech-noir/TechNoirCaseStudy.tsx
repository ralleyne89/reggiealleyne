import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import UserPersonaComponent from "@/components/project/common/UserPersona";
import ResearchDiscovery from "@/components/project/tech-noir/ResearchDiscovery";
import ProblemSpace from "@/components/project/tech-noir/ProblemSpace";
import IdeationStrategy from "@/components/project/tech-noir/IdeationStrategy";
import FinalUIDesign from "@/components/project/tech-noir/FinalUIDesign";
import OutcomesImpact from "@/components/project/tech-noir/OutcomesImpact";
import ChallengesLearnings from "@/components/project/tech-noir/ChallengesLearnings";

import { techNoirData } from "./data/techNoirData";

const TechNoirCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Extract persona data from techNoirData - Tech Tina for wearable tech fashion
  const techNoirPersonaData = {
    imageSrc: "/lovable-uploads/8c1b6fa4-e021-4e87-a6c7-3a1aeb51f183.png",
    imageAlt: "Tech Tina - Tech Noir User Persona",
    name: "Tech Tina",
    details: [
      { label: "Age", value: "27" },
      { label: "Occupation", value: "Fashion Blogger" },
      { label: "Location", value: "San Francisco" },
      { label: "Tech Comfort", value: "High" },
      { label: "Style", value: "Fashion-forward" },
    ],
    goals: [
      { text: "Become a fashion-tech icon" },
      { text: "Expand knowledge of wearable technology" },
      { text: "Share style inspiration with followers" },
    ],
    frustrations: [
      { text: "No one-stop-shop for stylish wearable tech" },
      { text: "Lack of styling inspiration for tech products" },
      { text: "Uncertainty about how to incorporate tech into outfits" },
    ],
    needs: [
      { text: "Curated collections of fashionable wearable tech" },
      { text: "Styling guides and 'how to wear' content" },
      { text: "Platform to discover and share tech fashion trends" },
    ],
  };

  // Extract project overview data from techNoirData
  const techNoirOverviewData = {
    description: techNoirData.overview.description,
    projectDetails: techNoirData.overview.projectDetails,
    toolDetails: techNoirData.overview.toolDetails,
  };

  return (
    <div className="space-y-16">
      {/* Minto Pyramid: Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...techNoirOverviewData} />
      <OutcomesImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />

      {/* Deep Dive Process */}
      <UserPersonaComponent {...techNoirPersonaData} />
      <FinalUIDesign handleImageClick={handleImageClick} />
      <ChallengesLearnings />

      {/* Back to Works link */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <Link
          to="/works"
          className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
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
