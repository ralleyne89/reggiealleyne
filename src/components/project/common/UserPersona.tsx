import React from "react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface PersonaDetail {
  label: string;
  value: string;
}

export interface PersonaItem {
  text: string;
}

export interface UserPersonaProps {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  details: PersonaDetail[];
  goals: PersonaItem[];
  frustrations: PersonaItem[];
  needs: PersonaItem[];
}

const UserPersona: React.FC<UserPersonaProps> = ({
  title = "User persona",
  imageSrc,
  imageAlt,
  name,
  details,
  goals,
  frustrations,
  needs,
}) => {
  return (
    <EditorialSection
      eyebrow="Audience"
      title={title}
      className="border-b border-gray-200"
      tone="soft"
    >
      <div className="grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <aside className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mb-6 w-full rounded-md object-cover"
          />

          <h3 className="text-2xl font-semibold text-gray-950">{name}</h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {details.map((detail) => (
              <div key={`${detail.label}-${detail.value}`} className="min-w-0">
                <dt className="text-xs font-semibold text-gray-500">
                  {detail.label}
                </dt>
                <dd className="mt-1 break-words text-base font-semibold leading-6 text-gray-950">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="grid min-w-0 gap-5 md:grid-cols-3">
          <PersonaList title="Goals" items={goals} />
          <PersonaList title="Frustrations" items={frustrations} />
          <PersonaList title="Needs" items={needs} />
        </div>
      </div>
    </EditorialSection>
  );
};

interface PersonaListProps {
  title: string;
  items: PersonaItem[];
}

const PersonaList = ({ title, items }: PersonaListProps) => (
  <div className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
    <h4 className="border-b border-gray-200 pb-3 text-lg font-semibold text-gray-950">
      {title}
    </h4>
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.text} className="flex min-w-0 items-start gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
          <span className="text-sm leading-6 text-gray-700">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default UserPersona;
