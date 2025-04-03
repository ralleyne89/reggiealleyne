
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectBasicInfo from './details/ProjectBasicInfo';
import ProjectTeamInfo from './details/ProjectTeamInfo';
import ProjectTechInfo from './details/ProjectTechInfo';
import ProjectLinks from './details/ProjectLinks';
import ProjectProblem from './details/ProjectProblem';
import ProjectSolution from './details/ProjectSolution';
import { ExternalLink, Clock, Calendar, User, Users, Layers } from 'lucide-react';

interface ProjectDetailsProps {
  role: string;
  duration: string;
  year: string;
  teamSize?: string;
  methodologies?: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  prototypeUrl?: string | null;
  summary: string;
  problem?: string;
  solution?: string;
}

const ProjectDetails = ({ 
  role, 
  duration, 
  year, 
  teamSize,
  methodologies,
  githubUrl,
  liveUrl,
  prototypeUrl,
  summary,
  problem,
  solution
}: ProjectDetailsProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <div className="border-b border-[rgba(255,255,255,0.06)]">
            <TabsList className="bg-transparent w-full justify-start px-6 py-2 h-auto">
              <TabsTrigger 
                value="overview"
                className={`text-base py-3 px-5 data-[state=active]:text-primary data-[state=active]:bg-[rgba(155,135,245,0.1)] data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-all duration-300`}
              >
                Overview
              </TabsTrigger>
              {problem && solution && (
                <TabsTrigger 
                  value="solution" 
                  className={`text-base py-3 px-5 data-[state=active]:text-primary data-[state=active]:bg-[rgba(155,135,245,0.1)] data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-all duration-300`}
                >
                  Problem & Solution
                </TabsTrigger>
              )}
              <TabsTrigger 
                value="details" 
                className={`text-base py-3 px-5 data-[state=active]:text-primary data-[state=active]:bg-[rgba(155,135,245,0.1)] data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-all duration-300`}
              >
                Project Details
              </TabsTrigger>
            </TabsList>
          </div>
          
          <CardContent className="p-0">
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
          
            {problem && solution && (
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
            )}
          
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
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default ProjectDetails;
