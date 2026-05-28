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
    tools: ["Next.js", "TypeScript", "Postgres", "Figma", "REST APIs"],
    owned: ["Product design", "Frontend build", "Role workflows", "Client demo"],
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
      role: "Learner or team lead who needs a fast AI readiness baseline.",
      context:
        "They need to understand practical AI literacy before choosing training, buying seats, or claiming competency.",
      goal:
        "Get a credible signal in minutes and know which learning path should come next.",
      friction:
        "Traditional certifications ask for too much time before users learn whether the content fits their level.",
      need:
        "Adaptive assessment, readable results, recommendations, and credentials that make the score useful after the session.",
    },
    journey: [
      {
        label: "Start assessment",
        description:
          "Enter a short test that feels credible without asking for a large upfront time commitment.",
      },
      {
        label: "Answer adaptively",
        description:
          "Move through questions that adjust to the user's level across AI concepts and applied judgment.",
      },
      {
        label: "Read the gaps",
        description:
          "Understand strengths, missed areas, and what the score means in plain language.",
      },
      {
        label: "Choose a path",
        description:
          "Use recommendations, credentials, and payment paths to continue only where it makes sense.",
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
      role: "Independent short-term rental host improving listing assets before guests decide.",
      context:
        "They manage real rooms and need better photos, copy, amenities, and trust cues without making the listing misleading.",
      goal:
        "Turn unclear listing problems into practical improvements they can save and act on.",
      friction:
        "Generic AI image tools can create impressive output that does not represent the actual property responsibly.",
      need:
        "A saved host workspace that frames AI as believable improvement direction tied to property and room context.",
    },
    journey: [
      {
        label: "Find the listing gap",
        description:
          "Start from photos, title, copy, amenities, or audit cues that affect guest trust.",
      },
      {
        label: "Upload room context",
        description:
          "Attach the actual room and property details so the AI task is grounded in a real space.",
      },
      {
        label: "Review direction",
        description:
          "Evaluate room and listing recommendations as practical improvements, not fantasy renovation claims.",
      },
      {
        label: "Save the work",
        description:
          "Return to a dashboard where property context, generated output, and next actions stay connected.",
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

const hiddenFromPrimaryWorksIds = new Set([3, 4, 5, 7, 8, 12]);

export const getFeaturedConfig = (slug?: string) =>
  featuredProjectConfig.find((project) => project.slug === slug);

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

export const getProjectPersonaJourney = (slug?: string) => {
  if (!slug || !(slug in projectPersonaJourneys)) return undefined;

  return projectPersonaJourneys[slug as ProjectPersonaJourneySlug];
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
