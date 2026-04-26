import {
  CalendarCheck,
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
  size: "feature" | "standard";
};

export const experiments: Experiment[] = [
  {
    title: "ScentStack",
    description:
      "AI-powered fragrance discovery with dupe matching, layering suggestions, and dream-scent search.",
    proofSignal:
      "Shows product framing for AI recommendations, premium consumer UX, and fast prototype delivery.",
    tags: ["React", "Tailwind", "AI"],
    icon: Code,
    previewImage: "/images/scentstack_hero.png",
    liveUrl: "https://scentstack.lovable.app",
    status: "Live",
    size: "feature",
  },
  {
    title: "Staybooked",
    description:
      "A booking-focused product prototype for service teams managing availability, reservations, and follow-up flows.",
    proofSignal:
      "Shows scheduling UX, service workflow logic, and stateful product flow design without leaning on a static landing page.",
    tags: ["React", "Booking UX", "Product"],
    icon: CalendarCheck,
    previewImage: "/images/staybooked-preview.svg",
    detailPath: "/project/staybooked",
    status: "Review ready",
    size: "standard",
  },
  {
    title: "Chill Vibes Music Player",
    description:
      "A minimalist music streaming MVP focused on clean playback and a distraction-free interface.",
    proofSignal:
      "Shows audio UX restraint, hierarchy, and a lightweight product surface built around calm use.",
    tags: ["React", "Firebase", "UX/UI"],
    icon: Music,
    previewImage: "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png",
    liveUrl: "https://chill-vibes.web.app/",
    status: "Live",
    size: "standard",
  },
  {
    title: "Bob's Big Break",
    description:
      "An incremental clicker game prototype exploring low-attention, short-session game loops.",
    proofSignal:
      "Shows systems thinking, reward loops, and product mechanics beyond static interface work.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: Gamepad2,
    previewImage: "/images/71cb9624-eeb6-4af5-a137-8a38307549f4.png",
    liveUrl: "https://bobsbigbreak.netlify.app/",
    status: "Live",
    size: "standard",
  },
];

export const upcomingExplorations = [
  "WebGL interaction studies",
  "Generative art systems",
  "AI-assisted creative tools",
];
