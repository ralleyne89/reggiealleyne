import React from "react";
import OutcomesImpactComponent from "../common/OutcomesImpact";
import { symptomCheckrOutcomesData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const OutcomesImpact = () => {
  return <OutcomesImpactComponent {...symptomCheckrOutcomesData} />;
};

export default OutcomesImpact;
