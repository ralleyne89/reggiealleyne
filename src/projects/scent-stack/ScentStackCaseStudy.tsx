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
  scentStackOverviewData,
  scentStackProblemSpaceData,
  scentStackResearchData,
  scentStackIdeationData,
  scentStackUIData,
  scentStackOutcomesData,
  scentStackChallengesData,
  scentStackReflectionData,
} from "./data/scentStackData";

const ScentStackCaseStudy = () => {
  return (
    <CaseStudyFrame>
      {/* Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...scentStackOverviewData} />
      <OutcomesImpact {...scentStackOutcomesData} />

      {/* Key Strategic Moves */}
      <ProblemSpace {...scentStackProblemSpaceData} />
      <ResearchDiscovery {...scentStackResearchData} />
      <IdeationStrategy {...scentStackIdeationData} />

      {/* Deep Dive Process */}
      <FinalUIDesign {...scentStackUIData} />
      <ChallengesLearnings {...scentStackChallengesData} />
      <Reflection {...scentStackReflectionData} />

      {/* Back to Works link */}
      <CaseStudyFooter />
    </CaseStudyFrame>
  );
};

export default ScentStackCaseStudy;
