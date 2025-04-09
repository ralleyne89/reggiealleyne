
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { User, Clock, Calendar, Users } from 'lucide-react';
import ProjectLinks from './ProjectLinks';
interface ProjectOverviewTabProps {
  role: string;
  duration: string;
  year: string;
  teamSize?: string;
  summary: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  prototypeUrl?: string | null;
}
const ProjectOverviewTab = ({
  role,
  duration,
  year,
  teamSize,
  summary,
  githubUrl,
  liveUrl,
  prototypeUrl
}: ProjectOverviewTabProps) => {
  // Determine the label for the live URL based on the URL
  const getLiveLabel = () => {
    if (liveUrl === "https://chill-vibes.web.app/") return "Open Web App";
    if (liveUrl === "https://tutord.io/") return "Visit TutorD";
    return "View Live Demo";
  };
  return <TabsContent value="overview" className="p-8 m-0">
      <h2 className="text-2xl font-semibold text-white mb-4">Project Summary</h2>
      <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{summary}</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[rgba(155,135,245,0.1)] rounded-lg">
            <User size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Role</p>
            <p className="text-white">{role}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[rgba(155,135,245,0.1)] rounded-lg">
            <Clock size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Duration</p>
            <p className="text-white">{duration}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[rgba(155,135,245,0.1)] rounded-lg">
            <Calendar size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Year</p>
            <p className="text-white">{year}</p>
          </div>
        </div>
        
        {teamSize && <div className="flex items-center gap-3">
            <div className="p-3 bg-[rgba(155,135,245,0.1)] rounded-lg">
              <Users size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Team Size</p>
              <p className="text-white">{teamSize}</p>
            </div>
          </div>}
      </div>
      
      {(githubUrl || liveUrl || prototypeUrl) && <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Project Links</h3>
          <ProjectLinks githubUrl={githubUrl} liveUrl={liveUrl} prototypeUrl={prototypeUrl} liveLabel={getLiveLabel()} />
        </div>}
    </TabsContent>;
};
export default ProjectOverviewTab;
