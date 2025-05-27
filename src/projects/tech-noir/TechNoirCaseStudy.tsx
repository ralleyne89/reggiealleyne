import React, { useState } from "react";
import { X } from "lucide-react";

// Import key section components
import IntegratedOverview from "@/components/project/tech-noir/IntegratedOverview";
import TechNoirProblemSpace from "@/components/project/tech-noir/ProblemSpace";
import TechNoirResearchDiscovery from "@/components/project/tech-noir/ResearchDiscovery";
import TechNoirUserPersona from "@/components/project/tech-noir/UserPersona";
import TechNoirFinalUIDesign from "@/components/project/tech-noir/FinalUIDesign";
import TechNoirChallengesLearnings from "@/components/project/tech-noir/ChallengesLearnings";

const TechNoirCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  console.log("TechNoirCaseStudy is rendering");

  return (
    <div className="mt-8 mb-16">
      <IntegratedOverview />
      <TechNoirProblemSpace />
      <TechNoirResearchDiscovery />
      <TechNoirUserPersona />
      <TechNoirFinalUIDesign handleImageClick={handleImageClick} />
      <TechNoirChallengesLearnings />

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
              alt="Full size image"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechNoirCaseStudy;
