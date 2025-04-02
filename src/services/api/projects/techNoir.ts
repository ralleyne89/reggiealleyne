
import { ProjectType } from '../../../types/project';

export const getTechNoirProject = (): ProjectType => {
  return {
    id: 3,
    slug: "tech-noir", 
    title: "TECH NOIR",
    description: "A fashion-tech e-commerce platform blending futuristic aesthetics with wearable technology for the modern consumer.",
    fullDescription: "An e-commerce platform that merges fashion and wearable technology, educating users on new trends in both worlds while offering a seamless shopping experience. The platform addresses consumer knowledge gaps about wearable technology by showcasing how to integrate tech into fashion.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", // Updated to a more tech/cyberpunk image
    category: "E-commerce",
    tags: ["E-commerce", "Fashion", "Wearable Tech"],
    role: "UX, UI & Visual Design",
    duration: "2 months",
    year: "2023",
    challenge: "Create an engaging platform that educates users about wearable technology while offering fashionable products",
    process: [
      "Research showed that consumers have little knowledge of wearable technology and its benefits",
      "Competitive analysis of luxury retail apps like Net-A-Porter, Nordstrom, and Farfetch",
      "User surveys revealed preference for in-store purchases due to lack of online education",
      "Created persona 'Tech Tina' - a 27-year-old fashionista who loves tech gadgets",
      "Designed wireframes with solid foundation for key features"
    ],
    deliverables: ["UX Strategy", "UI Design", "User Flows", "Interactive Prototype", "Design System"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
    ],
    conclusion: {
      impact: "28% increase in customer engagement with wearable tech products",
      learnings: "The importance of educational content in driving sales for innovative products",
      nextSteps: "Expanding product categories and implementing AR try-on features"
    },
    techStack: ["Figma", "Shopify", "React", "TailwindCSS"],
    keyAchievements: ["Designed 'How to Wear' section", "Developed educational blog content", "Created exclusive designer collaborations section"],
    problemSolved: "Lack of consumer knowledge about wearable technology and its fashion applications",
    technicalHighlights: ["Product comparison tool", "Designer style guides", "Daily blog posts", "AR try-on experience"],
    teamSize: "3 members",
    methodologies: ["Design Thinking", "Lean UX", "Usability Testing"],
    summary: "An e-commerce platform bridging the gap between fashion and wearable technology through education and seamless shopping experiences."
  };
};
