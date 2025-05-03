import React from "react";
import ChallengesLearningsComponent from "../common/ChallengesLearnings";
import { tutorDChallengesData } from "@/projects/tutor-d/data/tutorDData";

const ChallengesLearnings = () => {
  return <ChallengesLearningsComponent {...tutorDChallengesData} />;
};

export default ChallengesLearnings;
