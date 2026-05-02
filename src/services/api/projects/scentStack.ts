import { ProjectType } from "../../../types/project";

export const getScentStackProject = (): ProjectType => {
  return {
    id: 12,
    slug: "scent-stack",
    title: "ScentStack – AI-Powered Fragrance Discovery Platform",
    description:
      "1700+ fragrance dupes with AI-powered scent matching, layering recommendations, and dream scent discovery. Saving users 90% on luxury fragrances.",
    role: "Product Designer & AI Product Strategist",
    year: "2026",
    duration: "3 weeks",
    teamSize: "Lean product team",
    tags: ["AI/ML", "Consumer Product", "React", "Product Strategy", "Computer Vision", "GPT-5", "UX Design"],
	    image: "/images/scentstack_hero.png",
    summary:
      'ScentStack is an AI-powered fragrance discovery platform that democratizes luxury scents through a database of 1700+ affordable dupes, computer vision-powered layering suggestions, and natural language "dream scent" matching. Built as a focused consumer-product engagement for fragrance discovery.',
    problem:
      "The fragrance industry operates on a fundamental inequity: identical scent formulas command wildly different prices based on branding alone. Meanwhile, the art of fragrance layering remains inaccessible to beginners, and the gap between imagining your perfect scent and actually finding it has no bridge.",
    solution:
      "ScentStack addresses these gaps through three integrated features: (1) Discover—a comprehensive dupe database showing luxury fragrances alongside affordable alternatives with 90% average savings, (2) Layering Lab—computer vision technology that analyzes your existing fragrances and suggests complementary combinations, and (3) Dream Lab—GPT-5 powered natural language processing that translates scent descriptions into concrete fragrance recommendations.",
    methodologies: [
      "Human-Centered Design",
      "Product Strategy",
      "Prompt Engineering",
      "Computer Vision Integration",
      "Rapid Prototyping",
    ],
    process: [
      "Identified core user pain points through fragrance community research and competitive analysis.",
      "Designed and built comprehensive dupe database covering 148+ designer brands with price comparison data.",
      "Integrated GPT-5 for natural language scent matching, enabling users to describe their dream scent in plain English.",
      "Implemented computer vision pipeline for Layering Lab, allowing photo-based fragrance analysis.",
      "Created editorial visual design system with purple accent and Bento-style card layouts.",
      "Deployed scalable React application with mobile-first responsive design.",
    ],
    deliverables: [
      "Complete Web Application",
      "Fragrance Dupe Database (1700+ dupes)",
      "Dream Lab AI Feature (GPT-5 powered)",
      "Layering Lab (Computer Vision)",
      "A-Z Brand Browser (150+ brands)",
      "Price Comparison System",
    ],
	    images: [
	      "/images/scentstack_hero.png",
	      "/images/scentstack-dupes.png",
	      "/images/scentstack-dreamlab.png",
	      "/images/scentstack-layering.png",
	    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://scentstack.lovable.app",
    prototypeUrl: null,
    keyAchievements: [
      "Delivered a complete consumer product in just 3 weeks",
      "Curated database of 1700+ fragrance dupes with 90% average savings for users",
      "Integrated GPT-5 for natural language scent matching (Dream Lab feature)",
      "Implemented computer vision for photo-based fragrance layering recommendations",
      "Covered 150+ designer brands in comprehensive A-Z browser",
    ],
    technicalHighlights: [
      "GPT-5 powered natural language processing for dream scent descriptions",
      "Computer vision pipeline for analyzing fragrance bottles from photos",
      "React + Tailwind CSS with editorial design system",
      "Bento-style card layouts with purple accent theming",
      "Mobile-first responsive design for on-the-go fragrance discovery",
      "Comprehensive search and filter functionality across 1700+ entries",
    ],
  };
};
