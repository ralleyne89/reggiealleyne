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

export interface CaseStudyTldr {
  role: string;
  problem: string;
  decision?: string;
  outcome: string;
  tools: string[];
  owned: string[];
}

export interface HomepageProofMetric {
  value: string;
  label: string;
  description: string;
  href: string;
}

export const featuredProjectConfig: FeaturedProjectConfig[] = [
  {
    slug: "litmus-ai",
    featuredTitle: "AI Literacy Platform",
    eyebrow: "AI education / assessment",
    impactSummary:
      "A five-minute assessment and certificate flow that gives learners a clear AI literacy baseline.",
    reviewerSignal:
      "Shows AI product strategy, learning design, payments, and end-to-end MVP delivery.",
  },
  {
    slug: "cllctve-platform",
    featuredTitle: "Gen Z Portfolio Platform",
    eyebrow: "Creator economy / platform design",
    impactSummary:
      "A mobile-first creator portfolio bet that reached 500+ creators, 15 brand partnerships, and 85% retention.",
    reviewerSignal:
      "Shows the tradeoffs behind mobile behavior, design systems, and brand constraints.",
  },
  {
    slug: "staybooked",
    featuredTitle: "AI Airbnb Optimizer",
    eyebrow: "Hospitality AI / host workflow",
    impactSummary:
      "A room and listing optimizer that helps short-term rental hosts improve photos, copy, and booking signals.",
    reviewerSignal:
      "Shows a concrete AI product surface: host workflow, trust-aware image generation, and frontend execution.",
  },
];

export const featuredProjectSlugs = featuredProjectConfig.map(
  (project) => project.slug,
);

export const homepageProofMetrics: HomepageProofMetric[] = [
  {
    value: "8 weeks",
    label: "MVP shipped",
    description:
      "Litmus AI moved from product thesis to adaptive assessment, certification, admin, and payments.",
    href: "/project/litmus-ai",
  },
  {
    value: "85%",
    label: "Creator retention",
    description:
      "CLLCTVE reached 500+ creators and 15 brand partnerships by betting on mobile behavior.",
    href: "/project/cllctve-platform",
  },
  {
    value: "4 surfaces",
    label: "AI host workflow",
    description:
      "Staybooked connects marketing, auth, dashboard, and room optimization into one product story.",
    href: "/project/staybooked",
  },
];

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
      "People checking symptoms online who need guidance that is clear, cautious, and easy to question.",
    constraint:
      "The product needed to explain uncertainty without making a stressful health flow harder to scan.",
    coreDecision:
      "Show confidence levels, source links, and plain-language reasoning instead of hiding the logic behind a simple answer.",
    evidence:
      "The concept maps how confidence, sources, and saved reports could make symptom guidance easier to evaluate.",
    artifacts: [
      "AI assessment UI",
      "Confidence and citation patterns",
      "Saved reports and follow-up flow",
    ],
  },
  "covelo-timecard-system": {
    audience:
      "Staff, approvers, and operations teams coordinating workforce time, assignments, exceptions, and exports across district-scoped environments.",
    constraint:
      "The product had to unify fragmented timekeeping and compliance workflows without weakening role boundaries, audit history, or tenant isolation.",
    coreDecision:
      "Anchor the MVP around three portals: staff submission, approver review, and operations exception management.",
    evidence:
      "Completed as a solo client project in March 2026 with a deployed demo, role-based workflows, invite-only access, OIDC/JWKS auth, and Postgres-oriented contracts.",
    artifacts: [
      "Staff dashboard and timesheet workflow",
      "Approver queue and review workflow",
      "Ops exception and export surfaces",
    ],
  },
  "pretty-paws-grooming": {
    audience:
      "Pet owners in Little Rock who need to compare grooming services, check business details, and request an appointment quickly.",
    constraint:
      "The website had to feel polished and trustworthy while keeping every claim tied to confirmed salon facts and every booking request clearly pending.",
    coreDecision:
      "Use service detail routes and a request-based booking flow instead of a generic brochure page or instant-confirmation promise.",
    evidence:
      "The source project includes a Vite/React app, service and booking routes, Supabase booking/contact submissions, local media, Netlify configuration, and a live Netlify deployment.",
    artifacts: [
      "Public salon homepage",
      "Service detail and booking flow",
      "Contact, policies, and local media assets",
    ],
  },
};

