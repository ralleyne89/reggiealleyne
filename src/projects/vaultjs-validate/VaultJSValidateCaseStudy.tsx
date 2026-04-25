import React from "react";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import ProblemSpace from "@/components/project/common/ProblemSpace";
import ResearchDiscovery from "@/components/project/common/ResearchDiscovery";
import IdeationStrategy from "@/components/project/common/IdeationStrategy";
import FinalUIDesign from "@/components/project/common/FinalUIDesign";
import OutcomesImpact from "@/components/project/common/OutcomesImpact";
import ChallengesLearnings from "@/components/project/common/ChallengesLearnings";
import Reflection from "@/components/project/common/Reflection";
import {
  CaseStudyFooter,
  CaseStudyFrame,
} from "@/components/project/EditorialProjectLayout";

import {
  vaultjsOverviewData,
  vaultjsProblemSpaceData,
  vaultjsResearchData,
  vaultjsIdeationData,
  vaultjsUIData,
  vaultjsOutcomesData,
  vaultjsChallengesData,
  vaultjsReflectionData,
} from "./data/vaultjsValidateData";

const VaultJSValidateCaseStudy = () => {
  return (
    <CaseStudyFrame>
      {/* Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...vaultjsOverviewData} />
      <OutcomesImpact {...vaultjsOutcomesData} />

      {/* Key Strategic Moves */}
      <ProblemSpace {...vaultjsProblemSpaceData} />
      <ResearchDiscovery {...vaultjsResearchData} />
      <IdeationStrategy {...vaultjsIdeationData} />

      {/* Deep Dive Process */}
      <FinalUIDesign {...vaultjsUIData} />
      <ChallengesLearnings {...vaultjsChallengesData} />
      <Reflection {...vaultjsReflectionData} />

      {/* Back to Works link */}
      <CaseStudyFooter />
    </CaseStudyFrame>
  );
};

export default VaultJSValidateCaseStudy;
