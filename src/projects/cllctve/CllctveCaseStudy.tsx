import { useState } from "react";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";

// Import key section components following SymptomCheckr structure
import IntegratedOverview from "@/components/project/cllctve/IntegratedOverview";
import ProblemSpace from "@/components/project/cllctve/ProblemSpace";
import ResearchDiscovery from "@/components/project/cllctve/ResearchDiscovery";
import IdeationStrategy from "@/components/project/cllctve/IdeationStrategy";
import SitemapWireframes from "@/components/project/cllctve/SitemapWireframes";
import FinalUIDesign from "@/components/project/cllctve/FinalUIDesign";
import ResultsImpact from "@/components/project/cllctve/ResultsImpact";
import ChallengesLearnings from "@/components/project/cllctve/ChallengesLearnings";
import Reflection from "@/components/project/cllctve/Reflection";

const CllctveCaseStudy = () => {
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
      <ResultsImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />

      {/* Deep Dive Process */}
      <ResearchDiscovery />
      <IdeationStrategy />
      <SitemapWireframes />
      <FinalUIDesign handleImageClick={handleImageClick} />
      <ChallengesLearnings />
      <Reflection />

      {/* Back to Works link */}
      <CaseStudyFooter />

      {/* Modal for full-size image view */}
      <ProjectLightboxModal imageSrc={selectedImage} onClose={closeModal} />
    </CaseStudyFrame>
  );
};

export default CllctveCaseStudy;
