import type {
  CaseStudyBrief,
  CaseStudyImpact,
  CaseStudyNarrative,
  CaseStudyPresentation,
  CaseStudyTldr,
  ProjectPersonaJourney,
} from "./portfolioCuration";

export const motorflowBrief: CaseStudyBrief = {
  audience: "Independent auto-repair owners and service managers choosing support for their front desk.",
  constraint: "The service must explain its scope and handoffs while the owner is balancing calls, customers, and repair work.",
  coreDecision: "Connect service discovery, a guided AI demo, plan comparison, and setup around the owner’s next decision.",
  evidence: "The live site shows service comparison, native voice controls, an explicit two-agent transition, and plan-specific setup pages.",
  artifacts: ["Public website", "Guided voice demo", "Service catalog", "Plan-specific setup"],
};

export const motorflowTldr: CaseStudyTldr = {
  role: "UX/UI design and development",
  problem: "A shop owner needs to understand how the website, calls, follow-up, and setup work together before choosing a service.",
  decision: "Use one connected service path, with clear AI roles, visible costs, and an explicit step before activation.",
  outcome: "A live public website and guided AI interface, with service-specific entry points and documented setup steps.",
  tools: ["React", "TypeScript", "GSAP", "HighLevel"],
  owned: ["Service information architecture", "Website interface", "Conversational onboarding", "Frontend implementation"],
};

export const motorflowNarrative: CaseStudyNarrative = {
  hook: "Give every inquiry a useful next step.",
  setup: "Motorflow brings a website, call coverage, and customer follow-up into one service for independent repair shops. The design challenge was to make that connected system easy to understand and choose.",
  research: "The public service catalog and implementation show the recurring decisions: which channel needs help, what the service includes, who handles the reply, and what must be connected before launch. These decisions shaped the page structure and the AI introduction.",
  constraint: "The owner is choosing operational support, so the experience needs to explain the handoffs. Phone coverage and website voice support are separate services; choosing or paying for one does not activate a shop’s system by itself.",
  decision: "Let owners explore a fictional customer conversation, then ask questions about their own shop. Put service scope, costs, and setup steps beside each plan so the next action follows from a clear choice.",
  build: "Built the responsive React and TypeScript site, a shared service catalog, plan-specific setup pages, and a guided two-agent experience around native HighLevel voice controls. The guide includes loading, dismissal, confirmation, and separate conversation states.",
  proof: "The public pages and captured screens show the complete browsing path: offer, guided demo, comparison, and selected-service setup. The handoff confirmation and the distinction between payment and activation are visible in the interface.",
  reflection: "A useful AI service needs clear edges. Showing who handles the next step, whether context carries over, and what still needs setup makes the experience easier to judge.",
};

export const motorflowPresentation: CaseStudyPresentation = {
  variant: "service-led",
  audienceEyebrow: "The shop owner’s decision",
  audienceTitle: "Choose support without losing the thread.",
  audienceDescription: "The experience is built around an independent shop owner deciding which part of the front desk needs help.",
  evidenceBasis: "The live site and source code document services, plan comparison, the two-agent guide, native voice embeds, and setup handoffs.",
  teamContext: "The case study focuses on UX/UI design, service structure, and frontend implementation. HighLevel provides the connected voice and operations services.",
  limitation: "The screens show the delivered experience. They do not establish customer conversion, revenue gains, or the reliability of every shop’s phone and calendar configuration.",
  validationQuestions: [
    "Can owners explain the difference between phone coverage and website voice support?",
    "Do owners understand what happens after choosing a plan and what still needs setup?",
  ],
  chapterOrder: ["glance", "overview", "evidence", "process", "audience", "impact"],
  chapterLabels: { glance: "Details", overview: "Product", evidence: "Interface", process: "Decisions", audience: "Audience", impact: "Delivery" },
};

export const motorflowJourney: ProjectPersonaJourney = {
  persona: {
    role: "Independent auto-repair owner or service manager.",
    context: "The front desk handles callers, customers in the shop, and follow-up while repair work continues.",
    goal: "Choose a useful service and understand how it will fit the shop’s existing workflow.",
    friction: "Overlapping offers and unclear setup can make it hard to tell what is covered or who handles the next step.",
    need: "Clear service boundaries, an inspectable example, and a setup path tied to the chosen plan.",
  },
  journey: [
    { label: "Understand the offer", description: "Start with calls, inquiries, and follow-up rather than a list of software features." },
    { label: "Explore the AI experience", description: "See a fictional shop’s intake, then move into a separate conversation about Motorflow." },
    { label: "Choose the scope", description: "Compare services, included work, and separate usage costs before choosing." },
    { label: "Review activation", description: "See the business details, routing, calendar, and approval steps the chosen service needs." },
  ],
};

export const motorflowImpact: CaseStudyImpact = {
  title: "A live experience with clear handoffs.",
  summary: "Motorflow’s public interface connects the offer, AI demonstration, service choice, and setup. The next measurement work is how well owners understand and complete that path.",
  framing: "mvp-proof",
  metrics: [
    { value: "Live", label: "Public website", kind: "delivery-fact", context: "Services, plans, and selected-service setup are available to inspect." },
    { value: "2", label: "Distinct AI roles", kind: "delivery-fact", context: "Mary introduces the fictional shop experience; Jamie explains Motorflow." },
    { value: "Explicit", label: "Activation step", kind: "product-guardrail", context: "Payment, account access, and service launch remain separate steps." },
  ],
  notes: [
    "Interface captures show the public site on October 28, 2026. The voice panels were inspected without starting a call or creating a booking.",
    "The next measures are plan-selection completion, help requests, and the quality of setup handoffs. Revenue and conversion results are not claimed here.",
  ],
};
