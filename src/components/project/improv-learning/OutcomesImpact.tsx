
import React from "react";
import OutcomesImpactComponent from "../common/OutcomesImpact";
import { improvLearningOutcomesData } from "@/projects/improv-learning/data/improvLearningData";

const OutcomesImpact = () => {
  return <OutcomesImpactComponent {...improvLearningOutcomesData} />;
};

export default OutcomesImpact;
