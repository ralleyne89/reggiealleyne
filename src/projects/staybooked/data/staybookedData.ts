import {
  BadgeCheck,
  Briefcase,
  Clock,
  Code2,
  Database,
  Home,
  ImagePlus,
  KeyRound,
  LayoutDashboard,
  Lock,
  Monitor,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UploadCloud,
  WandSparkles,
} from "lucide-react";
import type { AIProductThinkingProps } from "@/components/project/common/AIProductThinking";
import type { ChallengesLearningsProps } from "@/components/project/common/ChallengesLearnings";
import type { DecisionLedgerProps } from "@/components/project/common/DecisionLedger";
import type { FinalUIDesignProps } from "@/components/project/common/FinalUIDesign";
import type { OutcomesImpactProps } from "@/components/project/common/OutcomesImpact";
import type { ProjectOverviewProps } from "@/components/project/common/ProjectOverview";
import type { ReflectionProps } from "@/components/project/common/Reflection";

export const staybookedOverviewData: ProjectOverviewProps = {
  title: "AI host workflow for believable listing improvement",
  description: [
    "Staybooked helps independent short-term rental hosts improve the listing assets guests judge fastest: room photos, title, opening copy, amenities, and trust cues.",
    "The product challenge was not simply generating prettier output. Hosts needed practical guidance they could believe, save, and act on without crossing into deceptive listing visuals.",
    "I shaped the portfolio case study around the real product surfaces: a marketing homepage, account entry, dashboard, and room optimizer that connect AI help to a host's property context.",
  ],
  projectDetails: [
    {
      label: "Outcome",
      value: "Flagship AI product case study",
      icon: BadgeCheck,
    },
    {
      label: "Role",
      value: "Product Designer and Frontend Developer",
      icon: Briefcase,
    },
    {
      label: "Timeline",
      value: "Product sprint",
      icon: Clock,
    },
  ],
  toolDetails: [
    {
      label: "Frontend",
      value: "Next.js product surfaces",
      icon: Code2,
    },
    {
      label: "Data layer",
      value: "Supabase auth and saved property context",
      icon: Database,
    },
    {
      label: "AI UX",
      value: "Room renders, listing rewrites, and audit signals",
      icon: Sparkles,
    },
  ],
};

export const staybookedAIPMData: AIProductThinkingProps = {
  title: "Making generative AI useful without making the host overpromise",
  challenge:
    "Short-term rental hosts want better photos and copy, but guests still need the listing to represent a real place. The product had to improve the decision quality without making AI output feel like fantasy renovation.",
  dataStrategy:
    "Keep property and room context attached to uploads, save generated work privately, and frame AI outputs as improvement direction rather than finished claims about the live rental.",
  successMetric:
    "A host can move from an unclear room or listing problem to a concrete next action while still understanding what changed and why it is believable.",
};

export const staybookedOutcomesData: OutcomesImpactProps = {
  title: "What the case study now proves",
  metrics: [
    {
      title: "Connected product surfaces",
      value: "4",
      description:
        "Homepage, auth, dashboard, and room optimizer screens now tell one host workflow instead of separate UI moments.",
      icon: LayoutDashboard,
    },
    {
      title: "Host workspace",
      value: "1",
      description:
        "The product reads as an account-first tool with saved property work, not a one-off AI upload demo.",
      icon: Home,
    },
    {
      title: "Trust guardrails",
      value: "3",
      description:
        "Private media, believable room direction, and audit rationale keep AI output grounded in real listing decisions.",
      icon: ShieldCheck,
    },
    {
      title: "Flagship signal",
      value: "2026",
      description:
        "The project now carries the AI product, trust, and frontend execution thesis on the portfolio.",
      icon: TrendingUp,
    },
  ],
};

export const staybookedDecisionLedgerData: DecisionLedgerProps = {
  title: "Decision ledger: trust-aware AI for hosts",
  introduction:
    "The case study is organized around the product decisions that made the AI feel useful, bounded, and inspectable.",
  decisions: [
    {
      decision:
        "Build around first-impression listing assets: room photos, title, opening copy, amenities, and audit cues.",
      rejected:
        "A generic AI image generator where the host uploads a photo and waits for a beautiful render.",
      evidence:
        "Guests make fast trust judgments from the visible listing surface before reading deep details.",
      constraint:
        "The workflow had to stay practical for hosts managing real rooms, not only inspire aspirational redesigns.",
      result:
        "Room optimization, copy feedback, and audit signals now point to the same booking decision.",
    },
    {
      decision:
        "Frame generated room visuals as believable improvement direction rather than a replacement for the actual space.",
      rejected:
        "Fantasy renders that make a room look dramatically different from what guests will arrive to.",
      evidence:
        "Trust is the product boundary: hosts want improvement, but guests need the listing to remain honest.",
      constraint:
        "AI had to elevate presentation without encouraging hosts to misrepresent the property.",
      result:
        "The product language emphasizes realistic staging, lighting, cleanliness, and room-specific guidance.",
    },
    {
      decision:
        "Make the product account-first with saved property and room context.",
      rejected:
        "A disposable upload flow that loses history after a single generation session.",
      evidence:
        "Hosts iterate across multiple rooms, listings, and rounds of edits rather than making one final change.",
      constraint:
        "Private uploaded media and generated work needed a clear place to live after the first session.",
      result:
        "The dashboard gives the workflow memory through recent room images, quick actions, and property context.",
    },
    {
      decision:
        "Lead the portfolio story with real screens instead of abstract AI value propositions.",
      rejected:
        "A hero-heavy concept page that explains the product without showing how a host actually uses it.",
      evidence:
        "Reviewer confidence goes up when product surfaces, constraints, and decisions are visible quickly.",
      constraint:
        "The case study needed to prove both strategy and frontend execution in under a minute of scanning.",
      result:
        "The Staybooked page now functions as a product walkthrough with decisions attached to each surface.",
    },
  ],
};

