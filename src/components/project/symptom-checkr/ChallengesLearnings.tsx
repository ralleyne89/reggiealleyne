import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { symptomCheckrChallengesData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...symptomCheckrChallengesData} />;
};

export default ChallengesLearnings;
