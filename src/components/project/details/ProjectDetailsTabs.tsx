
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectDetailsTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  hasProblemSolution: boolean;
}

const ProjectDetailsTabs = ({ 
  activeTab, 
  setActiveTab, 
  hasProblemSolution 
}: ProjectDetailsTabsProps) => {
  return (
    <div className="border-b border-[rgba(255,255,255,0.06)]">
      <TabsList className="bg-transparent w-full justify-start px-6 py-2 h-auto">
        <TabsTrigger 
          value="overview"
          className={`text-base py-3 px-5 data-[state=active]:text-primary data-[state=active]:bg-[rgba(155,135,245,0.1)] data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-all duration-300`}
        >
          Overview
        </TabsTrigger>
        {hasProblemSolution && (
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
  );
};

export default ProjectDetailsTabs;
