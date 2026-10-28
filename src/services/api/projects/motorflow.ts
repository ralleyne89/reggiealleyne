import type { ProjectType } from "@/types/project";

export const getMotorflowProject = (): ProjectType => ({
  id: 16,
  slug: "motorflow",
  title: "Motorflow",
  description:
    "A website and AI service experience that connects calls, bookings, and customer follow-up for independent auto repair shops.",
  fullDescription:
    "Motorflow helps independent auto repair shops give each inquiry a useful next step. The public experience brings service discovery, clear pricing, a guided AI demonstration, and service-specific setup into one path. The product work covers the website, conversational onboarding, and the handoff into HighLevel-powered operations. The case study shows the live interface and the decisions that keep service scope, AI roles, and activation clear.",
  image: "/images/motorflow/home-desktop.png",
  category: "AI services · Live website",
  tags: ["AI Product Design", "Service Design", "Conversational UX", "React", "HighLevel"],
  role: "UX/UI Designer & Developer",
  year: "2026",
  duration: "Ongoing",
  summary:
    "A connected path from understanding the service to exploring the AI demo, choosing a plan, and reviewing the setup needed before activation.",
  challenge:
    "A busy shop owner needs to understand what the service does, what it costs, and where a person takes over. A polished website alone cannot explain how calls, follow-up, booking, and setup connect.",
  problem:
    "Calls and inquiries arrive while the front desk is handling customers and repairs. The product must make the next step clear for the shop, its customers, and the team responsible for follow-up.",
  solution:
    "Connect the public offer, a guided two-agent demonstration, service comparison, and plan-specific setup. Keep phone coverage distinct from website voice support, and explain the work required before a service goes live.",
  problemSolved:
    "Gives a shop owner one place to understand the offer, inspect an AI interaction, choose the right scope, and see the steps needed to put it into use.",
  techStack: ["React", "TypeScript", "Vite", "GSAP", "HighLevel", "Native voice widgets"],
  methodologies: ["Service Design", "Conversational UX", "Information Architecture", "Responsive Design", "Frontend Implementation"],
  process: [
    "Organized the public experience around the shop’s next decision: understand the service, explore the demo, compare scope, and review setup.",
    "Separated AI Front Desk phone coverage from the Website Voice Widget so each offer has a clear channel and purpose.",
    "Built the two-agent introduction around Mary’s fictional repair-shop experience and Jamie’s Motorflow sales guidance. Each conversation keeps its own context.",
    "Kept the native start, mute, and end controls visible. The transition asks visitors to finish the first call before continuing.",
    "Connected each service to its own pricing, inclusions, setup steps, and checkout entry. Payment, account access, and activation remain separate steps.",
  ],
  deliverables: [
    "Responsive public website and service catalog",
    "Plan comparison and service-specific setup pages",
    "Guided two-agent voice demonstration",
    "Call controls, transition states, and loading fallback",
    "HighLevel form, calendar, and workflow integration",
    "Scope, usage, and activation copy",
  ],
  technicalHighlights: [
    "React and TypeScript frontend with shared service data and responsive page layouts.",
    "HighLevel-compatible static export for the public website.",
    "Native voice embeds with loading and unavailable states.",
    "A state-managed demo guide with explicit confirmation before switching conversations.",
    "Service-specific entry points that carry the chosen plan into the setup experience.",
  ],
  images: [
    "/images/motorflow/home-desktop.png",
    "/images/motorflow/voice-demo.png",
    "/images/motorflow/voice-handoff.png",
    "/images/motorflow/plans-desktop.png",
    "/images/motorflow/setup-desktop.png",
  ],
  visuals: [
    {
      src: "/images/motorflow/home-desktop.png",
      label: "The offer in one view",
      note: "The live homepage connects the shop’s daily work to calls, follow-up, and reviews. The hero scene is illustrative photography.",
    },
    {
      src: "/images/motorflow/voice-demo.png",
      label: "Try the customer’s side first",
      note: "The guide introduces Mary’s fictional auto-repair intake beside the native voice panel. The capture shows the interface before a call starts.",
    },
    {
      src: "/images/motorflow/voice-handoff.png",
      label: "Make the conversation change explicit",
      note: "The guide asks visitors to end Mary’s call before meeting Jamie, and explains that the second agent does not receive the first conversation’s history.",
    },
    {
      src: "/images/motorflow/plans-desktop.png",
      label: "Compare scope before choosing",
      note: "Plans show inclusions and separate usage costs alongside their entry points. Public prices are shown as captured on October 28, 2026.",
    },
    {
      src: "/images/motorflow/setup-desktop.png",
      label: "Carry the choice into setup",
      note: "The selected service carries into a page with deliverables, setup steps, and a checkout link. Payment and service activation are explained as separate steps.",
    },
  ],
  keyAchievements: [
    "Published a service-led website with clear paths into plans, setup, and support.",
    "Built a guided AI experience with two distinct roles and an explicit conversation handoff.",
    "Made scope, usage charges, and activation requirements visible before checkout.",
  ],
  conclusion: {
    impact:
      "The public website and guided AI interface make Motorflow’s offer and setup path inspectable. The case study documents delivered screens and workflow decisions; it does not claim measured revenue or booking gains.",
    learnings:
      "The useful product detail is often the handoff: who answers next, what context they receive, and what still needs a person’s approval.",
    nextSteps:
      "Measure plan-selection completion, where owners ask for help, and the quality of the handoff into setup. Validate each shop’s phone routing, knowledge, and calendar before activation.",
  },
  liveUrl: "https://motorflow.ai/",
});
