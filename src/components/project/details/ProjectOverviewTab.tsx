
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { User, Clock, Calendar, Users, ExternalLink } from 'lucide-react';

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
  return (
    <TabsContent value="overview" className="p-8 m-0">
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
        
        {teamSize && (
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[rgba(155,135,245,0.1)] rounded-lg">
              <Users size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Team Size</p>
              <p className="text-white">{teamSize}</p>
            </div>
          </div>
        )}
      </div>
      
      {(githubUrl || liveUrl || prototypeUrl) && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Project Links</h3>
          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(30,30,30,0.8)] text-primary rounded-lg hover:bg-[rgba(155,135,245,0.2)] transition-colors"
              >
                <span>View Source Code</span>
                <ExternalLink size={16} />
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
            
            {prototypeUrl && (
              <a 
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(30,30,30,0.8)] text-primary border border-primary/30 rounded-lg hover:bg-[rgba(155,135,245,0.2)] transition-colors"
              >
                <span>View Prototype</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      )}
    </TabsContent>
  );
};

export default ProjectOverviewTab;
