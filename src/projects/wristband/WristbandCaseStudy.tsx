import React, { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";
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
    <CaseStudyFrame>
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
      <CaseStudyFooter />

      {/* Modal for full-size image view */}
      <ProjectLightboxModal imageSrc={selectedImage} onClose={closeModal} />
    </CaseStudyFrame>
  );
};

export default WristbandCaseStudy;
