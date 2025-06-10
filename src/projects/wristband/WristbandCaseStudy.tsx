import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import UserPersonaComponent from "@/components/project/common/UserPersona";
import ResearchDiscoveryComponent from "@/components/project/common/ResearchDiscovery";
import UserJourneyMapComponent from "@/components/project/common/UserJourneyMap";
import ProblemSpaceComponent from "@/components/project/common/ProblemSpace";
import IdeationStrategyComponent from "@/components/project/common/IdeationStrategy";
import TechnicalImplementation from "@/components/project/wristband/TechnicalImplementation";
import KeyActions from "@/components/project/wristband/KeyActions";
import ResultsImpact from "@/components/project/wristband/ResultsImpact";
import ChallengesLearnings from "@/components/project/wristband/ChallengesLearnings";

import {
  wristbandOverviewData,
  wristbandPersonaData,
  wristbandResearchData,
  wristbandJourneyData,
  wristbandProblemSpaceData,
  wristbandIdeationData,
} from "./data/wristbandData";

const WristbandCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-16">
      {/* Minto Pyramid: Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...wristbandOverviewData} />
      <ResultsImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpaceComponent {...wristbandProblemSpaceData} />
      <KeyActions />

      {/* Deep Dive Process */}
      <UserPersonaComponent {...wristbandPersonaData} />
      <TechnicalImplementation handleImageClick={handleImageClick} />
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

export default WristbandCaseStudy;
