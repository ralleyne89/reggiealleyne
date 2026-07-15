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
  /** Quantified proof points. Only populate with real, verifiable numbers. */
  metrics?: CaseStudyMetric[];
}

export type CaseStudyProcessArtifactType =
  | "sitemap"
  | "user-flow"
  | "wireframe";

export interface CaseStudyProcessArtifact {
  type: CaseStudyProcessArtifactType;
  title: string;
  image: string;
  alt: string;
  insight: string;
  connectsPersonaNeedTo: string;
}

export type CaseStudyMetricKind =
  | "measured-outcome"
  | "delivery-fact"
  | "design-target"
  | "product-guardrail"
  | "future-measure";

export interface CaseStudyMetric {
  value: string;
  label: string;
  kind?: CaseStudyMetricKind;
  context?: string;
}

export type CaseStudyImpactFraming =
  | "measured-outcomes"
  | "mvp-proof"
  | "measurement-plan";

export interface CaseStudyImpact {
  title: string;
  summary: string;
  framing?: CaseStudyImpactFraming;
  metrics: CaseStudyMetric[];
  notes: string[];
}

export type CaseStudyChapterKey =
  | "glance"
  | "overview"
  | "audience"
  | "process"
  | "artifacts"
  | "evidence"
  | "impact";

export type CaseStudyPresentationVariant =
  | "outcome-led"
  | "assessment-led"
  | "trust-led";

export interface CaseStudyPresentation {
  variant: CaseStudyPresentationVariant;
  audienceEyebrow: string;
  audienceTitle: string;
  audienceDescription: string;
  evidenceBasis: string;
  teamContext: string;
  limitation: string;
  validationQuestions: string[];
  chapterOrder: CaseStudyChapterKey[];
  chapterLabels: Partial<Record<CaseStudyChapterKey, string>>;
}

export interface CaseStudyNarrative {
  hook: string;
  setup: string;
  research: string;
  constraint: string;
  decision: string;
  build: string;
  proof: string;
  reflection: string;
}

export type CaseStudyNarrativeSlug =
  | "cllctve-platform"
  | "tutor-d"
  | "wristband"
  | "symptom-checkr"
  | "litmus-ai"
  | "vaultjs-validate"
  | "staybooked"
  | "covelo-timecard-system"
  | "pretty-paws-grooming";

export interface ProjectPersonaSnapshot {
  role: string;
  context: string;
  goal: string;
  friction: string;
  need: string;
}

export interface ProjectJourneyStep {
  label: string;
  description: string;
}

export interface ProjectPersonaJourney {
  persona: ProjectPersonaSnapshot;
  journey: ProjectJourneyStep[];
}

export type ProjectPersonaJourneySlug =
  | "cllctve-platform"
  | "tutor-d"
  | "tech-noir"
  | "doggy-date"
  | "improv-learning"
  | "wristband"
  | "chill-vibes-music-player"
  | "bobs-big-break"
  | "symptom-checkr"
  | "litmus-ai"
  | "vaultjs-validate"
  | "scent-stack"
  | "staybooked"
  | "covelo-timecard-system"
  | "pretty-paws-grooming";

export interface ProjectPersonaProfileDetail {
  label: string;
  value: string;
}

export interface ProjectPersonaAttribute {
  label: string;
  score: number;
}

export interface ProjectPersonaTheme {
  background: string;
  panel: string;
  line: string;
  ink: string;
  muted: string;
  accent: string;
  shadow: string;
}

export interface ProjectPersonaProfile {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  theme: ProjectPersonaTheme;
  about: ProjectPersonaProfileDetail[];
  attributes: ProjectPersonaAttribute[];
}

export interface HomepageProofMetric {
  value: string;
  label: string;
  description: string;
  href: string;
}

export const featuredProjectConfig: FeaturedProjectConfig[] = [
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
    slug: "litmus-ai",
    featuredTitle: "AI Literacy Platform",
    eyebrow: "AI education / assessment",
    impactSummary:
      "A shipped assessment, recommendation, training, and certificate path designed around a five-minute target.",
    reviewerSignal:
      "Shows AI product strategy, learning design, payments, and end-to-end MVP delivery.",
  },
  {
    slug: "staybooked",
    featuredTitle: "AI Airbnb Optimizer",
    eyebrow: "Hospitality AI / host workflow",
    impactSummary:
      "A host workflow that turns listing review into an audit, one grounded fix, and a clear re-check.",
    reviewerSignal:
      "Shows how product constraints keep AI suggestions tied to the property a host can deliver.",
  },
];

export const featuredProjectSlugs = featuredProjectConfig.map(
  (project) => project.slug,
);

export const caseStudyPresentations: Partial<
  Record<FeaturedProjectSlug, CaseStudyPresentation>
> = {
  "cllctve-platform": {
    variant: "outcome-led",
    audienceEyebrow: "Evidence base",
    audienceTitle: "Creator behavior and team context",
    audienceDescription:
      "The source repo confirms a mobile-first React build and multi-contributor delivery. The resume supplies the launch outcomes.",
    evidenceBasis:
      "The resume reports 500+ creators, 15 brand partnerships, and 85% retention. The source repository confirms the mobile-first React product, but it does not preserve the research sample behind the strategy.",
    teamContext:
      "Git history confirms a multi-contributor build, and the resume records my Frontend Engineer role with UX/UI ownership. The available sources do not document collaborator roles or team size.",
    limitation:
      "The available project archive does not document participant counts, interview transcripts, collaborator roles, or team size, so the case study does not claim them.",
    validationQuestions: [
      "Which profile steps caused creators to pause or abandon setup?",
      "Which feedback loops brought creators back after publishing?",
    ],
    chapterOrder: [
      "glance",
      "impact",
      "overview",
      "audience",
      "process",
      "artifacts",
      "evidence",
    ],
    chapterLabels: {
      glance: "Details",
      impact: "Results",
      overview: "Product bet",
      audience: "Evidence",
      process: "Decisions",
      artifacts: "Artifacts",
      evidence: "Interface",
    },
  },
  "litmus-ai": {
    variant: "assessment-led",
    audienceEyebrow: "Validation plan",
    audienceTitle: "Assessment assumptions to test",
    audienceDescription:
      "The MVP proves the assessment path works as a product. User outcomes still need a measured study.",
    evidenceBasis:
      "The shipped product supports level selection, a 15-question assessment, five readiness domains, recommendations, training, certification, billing, and admin review.",
    teamContext:
      "I designed and built the MVP as a solo UX/UI and frontend project.",
    limitation:
      "No verified participant sample or completion-rate dataset is available, so the five-minute duration remains a design target rather than a measured outcome.",
    validationQuestions: [
      "How many learners finish the assessment after starting it?",
      "Do learners understand why the result leads to a specific training path?",
    ],
    chapterOrder: [
      "glance",
      "overview",
      "audience",
      "process",
      "artifacts",
      "evidence",
      "impact",
    ],
    chapterLabels: {
      glance: "Details",
      overview: "Assessment",
      audience: "Validation",
      process: "Decisions",
      artifacts: "Artifacts",
      evidence: "Interface",
      impact: "Next measures",
    },
  },
  staybooked: {
    variant: "trust-led",
    audienceEyebrow: "Working assumptions",
    audienceTitle: "Host needs to validate",
    audienceDescription:
      "The MVP starts with a host workflow hypothesis and makes the riskiest trust decisions inspectable.",
    evidenceBasis:
      "The product includes a marketing page, account entry, host dashboard, and room optimizer tied to real property photos and details.",
    teamContext:
      "I designed and built the MVP as a solo UX/UI and frontend project.",
    limitation:
      "No host interviews or external usability sessions are documented, so this section labels assumptions instead of presenting a fictional research participant.",
    validationQuestions: [
      "Can a host understand why the optimizer flagged a room?",
      "Will hosts accept, revise, or reject suggestions before updating a live listing?",
    ],
    chapterOrder: [
      "glance",
      "overview",
      "audience",
      "evidence",
      "process",
      "artifacts",
      "impact",
    ],
    chapterLabels: {
      glance: "Details",
      overview: "Trust problem",
      audience: "Assumptions",
      evidence: "Interface",
      process: "Decisions",
      artifacts: "Artifacts",
      impact: "Next measures",
    },
  },
};

