import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { symptomCheckrResearchData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...symptomCheckrResearchData} />;
};

export default ResearchDiscovery;
