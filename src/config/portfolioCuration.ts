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
      "Adaptive testing and certification in under five minutes, built from strategy through shipped MVP.",
    reviewerSignal:
      "Shows AI product strategy, learning experience design, monetization thinking, and founder-level execution.",
  },
  {
    slug: "cllctve-platform",
    featuredTitle: "Gen Z Portfolio Platform",
    eyebrow: "Creator economy / platform design",
    impactSummary:
      "A mobile-first product bet that reached 500+ creators, 15 brand partnerships, and 85% retention.",
    reviewerSignal:
      "Shows product tradeoff thinking, design systems leadership, and market-positioning judgment.",
  },
  {
    slug: "staybooked",
    featuredTitle: "Booking Workflow Prototype",
    eyebrow: "Service workflow / product states",
    impactSummary:
      "A review-ready booking flow for availability, intake, confirmations, and follow-up states.",
    reviewerSignal:
      "Shows product-state modeling, scheduling UX, service workflow clarity, and frontend-ready prototyping.",
  },
];

export const featuredProjectSlugs = featuredProjectConfig.map(
  (project) => project.slug,
);

export const caseStudyBriefs: Partial<
  Record<FeaturedProjectSlug | string, CaseStudyBrief>
> = {
  "litmus-ai": {
    audience: "Professionals, students, and teams who need a credible AI literacy baseline.",
    constraint:
      "The assessment had to feel fast enough for broad adoption while still producing useful learning signals.",
    coreDecision:
      "Use adaptive AI questioning and post-test learning paths instead of a static course-first experience.",
    evidence:
      "Shipped a functional MVP with GPT-powered assessment logic, certification, admin visibility, and Stripe monetization.",
    artifacts: [
      "Adaptive assessment flow",
      "Results and recommendation experience",
      "Certification and payment model",
    ],
  },
  "cllctve-platform": {
    audience:
      "Gen Z creators who needed a portfolio experience aligned with mobile-first social behavior.",
    constraint:
      "The product could not out-feature Behance, so it had to win on behavior fit and speed of iteration.",
    coreDecision:
      "Prioritize mobile engagement and community feedback over desktop feature parity and deep analytics.",
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
      "Small service teams managing customer requests, availability, confirmations, and follow-up.",
    constraint:
      "The prototype needed to show useful workflow logic without pretending to be a full scheduling platform.",
    coreDecision:
      "Model the booking journey around visible states: availability, pending intake, confirmed reservation, and follow-up.",
    evidence:
      "Route-backed project data and a responsive prototype structure make the workflow reviewable before a full demo exists.",
    artifacts: [
      "Booking flow map",
      "Availability and intake states",
      "Reservation and follow-up model",
    ],
  },
  "symptom-checkr": {
    audience:
      "People using AI-assisted symptom guidance who need clarity without panic or blind trust.",
    constraint:
      "Healthcare AI needed transparency, but every explanation added visual complexity to a sensitive flow.",
    coreDecision:
      "Expose confidence levels, citations, and reasoning chains instead of hiding AI logic behind a simple answer.",
    evidence:
      "The concept documents how transparency, graduated certainty, and saved reports could reduce black-box anxiety.",
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
