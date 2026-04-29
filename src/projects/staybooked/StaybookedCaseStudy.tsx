import { useState } from "react";
import AIProductThinking from "@/components/project/common/AIProductThinking";
import ChallengesLearnings from "@/components/project/common/ChallengesLearnings";
import DecisionLedger from "@/components/project/common/DecisionLedger";
import FinalUIDesign from "@/components/project/common/FinalUIDesign";
import OutcomesImpact from "@/components/project/common/OutcomesImpact";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import Reflection from "@/components/project/common/Reflection";
import {
  CaseStudyFooter,
  CaseStudyFrame,
  ProjectLightboxModal,
} from "@/components/project/EditorialProjectLayout";
import {
  staybookedAIPMData,
  staybookedChallengesData,
  staybookedDecisionLedgerData,
  staybookedOverviewData,
  staybookedOutcomesData,
  staybookedReflectionData,
  staybookedUIData,
} from "./data/staybookedData";

const StaybookedCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <CaseStudyFrame>
      <ProjectOverviewComponent {...staybookedOverviewData} />
      <AIProductThinking {...staybookedAIPMData} />
      <OutcomesImpact {...staybookedOutcomesData} />
      <DecisionLedger {...staybookedDecisionLedgerData} />
      <FinalUIDesign
        {...staybookedUIData}
        handleImageClick={(imageSrc) => setSelectedImage(imageSrc)}
      />
      <ChallengesLearnings {...staybookedChallengesData} />
      <Reflection {...staybookedReflectionData} />
      <CaseStudyFooter />

      <ProjectLightboxModal
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </CaseStudyFrame>
  );
};

export default StaybookedCaseStudy;
