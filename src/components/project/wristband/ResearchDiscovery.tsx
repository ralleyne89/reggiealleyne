
import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { wristbandResearchData } from "@/projects/wristband/data/wristbandData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...wristbandResearchData} />;
};

export default ResearchDiscovery;
