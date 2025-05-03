import React from "react";
import UserJourneyMapComponent from "../common/UserJourneyMap";
import { symptomCheckrJourneyData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const UserJourneyMap = () => {
  return <UserJourneyMapComponent {...symptomCheckrJourneyData} />;
};

export default UserJourneyMap;
