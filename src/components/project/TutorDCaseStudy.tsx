import React, { useState } from "react";
import { X } from "lucide-react";

// Import all section components
import ProjectOverview from "./tutor-d/ProjectOverview";
import ProblemSpace from "./tutor-d/ProblemSpace";
import ResearchDiscovery from "./tutor-d/ResearchDiscovery";
import IdeationStrategy from "./tutor-d/IdeationStrategy";
import UserPersona from "./tutor-d/UserPersona";
import UserJourneyMap from "./tutor-d/UserJourneyMap";
import SitemapWireframes from "./tutor-d/SitemapWireframes";
import ChallengesLearnings from "./tutor-d/ChallengesLearnings";
import DirectUIImages from "./tutor-d/DirectUIImages";

const TutorDCaseStudy = () => {
  // Preserve the image modal functionality
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-8 mb-16">
      <ProjectOverview />
      <ProblemSpace />
      <ResearchDiscovery />
      <IdeationStrategy />
      <UserPersona />
      <UserJourneyMap />
      <SitemapWireframes />
      <DirectUIImages handleImageClick={handleImageClick} />
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

export default TutorDCaseStudy;
