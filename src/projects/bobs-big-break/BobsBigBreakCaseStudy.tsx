
import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import key section components
import IntegratedOverview from "@/components/project/bobs-big-break/IntegratedOverview";
import ResultsImpact from "@/components/project/bobs-big-break/ResultsImpact";
import KeyActions from "@/components/project/bobs-big-break/KeyActions";
import TechnicalImplementation from "@/components/project/bobs-big-break/TechnicalImplementation";
import GameDesignProcess from "@/components/project/bobs-big-break/GameDesignProcess";
import FinalGameplay from "@/components/project/bobs-big-break/FinalGameplay";
import ChallengesLearnings from "@/components/project/bobs-big-break/ChallengesLearnings";

const BobsBigBreakCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-8 mb-16">
      {/* 1. Project Overview */}
      <IntegratedOverview />
      
      {/* 2. RESULTS & IMPACT - Lead with the outcome */}
      <ResultsImpact />
      
      {/* 3. KEY ACTIONS - What moved the needle */}
      <KeyActions />
      
      {/* 4. IN-DEPTH EXPLANATION - How it was achieved with visuals */}
      <TechnicalImplementation handleImageClick={handleImageClick} />
      <GameDesignProcess handleImageClick={handleImageClick} />
      <FinalGameplay handleImageClick={handleImageClick} />
      
      {/* 5. Reflection & Learnings */}
      <ChallengesLearnings />

      {/* Back to Works link */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <Link
          to="/works"
          className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size image"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BobsBigBreakCaseStudy;
