import React from "react";
import ProjectOverviewComponent from "@/components/project/common/ProjectOverview";
import AIProductThinking from "@/components/project/common/AIProductThinking";
import UserPersona from "@/components/project/symptom-checkr/UserPersona";
import ResearchDiscovery from "@/components/project/symptom-checkr/ResearchDiscovery";
import UserJourneyMap from "@/components/project/symptom-checkr/UserJourneyMap";
import SitemapWireframesComponent from "@/components/project/common/SitemapWireframes";
import ProblemSpace from "@/components/project/symptom-checkr/ProblemSpace";
import IdeationStrategy from "@/components/project/symptom-checkr/IdeationStrategy";
import FinalUIDesign from "@/components/project/symptom-checkr/FinalUIDesign";
import OutcomesImpact from "@/components/project/symptom-checkr/OutcomesImpact";
import ChallengesLearnings from "@/components/project/symptom-checkr/ChallengesLearnings";
import {
  CaseStudyFooter,
  CaseStudyFrame,
} from "@/components/project/EditorialProjectLayout";

import {
  symptomCheckrOverviewData,
  symptomCheckrSitemapData,
  symptomCheckrAIPMData,
} from "./data/symptomCheckrData";

const SymptomCheckrCaseStudy = () => {
  return (
    <CaseStudyFrame>
      {/* Minto Pyramid: Lead with Impact/Outcome */}
      <ProjectOverviewComponent {...symptomCheckrOverviewData} />
      <AIProductThinking {...symptomCheckrAIPMData} />
      <OutcomesImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />
      <ResearchDiscovery />
      <IdeationStrategy />

      {/* Deep Dive Process */}
      <UserPersona />
      <UserJourneyMap />
      <SitemapWireframesComponent {...symptomCheckrSitemapData} />
      <FinalUIDesign />
      <ChallengesLearnings />

      {/* Back to Works link */}
      <CaseStudyFooter />
    </CaseStudyFrame>
  );
};

export default SymptomCheckrCaseStudy;
