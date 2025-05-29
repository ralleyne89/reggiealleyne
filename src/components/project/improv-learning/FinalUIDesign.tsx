
import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { improvLearningFinalDesignData } from "@/projects/improv-learning/data/improvLearningData";

interface FinalUIDesignProps {
  handleImageClick: (imageSrc: string) => void;
}

const FinalUIDesign = ({ handleImageClick }: FinalUIDesignProps) => {
  return (
    <div onClick={(e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        const img = target as HTMLImageElement;
        handleImageClick(img.src);
      }
    }}>
      <FinalUIDesignComponent {...improvLearningFinalDesignData} />
    </div>
  );
};

export default FinalUIDesign;
