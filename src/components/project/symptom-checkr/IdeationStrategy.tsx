import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { symptomCheckrIdeationData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...symptomCheckrIdeationData} />;
};

export default IdeationStrategy;
