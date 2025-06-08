import React from 'react';
import ProjectOverviewComponent from '@/components/project/common/ProjectOverview';
import UserPersona from '@/components/project/symptom-checkr/UserPersona';
import ResearchDiscovery from '@/components/project/symptom-checkr/ResearchDiscovery';
import UserJourneyMap from '@/components/project/symptom-checkr/UserJourneyMap';
import SitemapWireframesComponent from '@/components/project/common/SitemapWireframes';
import ProblemSpace from '@/components/project/symptom-checkr/ProblemSpace';
import IdeationStrategy from '@/components/project/symptom-checkr/IdeationStrategy';
import FinalUIDesign from '@/components/project/symptom-checkr/FinalUIDesign';
import OutcomesImpact from '@/components/project/symptom-checkr/OutcomesImpact';
import ChallengesLearnings from '@/components/project/symptom-checkr/ChallengesLearnings';
import Reflection from '@/components/project/symptom-checkr/Reflection';
import { symptomCheckrOverviewData, symptomCheckrSitemapData } from './data/symptomCheckrData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SymptomCheckrCaseStudy = () => {
  return (
    <div className="space-y-16">
      <ProjectOverviewComponent {...symptomCheckrOverviewData} />
      <UserPersona />
      <ResearchDiscovery />
      <UserJourneyMap />
      <SitemapWireframesComponent {...symptomCheckrSitemapData} />
      <ProblemSpace />
      <IdeationStrategy />
      <FinalUIDesign />
      <OutcomesImpact />
      <ChallengesLearnings />
      <Reflection />
      
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

export default SymptomCheckrCaseStudy;