export const homepageProofMetrics: HomepageProofMetric[] = [
  {
    value: "5 domains",
    label: "Readiness assessment",
    description:
      "Litmus AI connects a 15-question assessment to recommendations, certification, admin, and subscription plans.",
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
    value: "Audit to fix",
    label: "Grounded host workflow",
    description:
      "Staybooked keeps room suggestions tied to real property photos and details before a host updates a listing.",
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
      "Start with adaptive assessment, then route people into the training, certification, or team view that matched what they missed.",
    evidence:
      "Shipped an MVP with assessment, role-aware recommendations, progress tracking, certification, billing, and admin visibility.",
    artifacts: [
      "Adaptive assessment flow",
      "Results and recommendations",
      "Training, certificate, and billing paths",
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
      "The MVP connects account entry, a saved host dashboard, and a room optimizer that keeps suggestions attached to real property evidence.",
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
      "Completed as a solo client project in March 2026 with a deployed demo, Figma-led product design, role-based workflows, invite-only access, and Postgres-oriented contracts.",
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
      "Services hub and booking flow",
      "Before-and-after page screenshots",
    ],
  },
};

export const caseStudyNarratives: Record<
  CaseStudyNarrativeSlug,
  CaseStudyNarrative
> = {
  "cllctve-platform": {
    hook:
      "CLLCTVE gave Gen Z creators a mobile-first portfolio shaped around how they already shared work, found feedback, and discovered brand opportunities.",
    setup:
      "Behance already owned the professional portfolio category. Creator work lived across phones, social posts, screenshots, challenge submissions, and community feedback, so the team focused on faster mobile publishing instead of desktop feature parity.",
    research:
      "The product strategy focused on a profile creators could update from a phone and a reason to return after publishing. The available archive does not preserve participant counts or interview transcripts, so this case study presents those ideas as product hypotheses.",
    constraint:
      "The hardest constraint was choosing where not to compete. A smaller platform could not match Behance's network effects or every professional feature, and too much customization would make branded challenge pages inconsistent.",
    decision:
      "I focused the product on mobile creation, creator feedback, and a controlled design-token system. That meant prioritizing swipe-friendly portfolio browsing and community loops over desktop analytics and feature parity.",
    build:
      "In my Product Designer and Frontend Developer role, I worked across the mobile portfolio builder, modular portfolio organization, branded challenge pages, notifications, and the design system that kept partner pages consistent.",
    proof:
      "The product reached 500+ creators, 15 brand partnerships, and 85% retention before the company closed. Those outcomes support the mobile-first product decision without turning the company closure into a success story.",
    reflection:
      "The project still guides how I think about category strategy. When an incumbent owns the obvious feature set, the design opportunity is often in the behavior they are too large or too slow to serve well.",
  },
  "tutor-d": {
    hook:
      "Tutor D began with a constraint most learning products treat as an edge case: some students could not rely on full web access at all.",
    setup:
      "During remote learning, teachers needed to reach students who were working through basic phones, unreliable internet, and fragmented support systems. The product had to help educators plan, send, and track lessons without assuming every student could log into a traditional classroom tool.",
    research:
      "Teacher feedback pointed the product toward clarity and speed. The dashboard needed to make the SMS workflow feel intentional, not like a stripped-down version of a richer platform.",
    constraint:
      "The design had to support low-tech student access while still giving teachers enough visibility to manage progress. That meant the educator interface carried the complexity so the student side could stay reachable.",
    decision:
      "I treated SMS as a product requirement. The dashboard centered lesson creation, progress visibility, engagement summaries, and messaging tools around the teacher's daily decision: who received the work, who responded, and who needs follow-up.",
    build:
      "I built the educator-facing dashboard in React with Ant Design, connecting lesson planning, progress cards, response tracking, weekly summaries, and responsive views through the product's backend data flow.",
    proof:
      "The finished work gave teachers a practical way to manage SMS-based learning from one web surface, with real-time updates and enough structure to keep remote follow-up from becoming manual guesswork.",
    reflection:
      "The lesson was that accessibility is not only a compliance layer. In this project, the access constraint defined the product, the interface hierarchy, and the parts of the workflow that had to stay quiet.",
  },
  wristband: {
    hook:
      "WRISTBAND was a prototype for a storytelling app that had to prove a different point: richer characters and creator input could matter as much as branching mechanics.",
    setup:
      "The client wanted an interactive narrative product in a market filled with fast content and familiar story loops. The product needed to feel commercial enough to evaluate while still making room for more specific characters, diverse writers, and a stronger sense of authorship.",
    research:
      "The early research focused on why people abandon story apps. The pattern was not only about interface friction; it was about thin stories, shallow characters, and choices that did not feel connected to a meaningful narrative.",
    constraint:
      "Because the product never launched, the work had to be honest about what the prototype proved. It could show a direction, a creator framework, and a mobile storytelling system, but it could not claim market traction.",
    decision:
      "I designed around story quality before content volume. The product model tied character depth, creator collaboration, branching choices, and creator compensation into the same experience strategy.",
    build:
      "I produced the UX strategy, mobile app design system, interactive prototype, content creator framework, and monetization model. The interface stayed focused on helping readers discover stories, assess characters, make choices, and follow creators.",
    proof:
      "The prototype demonstrated the full concept clearly enough for client evaluation: a mobile narrative system, creator-centered content model, and story flow designed around representation and character specificity.",
    reflection:
      "The strongest lesson was restraint. Representation works better when it shapes the content model and creator process from the beginning, not when it is added as a surface treatment after the product is already defined.",
  },
  "symptom-checkr": {
    hook:
      "SymptomCheckr was designed around a stressful moment: someone wants guidance, but a confident-looking answer can make them panic or over-trust the tool.",
    setup:
      "Most symptom products compress uncertainty into a result. For health guidance, that can be dangerous. The product needed to help users understand what the system considered, how confident it was, and when the next step should involve care outside the app.",
    research:
      "The research signal came from the way people read health information under pressure. They need plain language, visible reasoning, and a way to question the result without feeling abandoned.",
    constraint:
      "The interface had to stay calm without becoming casual about medical decisions. Adding confidence levels and source links made the results screen denser, but hiding those details would make the system harder to trust.",
    decision:
      "I made uncertainty visible. The flow uses confidence levels, source links, graduated certainty, photo-supported symptom input, and saved reports instead of presenting the product as a diagnostic authority.",
    build:
      "I designed the AI-assisted assessment flow, results screen, source and reasoning patterns, privacy-minded image handling, report states, and follow-up surfaces for a responsive health-tech concept.",
    proof:
      "The case study now shows a full product direction: calmer intake, confidence-aware results, citations, saved reports, and a visual language that treats uncertainty as part of the experience.",
    reflection:
      "The project clarified a design principle I keep coming back to: sensitive products should not pretend away uncertainty. They should make it readable enough for people to act with care.",
  },
  "litmus-ai": {
    hook:
      "Litmus AI started with a practical gap: people were buying AI training before they had a fast way to see what someone actually understood.",
    setup:
      "Courses and certificates can help, but they often ask for commitment before showing the learner where they stand. The product needed to give students, professionals, and teams a credible baseline in minutes, then point them toward training or certification only when it made sense.",
    research:
      "The product brief organized the experience around assessment, training, and certification. No verified participant study is available, so I treated fast completion and result clarity as hypotheses to test rather than research findings.",
    constraint:
      "The assessment had to stay short without becoming shallow. If the flow took too long, users would leave. If it was too light, the score would not justify the learning path, certificate, or team rollout.",
    decision:
      "I compressed the first session into an adaptive assessment, then made the result actionable through recommendations, training modules, certification access, billing plans, and admin visibility.",
    build:
      "I shaped the quiz, results, recommendation logic, certificate flow, training surfaces, admin dashboard, auth paths, and Stripe-backed billing. The implementation connected assessment data, account state, and subscription rules into one MVP.",
    proof:
      "The MVP shipped with a 3-5 minute assessment target, 15 questions, five readiness domains, training modules, certification, dashboard visibility, and three subscription tiers. The delivery is verified; learner completion and comprehension still need measurement.",
    reflection:
      "The useful design move was keeping the product honest about time. A five-minute test cannot teach everything, but it can give people and teams a starting point they can act on.",
  },
  "vaultjs-validate": {
    hook:
      "Vault.js Validate was a security dashboard sprint built around alert fatigue: teams get warnings all day, but still need to know what to fix first.",
    setup:
      "The product focused on third-party script risk. A scanner can surface exposure, but the analyst still has to understand vendor relationships, data leakage paths, severity, and the next remediation step.",
    research:
      "The research pass treated existing security tools as a signal for what to avoid. Dense alerts and status-heavy dashboards were not enough; the workflow needed clearer priority, explanation, and reviewable fixes.",
    constraint:
      "The two-week sprint forced a narrow product story. I needed to make the dashboard feel technical and credible while keeping risk explanations readable enough for quick triage.",
    decision:
      "I designed the product around the analyst's next action: scan the surface, see relationships, understand the risk in plain English, and review a generated remediation before applying it.",
    build:
      "I built the React and Tailwind prototype with risk visuals, Recharts data views, compliance-oriented sections, a dark technical visual system, and a remediation flow connected through Supabase and OpenAI-backed functions.",
    proof:
      "The shipped prototype shows a working security dashboard direction in a short sprint: attack-surface scanning, risk visualization, vulnerability explanation, and an Apply Fix path.",
    reflection:
      "The lesson was that technical interfaces still need editorial judgment. A dashboard can be dense, but it should not make the user assemble the story of the risk from scattered fragments.",
  },
  staybooked: {
    hook:
      "Staybooked helps hosts improve the listing details guests judge first while keeping every suggestion tied to the property they can deliver.",
    setup:
      "Independent short-term rental hosts often know a listing could perform better, but the problem is scattered across photos, titles, opening copy, amenities, and trust cues. A generic tool can polish one asset, but it rarely keeps the host's real property context intact.",
    research:
      "No host interviews or external usability sessions are documented for this MVP. I used the guest decision path as a working hypothesis, then organized rooms, images, copy, and improvement history around the listing assets that shape trust.",
    constraint:
      "The main constraint was trust. AI-generated room direction had to feel useful and believable, not like a fantasy renovation that would make the live listing misleading.",
    decision:
      "I framed AI as improvement direction inside a saved host workspace. The product keeps rooms, generated renders, listing copy, audit cues, and recent work connected to the property.",
    build:
      "I built the portfolio-facing product story across the marketing homepage, sign-in, dashboard, and room optimizer screens. The interface shows uploads, room context, realistic visual direction, and saved optimization work.",
    proof:
      "The product connects account entry, a saved host dashboard, and room optimization. The screens show what the AI reviews, why it flags a room, and where a host can accept, adjust, or reject a suggestion.",
    reflection:
      "The biggest product lesson was that AI tools need a point of view about responsibility. For Staybooked, the useful output is not spectacle; it is a believable next step a host can evaluate before changing a listing.",
  },
  "covelo-timecard-system": {
    hook:
      "Covelo needed a workforce portal where timecards, approvals, exceptions, and exports could move through one operating model instead of several disconnected workflows.",
    setup:
      "The product served staff, approvers, and operations users who each touched the same time record for different reasons. The design challenge was not only making screens; it was keeping role boundaries clear while the work moved toward payroll and billing handoffs.",
    research:
      "The workflow mapping started with what each role needed to know before touching a record. Staff needed shift and submission context, approvers needed review queues, and operations needed exception visibility before exports.",
    constraint:
      "Daily use had to stay simple while the product still respected heavier requirements: invite-only access, RBAC, district-scoped data, audit history, and typed API contracts.",
    decision:
      "I organized the MVP around three role-specific workspaces tied to one record model: Staff submission, Approver review, and Ops/Admin exception management.",
    build:
      "I designed and built the frontend for staff dashboards, clock and timesheet flows, approver inboxes, exception queues, assignment and member management, settings, and export-oriented operations work.",
    proof:
      "The client received a completed solo MVP and deployed demo with role-aware workflows, product screenshots, and technical framing for auth, RBAC, APIs, Postgres-oriented contracts, and exports.",
    reflection:
      "The strongest UX decision was keeping one operational record visible through different role views. That kept the product coherent without forcing every team to rebuild context from scratch.",
  },
  "pretty-paws-grooming": {
    hook:
      "Pretty Paws needed a site that felt polished, but the real product problem was trust: pet owners needed clear service information before sending an appointment request.",
    setup:
      "Local service websites succeed when the basic questions are easy to answer. Where is the business? What services are offered? What happens after I ask for an appointment? The project had to make those answers visible without inventing claims the source material could not support.",
    research:
      "The strongest signal came from the customer's path. A pet owner is likely to compare services, check business details, open the service that fits their pet, and then send a request from a phone or desktop.",
    constraint:
      "The site needed a premium pet-spa feel while keeping booking language honest. A submitted form is not a confirmed appointment, and merch could not be treated as live commerce before fulfillment details were ready.",
    decision:
      "I centered the experience on service browsing, service detail routes, request-based booking, contact clarity, policies, and real local media instead of a generic brochure page.",
    build:
      "I built the Vite and React site with public routes for the homepage, services, service details, booking, policies, store, product details, checkout states, and fallback handling, with Supabase-backed booking and contact submissions.",
    proof:
      "The portfolio includes before-and-after screenshots, local media, a live Netlify deployment, service and booking routes, contact capture, policies, and a paused merch surface with honest launch state.",
    reflection:
      "The project reinforced that small-business UX is often about restraint. Make the business feel real, keep the next action obvious, and avoid turning uncertainty into a promise.",
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
    role: "UX/UI Designer and Frontend Developer",
    problem:
      "Teams and learners needed a fast AI readiness baseline before committing to training, certification, or paid rollout plans.",
    decision:
      "Compress assessment into a five-minute flow, then connect the result to recommendations, training, certification, billing, and admin visibility.",
    outcome:
      "Shipped an MVP around Assess, Activate, and Certify: assessment, recommendations, training modules, certification, dashboard, auth, and billing.",
    tools: ["React", "Vite", "Tailwind CSS", "Supabase", "Stripe"],
    owned: ["Assessment UX", "Results logic", "Training path", "Certification and billing UI"],
    metrics: [
      { value: "15", label: "Assessment questions", kind: "delivery-fact" },
      { value: "5", label: "Readiness domains", kind: "delivery-fact" },
      { value: "3", label: "Subscription tiers", kind: "delivery-fact" },
    ],
  },
  "cllctve-platform": {
    role: "UX/UI Designer and Frontend Engineer",
    problem:
      "Gen Z creators needed a mobile-first portfolio experience that felt closer to how they already shared work.",
    decision:
      "Prioritize mobile creation and feedback loops over desktop feature parity with older portfolio platforms.",
    outcome:
      "Reached 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
    tools: ["Figma", "React", "Ant Design", "MongoDB", "Styled Components"],
    owned: ["Mobile portfolio flow", "Creator feedback loops", "Design system", "Mobile behavior synthesis"],
    metrics: [
      { value: "500+", label: "Creators on platform", kind: "measured-outcome", context: "Reported in the resume." },
      { value: "85%", label: "Creator retention", kind: "measured-outcome", context: "Reported in the resume." },
      { value: "15", label: "Brand partnerships", kind: "measured-outcome", context: "Reported in the resume." },
    ],
  },
  "symptom-checkr": {
    role: "UX/UI Designer",
    problem:
      "Symptom guidance can make people more anxious when it does not show confidence, sources, or limits.",
    outcome:
      "Designed a calmer AI-assisted flow with confidence levels, citations, and saved reports for follow-up care.",
    tools: ["Figma", "AI guidance", "Journey mapping", "Health UX"],
    owned: ["Guidance model", "Assessment UI", "Citation patterns", "Saved report flow"],
  },
  "vaultjs-validate": {
    role: "UX/UI Designer and Frontend Developer",
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
    role: "UX/UI Designer and Frontend Developer",
    problem:
      "Teachers needed to reach students who lacked reliable internet or smart devices during remote learning.",
    outcome:
      "Built the educator-facing dashboard for SMS-based assignments, progress tracking, and communication.",
    tools: ["React", "Redux", "Node.js", "Express", "Ant Design"],
    owned: ["Teacher dashboard", "Responsive UI", "Progress views", "Frontend integration"],
  },
  "tech-noir": {
    role: "UX/UI and Visual Designer",
    problem:
      "Shoppers were interested in wearable tech but struggled to understand fit, styling, and everyday use.",
    outcome:
      "75% of testers felt more confident exploring wearable tech after the mobile shopping prototype.",
    tools: ["Figma", "Adobe XD", "Illustrator", "Miro", "UserZoom"],
    owned: ["Research synthesis", "Mobile commerce flow", "Luxury visual system", "Prototype testing"],
  },
  "doggy-date": {
    role: "UX/UI and Visual Designer",
    problem:
      "A dating-style product for dog owners needed a reason to feel more useful than another swipe app.",
    outcome:
      "Created a community-focused app concept around local connections, profiles, and shared dog-friendly places.",
    tools: ["Adobe XD", "Photoshop", "Illustrator", "User interviews"],
    owned: ["Concept strategy", "Audience model", "Wireframes", "Visual design"],
  },
  "improv-learning": {
    role: "UI Designer",
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
    role: "UX/UI Designer and Frontend Developer",
    problem:
      "A client wanted to prove a music app could feel calm and focused instead of becoming another social feed.",
    outcome:
      "Built a responsive MVP that kept the listening experience simple enough for validation and user testing.",
    tools: ["React", "Firebase", "Bootstrap", "CSS Modules"],
    owned: ["MVP interface", "Responsive player", "Frontend build", "Client validation flow"],
  },
  "bobs-big-break": {
    role: "UX/UI Designer and Web Developer",
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
    tools: ["Next.js", "TypeScript", "Postgres", "Figma", "REST APIs"],
    owned: ["Product design", "Frontend build", "Role workflows", "Client demo"],
    metrics: [
      { value: "Solo", label: "Client build" },
      { value: "3", label: "Role-specific workspaces" },
      { value: "March 2026", label: "Deployed demo" },
    ],
  },
  "pretty-paws-grooming": {
    role: "UX/UI Designer & Frontend Developer",
    problem:
      "A local grooming salon needed a web experience that made services, booking, contact details, and policies easy to trust from mobile or desktop.",
    decision:
      "Build around the real appointment path: service browsing, service detail pages, a preselected booking request, and clear follow-up language.",
    outcome:
      "Created a live Netlify site with service routes, booking and contact submissions, policy coverage, and local media assets.",
    tools: ["Vite", "React", "TypeScript", "Tailwind CSS", "Supabase", "Netlify"],
    owned: ["Public routes", "Booking flow", "Before/after visuals"],
  },
};

