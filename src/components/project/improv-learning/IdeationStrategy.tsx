
import React from "react";
import IdeationStrategyComponent from "../common/IdeationStrategy";
import { improvLearningIdeationData } from "@/projects/improv-learning/data/improvLearningData";

const IdeationStrategy = () => {
  return <IdeationStrategyComponent {...improvLearningIdeationData} />;
};

export default IdeationStrategy;
