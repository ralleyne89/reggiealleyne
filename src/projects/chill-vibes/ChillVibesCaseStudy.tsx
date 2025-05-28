
import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import restructured components following Tutor D structure
import ProjectOverview from "@/components/project/chill-vibes/ProjectOverview";
import ResultsImpact from "@/components/project/chill-vibes/ResultsImpact";
import KeyActions from "@/components/project/chill-vibes/KeyActions";
import ProblemSpace from "@/components/project/chill-vibes/ProblemSpace";
import ResearchDiscovery from "@/components/project/chill-vibes/ResearchDiscovery";
import IdeationStrategy from "@/components/project/chill-vibes/IdeationStrategy";
import UserPersona from "@/components/project/chill-vibes/UserPersona";
import UserJourneyMap from "@/components/project/chill-vibes/UserJourneyMap";
import TechnicalImplementation from "@/components/project/chill-vibes/TechnicalImplementation";
import ChallengesLearnings from "@/components/project/chill-vibes/ChallengesLearnings";
import Reflection from "@/components/project/chill-vibes/Reflection";
import DirectUIImages from "@/components/project/chill-vibes/DirectUIImages";

const ChillVibesCaseStudy = () => {
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

      {/* Back to Works Link */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
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

export default ChillVibesCaseStudy;
