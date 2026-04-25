import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import key section components following SymptomCheckr structure
import IntegratedOverview from "@/components/project/cllctve/IntegratedOverview";
import ProblemSpace from "@/components/project/cllctve/ProblemSpace";
import ResearchDiscovery from "@/components/project/cllctve/ResearchDiscovery";
import IdeationStrategy from "@/components/project/cllctve/IdeationStrategy";
import SitemapWireframes from "@/components/project/cllctve/SitemapWireframes";
import FinalUIDesign from "@/components/project/cllctve/FinalUIDesign";
import ResultsImpact from "@/components/project/cllctve/ResultsImpact";
import ChallengesLearnings from "@/components/project/cllctve/ChallengesLearnings";
import Reflection from "@/components/project/cllctve/Reflection";

const CllctveCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mb-16 mt-6 min-w-0 sm:mt-8">
      {/* Minto Pyramid: Lead with Impact/Outcome */}
      <IntegratedOverview />
      <ResultsImpact />

      {/* Key Strategic Moves (2-3 core challenges/solutions) */}
      <ProblemSpace />

      {/* Deep Dive Process */}
      <ResearchDiscovery />
      <IdeationStrategy />
      <SitemapWireframes />
      <FinalUIDesign handleImageClick={handleImageClick} />
      <ChallengesLearnings />
      <Reflection />

      {/* Back to Works link */}
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
        <Link
          to="/works"
          className="inline-flex min-h-11 items-center text-primary transition-colors hover:text-primary-light"
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

export default CllctveCaseStudy;
