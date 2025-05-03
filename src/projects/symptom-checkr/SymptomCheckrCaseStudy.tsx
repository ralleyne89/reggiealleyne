import React from "react";

// Import all section components
import ProjectOverview from "@/components/project/symptom-checkr/ProjectOverview";
import ProblemSpace from "@/components/project/symptom-checkr/ProblemSpace";
import ResearchDiscovery from "@/components/project/symptom-checkr/ResearchDiscovery";
import IdeationStrategy from "@/components/project/symptom-checkr/IdeationStrategy";
import UserPersona from "@/components/project/symptom-checkr/UserPersona";
import UserJourneyMap from "@/components/project/symptom-checkr/UserJourneyMap";
import SitemapWireframes from "@/components/project/symptom-checkr/SitemapWireframes";
import FinalUIDesign from "@/components/project/symptom-checkr/FinalUIDesign";
import ChallengesLearnings from "@/components/project/symptom-checkr/ChallengesLearnings";

const SymptomCheckrCaseStudy = () => {
  return (
    <div className="mt-8 mb-16">
      <ProjectOverview />
      <ProblemSpace />
      <ResearchDiscovery />
      <IdeationStrategy />
      <UserPersona />
      <UserJourneyMap />
      <SitemapWireframes />
      <FinalUIDesign />
      <ChallengesLearnings />
    </div>
  );
};

export default SymptomCheckrCaseStudy;
