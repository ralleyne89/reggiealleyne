
import React from "react";
import { motion } from "framer-motion";
import ProjectOverview from "@/projects/shared/ProjectOverview";
import ProblemSpace from "@/projects/shared/ProblemSpace";
import ResearchDiscovery from "@/projects/shared/ResearchDiscovery";
import IdeationStrategy from "@/projects/shared/IdeationStrategy";
import FinalUIDesign from "@/projects/shared/FinalUIDesign";
import OutcomesImpact from "@/projects/shared/OutcomesImpact";
import ChallengesLearnings from "@/projects/shared/ChallengesLearnings";
import Reflection from "@/projects/shared/Reflection";
import { improvLearningData } from "./data/improvLearningData";

const ImprovLearningCaseStudy: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Project Overview */}
        <ProjectOverview
          title="Project Overview"
          description={improvLearningData.overview.description}
          projectDetails={improvLearningData.overview.projectDetails}
          toolDetails={improvLearningData.overview.toolDetails}
        />

        {/* Problem Space */}
        <ProblemSpace
          title="The Challenge"
          description={improvLearningData.problemSpace.description}
          painPoints={improvLearningData.problemSpace.painPoints}
        />

        {/* Research & Discovery */}
        <ResearchDiscovery
          title="Research & Analysis"
          description={improvLearningData.research.description}
          insights={improvLearningData.research.insights}
          methods={improvLearningData.research.methods}
        />

        {/* Design Strategy */}
        <IdeationStrategy
          title="Design Strategy"
          description={improvLearningData.strategy.description}
          strategies={improvLearningData.strategy.strategies}
        />

        {/* Final UI Design */}
        <FinalUIDesign
          title="Final Design Solution"
          description={improvLearningData.finalDesign.description}
          features={improvLearningData.finalDesign.features}
          images={improvLearningData.finalDesign.images}
        />

        {/* Results & Impact */}
        <OutcomesImpact
          title="Results & Impact"
          description={improvLearningData.outcomes.description}
          metrics={improvLearningData.outcomes.metrics}
          achievements={improvLearningData.outcomes.achievements}
        />

        {/* Challenges & Learnings */}
        <ChallengesLearnings
          title="Challenges & Learnings"
          challenges={improvLearningData.challenges.challenges}
          learnings={improvLearningData.challenges.learnings}
          nextSteps={improvLearningData.challenges.nextSteps}
        />

        {/* Reflection */}
        <Reflection
          title="Reflection"
          description={improvLearningData.reflection.description}
          keyTakeaways={improvLearningData.reflection.keyTakeaways}
          futureConsiderations={improvLearningData.reflection.futureConsiderations}
        />
      </div>
    </motion.div>
  );
};

export default ImprovLearningCaseStudy;
