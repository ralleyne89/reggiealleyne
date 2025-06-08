
import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-16">
      <ProjectOverview />
      <UserPersonaComponent {...chillVibesPersonaData} />
      <ResearchDiscoveryComponent {...chillVibesResearchData} />
      <UserJourneyMapComponent {...chillVibesJourneyData} />
      <ProblemSpaceComponent {...chillVibesProblemSpaceData} />
      <IdeationStrategyComponent {...chillVibesIdeationData} />
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
              className="w-full h-full object-contain bg-black"
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

export default ChillVibesCaseStudy;
