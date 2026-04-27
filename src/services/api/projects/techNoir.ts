
import { ProjectType } from '../../../types/project';

export const getTechNoirProject = (): ProjectType => {
  return {
    id: 3,
    slug: "tech-noir", 
    title: "TECH NOIR",
    description: "A mobile e-commerce concept for luxury wearable tech, with product education, styling content, and AR try-on in the buying flow.",
    fullDescription: "Tech Noir is a mobile shopping concept for wearable technology in a high-fashion context. The app pairs product pages with styling guidance, editorial content, designer collections, and try-on moments so shoppers can understand the category before they buy.",
    image: "/images/tech-noir-banner.png", // Updated to use dedicated Tech Noir banner
    category: "E-commerce",
    tags: ["E-commerce", "Fashion", "Wearable Tech", "UX/UI Design"],
    role: "UX, UI & Visual Designer",
    duration: "2 months",
    year: "2016",
    challenge: "Wearable tech was still hard for many shoppers to understand. If people could not picture how a device worked, looked, or fit into an outfit, they were unlikely to see it as fashion.",
    process: [
      "Research & Discovery - Surveyed and interviewed shoppers about wearable tech awareness. Most had heard of the category but did not know how to style it, and many preferred stores because online context felt thin.",
      "Competitive Analysis - Reviewed Net-A-Porter, Nordstrom, and Farfetch to study designer filters, editorial video, new-arrival moments, and collection pages.",
      "Persona Creation - Built Tech Tina, a 27-year-old fashion-forward, tech-curious shopper, to keep product education tied to style goals.",
      "UX & UI Design - Designed a dark editorial interface with video modules, style guides, modular product pages, and a simple path: discover, learn, try on, buy."
    ],
    deliverables: [
      "Product Discovery - Clean layout with high-res lookbooks and designer filters",
      "How to Wear - Videos and photo guides with styling examples",
      "AR Try-On (concept) - Users preview how products look on their body",
      "Designer Pages - Curated collections, collaborations, and exclusive drops",
      "Blog - Trend insights, tech news, and daily posts about fashion & wearables"
    ],
    images: [
      "/images/tech-noir-banner.png", // Dedicated Tech Noir banner image
      "/images/d0f10fb1-b1eb-4e30-b666-c68f00716676.png",
      "/images/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png",
      "/images/e047ad0c-5a06-4795-938c-c65d62909828.png",
      "/images/a473ef7d-6076-4386-af99-13262b6e684f.png",
      "/images/5291bbb5-d2b2-4171-b287-9a1d6735805b.png"
    ],
    conclusion: {
      impact: "75% of testers said they felt more confident exploring wearable tech. Strong positive feedback on the luxury aesthetic and video styling modules. Research-informed personas led to better content structure and usability.",
      learnings: "Tech Noir taught me that education can be part of retail UX when the category is unfamiliar. The strongest screens paired product desire with enough context to reduce hesitation.",
      nextSteps: "If expanded, I'd add personalized onboarding, real-time AR try-ons, and community-based lookbooks to increase engagement."
    },
    techStack: ["Figma", "Adobe XD", "Illustrator", "Miro", "UserZoom", "Photoshop"],
    keyAchievements: [
      "Prototyped a commerce model that blends shopping with product education",
      "Designed detailed prototypes and user flows in Figma",
      "Defined a luxury visual system for a tech-forward fashion category"
    ],
    problemSolved: "Helped shoppers understand what wearable tech is, how it works, and how it could fit into personal style.",
    technicalHighlights: [
      "Clean, dark-themed interface with video modules",
      "Modular product pages with 'How to Wear' guides",
      "Visual flow: discover, learn, try on, buy",
      "Designer filters and high-resolution lookbooks"
    ],
    teamSize: "3 members",
    methodologies: ["User Research", "Competitive Analysis", "Persona Creation", "Prototyping", "Usability Testing"],
    summary: "Tech Noir is a mobile e-commerce concept that places wearable tech inside a luxury fashion shopping flow with styling guidance and editorial context.",
    solution: "Designed a mobile shopping flow that helps people browse wearable technology, learn how to style it, preview try-on moments, and explore designer collections.",
    videoUrl: "https://drive.google.com/file/d/17QHz02DcNbzIJYMpO2d5rtkfWZ_aw_H8/view?usp=sharing"
  };
};
