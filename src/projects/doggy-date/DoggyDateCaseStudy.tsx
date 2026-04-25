import React, { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";

// Import key section components
import IntegratedOverview from "@/components/project/doggy-date/IntegratedOverview";
import ProblemSpace from "@/components/project/doggy-date/ProblemSpace";
import ResearchDiscovery from "@/components/project/doggy-date/ResearchDiscovery";
import IdeationStrategy from "@/components/project/doggy-date/IdeationStrategy";
import FinalUIDesign from "@/components/project/doggy-date/FinalUIDesign";
import OutcomesImpact from "@/components/project/doggy-date/OutcomesImpact";
import ChallengesLearnings from "@/components/project/doggy-date/ChallengesLearnings";

const DoggyDateCaseStudy = () => {
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

export default DoggyDateCaseStudy;
