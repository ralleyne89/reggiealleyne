import { ProjectType } from "../../../types/project";

export const getStaybookedProject = (): ProjectType => {
  return {
    id: 13,
    slug: "staybooked",
    title: "Staybooked - AI Airbnb Optimizer",
    description:
      "A room and listing optimizer for short-term rental hosts who need better photos, sharper copy, and clearer booking signals.",
    fullDescription:
      "Staybooked helps independent Airbnb and short-term rental hosts improve the parts of a listing guests judge fastest: room photos, listing copy, amenities, and trust signals. The product connects photo uploads, realistic room-improvement renders, listing rewrites, and audit scoring in one practical host workspace.",
    image: "/images/staybooked/marketing-homepage-hero-desktop.png",
    category: "Product Design",
    tags: [
      "Next.js",
      "AI UX",
      "Hospitality",
      "Frontend",
      "Product Strategy",
    ],
    role: "Product Designer & Frontend Developer",
    duration: "Product sprint",
    year: "2026",
    teamSize: "1",
    summary:
      "A host-focused AI product that turns room photos and listing copy into practical improvement paths: realistic redesign renders, listing rewrites, audit scores, and a dashboard for saved property work.",
    problem:
      "Independent hosts often know their listing could perform better, but it is hard to see which photo, headline, amenity, or opening paragraph is hurting trust. General-purpose AI tools can polish output, but they rarely respect the practical constraints of a real rental space.",
    challenge:
      "The design challenge was making AI feel useful without making the host feel misled. Staybooked needed to give hosts believable visual direction, keep property and room context organized, and offer copy and audit feedback they could act on before updating a live listing.",
    solution:
      "Staybooked combines a room photo optimizer, listing text optimizer, listing audit, and account dashboard into one workflow. Hosts can upload private room photos, generate realistic improvement renders, review listing copy, and track recent optimization work under the right property.",
    problemSolved:
      "The prototype makes listing improvement feel concrete by connecting visual direction, copy changes, and audit signals to the rooms and properties hosts already manage.",
    methodologies: [
      "AI Product Framing",
      "Hospitality Workflow Mapping",
      "Responsive Interface Design",
      "Trust and Safety UX",
    ],
    process: [
      "Mapped the host workflow around the listing assets guests scan first: room photos, title, opening copy, amenities, and trust signals.",
      "Designed the room optimizer around property and room context so uploads, generated renders, design direction, and history stay connected.",
      "Created a marketing homepage that explains the value through the actual product surface instead of a loose AI promise.",
      "Built dashboard and auth screens that make the product feel account-first, with recent room images, quick actions, and saved property work.",
      "Framed AI output as practical visual direction so the product improves a real space without promising deceptive listing images.",
    ],
    deliverables: [
      "Marketing Homepage",
      "Room Optimizer Upload Flow",
      "Dashboard Overview",
      "Authentication Experience",
      "Product Screen Set",
    ],
    images: [
      "/images/staybooked/room-optimizer-upload-desktop.png",
      "/images/staybooked/dashboard-overview-desktop.png",
      "/images/staybooked/auth-sign-in-desktop.png",
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://staybooked-ai.netlify.app/",
    prototypeUrl: null,
    keyAchievements: [
      "Reframed Staybooked around a concrete host use case: improving short-term rental visuals and listing copy.",
      "Connected marketing, authentication, dashboard, and optimizer screens into one host flow.",
      "Kept the AI positioning grounded in realistic improvement direction instead of image-generation spectacle.",
    ],
    technicalHighlights: [
      "Next.js app architecture with account-first protected optimizer flows.",
      "Supabase-backed auth and property context for saved room work.",
      "Server-side AI boundaries for text and image generation workflows.",
      "Responsive portfolio presentation using the shared predefined project registry.",
    ],
    conclusion: {
      impact:
        "Staybooked now reads as a concrete AI hospitality product with visible product surfaces instead of an early concept tile.",
      learnings:
        "This project taught me to treat AI listing tools as decision systems: the host needs to understand what to improve, why it matters, and how to keep the result believable.",
      nextSteps:
        "Add recorded walkthrough clips, before-and-after room examples, and listing audit output samples so the case study can show the product in motion.",
    },
  };
};
