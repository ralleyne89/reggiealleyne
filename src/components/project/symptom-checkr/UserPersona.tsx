import React from "react";
import UserPersonaComponent from "../common/UserPersona";
import { symptomCheckrPersonaData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const UserPersona = () => {
  return <UserPersonaComponent {...symptomCheckrPersonaData} />;
};

export default UserPersona;
