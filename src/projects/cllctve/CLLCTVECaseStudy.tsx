import React, { useState } from "react";
import { X } from "lucide-react";

// Import key section components
import IntegratedOverview from "@/components/project/cllctve/IntegratedOverview";
import ProblemSpace from "@/components/project/cllctve/ProblemSpace";
import ResearchDiscovery from "@/components/project/cllctve/ResearchDiscovery";
import UserPersona from "@/components/project/cllctve/UserPersona";
import FinalUIDesign from "@/components/project/cllctve/FinalUIDesign";
import ChallengesLearnings from "@/components/project/cllctve/ChallengesLearnings";

const CllctveCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-8 mb-16">
      <IntegratedOverview />
      <ProblemSpace />
      <ResearchDiscovery />
      <UserPersona />
      <FinalUIDesign handleImageClick={handleImageClick} />
      <ChallengesLearnings />

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

export default CllctveCaseStudy;
