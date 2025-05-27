
import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { cllctveResearchData } from "@/projects/cllctve/data/cllctveData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...cllctveResearchData} />;
};

export default ResearchDiscovery;
