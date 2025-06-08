
import React from 'react';
import ProjectOverview from '@/components/project/tech-noir/ProjectOverview';
import UserPersonaComponent from '@/components/project/common/UserPersona';
import ResearchDiscovery from '@/components/project/tech-noir/ResearchDiscovery';
import ProblemSpace from '@/components/project/tech-noir/ProblemSpace';
import IdeationStrategy from '@/components/project/tech-noir/IdeationStrategy';
import FinalUIDesign from '@/components/project/tech-noir/FinalUIDesign';
import OutcomesImpact from '@/components/project/tech-noir/OutcomesImpact';
import ChallengesLearnings from '@/components/project/tech-noir/ChallengesLearnings';
import Reflection from '@/components/project/tech-noir/Reflection';
import { techNoirPersonaData } from './data/techNoirData';

const TechNoirCaseStudy = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      <UserPersonaComponent {...techNoirPersonaData} />
      <ResearchDiscovery />
      <ProblemSpace />
      <IdeationStrategy />
      <FinalUIDesign />
      <OutcomesImpact />
      <ChallengesLearnings />
      <Reflection />
    </div>
  );
};

export default TechNoirCaseStudy;
