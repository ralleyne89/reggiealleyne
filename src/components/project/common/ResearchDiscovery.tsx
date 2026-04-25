import React from "react";
import { CheckCircle2 } from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface ResearchSection {
  title: string;
  description: string;
  items: { text: string }[];
}

export interface KeyFinding {
  title: string;
  description: string;
}

export interface ResearchDiscoveryProps {
  title: string;
  introduction: string;
  researchSections: ResearchSection[];
  keyFindings: KeyFinding[];
}

const ResearchDiscovery = ({
  title,
  introduction,
  researchSections,
  keyFindings,
}: ResearchDiscoveryProps) => {
  return (
    <EditorialSection
      eyebrow="Research"
      title={title}
      description={introduction}
      className="border-b border-gray-200"
    >
      <div className="mb-12 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
        {researchSections.map((section) => (
          <article
            key={section.title}
            className="min-w-0 rounded-lg border border-gray-200 bg-gray-50 p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-gray-950">
              {section.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              {section.description}
            </p>
            <ul className="mt-5 space-y-3">
              {section.items.map((item) => (
                <li key={item.text} className="flex min-w-0 items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-6 text-gray-700">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {keyFindings.length > 0 ? (
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Key findings
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {keyFindings.map((finding) => (
              <article
                key={finding.title}
                className="min-w-0 rounded-lg border border-primary/20 bg-primary/5 p-5"
              >
                <h4 className="font-semibold text-gray-950">{finding.title}</h4>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {finding.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default ResearchDiscovery;
