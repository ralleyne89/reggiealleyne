
import React from "react";
import OutcomesImpactComponent from "../common/OutcomesImpact";
import { techNoirData } from "@/projects/tech-noir/data/techNoirData";

const OutcomesImpact = () => {
  return <OutcomesImpactComponent {...techNoirData.outcomes} />;
};

export default OutcomesImpact;
