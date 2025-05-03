import React from "react";
import UserPersonaComponent from "../common/UserPersona";
import { tutorDPersonaData } from "@/projects/tutor-d/data/tutorDData";

const UserPersona = () => {
  return <UserPersonaComponent {...tutorDPersonaData} />;
};

export default UserPersona;
