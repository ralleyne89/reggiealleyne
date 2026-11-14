import { ProjectType } from "../../../types/project";

export const getScentStackProject = (): ProjectType => {
  return {
    id: 12,
    slug: "scent-stack",
    title: "ScentStack – Fragrance Dupe Finder",
    description:
      "A fragrance dupe finder: type the perfume you love and see the cheaper bottles that smell like it, side by side with the price. 1,691 dupes for 922 perfumes.",
    category: "Consumer product · Live",
    role: "Product Designer & Developer",
    year: "2026",
    duration: "Redesigned November 2026",
    teamSize: "Solo",
    tags: ["Consumer Product", "Product Design", "React", "Design System", "AI", "three.js"],
    image: "/images/scentstack/home.webp",
    summary:
      "ScentStack is a fragrance dupe finder. A shopper types the perfume they love, sees the cheaper bottles that smell like it with both prices side by side, and saves the ones worth trying. The 2026 redesign rebuilt it as a showpiece around one idea: the stack.",
    problem:
      "Shoppers looking for a cheaper version of a perfume piece the answer together from videos, forum threads, and spreadsheets. The first version of ScentStack held the data but read like a generic template, and the price gap, the reason anyone arrives, was not what the page led with.",
    solution:
      "The redesign makes the two price tags the loudest thing on every screen. Search opens a side-by-side comparison, saved dupes add up in a running stack total, and three tools sit behind it: a finder quiz, Dream Lab for describing a scent in words, and Layering Lab for photographing the bottles you own.",
    methodologies: [
      "Product Audit",
      "Competitive Review",
      "Interaction Design",
      "Design Systems",
      "Motion Design",
    ],
    process: [
      "Audited the existing app and its data: 1,691 original-to-dupe pairs covering 922 perfumes.",
      "Wrote the research brief, assumptions register, and competitive review, and set one measure of success.",
      "Mapped two working personas, the sitemap, the core flow, and its recovery paths.",
      "Wireframed every screen, then set the direction: a colour per scent family, chunky type, and sticker price badges.",
      "Rebuilt the app screen by screen in React, in light and dark, with a design kit page for every component.",
    ],
    deliverables: [
      "Home page with a three.js bottle built from three layers",
      "Search palette, A–Z browse, and brand pages",
      "Pair comparison and fragrance pages",
      "Your stack, with running totals",
      "Finder quiz, Dream Lab, and Layering Lab",
      "Design foundations and component library in Figma",
    ],
    images: [
      "/images/scentstack/home.webp",
      "/images/scentstack/pair.webp",
      "/images/scentstack/stack.webp",
      "/images/scentstack/dream-lab.webp",
      "/images/scentstack/layering-lab.webp",
    ],
    visuals: [
      {
        src: "/images/scentstack/home.webp",
        label: "Home",
        note: "The promise in four words, a search box, and a bottle made of three layers with a price tag hanging off it.",
      },
      {
        src: "/images/scentstack/pair.webp",
        label: "Pair comparison",
        note: "The original and the dupe as two matching cards, so notes and price can be read straight across.",
      },
      {
        src: "/images/scentstack/stack.webp",
        label: "Your stack",
        note: "What you saved costs one number; the originals cost another. The difference is the headline.",
      },
      {
        src: "/images/scentstack/dream-lab.webp",
        label: "Dream Lab",
        note: "Describe a scent in plain words and get the notes the model heard, then perfumes that match.",
      },
      {
        src: "/images/scentstack/layering-lab.webp",
        label: "Layering Lab",
        note: "Photograph the bottles you own and get two to wear together.",
      },
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://scentstack.netlify.app",
    prototypeUrl: null,
    keyAchievements: [
      "Redesigned and rebuilt the whole app around one concept, the stack",
      "Made the price gap the lead element on every comparison",
      "Shipped light and dark themes with a design kit page",
    ],
    technicalHighlights: [
      "Vite, React 18, TypeScript, Tailwind CSS, and shadcn/ui",
      "A three.js hero bottle with GSAP and Lenis for scroll",
      "Supabase Edge Functions calling open Qwen language and vision models through Hugging Face",
      "Search across 1,691 dupe pairs with a command palette",
    ],
  };
};
