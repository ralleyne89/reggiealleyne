import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { tutorDResearchData } from "@/data/projects/tutorDData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...tutorDResearchData} />;
};

export default ResearchDiscovery;
