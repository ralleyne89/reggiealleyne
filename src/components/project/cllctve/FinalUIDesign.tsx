
import React from "react";
import FinalUIDesignComponent from "../common/FinalUIDesign";
import { cllctveUIData } from "@/projects/cllctve/data/cllctveData";

interface FinalUIDesignProps {
  handleImageClick?: (imageSrc: string) => void;
}

const FinalUIDesign = ({ handleImageClick }: FinalUIDesignProps) => {
  return (
    <FinalUIDesignComponent
      {...cllctveUIData}
      handleImageClick={handleImageClick}
    />
  );
};

export default FinalUIDesign;