export const caseStudyProcessArtifacts: Partial<
  Record<string, CaseStudyProcessArtifact[]>
> = {
  "litmus-ai": [
    {
      type: "sitemap",
      title: "Assess, Activate, Certify product map",
      image: "/images/litmus-ai/process/litmus-ai-sitemap.svg",
      alt:
        "Litmus AI sitemap connecting home, assessment, results, training, certification, billing, dashboard, profile, login, and registration routes.",
      insight:
        "The map keeps the free readiness check close to the paid learning and certification paths instead of treating assessment as a dead end.",
      connectsPersonaNeedTo:
        "Learners need a quick baseline; the product needs that baseline to create a clear path into training, certification, or team rollout.",
    },
    {
      type: "user-flow",
      title: "Readiness assessment to learning path",
      image: "/images/litmus-ai/process/litmus-ai-assessment-flow.svg",
      alt:
        "Litmus AI user flow from starting the assessment through level selection, 15 questions, score review, recommendations, training, certification, and billing.",
      insight:
        "The core loop makes the score useful immediately by pairing readiness gaps with the next action instead of ending at a percentage.",
      connectsPersonaNeedTo:
        "Learners need to know what to do after the score; teams need progress and subscription signals tied to the same path.",
    },
    {
      type: "wireframe",
      title: "Assessment setup wireframe",
      image: "/images/litmus-ai/process/litmus-ai-wireframe-assessment.svg",
      alt:
        "Low-fidelity Litmus AI assessment setup wireframe based on the assessment screenshot, with calibration panel, level cards, timing cues, and start action.",
      insight:
        "The setup screen gives users enough context to choose a starting level without making the assessment feel heavy.",
      connectsPersonaNeedTo:
        "Learners need confidence that the test is credible; the product needs completion momentum before recommending training.",
    },
    {
      type: "wireframe",
      title: "Training path wireframe",
      image: "/images/litmus-ai/process/litmus-ai-wireframe-training-path.svg",
      alt:
        "Low-fidelity Litmus AI training path wireframe based on the training hub screenshot, with filter chips, module cards, learning bullets, and module actions.",
      insight:
        "The training screen turns the assessment promise into concrete role-based modules that show what to do after the score.",
      connectsPersonaNeedTo:
        "Learners need a next step they can act on; the business needs the free assessment to lead naturally into learning and certification.",
    },
  ],
  "cllctve-platform": [
    {
      type: "sitemap",
      title: "Product map",
      image: "/images/cllctve/process/cllctve-sitemap.svg",
      alt:
        "CLLCTVE sitemap connecting the landing page, creator discovery, creator profiles, challenges, brand collaboration, login, and signup routes.",
      insight:
        "The route map keeps discovery and opportunity close together instead of treating a portfolio as a static destination.",
      connectsPersonaNeedTo:
        "Creators need one shareable home for scattered work; the business needs a browsable creator inventory for brands.",
    },
    {
      type: "user-flow",
      title: "Creator to brand-opportunity flow",
      image: "/images/cllctve/process/cllctve-creator-flow.svg",
      alt:
        "CLLCTVE user flow from signup through profile creation, feedback, challenge discovery, and brand opportunity review.",
      insight:
        "The main loop gives creators a reason to return: update work, get community response, and find a relevant brand challenge.",
      connectsPersonaNeedTo:
        "Fast profile updates support creator momentum; return loops support retention and partner challenge supply.",
    },
    {
      type: "wireframe",
      title: "Profile builder wireframe",
      image: "/images/cllctve/process/cllctve-wireframe-profile-builder.svg",
      alt:
        "Low-fidelity CLLCTVE creator profile builder wireframe with profile details, work cards, and share actions.",
      insight:
        "The profile builder starts with identity and recent work before deeper customization, so creators can publish without a blank-page problem.",
      connectsPersonaNeedTo:
        "Creators need edit speed; the product needs enough structure for profiles to stay consistent and brand-readable.",
    },
    {
      type: "wireframe",
      title: "Discovery feed wireframe",
      image: "/images/cllctve/process/cllctve-wireframe-discovery-feed.svg",
      alt:
        "Low-fidelity CLLCTVE discovery feed wireframe with creator cards, challenge prompts, and community feedback actions.",
      insight:
        "The feed puts work, feedback, and challenges in the same scanning path instead of splitting discovery from opportunity.",
      connectsPersonaNeedTo:
        "Creators need response and reach; brands need a cleaner path to find active talent.",
    },
  ],
};

