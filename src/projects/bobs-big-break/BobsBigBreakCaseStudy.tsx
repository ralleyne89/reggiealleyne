import React, { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";

// Import key section components
import IntegratedOverview from "@/components/project/bobs-big-break/IntegratedOverview";
import ResultsImpact from "@/components/project/bobs-big-break/ResultsImpact";
import KeyActions from "@/components/project/bobs-big-break/KeyActions";
import TechnicalImplementation from "@/components/project/bobs-big-break/TechnicalImplementation";
import GameDesignProcess from "@/components/project/bobs-big-break/GameDesignProcess";
import FinalGameplay from "@/components/project/bobs-big-break/FinalGameplay";
import ChallengesLearnings from "@/components/project/bobs-big-break/ChallengesLearnings";

const BobsBigBreakCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <CaseStudyFrame>
      {/* 1. Project Overview */}
      <IntegratedOverview />

      {/* 2. RESULTS & IMPACT - Lead with the outcome */}
      <ResultsImpact />

      {/* 3. KEY ACTIONS - What moved the needle */}
      <KeyActions />

      {/* 4. IN-DEPTH EXPLANATION - How it was achieved with visuals */}
      <TechnicalImplementation handleImageClick={handleImageClick} />
      <GameDesignProcess handleImageClick={handleImageClick} />
      <FinalGameplay handleImageClick={handleImageClick} />

      {/* 5. Reflection & Learnings */}
      <ChallengesLearnings />

      {/* Back to Works link */}
      <CaseStudyFooter />

      {/* Modal for full-size image view */}
      <ProjectLightboxModal imageSrc={selectedImage} onClose={closeModal} />
    </CaseStudyFrame>
  );
};

export default BobsBigBreakCaseStudy;
