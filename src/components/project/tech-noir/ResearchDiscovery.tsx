
import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...techNoirData.research} />;
};

export default ResearchDiscovery;
