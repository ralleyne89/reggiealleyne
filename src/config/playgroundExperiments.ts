import {
  Clock,
  Code,
  Gamepad2,
  Music,
  type LucideIcon,
} from "lucide-react";

export type Experiment = {
  title: string;
  description: string;
  proofSignal: string;
  tags: string[];
  icon: LucideIcon;
  previewImage?: string;
  detailPath?: string;
  liveUrl?: string;
  status: string;
};

export const experiments: Experiment[] = [
  {
    title: "Covelo Timecard System",
    description:
      "A client workforce portal for staff timecards, approver queues, compliance exceptions, assignments, and export workflows.",
    proofSignal:
      "Solo client project completed in March 2026 with a deployed Covelo demo and role-based product screens.",
    tags: ["Next.js", "RBAC", "Postgres"],
    icon: Clock,
    previewImage: "/images/covelo/login-desktop.png",
    detailPath: "/project/covelo-timecard-system",
    liveUrl: "https://covelo.netlify.app",
    status: "Client project",
  },
  {
    title: "ScentStack",
    description:
      "A fragrance finder for dupe matching, layering ideas, and searching for the scent someone has in mind.",
    proofSignal:
      "Shows recommendation UX, premium consumer framing, and fast prototype delivery.",
    tags: ["React", "Tailwind", "AI"],
    icon: Code,
    previewImage: "/images/scentstack_hero.png",
    detailPath: "/project/scent-stack",
    liveUrl: "https://scentstack.lovable.app",
    status: "Live",
  },
  {
    title: "Chill Vibes Music Player",
    description:
      "A small music streaming MVP built around clean playback and a quiet listening interface.",
    proofSignal:
      "Shows a focused audio surface with clear hierarchy and restrained interaction design.",
    tags: ["React", "Firebase", "UX/UI"],
    icon: Music,
    previewImage: "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png",
    detailPath: "/project/chill-vibes-music-player",
    liveUrl: "https://chill-vibes.web.app/",
    status: "Live",
  },
  {
    title: "Bob's Big Break",
    description:
      "An incremental clicker prototype built around quick sessions, pacing, and reward loops.",
    proofSignal:
      "Shows systems thinking and game mechanics beyond static interface work.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: Gamepad2,
    previewImage: "/images/71cb9624-eeb6-4af5-a137-8a38307549f4.png",
    detailPath: "/project/bobs-big-break",
    liveUrl: "https://bobsbigbreak.netlify.app/",
    status: "Live",
  },
];
