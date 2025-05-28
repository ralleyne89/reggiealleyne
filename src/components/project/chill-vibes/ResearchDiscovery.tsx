
import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { chillVibesResearchData } from "@/projects/chill-vibes/data/chillVibesData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...chillVibesResearchData} />;
};

export default ResearchDiscovery;
