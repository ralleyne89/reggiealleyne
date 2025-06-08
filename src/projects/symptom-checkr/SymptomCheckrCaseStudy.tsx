
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
import { Button } from '@/components/ui/button';

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
      <div className="flex justify-center py-16">
        <Button 
          asChild
          variant="default"
          className="px-8 py-7 text-lg font-medium bg-primary hover:bg-primary/90 text-white rounded-lg"
        >
          <Link to="/works">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Works
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SymptomCheckrCaseStudy;
