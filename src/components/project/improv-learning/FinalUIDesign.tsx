import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { improvLearningFinalDesignData } from "@/projects/improv-learning/data/improvLearningData";

interface FinalUIDesignProps {
  handleImageClick: (imageSrc: string) => void;
}

const FinalUIDesign = ({ handleImageClick }: FinalUIDesignProps) => {
  return (
    <FinalUIDesignComponent
      {...improvLearningFinalDesignData}
      handleImageClick={handleImageClick}
    />
  );
};

export default FinalUIDesign;
