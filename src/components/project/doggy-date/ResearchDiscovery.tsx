
import React from "react";
import ResearchDiscoveryComponent from "../common/ResearchDiscovery";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const ResearchDiscovery = () => {
  return <ResearchDiscoveryComponent {...doggyDateData.research} />;
};

export default ResearchDiscovery;
