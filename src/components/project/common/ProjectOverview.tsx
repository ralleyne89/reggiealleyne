import React from "react";
import { LucideIcon } from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

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
  title = "Project overview",
  description,
  projectDetails,
  toolDetails,
}) => {
  return (
    <EditorialSection
      eyebrow="Overview"
      title={title}
      className="border-b border-gray-200"
    >
      <div className="max-w-4xl space-y-5">
        {description.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 grid min-w-0 gap-6 lg:grid-cols-2">
        <DetailGroup title="Project basics" details={projectDetails} />
        <DetailGroup title="Tools and platform" details={toolDetails} />
      </div>
    </EditorialSection>
  );
};

interface DetailGroupProps {
  title: string;
  details: ProjectDetail[] | ToolDetail[];
}

const DetailGroup = ({ title, details }: DetailGroupProps) => (
  <div className="min-w-0">
    <h3 className="border-b border-gray-200 pb-3 text-xl font-semibold text-gray-950">
      {title}
    </h3>
    <div className="mt-6 grid min-w-0 gap-4">
      {details.map((detail) => {
        const Icon = detail.icon;

        return (
          <div key={`${detail.label}-${detail.value}`} className="flex min-w-0 items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-500">{detail.label}</p>
              <p className="mt-1 break-words text-base font-semibold leading-6 text-gray-950">
                {detail.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ProjectOverview;