export const caseStudyImpacts: Partial<Record<string, CaseStudyImpact>> = {
  "litmus-ai": {
    title: "What the MVP made testable",
    summary:
      "Litmus AI shipped the full assessment path: choose a level, answer 15 questions, review five readiness domains, and continue into training or certification. Completion and comprehension still need measurement.",
    framing: "mvp-proof",
    metrics: [
      {
        value: "15",
        label: "Assessment questions",
        kind: "delivery-fact",
      },
      {
        value: "5 min",
        label: "Assessment target",
        kind: "design-target",
        context: "Target duration, not a measured completion time.",
      },
      {
        value: "5",
        label: "Readiness domains",
        kind: "delivery-fact",
      },
    ],
    notes: [
      "The first study should measure start-to-completion rate and the time learners spend on each question.",
      "Result comprehension matters as much as speed: learners should understand why a domain score leads to a specific training path.",
      "Team buyers need a separate check for whether the five-domain view supports a real training decision.",
    ],
  },
  "cllctve-platform": {
    title: "What the product proved",
    summary:
      "A focused mobile workflow attracted creators and brand partners without matching every desktop portfolio feature. The company later closed, so the case study separates product traction from business survival.",
    framing: "measured-outcomes",
    metrics: [
      { value: "500+", label: "Creators on platform", kind: "measured-outcome", context: "Reported in the resume." },
      { value: "15", label: "Brand partnerships", kind: "measured-outcome", context: "Reported in the resume." },
      { value: "85%", label: "Creator retention", kind: "measured-outcome", context: "Reported in the resume." },
    ],
    notes: [
      "The strongest product signal was retention: creators had a reason to come back, not only a place to publish once.",
      "The brand-partnership count gave the creator-side experience a business reason to exist.",
      "The company closed, so the case study stays honest about product traction without overstating business survival.",
    ],
  },
  staybooked: {
    title: "What the MVP made judgeable",
    summary:
      "Staybooked turns listing optimization into a short loop: audit the listing, show what guests judge first, fix one room, and re-check the work against the real property.",
    framing: "measurement-plan",
    metrics: [
      {
        value: "1 loop",
        label: "Audit, fix, re-check",
        kind: "delivery-fact",
      },
      {
        value: "4",
        label: "Connected product surfaces",
        kind: "delivery-fact",
      },
      {
        value: "0",
        label: "Fabrications allowed",
        kind: "product-guardrail",
        context: "A product requirement, not a measured user outcome.",
      },
    ],
    notes: [
      "The audit gives hosts a starting point before they change a room photo or rewrite listing copy.",
      "The room optimizer keeps each suggestion attached to the source photo and property details so a host can accept, revise, or reject it with context.",
      "The next study should track audit-to-fix completion, photo updates, and whether optimized listings convert more visitors into bookings.",
    ],
  },
};

