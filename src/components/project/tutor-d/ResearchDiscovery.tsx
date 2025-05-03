import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { tutorDResearchData } from "@/projects/tutor-d/data/tutorDData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...tutorDResearchData} />;
};

export default ResearchDiscovery;
