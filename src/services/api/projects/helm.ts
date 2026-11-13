import { ProjectType } from "../../../types/project";

export const getHelmProject = (): ProjectType => {
  return {
    id: 17,
    slug: "helm",
    title: "Helm – AI Workforce Cockpit",
    description:
      "An AI workforce cockpit with a 16-bit game layer. You describe an outcome, a Lead agent staffs specialists, and you approve anything that sends, spends, or publishes.",
    category: "AI agents · Public preview",
    role: "Product Designer & Developer",
    year: "2026",
    duration: "In progress",
    teamSize: "Solo",
    tags: ["AI Agents", "Product Design", "Next.js", "Design System", "Game UI", "Supabase"],
    image: "/images/helm/home.webp",
    summary:
      "Helm lets a solo operator hand off a multi-step task to a crew of AI specialists and stay in control of the risky steps. The product pairs a calm, legible cockpit with a 16-bit game layer, and is in public preview.",
    problem:
      "AI agents that can send email, spend money, and publish content are hard to trust when the only interface is a chat window. A solo operator needs to see who is doing what, stop it instantly, and decide the steps that cannot be undone.",
    solution:
      "A Lead agent turns one ask into a plan and staffs specialists who work in parallel on their own cloud computers. Sending, spending, and publishing wait in a decision box until the operator approves, with a pause-all control and a hard spend cap behind it.",
    methodologies: [
      "Product Strategy",
      "Competitive Review",
      "Interaction Design",
      "Design Systems",
      "Rapid Prototyping",
    ],
    process: [
      "Wrote the research brief, assumptions register, and competitive review, and marked what is not yet proven.",
      "Mapped two working personas, the sitemap, the core quest flow, and its recovery paths.",
      "Wireframed the landing page, pricing, sign up, and each state of the Board before styling anything.",
      "Set the visual direction: a quiet dark shell with pixel treatment reserved for agents, decisions, energy, and XP.",
      "Built the landing page, the cockpit, and a scripted browser preview in Next.js.",
    ],
    deliverables: [
      "Retro landing page with pricing",
      "Operator cockpit: Board, HQ, Party, Loot, Patrols",
      "Decision box approval pattern",
      "Design foundations and component library in Figma",
      "Scripted public preview",
    ],
    images: [
      "/images/helm/home.webp",
      "/images/helm/board-crew.webp",
      "/images/helm/board-decision.webp",
      "/images/helm/hq.webp",
      "/images/helm/party.webp",
    ],
    visuals: [
      {
        src: "/images/helm/home.webp",
        label: "Landing page",
        note: "The arcade landing sets the brand: a pixel HQ, an energy bar, and one promise about who stays in control.",
      },
      {
        src: "/images/helm/board-crew.webp",
        label: "Board, crew working",
        note: "One quest at the top, each specialist on its own card, and the Lead's running commentary beside them.",
      },
      {
        src: "/images/helm/board-decision.webp",
        label: "The decision box",
        note: "The work stops and shows exactly what will go out. Amber is used for this moment and nothing else.",
      },
      {
        src: "/images/helm/hq.webp",
        label: "HQ",
        note: "The same crew as a game level, so status reads at a glance without opening a single card.",
      },
      {
        src: "/images/helm/party.webp",
        label: "Party",
        note: "Agents level up from work the operator approved, and trust tiers decide how often they need to ask.",
      },
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://helm-crew.netlify.app/",
    prototypeUrl: null,
    keyAchievements: [
      "Designed and built the landing page and operator cockpit as one product",
      "Defined the decision box as the single pattern for every approval",
      "Shipped a public preview where the cockpit plays a scripted crew in the browser",
    ],
    technicalHighlights: [
      "Next.js 16 App Router with Tailwind 4 and motion/react",
      "A three.js voxel scene on the landing page, driven by GSAP ScrollTrigger and Lenis",
      "Lead and specialist agents through the AI SDK, each on an E2B cloud desktop",
      "Supabase for data and sign-in, Polar for billing",
      "Usage metering with plan limits and a hard spend cap",
    ],
  };
};
