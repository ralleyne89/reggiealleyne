
import React from "react";
import OutcomesImpactComponent from "../../shared/OutcomesImpact";
import { doggyDateData } from "@/projects/doggy-date/data/doggyDateData";

const OutcomesImpact = () => {
  return <OutcomesImpactComponent {...doggyDateData.outcomes} />;
};

export default OutcomesImpact;