export const projectPersonaJourneys: Record<
  ProjectPersonaJourneySlug,
  ProjectPersonaJourney
> = {
  "cllctve-platform": {
    persona: {
      role: "Gen Z creator building a public body of work from a phone.",
      context:
        "Their projects, collaborations, and identity live across social channels, screenshots, and brand challenge submissions.",
      goal:
        "Turn scattered work into a mobile-first portfolio that feels current enough to share with collaborators and brands.",
      friction:
        "Traditional portfolio tools feel too desktop-heavy, too slow to update, and too disconnected from how creators already publish.",
      need:
        "A lightweight profile flow, fast feedback loops, and enough structure to make the work feel credible without flattening the creator's style.",
    },
    journey: [
      {
        label: "Collect work",
        description:
          "Bring recent projects, visuals, and creator details into one profile instead of sending people across several links.",
      },
      {
        label: "Shape the profile",
        description:
          "Use a mobile-native portfolio flow that can be edited quickly and still read as intentional.",
      },
      {
        label: "Share for feedback",
        description:
          "Put work in front of peers, brands, and community moments where feedback can create momentum.",
      },
      {
        label: "Return for opportunity",
        description:
          "Keep the portfolio active as new challenges, collaborations, and brand work come in.",
      },
    ],
  },
  "tutor-d": {
    persona: {
      role: "Teacher supporting students who do not always have reliable internet or smart devices.",
      context:
        "Remote learning is happening through a mix of SMS, basic phones, informal messages, and manual progress tracking.",
      goal:
        "Send assignments, see who responded, and know which students need follow-up without rebuilding the class workflow each day.",
      friction:
        "Most online learning tools assume stable internet, full browsers, and student devices that this audience may not have.",
      need:
        "An educator dashboard that treats SMS constraints as a product requirement, not a fallback channel.",
    },
    journey: [
      {
        label: "Prepare the lesson",
        description:
          "Choose the assignment and translate it into a format students can receive on basic phones.",
      },
      {
        label: "Send by SMS",
        description:
          "Deliver the work through the channel students can actually access instead of forcing a full web session.",
      },
      {
        label: "Track responses",
        description:
          "Review completion, gaps, and student replies from one teacher-facing view.",
      },
      {
        label: "Follow up",
        description:
          "Use progress signals to decide who needs reminders, support, or a different path through the material.",
      },
    ],
  },
  "tech-noir": {
    persona: {
      role: "Style-conscious shopper curious about wearable technology.",
      context:
        "They understand fashion cues faster than technical specs and want to know how connected accessories fit into daily style.",
      goal:
        "Explore wearable tech without feeling like the product belongs only to gadget enthusiasts.",
      friction:
        "The category can feel unclear, overly technical, and hard to picture with real outfits.",
      need:
        "Editorial guidance, styling context, and try-on moments that make the product feel wearable before purchase.",
    },
    journey: [
      {
        label: "Enter through style",
        description:
          "Browse collections and editorial cues before digging into the technology underneath.",
      },
      {
        label: "Learn the fit",
        description:
          "Compare product details with styling guidance so the accessory feels understandable.",
      },
      {
        label: "Preview the look",
        description:
          "Use try-on and visual concepts to imagine the wearable in a real outfit.",
      },
      {
        label: "Decide with confidence",
        description:
          "Move toward purchase with enough context to trust both the tech and the aesthetic.",
      },
    ],
  },
  "doggy-date": {
    persona: {
      role: "Dog owner looking for local connection beyond another swipe app.",
      context:
        "They want their dog to be part of their social life, from walks and meetups to shared dog-friendly places.",
      goal:
        "Find nearby people and dogs with compatible interests, routines, and community habits.",
      friction:
        "A dating-style interface can feel shallow if it does not give users a reason to keep engaging after the first match.",
      need:
        "Profiles, messaging, and local discovery that make the product feel like a dog-centered community rather than a novelty.",
    },
    journey: [
      {
        label: "Create the pair profile",
        description:
          "Set up identity for both owner and dog so matches have more context than a single photo.",
      },
      {
        label: "Browse nearby matches",
        description:
          "Scan local people, dogs, and interests through a familiar discovery pattern.",
      },
      {
        label: "Start a conversation",
        description:
          "Use free messaging to turn a match into a practical meetup or shared dog activity.",
      },
      {
        label: "Build local habit",
        description:
          "Return for parks, places, and community connections that keep the app useful after matching.",
      },
    ],
  },
  "improv-learning": {
    persona: {
      role: "GEICO referral visitor deciding whether an online traffic school is legitimate.",
      context:
        "They arrive on mobile with limited patience and need to understand the course, credibility, and next step quickly.",
      goal:
        "Confirm the course is trustworthy, relevant, and easy enough to start without reading a long sales page.",
      friction:
        "Online traffic school pages can feel cluttered, generic, or uncertain about what the user gets after signing up.",
      need:
        "A co-branded landing page with clear trust signals, short benefit hierarchy, and visible enrollment path.",
    },
    journey: [
      {
        label: "Land from referral",
        description:
          "Arrive from the GEICO partnership path and immediately check whether the page feels legitimate.",
      },
      {
        label: "Scan the promise",
        description:
          "Understand the course value, requirements, and credibility without digging through dense copy.",
      },
      {
        label: "Compare effort",
        description:
          "Look for reassurance that the course is simple enough to complete from the current device.",
      },
      {
        label: "Start enrollment",
        description:
          "Move into signup through a prominent call to action that does not compete with extra content.",
      },
    ],
  },
  wristband: {
    persona: {
      role: "Mobile reader who wants interactive stories with stronger character depth.",
      context:
        "They are open to choice-driven stories, but they notice when narratives feel repetitive or representation feels shallow.",
      goal:
        "Find stories where choices matter and characters feel specific enough to care about.",
      friction:
        "Interactive storytelling can drift toward quantity, thin branching, and character templates that do not hold attention.",
      need:
        "A narrative product that puts authentic creator input, meaningful choices, and richer character development into the core flow.",
    },
    journey: [
      {
        label: "Discover a story",
        description:
          "Browse a mobile story library organized around character, genre, and creator signals.",
      },
      {
        label: "Assess the cast",
        description:
          "Look for enough character and representation detail to trust the story before starting.",
      },
      {
        label: "Make choices",
        description:
          "Move through branching moments that give the reader agency without breaking the narrative.",
      },
      {
        label: "Follow the creator",
        description:
          "Return for new stories, creator updates, and community discovery around the work.",
      },
    ],
  },
  "chill-vibes-music-player": {
    persona: {
      role: "Listener who wants a calm player focused on the music itself.",
      context:
        "They are tired of music apps that turn listening into another busy social or recommendation surface.",
      goal:
        "Start a listening session quickly, stay oriented, and avoid extra interface noise.",
      friction:
        "Large streaming products often bury playback behind feeds, menus, social layers, and competing actions.",
      need:
        "A responsive MVP that keeps core playback clear enough for client validation and user testing.",
    },
    journey: [
      {
        label: "Open the player",
        description:
          "Arrive at a focused interface where playback is the main task, not a secondary action.",
      },
      {
        label: "Choose music",
        description:
          "Browse enough content to start listening without navigating through a heavy media library.",
      },
      {
        label: "Control playback",
        description:
          "Use clear controls and responsive layout to keep the session comfortable across devices.",
      },
      {
        label: "Return to listen",
        description:
          "Come back for a simple listening experience that does not ask for social engagement first.",
      },
    ],
  },
  "bobs-big-break": {
    persona: {
      role: "Casual player looking for quick progress in short sessions.",
      context:
        "They want a low-friction game loop that rewards a few clicks now and passive progress later.",
      goal:
        "Help Bob earn, upgrade, and feel momentum without learning a complex system.",
      friction:
        "Idle games can become overwhelming when the economy, upgrades, and feedback are introduced too fast.",
      need:
        "A readable loop where clicking, passive income, and upgrades make sense within the first minute.",
    },
    journey: [
      {
        label: "Learn the loop",
        description:
          "Click to earn coins and understand the core action without a long tutorial.",
      },
      {
        label: "Buy upgrades",
        description:
          "Turn early earnings into clearer progress through hustles and passive income.",
      },
      {
        label: "Watch momentum build",
        description:
          "See the economy respond so short play sessions still feel productive.",
      },
      {
        label: "Return for growth",
        description:
          "Come back to spend earnings, unlock more progress, and keep Bob moving.",
      },
    ],
  },
  "symptom-checkr": {
    persona: {
      role: "Person checking symptoms who needs clarity without a fake diagnosis.",
      context:
        "They may be anxious, overloaded, or trying to decide whether their next step should be self-care, telehealth, or urgent support.",
      goal:
        "Understand what the system considered, how confident it is, and what practical action to take next.",
      friction:
        "Health guidance can create more anxiety when it hides uncertainty or presents a single answer without context.",
      need:
        "A cautious AI-assisted flow with confidence levels, sources, and saved reports for follow-up care.",
    },
    journey: [
      {
        label: "Describe symptoms",
        description:
          "Enter the current concern in a guided flow that keeps the language plain and calm.",
      },
      {
        label: "Review confidence",
        description:
          "See the likely direction and uncertainty instead of a sealed black-box answer.",
      },
      {
        label: "Check sources",
        description:
          "Use citations and reasoning cues to decide how much weight to give the guidance.",
      },
      {
        label: "Save next steps",
        description:
          "Keep the report and follow-up path available if clinical care or telehealth is needed.",
      },
    ],
  },
  "litmus-ai": {
    persona: {
      role: "Learner or team lead trying to make AI training practical.",
      context:
        "They need to understand practical AI literacy before choosing training, buying seats, or claiming that a team is ready.",
      goal:
        "Get a credible readiness signal in minutes and know which learning path should come next.",
      friction:
        "Traditional certifications and courses ask for too much time before users learn whether the content fits their level.",
      need:
        "A short assessment, readable results, recommendations, and credentials that make the score useful after the session.",
    },
    journey: [
      {
        label: "Calibrate level",
        description:
          "Pick a starting level so the first question set feels relevant instead of generic.",
      },
      {
        label: "Answer the test",
        description:
          "Move through 15 practical questions across AI concepts, communication, ethics, and workplace judgment.",
      },
      {
        label: "Read the result",
        description:
          "See the readiness score, domain gaps, and plain-language recommendations before committing to training.",
      },
      {
        label: "Choose a path",
        description:
          "Continue into training, certification, billing, or dashboard review only when the score gives a reason.",
      },
    ],
  },
  "vaultjs-validate": {
    persona: {
      role: "Security analyst triaging third-party script risk.",
      context:
        "They already have enough alerts and need to know which scripts matter, why they matter, and what to fix first.",
      goal:
        "Move from scan output to prioritized remediation without translating every finding manually.",
      friction:
        "Security dashboards often show dense warnings but leave the analyst to assemble context, impact, and next steps.",
      need:
        "Risk visualization, plain-English issue context, and an AI-assisted remediation path that stays reviewable.",
    },
    journey: [
      {
        label: "Scan the surface",
        description:
          "Review third-party scripts, vendor relationships, and exposure patterns in one monitoring view.",
      },
      {
        label: "Find priority risk",
        description:
          "Separate urgent findings from background noise using readable severity and relationship cues.",
      },
      {
        label: "Understand the issue",
        description:
          "Translate technical vulnerability context into language that supports action and communication.",
      },
      {
        label: "Review the fix",
        description:
          "Use generated remediation as a starting point while keeping the analyst in the approval loop.",
      },
    ],
  },
  "scent-stack": {
    persona: {
      role: "Fragrance shopper translating taste into affordable or layerable options.",
      context:
        "They know what they like, but luxury pricing, scattered dupe knowledge, and fragrance vocabulary make discovery harder than it should be.",
      goal:
        "Find credible alternatives, compare value, and turn scent ideas into products or combinations.",
      friction:
        "Dupe research lives across forums and reviews, while layering advice assumes insider knowledge.",
      need:
        "A searchable dupe database, natural-language scent matching, and photo-based layering guidance.",
    },
    journey: [
      {
        label: "Search the scent",
        description:
          "Look up a fragrance, brand, note, or desired mood without needing expert vocabulary.",
      },
      {
        label: "Compare alternatives",
        description:
          "See affordable options next to luxury originals so the value tradeoff is visible.",
      },
      {
        label: "Describe the dream",
        description:
          "Use natural language to translate an imagined scent profile into recommendations.",
      },
      {
        label: "Try a layer",
        description:
          "Use existing collection context to explore combinations that feel personal and practical.",
      },
    ],
  },
  staybooked: {
    persona: {
      role: "Independent host tightening up a short-term rental listing before guests book.",
      context:
        "They manage real rooms and need better photos, copy, amenities, and trust cues without overselling the property.",
      goal:
        "Find the weak spots in a listing, turn them into practical fixes, and save the work for the next update.",
      friction:
        "Most AI image tools make the room look better than it is, which creates the wrong expectation for guests.",
      need:
        "A workspace that keeps AI suggestions tied to the real room, property details, and booking context.",
    },
    journey: [
      {
        label: "Find the listing gap",
        description:
          "Start with the photo, title, copy, amenity, or trust cue that could make a guest hesitate.",
      },
      {
        label: "Upload room context",
        description:
          "Add real room and property details so the suggestions stay grounded.",
      },
      {
        label: "Review direction",
        description:
          "Check recommendations as listing improvements, not fantasy renovation claims.",
      },
      {
        label: "Save the work",
        description:
          "Keep the property context, outputs, and next actions in one workspace.",
      },
    ],
  },
  "covelo-timecard-system": {
    persona: {
      role: "Operations lead coordinating timecards, approvals, exceptions, and exports.",
      context:
        "Staff, approvers, and operations teams need one district-scoped operating model without weakening role boundaries.",
      goal:
        "Reduce fragmented timekeeping work while preserving review, compliance, and export readiness.",
      friction:
        "Separate workflows create manual reconciliation, unclear ownership, and risk around exceptions or approvals.",
      need:
        "Role-specific portals tied to the same timecard system, audit history, and exception-management flow.",
    },
    journey: [
      {
        label: "Submit time",
        description:
          "Staff enter time and assignment details through a focused submission workflow.",
      },
      {
        label: "Review approvals",
        description:
          "Approvers work through a queue with enough context to approve, reject, or ask for correction.",
      },
      {
        label: "Resolve exceptions",
        description:
          "Operations users identify compliance issues and fix blockers before export prep.",
      },
      {
        label: "Prepare export",
        description:
          "Move approved records toward downstream reporting without losing tenant or role boundaries.",
      },
    ],
  },
  "pretty-paws-grooming": {
    persona: {
      role: "Local pet owner comparing grooming services and requesting an appointment.",
      context:
        "They need to understand services, policies, location details, and appointment expectations from mobile or desktop.",
      goal:
        "Choose the right service and send a request with confidence that the salon will follow up.",
      friction:
        "Small-business websites often blur service details, contact paths, and whether booking is confirmed or only requested.",
      need:
        "A polished service path with clear details, request-based booking language, and local trust cues.",
    },
    journey: [
      {
        label: "Compare services",
        description:
          "Scan grooming options, policies, and business details before deciding what fits the pet.",
      },
      {
        label: "Pick a service",
        description:
          "Open a service detail page and understand what the appointment request will include.",
      },
      {
        label: "Request booking",
        description:
          "Send contact and appointment details through a form that keeps confirmation language honest.",
      },
      {
        label: "Wait for follow-up",
        description:
          "Leave the site knowing the request was submitted and the salon still needs to confirm availability.",
      },
    ],
  },
};

