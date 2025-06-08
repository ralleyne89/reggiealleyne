
import React from 'react';
import ProjectOverview from '@/components/project/chill-vibes/ProjectOverview';
import UserPersonaComponent from '@/components/project/common/UserPersona';
import ResearchDiscoveryComponent from '@/components/project/common/ResearchDiscovery';
import UserJourneyMapComponent from '@/components/project/common/UserJourneyMap';
import ProblemSpaceComponent from '@/components/project/common/ProblemSpace';
import IdeationStrategyComponent from '@/components/project/common/IdeationStrategy';
import DirectUIImages from '@/components/project/chill-vibes/DirectUIImages';
import TechnicalImplementation from '@/components/project/chill-vibes/TechnicalImplementation';
import KeyActions from '@/components/project/chill-vibes/KeyActions';
import ResultsImpact from '@/components/project/chill-vibes/ResultsImpact';
import ChallengesLearnings from '@/components/project/chill-vibes/ChallengesLearnings';
import Reflection from '@/components/project/chill-vibes/Reflection';
import { 
  chillVibesPersonaData, 
  chillVibesResearchData, 
  chillVibesJourneyData, 
  chillVibesProblemSpaceData, 
  chillVibesIdeationData 
} from './data/chillVibesData';

const ChillVibesCaseStudy = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      <UserPersonaComponent {...chillVibesPersonaData} />
      <ResearchDiscoveryComponent {...chillVibesResearchData} />
      <UserJourneyMapComponent {...chillVibesJourneyData} />
      <ProblemSpaceComponent {...chillVibesProblemSpaceData} />
      <IdeationStrategyComponent {...chillVibesIdeationData} />
      <DirectUIImages />
      <TechnicalImplementation />
      <KeyActions />
      <ResultsImpact />
      <ChallengesLearnings />
      <Reflection />
    </div>
  );
};

export default ChillVibesCaseStudy;
