import React from "react";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import AIProductThinking from "@/components/project/common/AIProductThinking";
import ProblemSpace from "@/components/project/common/ProblemSpace";
import ResearchDiscovery from "@/components/project/common/ResearchDiscovery";
import IdeationStrategy from "@/components/project/common/IdeationStrategy";
import FinalUIDesign from "@/components/project/common/FinalUIDesign";
import OutcomesImpact from "@/components/project/common/OutcomesImpact";
import ChallengesLearnings from "@/components/project/common/ChallengesLearnings";
import Reflection from "@/components/project/common/Reflection";
import TradeoffsVisualized from "@/components/project/common/TradeoffsVisualized";
import {
  CaseStudyFooter,
  CaseStudyFrame,
} from "@/components/project/EditorialProjectLayout";

import {
  litmusAIOverviewData,
  litmusAIProblemSpaceData,
  litmusAIResearchData,
  litmusAIIdeationData,
  litmusAIUIData,
  litmusAIOutcomesData,
  litmusAIChallengesData,
  litmusAIReflectionData,
  litmusAITradeoffsData,
  litmusAIAIPMData,
} from "./data/litmusAIData";

const LitmusAICaseStudy = () => {
  return (
    <CaseStudyFrame>
      {/* Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...litmusAIOverviewData} />
      <AIProductThinking {...litmusAIAIPMData} />
      <OutcomesImpact {...litmusAIOutcomesData} />

      {/* Key Strategic Moves */}
      <ProblemSpace {...litmusAIProblemSpaceData} />
      <ResearchDiscovery {...litmusAIResearchData} />
      <IdeationStrategy {...litmusAIIdeationData} />

      {/* Trade-offs Visualization - Senior-level decision showcase */}
      <TradeoffsVisualized {...litmusAITradeoffsData} />

      {/* Deep Dive Process */}
      <FinalUIDesign {...litmusAIUIData} />
      <ChallengesLearnings {...litmusAIChallengesData} />
      <Reflection {...litmusAIReflectionData} />

      {/* Back to Works link */}
      <CaseStudyFooter />
    </CaseStudyFrame>
  );
};

export default LitmusAICaseStudy;
