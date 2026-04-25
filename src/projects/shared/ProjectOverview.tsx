import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Clock, Image, Monitor, LucideIcon } from "lucide-react";

// Define types for the project data
export interface ProjectDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ToolDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProjectOverviewProps {
  title?: string;
  description: string[];
  projectDetails: ProjectDetail[];
  toolDetails: ToolDetail[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  title = "Project Overview",
  description,
  projectDetails,
  toolDetails,
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          
          {description.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-[rgba(200,200,200,0.9)] leading-relaxed ${
                index === description.length - 1 ? 'mb-8' : 'mb-6'
              }`}
            >
              {paragraph}
            </p>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                <div className="space-y-3">
                  {projectDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{detail.label}</p>
                          <p className="text-white">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">Tools & Platform</h3>
                <div className="space-y-3">
                  {toolDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{detail.label}</p>
                          <p className="text-white">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProjectOverview;
