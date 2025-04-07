import { ProjectType } from '../../../types/project';

export const getTechNoirProject = (): ProjectType => {
  return {
    id: 3,
    slug: "tech-noir", 
    title: "TECH NOIR",
    description: "A Fashion & Technology Driven E-Commerce App bringing high fashion and wearable tech together in one stylish, educational platform.",
    fullDescription: "Tech Noir is a mobile e-commerce experience created to merge the worlds of wearable technology and high fashion. The app not only showcases trend-setting fashion-tech pieces but also educates users on how to wear and understand them. It's designed to inspire, inform, and sell—bridging the gap between style and innovation.",
    image: "/lovable-uploads/fb4255d4-cbcb-4174-b175-79f29efbc498.png", // Main thumbnail image
    category: "E-commerce",
    tags: ["E-commerce", "Fashion", "Wearable Tech", "UX/UI Design"],
    role: "UX, UI & Visual Designer",
    duration: "2 months",
    year: "2016",
    challenge: "Wearable tech is misunderstood and underexplored in e-commerce. Many users don't know what wearable tech is, how it works, or how to incorporate it into their wardrobe. If consumers don't understand its function, they won't see it as fashionable.",
    process: [
      "Research & Discovery - Conducted surveys and field research to gauge wearable tech awareness. Found that most users had heard of it, but didn't know how to style it. Majority preferred in-store purchases due to uncertainty.",
      "Competitive Analysis - Analyzed apps like Net-A-Porter, Nordstrom, and Farfetch. Inspired by Net-A-Porter's clean layout, designer filters, and video usage. Focused on standout features like 'What's New' and designer collections.",
      "Persona Creation - Tech Tina – 27-year-old fashionista, always on trend, tech-curious. Goals: Become a fashion-tech icon, expand knowledge, share style. Pain points: No one-stop-shop for stylish wearable tech or inspiration.",
      "UX & UI Design - Designed a clean, dark-themed interface with video modules and style guides. Focused on modular product pages with 'How to Wear' guides. Created a Visual Timeline Flow: Discover → Learn → Try-On → Buy."
    ],
    deliverables: [
      "Product Discovery - Clean layout with high-res lookbooks and designer filters",
      "How to Wear - Videos and photo guides showing styling examples",
      "AR Try-On (concept) - Users preview how products look on their body",
      "Designer Pages - Curated collections, collaborations, and exclusive drops",
      "Blog - Trend insights, tech news, and daily posts about fashion & wearables"
    ],
    images: [
      "/lovable-uploads/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png",
      "/lovable-uploads/d0f10fb1-b1eb-4e30-b666-c68f00716676.png",
      "/lovable-uploads/e047ad0c-5a06-4795-938c-c65d62909828.png",
      "/lovable-uploads/a473ef7d-6076-4386-af99-13262b6e684f.png",
      "/lovable-uploads/5291bbb5-d2b2-4171-b287-9a1d6735805b.png",
      "/lovable-uploads/fb4255d4-cbcb-4174-b175-79f29efbc498.png"
    ],
    conclusion: {
      impact: "75% of testers said they felt more confident exploring wearable tech. Strong positive feedback on the luxury aesthetic and video styling modules. Research-informed personas led to better content structure and usability.",
      learnings: "Tech Noir was a unique opportunity to combine my passions for fashion, storytelling, and UX/UI design. It taught me how to elevate digital retail experiences through education and style.",
      nextSteps: "If expanded, I'd add personalized onboarding, real-time AR try-ons, and community-based lookbooks to increase engagement."
    },
    techStack: ["Figma", "Adobe XD", "Illustrator", "Miro", "UserZoom", "Photoshop"],
    keyAchievements: [
      "Created a unique e-commerce model that blends shopping with discovery",
      "Designed high-fidelity prototypes and user flows in Figma", 
      "Created a brand aesthetic aligned with luxury and tech-forward vibes"
    ],
    problemSolved: "The gap between wearable technology and fashion, helping users understand and confidently incorporate tech into their personal style.",
    technicalHighlights: [
      "Clean, dark-themed interface with video modules",
      "Modular product pages with 'How to Wear' guides",
      "Visual Timeline Flow: Discover → Learn → Try-On → Buy",
      "Designer filters and high-resolution lookbooks"
    ],
    teamSize: "3 members",
    methodologies: ["User Research", "Competitive Analysis", "Persona Creation", "Prototyping", "Usability Testing"],
    summary: "Tech Noir is a mobile e-commerce experience bringing high fashion and wearable tech together in one stylish, educational platform that inspires, informs, and sells.",
    solution: "Built an intuitive mobile e-commerce platform that not only sells wearable technology fashion items but educates users on how to style and incorporate them into their wardrobes, with features like AR try-on, designer collections, and educational content.",
    videoUrl: "https://drive.google.com/file/d/17QHz02DcNbzIJYMpO2d5rtkfWZ_aw_H8/view?usp=sharing"
  };
};
