
import React from "react";
import ProblemSpaceComponent from "../common/ProblemSpace";
import { improvLearningProblemSpaceData } from "@/projects/improv-learning/data/improvLearningData";

const ProblemSpace = () => {
  return <ProblemSpaceComponent {...improvLearningProblemSpaceData} />;
};

export default ProblemSpace;
