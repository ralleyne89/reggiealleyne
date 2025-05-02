import React from "react";
import UserJourneyMapComponent from "../common/UserJourneyMap";
import { symptomCheckrJourneyData } from "@/data/projects/symptomCheckrData";

const UserJourneyMap = () => {
  return <UserJourneyMapComponent {...symptomCheckrJourneyData} />;
};

export default UserJourneyMap;