export const projectPersonaProfiles: Partial<Record<
  ProjectPersonaJourneySlug,
  ProjectPersonaProfile
>> = {
  "tutor-d": {
    name: "Ms. Carter",
    title: "SMS-first teacher",
    image: "/images/personas/tutor-d.jpg",
    imageAlt:
      "Generated portrait of Ms. Carter, an SMS-first teacher persona for the Tutor D case study.",
    theme: {
      background: "linear-gradient(135deg, #0e6d68 0%, #24a98c 58%, #f0a94c 100%)",
      panel: "rgba(255, 255, 255, 0.14)",
      line: "rgba(255, 255, 255, 0.38)",
      ink: "#f8fffb",
      muted: "rgba(248, 255, 251, 0.78)",
      accent: "#ffe6a6",
      shadow: "rgba(14, 109, 104, 0.32)",
    },
    about: [
      { label: "Role", value: "Remote learning teacher" },
      { label: "Constraint", value: "Unreliable student access" },
      { label: "Workflow", value: "Assign, track, follow up" },
    ],
    attributes: [
      { label: "Access equity", score: 94 },
      { label: "Lesson clarity", score: 82 },
      { label: "Response tracking", score: 88 },
      { label: "Teacher speed", score: 79 },
      { label: "Device tolerance", score: 96 },
    ],
  },
  "tech-noir": {
    name: "Ari",
    title: "Wearable tech shopper",
    image: "/images/personas/tech-noir.jpg",
    imageAlt:
      "Generated portrait of Ari, a wearable tech shopper persona for the Tech Noir case study.",
    theme: {
      background: "linear-gradient(135deg, #12121d 0%, #512872 52%, #00a6c8 100%)",
      panel: "rgba(255, 255, 255, 0.12)",
      line: "rgba(255, 255, 255, 0.34)",
      ink: "#fbfbff",
      muted: "rgba(251, 251, 255, 0.74)",
      accent: "#7ff3ff",
      shadow: "rgba(0, 166, 200, 0.3)",
    },
    about: [
      { label: "Role", value: "Style-led explorer" },
      { label: "Entry point", value: "Fashion before specs" },
      { label: "Decision mode", value: "Picture it in daily wear" },
    ],
    attributes: [
      { label: "Style confidence", score: 91 },
      { label: "Spec clarity", score: 72 },
      { label: "Try-on value", score: 86 },
      { label: "Editorial trust", score: 78 },
      { label: "Purchase intent", score: 74 },
    ],
  },
  "doggy-date": {
    name: "Nina",
    title: "Dog-centered connector",
    image: "/images/personas/doggy-date.jpg",
    imageAlt:
      "Generated portrait of Nina, a dog-centered connector persona for the Doggy Date case study.",
    theme: {
      background: "linear-gradient(135deg, #247ba0 0%, #62b67f 54%, #f5b84b 100%)",
      panel: "rgba(255, 255, 255, 0.14)",
      line: "rgba(255, 255, 255, 0.4)",
      ink: "#fbfffd",
      muted: "rgba(251, 255, 253, 0.78)",
      accent: "#fff1ba",
      shadow: "rgba(36, 123, 160, 0.3)",
    },
    about: [
      { label: "Role", value: "Local dog owner" },
      { label: "Social goal", value: "Meet people through routines" },
      { label: "Retention cue", value: "Places, parks, and plans" },
    ],
    attributes: [
      { label: "Local relevance", score: 89 },
      { label: "Profile depth", score: 76 },
      { label: "Message comfort", score: 81 },
      { label: "Community habit", score: 85 },
      { label: "Novelty control", score: 69 },
    ],
  },
  "improv-learning": {
    name: "Jordan",
    title: "Referral course visitor",
    image: "/images/personas/improv-learning.jpg",
    imageAlt:
      "Generated portrait of Jordan, a referral course visitor persona for the Improv Learning case study.",
    theme: {
      background: "linear-gradient(135deg, #0f4c81 0%, #3b7dd8 48%, #ff8b45 100%)",
      panel: "rgba(255, 255, 255, 0.14)",
      line: "rgba(255, 255, 255, 0.38)",
      ink: "#f8fbff",
      muted: "rgba(248, 251, 255, 0.78)",
      accent: "#ffe3b0",
      shadow: "rgba(15, 76, 129, 0.3)",
    },
    about: [
      { label: "Role", value: "Mobile referral visitor" },
      { label: "Trust check", value: "Co-brand and course proof" },
      { label: "Decision mode", value: "Scan quickly, then enroll" },
    ],
    attributes: [
      { label: "Referral trust", score: 88 },
      { label: "Copy clarity", score: 84 },
      { label: "Enrollment speed", score: 82 },
      { label: "Mobile scanning", score: 90 },
      { label: "Effort confidence", score: 75 },
    ],
  },
  wristband: {
    name: "Leah",
    title: "Interactive story reader",
    image: "/images/personas/wristband.jpg",
    imageAlt:
      "Generated portrait of Leah, an interactive story reader persona for the Wristband case study.",
    theme: {
      background: "linear-gradient(135deg, #4b2a73 0%, #9b4a9d 52%, #f07893 100%)",
      panel: "rgba(255, 255, 255, 0.14)",
      line: "rgba(255, 255, 255, 0.38)",
      ink: "#fff9ff",
      muted: "rgba(255, 249, 255, 0.78)",
      accent: "#ffd4f1",
      shadow: "rgba(75, 42, 115, 0.34)",
    },
    about: [
      { label: "Role", value: "Mobile fiction reader" },
      { label: "Taste signal", value: "Characters with depth" },
      { label: "Decision mode", value: "Start when choices feel real" },
    ],
    attributes: [
      { label: "Character depth", score: 94 },
      { label: "Choice meaning", score: 88 },
      { label: "Creator trust", score: 82 },
      { label: "Mobile rhythm", score: 86 },
      { label: "Representation", score: 91 },
    ],
  },
  "chill-vibes-music-player": {
    name: "Eli",
    title: "Focused listener",
    image: "/images/personas/chill-vibes-music-player.jpg",
    imageAlt:
      "Generated portrait of Eli, a focused listener persona for the Chill Vibes Music Player case study.",
    theme: {
      background: "linear-gradient(135deg, #0e7478 0%, #59b6a6 56%, #f1d9a7 100%)",
      panel: "rgba(255, 255, 255, 0.15)",
      line: "rgba(255, 255, 255, 0.4)",
      ink: "#f7fffd",
      muted: "rgba(247, 255, 253, 0.78)",
      accent: "#fff1c9",
      shadow: "rgba(14, 116, 120, 0.3)",
    },
    about: [
      { label: "Role", value: "Calm music listener" },
      { label: "Primary task", value: "Start playback without noise" },
      { label: "Session mode", value: "Browse lightly, listen longer" },
    ],
    attributes: [
      { label: "Control clarity", score: 88 },
      { label: "Visual calm", score: 92 },
      { label: "Browse effort", score: 72 },
      { label: "Responsive comfort", score: 84 },
      { label: "Client testability", score: 78 },
    ],
  },
  "bobs-big-break": {
    name: "Drew",
    title: "Short-session player",
    image: "/images/personas/bobs-big-break.jpg",
    imageAlt:
      "Generated portrait of Drew, a short-session player persona for the Bob's Big Break case study.",
    theme: {
      background: "linear-gradient(135deg, #1f5fc4 0%, #5e8cf2 52%, #f6be3f 100%)",
      panel: "rgba(255, 255, 255, 0.15)",
      line: "rgba(255, 255, 255, 0.4)",
      ink: "#fbfdff",
      muted: "rgba(251, 253, 255, 0.78)",
      accent: "#fff1a8",
      shadow: "rgba(31, 95, 196, 0.3)",
    },
    about: [
      { label: "Role", value: "Casual progress seeker" },
      { label: "Time window", value: "Tiny sessions, visible gains" },
      { label: "Decision mode", value: "Click, upgrade, return" },
    ],
    attributes: [
      { label: "Loop clarity", score: 91 },
      { label: "Upgrade pull", score: 86 },
      { label: "Economy pacing", score: 79 },
      { label: "First-minute read", score: 88 },
      { label: "Return habit", score: 76 },
    ],
  },
  "symptom-checkr": {
    name: "Sam",
    title: "Cautious health checker",
    image: "/images/personas/symptom-checkr.jpg",
    imageAlt:
      "Generated portrait of Sam, a cautious health checker persona for the Symptom Checkr case study.",
    theme: {
      background: "linear-gradient(135deg, #2f6f9f 0%, #6aa9ce 52%, #f1a38e 100%)",
      panel: "rgba(255, 255, 255, 0.16)",
      line: "rgba(255, 255, 255, 0.42)",
      ink: "#fbfdff",
      muted: "rgba(251, 253, 255, 0.8)",
      accent: "#ffe4d8",
      shadow: "rgba(47, 111, 159, 0.28)",
    },
    about: [
      { label: "Role", value: "Anxious symptom checker" },
      { label: "Trust need", value: "Uncertainty made visible" },
      { label: "Decision mode", value: "Understand before acting" },
    ],
    attributes: [
      { label: "Calm language", score: 91 },
      { label: "Confidence cues", score: 88 },
      { label: "Source visibility", score: 84 },
      { label: "Next-step clarity", score: 86 },
      { label: "Safety framing", score: 94 },
    ],
  },
  "vaultjs-validate": {
    name: "Owen",
    title: "Security risk triager",
    image: "/images/personas/vaultjs-validate.jpg",
    imageAlt:
      "Generated portrait of Owen, a security risk triager persona for the VaultJS Validate case study.",
    theme: {
      background: "linear-gradient(135deg, #151923 0%, #333b4b 50%, #d94d4d 100%)",
      panel: "rgba(255, 255, 255, 0.12)",
      line: "rgba(255, 255, 255, 0.34)",
      ink: "#f9fbff",
      muted: "rgba(249, 251, 255, 0.74)",
      accent: "#7fe7ff",
      shadow: "rgba(21, 25, 35, 0.36)",
    },
    about: [
      { label: "Role", value: "Third-party script analyst" },
      { label: "Review mode", value: "Prioritize before remediating" },
      { label: "Decision mode", value: "See why the risk matters" },
    ],
    attributes: [
      { label: "Risk priority", score: 94 },
      { label: "Issue context", score: 88 },
      { label: "Plain language", score: 82 },
      { label: "Fix reviewability", score: 86 },
      { label: "Alert reduction", score: 80 },
    ],
  },
  "scent-stack": {
    name: "Noor",
    title: "Fragrance explorer",
    image: "/images/personas/scent-stack.jpg",
    imageAlt:
      "Generated portrait of Noor, a fragrance explorer persona for the Scent Stack case study.",
    theme: {
      background: "linear-gradient(135deg, #7b3551 0%, #bd6b7c 52%, #85a978 100%)",
      panel: "rgba(255, 255, 255, 0.15)",
      line: "rgba(255, 255, 255, 0.4)",
      ink: "#fffafb",
      muted: "rgba(255, 250, 251, 0.78)",
      accent: "#f9e0a6",
      shadow: "rgba(123, 53, 81, 0.32)",
    },
    about: [
      { label: "Role", value: "Taste-led fragrance shopper" },
      { label: "Search style", value: "Notes, moods, and dupes" },
      { label: "Decision mode", value: "Compare value and layer" },
    ],
    attributes: [
      { label: "Dupe confidence", score: 88 },
      { label: "Scent translation", score: 91 },
      { label: "Value compare", score: 84 },
      { label: "Layering help", score: 80 },
      { label: "Vocabulary bridge", score: 86 },
    ],
  },
  "covelo-timecard-system": {
    name: "Dana",
    title: "Operations approver",
    image: "/images/personas/covelo-timecard-system.jpg",
    imageAlt:
      "Generated portrait of Dana, an operations approver persona for the Covelo Timecard System case study.",
    theme: {
      background: "linear-gradient(135deg, #202a35 0%, #2d6f73 52%, #ef7b42 100%)",
      panel: "rgba(255, 255, 255, 0.13)",
      line: "rgba(255, 255, 255, 0.36)",
      ink: "#f9fcfb",
      muted: "rgba(249, 252, 251, 0.76)",
      accent: "#ffd2a6",
      shadow: "rgba(32, 42, 53, 0.36)",
    },
    about: [
      { label: "Role", value: "District operations lead" },
      { label: "Control surface", value: "Time, approvals, exports" },
      { label: "Decision mode", value: "Resolve before payroll risk" },
    ],
    attributes: [
      { label: "Role clarity", score: 91 },
      { label: "Exception handling", score: 88 },
      { label: "Audit history", score: 86 },
      { label: "Export readiness", score: 83 },
      { label: "Tenant boundaries", score: 89 },
    ],
  },
  "pretty-paws-grooming": {
    name: "Tanya",
    title: "Mobile booking pet owner",
    image: "/images/personas/pretty-paws-grooming.jpg",
    imageAlt:
      "Generated portrait of Tanya, a mobile booking pet owner persona for the Pretty Paws Grooming case study.",
    theme: {
      background: "linear-gradient(135deg, #c45e75 0%, #f09aa0 48%, #3f9b98 100%)",
      panel: "rgba(255, 255, 255, 0.16)",
      line: "rgba(255, 255, 255, 0.42)",
      ink: "#fffaf9",
      muted: "rgba(255, 250, 249, 0.8)",
      accent: "#fff0c7",
      shadow: "rgba(196, 94, 117, 0.32)",
    },
    about: [
      { label: "Role", value: "Local grooming customer" },
      { label: "Booking path", value: "Service detail to request" },
      { label: "Decision mode", value: "Trust first, then schedule" },
    ],
    attributes: [
      { label: "Service clarity", score: 89 },
      { label: "Mobile comfort", score: 92 },
      { label: "Local trust", score: 86 },
      { label: "Policy visibility", score: 78 },
      { label: "Follow-up clarity", score: 84 },
    ],
  },
};

