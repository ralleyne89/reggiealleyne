
import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { improvLearningResearchData } from "@/projects/improv-learning/data/improvLearningData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...improvLearningResearchData} />;
};

export default ResearchDiscovery;
