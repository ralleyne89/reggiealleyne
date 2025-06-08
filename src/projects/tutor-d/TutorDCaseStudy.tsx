
import React from 'react';
import ProjectOverviewComponent from '@/components/project/common/ProjectOverview';
import UserPersonaComponent from '@/components/project/common/UserPersona';
import ResearchDiscoveryComponent from '@/components/project/common/ResearchDiscovery';
import UserJourneyMapComponent from '@/components/project/common/UserJourneyMap';
import SitemapWireframesComponent from '@/components/project/common/SitemapWireframes';
import ProblemSpace from '@/components/project/tutor-d/ProblemSpace';
import IdeationStrategy from '@/components/project/tutor-d/IdeationStrategy';
import DirectUIImages from '@/components/project/tutor-d/DirectUIImages';
import TechnicalImplementation from '@/components/project/tutor-d/TechnicalImplementation';
import KeyActions from '@/components/project/tutor-d/KeyActions';
import ResultsImpact from '@/components/project/tutor-d/ResultsImpact';
import ChallengesLearnings from '@/components/project/tutor-d/ChallengesLearnings';
import Reflection from '@/components/project/tutor-d/Reflection';
import { 
  tutorDOverviewData, 
  tutorDPersonaData, 
  tutorDResearchData, 
  tutorDJourneyData, 
  tutorDSitemapData 
} from './data/tutorDData';

const TutorDCaseStudy = () => {
  return (
    <div className="space-y-16">
      <ProjectOverviewComponent {...tutorDOverviewData} />
      <UserPersonaComponent {...tutorDPersonaData} />
      <ResearchDiscoveryComponent {...tutorDResearchData} />
      <UserJourneyMapComponent {...tutorDJourneyData} />
      <SitemapWireframesComponent {...tutorDSitemapData} />
      <ProblemSpace />
      <IdeationStrategy />
      <DirectUIImages />
      <TechnicalImplementation />
      <KeyActions />
      <ResultsImpact />
      <ChallengesLearnings />
      <Reflection />
    </div>
  );
};

export default TutorDCaseStudy;
