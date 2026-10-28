
import { ProjectType } from '../../../types/project';

export const getTechNoirProject = (): ProjectType => {
  return {
    id: 3,
    slug: "tech-noir", 
    title: "TECH NOIR",
    liveUrl: "/technoir-demo/index.html",
    description: "A shipped mobile application for luxury wearable-tech shopping, with designer collections, styling guides, and editorial discovery.",
    fullDescription: "Tech Noir is a shipped mobile application that brings wearable technology into a luxury fashion shopping experience. Product discovery, designer collections, How to Wear guides, and editorial content help shoppers understand what to wear and why. AR try-on was explored as a concept. A new native demonstration recreates the experience for client presentations using sample inventory and simulated checkout.",
    image: "/images/a473ef7d-6076-4386-af99-13262b6e684f.png",
    category: "Mobile application · Shipped",
    tags: ["Mobile Application", "Shipped", "E-commerce", "Fashion", "Wearable Tech"],
    role: "UX/UI & Visual Designer",
    duration: "2 months",
    year: "2016",
    challenge: "Wearable tech was still hard for many shoppers to understand. If people could not picture how a device worked, looked, or fit into an outfit, they were unlikely to see it as fashion.",
    process: [
      "Research & Discovery - Surveyed and interviewed shoppers about wearable tech awareness. Most had heard of the category but did not know how to style it, and many preferred stores because online context felt thin.",
      "Competitive Analysis - Reviewed Net-A-Porter, Nordstrom, and Farfetch to study designer filters, editorial video, new-arrival moments, and collection pages.",
      "Audience Framing - Used the shopper interview and survey themes to keep product education tied to style goals without inventing a named user.",
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
      "/images/a473ef7d-6076-4386-af99-13262b6e684f.png",
      "/images/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png",
      "/images/e047ad0c-5a06-4795-938c-c65d62909828.png",
      "/images/5291bbb5-d2b2-4171-b287-9a1d6735805b.png",
      "/images/d0f10fb1-b1eb-4e30-b666-c68f00716676.png"
    ],
    visuals: [
      { src: "/images/tech-noir/native-demo-2026.jpg", label: "2026 native reconstruction", note: "Actual iPhone simulator captures from the new SwiftUI client demonstration. Discovery, product selection, and local order confirmation recreate the original journey with sample inventory and simulated checkout." },
      { src: "/images/a473ef7d-6076-4386-af99-13262b6e684f.png", label: "Original mobile application", note: "The original interface brings editorial discovery, designer browsing, and fashion-tech stories into a monochrome mobile shopping system." },
      { src: "/images/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png", label: "Discover, learn, visualize, buy", note: "Archived screens show product filtering, designer collections, styling video, a visual try-on concept, and the shopping bag." },
      { src: "/images/e047ad0c-5a06-4795-938c-c65d62909828.png", label: "Mobile flow and interface study", note: "Original project board documenting the shopping experience and its screen hierarchy." },
      { src: "/images/5291bbb5-d2b2-4171-b287-9a1d6735805b.png", label: "Original shopping flow", note: "The archived flow connects fashion and tech stories, designer discovery, How to Wear guidance, the bag, and guest or account checkout." },
      { src: "/images/d0f10fb1-b1eb-4e30-b666-c68f00716676.png", label: "Competitive feature study", note: "The comparison examines native apps, designer filters, product summaries, search, wishlists, image galleries, and styling video across fashion retailers." }
    ],
    conclusion: {
      impact: "The project record reports that 75% of testers felt more confident exploring wearable tech; the sample size and study method are not documented. Feedback on the luxury aesthetic and video styling modules shaped the content structure and usability.",
      learnings: "Tech Noir taught me that education can be part of retail UX when the category is unfamiliar. The strongest screens paired product desire with enough context to reduce hesitation.",
      nextSteps: "If expanded, I'd add personalized onboarding, real-time AR try-ons, and community-based lookbooks to increase engagement."
    },
    techStack: ["Figma", "Adobe XD", "Illustrator", "Miro", "UserZoom", "Photoshop"],
    keyAchievements: [
      "Shipped a mobile application that blends shopping with product education",
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
    methodologies: ["User Research", "Competitive Analysis", "Audience Modeling", "Prototyping", "Usability Testing"],
    summary: "A shipped mobile application connecting luxury wearable-tech shopping with styling guidance, designer collections, and editorial content.",
    solution: "Designed a mobile shopping flow that helps people browse wearable technology, learn how to style it, preview try-on moments, and explore designer collections.",
    videoUrl: "https://drive.google.com/file/d/17QHz02DcNbzIJYMpO2d5rtkfWZ_aw_H8/view?usp=sharing"
  };
};
