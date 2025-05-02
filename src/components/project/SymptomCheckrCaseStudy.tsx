import React from "react";

// Import all section components
import ProjectOverview from "./symptom-checkr/ProjectOverview";
import ProblemSpace from "./symptom-checkr/ProblemSpace";
import ResearchDiscovery from "./symptom-checkr/ResearchDiscovery";
import IdeationStrategy from "./symptom-checkr/IdeationStrategy";
import UserPersona from "./symptom-checkr/UserPersona";
import UserJourneyMap from "./symptom-checkr/UserJourneyMap";
import SitemapWireframes from "./symptom-checkr/SitemapWireframes";
import FinalUIDesign from "./symptom-checkr/FinalUIDesign";
import OutcomesImpact from "./symptom-checkr/OutcomesImpact";
import ChallengesLearnings from "./symptom-checkr/ChallengesLearnings";
import Reflection from "./symptom-checkr/Reflection";

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
      {/* <OutcomesImpact /> */}
      <ChallengesLearnings />
      {/* <Reflection /> */}
    </div>
  );
};

export default SymptomCheckrCaseStudy;