export const staybookedUIData: FinalUIDesignProps = {
  title: "Product walkthrough screens",
  introduction:
    "The visual proof is intentionally product-facing: each screen shows the host moving from intent to account context to room-specific improvement work.",
  designHighlights: [
    {
      text: "Marketing leads with the product surface so the AI promise is visible instead of abstract.",
    },
    {
      text: "Authentication and dashboard screens make the optimizer feel like a saved workspace, not a throwaway tool.",
    },
    {
      text: "The room optimizer keeps upload context, improvement intent, and result review in one scanable flow.",
    },
  ],
  uiFeatures: [
    {
      title: "Room optimizer intake",
      description:
        "Upload-focused flow that keeps room context attached to the AI improvement task.",
      icon: UploadCloud,
    },
    {
      title: "Believable visual direction",
      description:
        "AI output is framed around practical staging and presentation choices, not impossible renovation claims.",
      icon: WandSparkles,
    },
    {
      title: "Saved host dashboard",
      description:
        "Recent work and property-level actions help hosts return to optimization without losing context.",
      icon: LayoutDashboard,
    },
    {
      title: "Account-first trust",
      description:
        "Auth and private workspace patterns signal that media and generated outputs are handled deliberately.",
      icon: Lock,
    },
  ],
  uiImages: [
    {
      src: "/images/staybooked/marketing-homepage-hero-desktop.png",
      alt: "Staybooked marketing homepage showing the AI room optimizer product surface",
      title: "Homepage with product-first proof",
    },
    {
      src: "/images/staybooked/room-optimizer-upload-desktop.png",
      alt: "Staybooked room optimizer upload flow for host room photos",
      title: "Room optimizer upload",
    },
    {
      src: "/images/staybooked/dashboard-overview-desktop.png",
      alt: "Staybooked host dashboard with recent room work and optimization actions",
      title: "Host dashboard",
    },
    {
      src: "/images/staybooked/auth-sign-in-desktop.png",
      alt: "Staybooked sign in screen for an account-first optimizer workflow",
      title: "Account entry",
    },
  ],
};

export const staybookedChallengesData: ChallengesLearningsProps = {
  title: "Constraints and product lessons",
  challenges: [
    {
      title: "Trust vs. transformation",
      description:
        "The most tempting AI demo would create dramatic before-and-after visuals. The stronger product move was to keep the output believable enough that a host could use it responsibly.",
    },
    {
      title: "One tool vs. a workflow",
      description:
        "A room render alone is useful for a moment. The product became stronger when copy, audit cues, saved room context, and dashboard return paths supported the same host decision.",
    },
  ],
  learnings: [
    {
      title: "AI UX needs a moral boundary",
      description:
        "For hospitality, the boundary is honesty. The interface has to help hosts improve presentation while making it clear that the real room still matters.",
    },
    {
      title: "Screenshots are evidence when they are sequenced",
      description:
        "Showing product surfaces in workflow order makes the case study feel built and usable instead of summarized after the fact.",
    },
  ],
  nextSteps: [
    {
      title: "Before-and-after examples",
      description:
        "Add room-specific examples that compare original photo issues with realistic improvement recommendations.",
      icon: ImagePlus,
    },
    {
      title: "Audit output samples",
      description:
        "Show how listing audit scores translate into copy, amenity, and trust-signal recommendations.",
      icon: Monitor,
    },
    {
      title: "Prototype walkthrough",
      description:
        "Record a short walkthrough of the host moving from dashboard to room upload to saved optimization history.",
      icon: KeyRound,
    },
  ],
};

export const staybookedReflectionData: ReflectionProps = {
  title: "Why this belongs at the front of the portfolio",
  content:
    "Staybooked is the clearest expression of the portfolio thesis: AI products need enough strategy to be useful, enough restraint to be trusted, and enough implementation detail to feel real. The work is strongest when the case study shows the decisions, not only the finished interface.",
  insights: [
    {
      title: "Show the boundary",
      description:
        "The most senior signal is not that AI can generate something impressive. It is that the product knows where generation should stop.",
    },
    {
      title: "Make artifacts do the work",
      description:
        "Product screenshots, decision rationale, and workflow sequence make the proof faster than another paragraph of positioning copy.",
    },
    {
      title: "Connect strategy to UI",
      description:
        "The same host-trust principle appears in the homepage, auth, dashboard, room optimizer, and case-study narrative.",
    },
  ],
};
