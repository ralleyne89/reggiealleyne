import React from "react";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import ProblemSpace from "@/components/project/common/ProblemSpace";
import ResearchDiscovery from "@/components/project/common/ResearchDiscovery";
import IdeationStrategy from "@/components/project/common/IdeationStrategy";
import FinalUIDesign from "@/components/project/common/FinalUIDesign";
import OutcomesImpact from "@/components/project/common/OutcomesImpact";
import ChallengesLearnings from "@/components/project/common/ChallengesLearnings";
import Reflection from "@/components/project/common/Reflection";
import TradeoffsVisualized from "@/components/project/common/TradeoffsVisualized";

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
} from "./data/litmusAIData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LitmusAICaseStudy = () => {
  return (
    <div className="mt-8 mb-16">
      {/* Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...litmusAIOverviewData} />
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
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <Link
          to="/works"
          className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>
      </div>
    </div>
  );
};

export default LitmusAICaseStudy;
