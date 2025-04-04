
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";

interface ProjectSolutionTabProps {
  problem: string;
  solution: string;
}

const ProjectSolutionTab = ({ problem, solution }: ProjectSolutionTabProps) => {
  return (
    <TabsContent value="solution" className="p-8 m-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">The Problem</h2>
          <div className="bg-[rgba(25,25,25,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{problem}</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">The Solution</h2>
          <div className="bg-[rgba(25,25,25,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{solution}</p>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default ProjectSolutionTab;
