
import React, { useState } from "react";
import { X } from "lucide-react";

// Import restructured components following Minto's Pyramid
import ProjectOverview from "@/components/project/tutor-d/ProjectOverview";
import ResultsImpact from "@/components/project/tutor-d/ResultsImpact";
import KeyActions from "@/components/project/tutor-d/KeyActions";
import ProblemSpace from "@/components/project/tutor-d/ProblemSpace";
import ResearchDiscovery from "@/components/project/tutor-d/ResearchDiscovery";
import IdeationStrategy from "@/components/project/tutor-d/IdeationStrategy";
import UserPersona from "@/components/project/tutor-d/UserPersona";
import UserJourneyMap from "@/components/project/tutor-d/UserJourneyMap";
import TechnicalImplementation from "@/components/project/tutor-d/TechnicalImplementation";
import ChallengesLearnings from "@/components/project/tutor-d/ChallengesLearnings";
import Reflection from "@/components/project/tutor-d/Reflection";
import DirectUIImages from "@/components/project/tutor-d/DirectUIImages";

const TutorDCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white text-gray-900">
      <ProjectOverview />
      <ResultsImpact />
      <KeyActions />
      <ProblemSpace />
      <ResearchDiscovery />
      <IdeationStrategy />
      <UserPersona />
      <UserJourneyMap />
      <TechnicalImplementation handleImageClick={handleImageClick} />
      <DirectUIImages handleImageClick={handleImageClick} />
      <ChallengesLearnings />
      <Reflection />

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
