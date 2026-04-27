import type { ProjectType } from "@/types/project";

export type FeaturedProjectSlug =
  | "litmus-ai"
  | "cllctve-platform"
  | "staybooked";

export interface FeaturedProjectConfig {
  slug: FeaturedProjectSlug;
  featuredTitle: string;
  eyebrow: string;
  impactSummary: string;
  reviewerSignal: string;
}

export interface CaseStudyBrief {
  audience: string;
  constraint: string;
  coreDecision: string;
  evidence: string;
  artifacts: string[];
}

export const featuredProjectConfig: FeaturedProjectConfig[] = [
  {
    slug: "litmus-ai",
    featuredTitle: "AI Literacy Platform",
    eyebrow: "AI education / assessment",
    impactSummary:
      "A five-minute assessment and certificate flow that gives learners a clear AI literacy baseline.",
    reviewerSignal:
      "Gives reviewers evidence of AI product strategy, learning design, payments, and solo-founder execution.",
  },
  {
    slug: "cllctve-platform",
    featuredTitle: "Gen Z Portfolio Platform",
    eyebrow: "Creator economy / platform design",
    impactSummary:
      "A mobile-first creator portfolio bet that reached 500+ creators, 15 brand partnerships, and 85% retention.",
    reviewerSignal:
      "Gives reviewers a read on tradeoff decisions across mobile behavior, design systems, and brand constraints.",
  },
  {
    slug: "staybooked",
    featuredTitle: "AI Airbnb Optimizer",
    eyebrow: "Hospitality AI / host workflow",
    impactSummary:
      "A room and listing optimizer that helps short-term rental hosts improve photos, copy, and booking signals.",
    reviewerSignal:
      "Gives reviewers a concrete AI product surface: host workflow, trust-aware image generation, and frontend execution.",
  },
];

export const featuredProjectSlugs = featuredProjectConfig.map(
  (project) => project.slug,
);

export const caseStudyBriefs: Partial<
  Record<FeaturedProjectSlug | string, CaseStudyBrief>
> = {
  "litmus-ai": {
    audience:
      "Students, professionals, and teams who need a credible AI literacy baseline before choosing training.",
    constraint:
      "The test had to stay short enough for busy users while still producing learning signals a team could trust.",
    coreDecision:
      "Start with adaptive assessment, then send people to learning paths based on what they missed.",
    evidence:
      "Shipped an MVP with GPT-powered assessment, certification, admin visibility, and Stripe payment paths.",
    artifacts: [
      "Adaptive assessment flow",
      "Results and recommendations",
      "Certificate and payment flow",
    ],
  },
  "cllctve-platform": {
    audience:
      "Gen Z creators building portfolios from the same phones they used to share their work.",
    constraint:
      "Behance already owned the professional portfolio lane, so the product had to win on mobile behavior and community feedback.",
    coreDecision:
      "Prioritize mobile creation and creator feedback over desktop feature parity and deep analytics.",
    evidence:
      "Reached 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
    artifacts: [
      "Mobile-first portfolio builder",
      "Creator feed and engagement loops",
      "Design-token system for brand challenges",
    ],
  },
  "staybooked": {
    audience:
      "Independent Airbnb and short-term rental hosts tuning photos, copy, amenities, and trust cues before guests decide.",
    constraint:
      "The product needed to make AI output feel practical and believable without encouraging deceptive listing visuals.",
    coreDecision:
      "Build around first impressions: room photos, titles, opening copy, amenities, and audit cues.",
    evidence:
      "Desktop product screens cover the homepage, sign-in, dashboard, and room optimizer workflow.",
    artifacts: [
      "Marketing homepage",
      "Room optimizer upload flow",
      "Dashboard and auth screens",
    ],
  },
  "symptom-checkr": {
    audience:
      "People using AI-assisted symptom guidance who need clarity without panic or blind trust.",
    constraint:
      "Healthcare AI needed transparency, but every added explanation made a sensitive flow harder to scan.",
    coreDecision:
      "Expose confidence levels, citations, and reasoning chains instead of hiding AI logic behind a simple answer.",
    evidence:
      "The concept maps how confidence, source links, and saved reports could make AI guidance easier to question.",
    artifacts: [
      "Explainable AI assessment UI",
      "Confidence and citation patterns",
      "Saved reports and follow-up flow",
    ],
  },
};

const hiddenFromPrimaryWorksIds = new Set([3, 4, 5, 7, 8, 12]);

export const getFeaturedConfig = (slug?: string) =>
  featuredProjectConfig.find((project) => project.slug === slug);

export const getCaseStudyBrief = (slug?: string) =>
  slug ? caseStudyBriefs[slug] : undefined;

export const isFeaturedProject = (project: Pick<ProjectType, "slug">) =>
  Boolean(getFeaturedConfig(project.slug));

export const isPrimaryWorksProject = (project: ProjectType) =>
  !hiddenFromPrimaryWorksIds.has(project.id);

export const orderFeaturedProjects = (projects: ProjectType[] = []) =>
  featuredProjectConfig
    .map((config) => {
      const project = projects.find((item) => item.slug === config.slug);
      return project ? { ...project, curation: config } : null;
    })
    .filter((project): project is ProjectType & { curation: FeaturedProjectConfig } =>
      Boolean(project),
    );

export const sortProjectsNewestFirst = (projects: ProjectType[]) =>
  [...projects].sort((a, b) => {
    const yearA = a.year ? Number.parseInt(a.year.toString(), 10) : 0;
    const yearB = b.year ? Number.parseInt(b.year.toString(), 10) : 0;
    return yearB - yearA;
  });
