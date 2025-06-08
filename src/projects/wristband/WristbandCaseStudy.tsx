
import React from 'react';
import ProjectOverviewComponent from '@/components/project/common/ProjectOverview';
import UserPersonaComponent from '@/components/project/common/UserPersona';
import ResearchDiscoveryComponent from '@/components/project/common/ResearchDiscovery';
import UserJourneyMapComponent from '@/components/project/common/UserJourneyMap';
import ProblemSpaceComponent from '@/components/project/common/ProblemSpace';
import IdeationStrategyComponent from '@/components/project/common/IdeationStrategy';
import TechnicalImplementation from '@/components/project/wristband/TechnicalImplementation';
import KeyActions from '@/components/project/wristband/KeyActions';
import ResultsImpact from '@/components/project/wristband/ResultsImpact';
import ChallengesLearnings from '@/components/project/wristband/ChallengesLearnings';
import Reflection from '@/components/project/wristband/Reflection';
import { 
  wristbandOverviewData, 
  wristbandPersonaData, 
  wristbandResearchData, 
  wristbandJourneyData, 
  wristbandProblemSpaceData, 
  wristbandIdeationData 
} from './data/wristbandData';

const WristbandCaseStudy = () => {
  return (
    <div className="space-y-16">
      <ProjectOverviewComponent {...wristbandOverviewData} />
      <UserPersonaComponent {...wristbandPersonaData} />
      <ResearchDiscoveryComponent {...wristbandResearchData} />
      <UserJourneyMapComponent {...wristbandJourneyData} />
      <ProblemSpaceComponent {...wristbandProblemSpaceData} />
      <IdeationStrategyComponent {...wristbandIdeationData} />
      <TechnicalImplementation />
      <KeyActions />
      <ResultsImpact />
      <ChallengesLearnings />
      <Reflection />
    </div>
  );
};

export default WristbandCaseStudy;