const hiddenFromPrimaryWorksIds = new Set([3, 4, 5, 7, 8, 12]);

export const getFeaturedConfig = (slug?: string) =>
  featuredProjectConfig.find((project) => project.slug === slug);

export const getCaseStudyPresentation = (slug?: string) =>
  slug ? caseStudyPresentations[slug as FeaturedProjectSlug] : undefined;

export const hasCaseStudyAtGlance = (slug?: string) =>
  Boolean(
    slug &&
      (caseStudyTldrs[slug] ||
        caseStudyBriefs[slug] ||
        getFeaturedConfig(slug)),
  );

export const getCaseStudyBrief = (slug?: string) =>
  slug ? caseStudyBriefs[slug] : undefined;

export const getCaseStudyTldr = (slug?: string) =>
  slug ? caseStudyTldrs[slug] : undefined;

export const getCaseStudyProcessArtifacts = (slug?: string) =>
  slug ? caseStudyProcessArtifacts[slug] : undefined;

export const getCaseStudyImpact = (slug?: string) =>
  slug ? caseStudyImpacts[slug] : undefined;

export const getCaseStudyNarrative = (slug?: string) => {
  if (!slug || !(slug in caseStudyNarratives)) return undefined;

  return caseStudyNarratives[slug as CaseStudyNarrativeSlug];
};

export const getProjectPersonaJourney = (slug?: string) => {
  if (!slug || !(slug in projectPersonaJourneys)) return undefined;

  return projectPersonaJourneys[slug as ProjectPersonaJourneySlug];
};

export const getProjectPersonaProfile = (slug?: string) => {
  if (!slug || !(slug in projectPersonaProfiles)) return undefined;

  return projectPersonaProfiles[slug as ProjectPersonaJourneySlug];
};

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
