import React, { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";

// Import structured components
import IntegratedOverview from "@/components/project/improv-learning/IntegratedOverview";
import ProblemSpace from "@/components/project/improv-learning/ProblemSpace";
import ResearchDiscovery from "@/components/project/improv-learning/ResearchDiscovery";
import IdeationStrategy from "@/components/project/improv-learning/IdeationStrategy";
import FinalUIDesign from "@/components/project/improv-learning/FinalUIDesign";
import OutcomesImpact from "@/components/project/improv-learning/OutcomesImpact";
import ChallengesLearnings from "@/components/project/improv-learning/ChallengesLearnings";

const ImprovLearningCaseStudy = () => {
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
      <IntegratedOverview />
      <OutcomesImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />
      <ResearchDiscovery />
      <IdeationStrategy />

      {/* Deep Dive Process */}
      <FinalUIDesign handleImageClick={handleImageClick} />
      <ChallengesLearnings />

      {/* Back to Works link */}
      <CaseStudyFooter />

      {/* Modal for full-size image view */}
      <ProjectLightboxModal imageSrc={selectedImage} onClose={closeModal} />
    </CaseStudyFrame>
  );
};

export default ImprovLearningCaseStudy;
