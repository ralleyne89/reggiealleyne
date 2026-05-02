import React, { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import UserPersonaComponent from "@/components/project/common/UserPersona";
import ProblemSpace from "@/components/project/tutor-d/ProblemSpace";
import DirectUIImages from "@/components/project/tutor-d/DirectUIImages";
import TechnicalImplementation from "@/components/project/tutor-d/TechnicalImplementation";
import KeyActions from "@/components/project/tutor-d/KeyActions";
import ResultsImpact from "@/components/project/tutor-d/ResultsImpact";
import ChallengesLearnings from "@/components/project/tutor-d/ChallengesLearnings";

import {
  tutorDOverviewData,
  tutorDPersonaData,
} from "./data/tutorDData";

const TutorDCaseStudy = () => {
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
      <ProjectOverviewComponent {...tutorDOverviewData} />
      <ResultsImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />
      <KeyActions />

      {/* Deep Dive Process */}
      <UserPersonaComponent {...tutorDPersonaData} />
      <DirectUIImages handleImageClick={handleImageClick} />
      <TechnicalImplementation />
      <ChallengesLearnings />

      {/* Back to Works link */}
      <CaseStudyFooter />

      {/* Modal for full-size image view */}
      <ProjectLightboxModal imageSrc={selectedImage} onClose={closeModal} />
    </CaseStudyFrame>
  );
};

export default TutorDCaseStudy;
