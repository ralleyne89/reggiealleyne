import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import key section components
import IntegratedOverview from "@/components/project/doggy-date/IntegratedOverview";
import ProblemSpace from "@/components/project/doggy-date/ProblemSpace";
import ResearchDiscovery from "@/components/project/doggy-date/ResearchDiscovery";
import IdeationStrategy from "@/components/project/doggy-date/IdeationStrategy";
import FinalUIDesign from "@/components/project/doggy-date/FinalUIDesign";
import OutcomesImpact from "@/components/project/doggy-date/OutcomesImpact";
import ChallengesLearnings from "@/components/project/doggy-date/ChallengesLearnings";

const DoggyDateCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  console.log("DoggyDateCaseStudy is rendering");

  return (
    <div className="mt-8 mb-16">
      {/* Minto Pyramid: Lead with Impact/Outcome */}
      <IntegratedOverview />
      <OutcomesImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />

      {/* Deep Dive Process */}
      <FinalUIDesign handleImageClick={handleImageClick} />
      <ChallengesLearnings />

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

export default DoggyDateCaseStudy;
