
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
import { doggyDateData } from "./data/doggyDateData";

const DoggyDateCaseStudy: React.FC = () => {
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
          description={doggyDateData.overview.description}
          projectDetails={doggyDateData.overview.projectDetails}
          toolDetails={doggyDateData.overview.toolDetails}
        />

        {/* Problem Space */}
        <ProblemSpace
          title="The Challenge"
          description={doggyDateData.problemSpace.description}
          painPoints={doggyDateData.problemSpace.painPoints}
        />

        {/* Research & Discovery */}
        <ResearchDiscovery
          title="Research & Discovery"
          description={doggyDateData.research.description}
          insights={doggyDateData.research.insights}
          methods={doggyDateData.research.methods}
        />

        {/* Design Strategy */}
        <IdeationStrategy
          title="Design Strategy & Ideation"
          description={doggyDateData.strategy.description}
          strategies={doggyDateData.strategy.strategies}
        />

        {/* Final UI Design */}
        <FinalUIDesign
          title="Final Design & Features"
          description={doggyDateData.finalDesign.description}
          features={doggyDateData.finalDesign.features}
          images={doggyDateData.finalDesign.images}
        />

        {/* Results & Impact */}
        <OutcomesImpact
          title="Outcomes & Impact"
          description={doggyDateData.outcomes.description}
          metrics={doggyDateData.outcomes.metrics}
          achievements={doggyDateData.outcomes.achievements}
        />

        {/* Challenges & Learnings */}
        <ChallengesLearnings
          title="Challenges & Learnings"
          challenges={doggyDateData.challenges.challenges}
          learnings={doggyDateData.challenges.learnings}
          nextSteps={doggyDateData.challenges.nextSteps}
        />

        {/* Reflection */}
        <Reflection
          title="Project Reflection"
          description={doggyDateData.reflection.description}
          keyTakeaways={doggyDateData.reflection.keyTakeaways}
          futureConsiderations={doggyDateData.reflection.futureConsiderations}
        />
      </div>
    </motion.div>
  );
};

export default DoggyDateCaseStudy;
