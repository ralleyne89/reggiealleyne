import { Eye, LayoutDashboard, PanelsTopLeft, Workflow } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/project";
import {
  EditorialSection,
  ProjectLightboxModal,
} from "./EditorialProjectLayout";

interface ProjectInterfaceEvidenceProps {
  project: ProjectType;
}

interface ScreenCopy {
  label: string;
  note: string;
  orientation?: "wide" | "tall";
}

interface PlatformScreen {
  src: string;
  label: string;
  note: string;
  orientation: "wide" | "tall";
}

const cllctveScreenOrder = [
  "/images/cllctve-card-optimized.jpg",
  "/images/009d9393-dfb9-453e-8811-1f52d78bf7f1.png",
  "/images/fbb376a0-30ad-4530-8445-159e6767e748.png",
];

const screenCopyBySlug: Record<string, Record<string, ScreenCopy>> = {
  "cllctve-platform": {
    "/images/cllctve-card-optimized.jpg": {
      label: "Creator profile surface",
      note: "Profile, bio, skills, interests, and suggested content in the desktop portfolio view.",
    },
    "/images/009d9393-dfb9-453e-8811-1f52d78bf7f1.png": {
      label: "Creator dashboard",
      note: "Profile views, connections, projects, earnings, activity, skill progress, and brand opportunities.",
    },
    "/images/fbb376a0-30ad-4530-8445-159e6767e748.png": {
      label: "Platform landing page",
      note: "Public page for creators, brand challenges, news, events, and the core platform pitch.",
      orientation: "tall",
    },
  },
};

const excludedScreenSourcesBySlug: Record<string, string[]> = {
  "cllctve-platform": ["/images/cllctve-gen-z-card.jpg"],
  staybooked: [
    "/images/staybooked/staybooked-ai-optimizer-light-featured-card.png",
  ],
};

const processSteps = [
  {
    icon: Workflow,
    label: "Prototype the path",
    body:
      "After the strategy was set, the next UX/UI step was turning the creator journey into screens people could react to.",
  },
  {
    icon: PanelsTopLeft,
    label: "Design the real states",
    body:
      "The interface had to cover profile setup, content browsing, community feedback, and brand moments without becoming a copy of older portfolio tools.",
  },
  {
    icon: LayoutDashboard,
    label: "Show the product proof",
    body:
      "The screenshots below make the platform easier to judge: the profile surface, dashboard, and public landing page.",
  },
];

const compactItems = (items?: string[] | null) =>
  items?.filter(Boolean).map((item) => item.trim()).filter(Boolean) || [];

const unique = (items: string[]) =>
  items.filter((item, index, self) => self.indexOf(item) === index);

const orderScreens = (slug: string | undefined, images: string[]) => {
  if (slug === "cllctve-platform") {
    const ordered = cllctveScreenOrder.filter((image) => images.includes(image));
    return [...ordered, ...images.filter((image) => !ordered.includes(image))];
  }

  return images;
};

const getScreenCopy = (
  slug: string | undefined,
  src: string,
  index: number,
): ScreenCopy => {
  const projectCopy = slug ? screenCopyBySlug[slug]?.[src] : undefined;

  if (projectCopy) return projectCopy;

  return {
    label: `Platform screen ${index + 1}`,
    note: "A product screenshot included so the interface can be inspected alongside the case-study decisions.",
  };
};

const getPlatformScreens = (project: ProjectType): PlatformScreen[] => {
  const visualImages =
    project.visuals?.map((visual) => visual.src).filter(Boolean) || [];
  const excludedScreens = project.slug
    ? excludedScreenSourcesBySlug[project.slug] || []
    : [];
  const imageList = unique([
    ...visualImages,
    ...compactItems(project.images),
    project.image,
  ].filter(Boolean)).filter((image) => !excludedScreens.includes(image));

  return orderScreens(project.slug, imageList)
    .slice(0, 6)
    .map((src, index) => {
      const copy = getScreenCopy(project.slug, src, index);

      return {
        src,
        label: copy.label,
        note: copy.note,
        orientation: copy.orientation || "wide",
      };
    });
};

const ProjectInterfaceEvidence = ({
  project,
}: ProjectInterfaceEvidenceProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const screens = getPlatformScreens(project);

  if (!screens.length) return null;

  return (
    <EditorialSection
      className="project-interface-evidence border-b border-gray-200"
      contentClassName="max-w-[82rem] px-4 sm:px-6 lg:px-0"
      tone="soft"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.35fr)_minmax(0,1fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-sm font-semibold leading-5 text-primary">
            Interface evidence
          </p>
          <h2 className="font-display text-3xl leading-tight text-gray-950 [text-wrap:balance] sm:text-heading-xl">
            The next UX/UI pass: make the platform visible.
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Personas and strategy explain the why. The next pass has to show
            how the product actually behaves on screen.
          </p>

          <ol className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={step.label} className="grid gap-3 py-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-white text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold leading-5 text-primary">
                      {String(index + 1).padStart(2, "0")} / {step.label}
                    </p>
                  </div>
                  <p className="text-base leading-7 text-gray-700">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {screens.map((screen, index) => (
            <button
              key={screen.src}
              type="button"
              className={cn(
                "group min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white text-left shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                index === 0 && "md:col-span-2",
              )}
              onClick={() => setSelectedImage(screen.src)}
            >
              <span
                className={cn(
                  "relative block overflow-hidden bg-gray-950",
                  screen.orientation === "tall"
                    ? "aspect-[3/4]"
                    : "aspect-[16/10]",
                )}
              >
                <img
                  src={screen.src}
                  alt={`${screen.label} screenshot`}
                  className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 56rem, 100vw"
                      : "(min-width: 1024px) 28rem, (min-width: 768px) 50vw, 100vw"
                  }
                  onError={(event) => {
                    event.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-gray-950 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  View full size
                </span>
              </span>
              <span className="grid gap-2 border-t border-gray-200 p-4">
                <span className="text-base font-semibold leading-6 text-gray-950">
                  {screen.label}
                </span>
                <span className="text-sm leading-6 text-gray-600">
                  {screen.note}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <ProjectLightboxModal
        imageSrc={selectedImage}
        alt="Full size platform screenshot"
        onClose={() => setSelectedImage(null)}
        imageClassName="bg-gray-950"
      />
    </EditorialSection>
  );
};

export default ProjectInterfaceEvidence;
