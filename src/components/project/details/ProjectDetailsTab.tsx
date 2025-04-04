
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";

interface ProjectDetailsTabProps {
  duration: string;
  year: string;
  teamSize?: string;
  role: string;
  methodologies?: string[];
}

const ProjectDetailsTab = ({ 
  duration, 
  year, 
  teamSize, 
  role, 
  methodologies 
}: ProjectDetailsTabProps) => {
  return (
    <TabsContent value="details" className="p-8 m-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Project Specifications</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-white text-lg mb-2">Duration & Timeline</h4>
              <p className="text-[rgba(200,200,200,0.9)]">{duration} ({year})</p>
            </div>
            
            {teamSize && (
              <div>
                <h4 className="text-white text-lg mb-2">Team Composition</h4>
                <p className="text-[rgba(200,200,200,0.9)]">{teamSize}</p>
              </div>
            )}
            
            <div>
              <h4 className="text-white text-lg mb-2">My Role</h4>
              <p className="text-[rgba(200,200,200,0.9)]">{role}</p>
            </div>
          </div>
        </div>
        
        {methodologies && methodologies.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Tools & Methodologies</h3>
            <div className="bg-[rgba(25,25,25,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
              <div className="flex flex-wrap gap-2">
                {methodologies.map((methodology, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-[rgba(155,135,245,0.1)] border border-[rgba(155,135,245,0.2)] rounded-full text-primary"
                  >
                    {methodology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </TabsContent>
  );
};

export default ProjectDetailsTab;