export const caseStudyTldrs: Partial<Record<string, CaseStudyTldr>> = {
  "staybooked": {
    role: "UX/UI Designer and Frontend Developer",
    problem:
      "Independent hosts needed a practical way to improve room photos, listing copy, and booking signals without making the AI output feel deceptive.",
    decision:
      "Frame AI as believable improvement direction inside a saved host workspace, not as a generic image generator.",
    outcome:
      "Built the product-facing portfolio flow across marketing, auth, dashboard, and room optimization screens.",
    tools: ["Next.js", "Supabase", "AI UX", "Responsive UI"],
    owned: ["Product framing", "Host workflow", "Room optimizer UI", "Portfolio presentation"],
  },
  "litmus-ai": {
    role: "UX/UI Designer and AI Strategist",
    problem:
      "Teams and learners needed a fast way to understand AI readiness before committing to training.",
    decision:
      "Compress assessment into an adaptive five-minute flow with recommendations and credentials after the score.",
    outcome:
      "Shipped an MVP with adaptive assessment, recommendations, certification, admin visibility, and payment paths.",
    tools: ["React", "OpenAI API", "Supabase", "Stripe", "Auth0"],
    owned: ["Product strategy", "Assessment UX", "Prompt/scoring logic", "Payments and admin flow"],
  },
  "cllctve-platform": {
    role: "UX/UI Designer and Design Systems Lead",
    problem:
      "Gen Z creators needed a mobile-first portfolio experience that felt closer to how they already shared work.",
    decision:
      "Prioritize mobile creation and feedback loops over desktop feature parity with older portfolio platforms.",
    outcome:
      "Reached 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
    tools: ["Figma", "React", "Ant Design", "MongoDB", "Styled Components"],
    owned: ["Mobile portfolio flow", "Creator feedback loops", "Design system", "Usability testing"],
  },
  "symptom-checkr": {
    role: "UI/UX designer",
    problem:
      "Symptom guidance can make people more anxious when it does not show confidence, sources, or limits.",
    outcome:
      "Designed a calmer AI-assisted flow with confidence levels, citations, and saved reports for follow-up care.",
    tools: ["Figma", "AI guidance", "Journey mapping", "Health UX"],
    owned: ["Guidance model", "Assessment UI", "Citation patterns", "Saved report flow"],
  },
  "vaultjs-validate": {
    role: "UI/UX designer and frontend developer",
    problem:
      "Security teams needed to know which third-party scripts mattered and what to fix first.",
    outcome:
      "Created a dashboard concept that turns attack-surface scanning into plain-English risk and remediation steps.",
    tools: ["React", "Tailwind CSS", "AI UX", "Security visualization"],
    owned: ["Risk dashboard", "Remediation flow", "Visual identity", "Frontend prototype"],
  },
  "scent-stack": {
    role: "UX/UI Designer and AI Product Strategist",
    problem:
      "Fragrance discovery is expensive, opaque, and hard to translate from taste into actual products.",
    outcome:
      "Built a consumer product with 1700+ dupes, dream-scent matching, and photo-based layering recommendations.",
    tools: ["React", "Tailwind CSS", "GPT-5", "Computer vision"],
    owned: ["Product concept", "Dupe database", "Dream Lab", "Layering Lab"],
  },
  "tutor-d": {
    role: "Frontend developer and UI/UX designer",
    problem:
      "Teachers needed to reach students who lacked reliable internet or smart devices during remote learning.",
    outcome:
      "Built the educator-facing dashboard for SMS-based assignments, progress tracking, and communication.",
    tools: ["React", "Redux", "Node.js", "Express", "Ant Design"],
    owned: ["Teacher dashboard", "Responsive UI", "Progress views", "Frontend integration"],
  },
  "tech-noir": {
    role: "UX, UI, and visual designer",
    problem:
      "Shoppers were interested in wearable tech but struggled to understand fit, styling, and everyday use.",
    outcome:
      "75% of testers felt more confident exploring wearable tech after the mobile shopping prototype.",
    tools: ["Figma", "Adobe XD", "Illustrator", "Miro", "UserZoom"],
    owned: ["Research synthesis", "Mobile commerce flow", "Luxury visual system", "Prototype testing"],
  },
  "doggy-date": {
    role: "UX, UI, and visual designer",
    problem:
      "A dating-style product for dog owners needed a reason to feel more useful than another swipe app.",
    outcome:
      "Created a community-focused app concept around local connections, profiles, and shared dog-friendly places.",
    tools: ["Adobe XD", "Photoshop", "Illustrator", "User interviews"],
    owned: ["Concept strategy", "Personas", "Wireframes", "Visual design"],
  },
  "improv-learning": {
    role: "UI designer",
    problem:
      "Traffic-school visitors needed quick reassurance that the course was legitimate, simple, and worth starting on mobile.",
    outcome:
      "Delivered the landing page design in time for the GEICO campaign rollout with clearer trust and signup paths.",
    tools: ["Figma", "Photoshop", "HTML/CSS", "Conversion UX"],
    owned: ["Landing page UI", "Trust hierarchy", "Mobile layout", "Campaign-ready design"],
  },
  "wristband": {
    role: "Lead UX/UI Designer and Strategist",
    problem:
      "Interactive storytelling apps often felt repetitive and thin, especially around diverse character depth.",
    outcome:
      "Validated a prototype direction centered on authentic narrative, creator collaboration, and richer mobile engagement.",
    tools: ["Figma", "Photoshop", "Principle", "React Native"],
    owned: ["Product strategy", "Narrative UX", "Prototype design", "Creator-centered framing"],
  },
  "chill-vibes-music-player": {
    role: "UI/UX designer and frontend developer",
    problem:
      "A client wanted to prove a music app could feel calm and focused instead of becoming another social feed.",
    outcome:
      "Built a responsive MVP that kept the listening experience simple enough for validation and user testing.",
    tools: ["React", "Firebase", "Bootstrap", "CSS Modules"],
    owned: ["MVP interface", "Responsive player", "Frontend build", "Client validation flow"],
  },
  "bobs-big-break": {
    role: "UI/UX designer and web developer",
    problem:
      "The game needed to reward short, low-attention play sessions without asking players to learn a complex system.",
    outcome:
      "Delivered a playable incremental game prototype with active clicks, passive income, upgrades, and character art.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Bulma"],
    owned: ["Game UX", "Economy loop", "Frontend build", "Backend integration"],
  },
  "covelo-timecard-system": {
    role: "UX/UI Designer and Frontend Developer",
    problem:
      "Covelo needed one portal for staff timecards, approver review, compliance exceptions, assignments, and export prep.",
    decision:
      "Design the product around three role-specific workspaces tied to one operating model instead of treating each team as a separate workflow.",
    outcome:
      "Delivered a solo client MVP with a deployed demo, product screenshots, and bounded technical framing for auth, RBAC, APIs, and exports.",
    tools: ["Next.js", "TypeScript", "Postgres", "OIDC/JWKS", "REST APIs"],
    owned: ["Product design", "Frontend build", "Role workflows", "Client demo"],
  },
  "pretty-paws-grooming": {
    role: "Frontend implementation and UX presentation",
    problem:
      "A local grooming salon needed a web experience that made services, booking, contact details, and policies easy to trust from mobile or desktop.",
    decision:
      "Build around the real appointment path: service browsing, service detail pages, a preselected booking request, and clear follow-up language.",
    outcome:
      "Created a live Netlify site with service routes, booking and contact submissions, policy coverage, and local media assets.",
    tools: ["Vite", "React", "TypeScript", "Tailwind CSS", "Supabase", "Netlify"],
    owned: ["Homepage", "Service IA", "Booking flow", "Frontend build"],
  },
};

const hiddenFromPrimaryWorksIds = new Set([3, 4, 5, 7, 8, 12]);

export const getFeaturedConfig = (slug?: string) =>
  featuredProjectConfig.find((project) => project.slug === slug);

export const getCaseStudyBrief = (slug?: string) =>
  slug ? caseStudyBriefs[slug] : undefined;

export const getCaseStudyTldr = (slug?: string) =>
  slug ? caseStudyTldrs[slug] : undefined;

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
