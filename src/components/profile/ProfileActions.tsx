import React from "react";
import { Download } from "lucide-react";

const RESUME_URL = "/resume/Reginald_Alleyne_Resume_FINAL_2026.pdf";

const ProfileActions = () => {
  return (
    <div className="flex w-full gap-3 text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px] flex-col sm:flex-row">
      <a
        href={RESUME_URL}
        download="Reginald_Alleyne_Resume_FINAL_2026.pdf"
        className="bg-primary text-white flex items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:scale-[1.02] active:scale-95 active:shadow-inner"
      >
        <Download className="w-4 h-4 text-white" />
        <span>Download Resume</span>
      </a>
      <button className="bg-[rgba(31,31,31,1)] gap-2.5 flex-1 shrink px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
        WhatsApp Me
      </button>
    </div>
  );
};

export default ProfileActions;
