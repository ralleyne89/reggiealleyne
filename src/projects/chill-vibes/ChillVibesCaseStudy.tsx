import React, { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";
import ProjectOverview from "@/components/project/chill-vibes/ProjectOverview";
import UserPersonaComponent from "@/components/project/common/UserPersona";
import ResearchDiscoveryComponent from "@/components/project/common/ResearchDiscovery";
import UserJourneyMapComponent from "@/components/project/common/UserJourneyMap";
import ProblemSpaceComponent from "@/components/project/common/ProblemSpace";
import IdeationStrategyComponent from "@/components/project/common/IdeationStrategy";
import DirectUIImages from "@/components/project/chill-vibes/DirectUIImages";
import TechnicalImplementation from "@/components/project/chill-vibes/TechnicalImplementation";
import KeyActions from "@/components/project/chill-vibes/KeyActions";
import ResultsImpact from "@/components/project/chill-vibes/ResultsImpact";
import ChallengesLearnings from "@/components/project/chill-vibes/ChallengesLearnings";

import {
  chillVibesPersonaData,
  chillVibesResearchData,
  chillVibesJourneyData,
  chillVibesProblemSpaceData,
  chillVibesIdeationData,
} from "./data/chillVibesData";

const ChillVibesCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <CaseStudyFrame>
      {/* Minto Pyramid: Lead with Impact/Outcome */}
      <ProjectOverview />
      <ResultsImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpaceComponent {...chillVibesProblemSpaceData} />
      <KeyActions />

      {/* Deep Dive Process */}
      <UserPersonaComponent {...chillVibesPersonaData} />
      <DirectUIImages handleImageClick={handleImageClick} />
      <TechnicalImplementation handleImageClick={handleImageClick} />
      <ChallengesLearnings />

      {/* Back to Works link */}
      <CaseStudyFooter />

      {/* Modal for full-size image view */}
      <ProjectLightboxModal
        imageSrc={selectedImage}
        imageClassName="bg-gray-950"
        onClose={closeModal}
      />
    </CaseStudyFrame>
  );
};

export default ChillVibesCaseStudy;
