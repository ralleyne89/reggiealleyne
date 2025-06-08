
import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-16">
      <ProjectOverviewComponent {...tutorDOverviewData} />
      <UserPersonaComponent {...tutorDPersonaData} />
      <ResearchDiscoveryComponent {...tutorDResearchData} />
      <UserJourneyMapComponent {...tutorDJourneyData} />
      <SitemapWireframesComponent {...tutorDSitemapData} />
      <ProblemSpace />
      <IdeationStrategy />
      <DirectUIImages handleImageClick={handleImageClick} />
      <TechnicalImplementation handleImageClick={handleImageClick} />
      <KeyActions />
      <ResultsImpact />
      <ChallengesLearnings />
      <Reflection />
      
      {/* Modal for full-size image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Full size project visual" 
              className="w-full h-full object-cover"
            />
            <button 
              className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorDCaseStudy;
