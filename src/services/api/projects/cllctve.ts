
import { ProjectType } from '../../../types/project';

export const getCllctveProject = (): ProjectType => {
  return {
    id: 1,
    slug: "cllctve-platform",
    title: "CLLCTVE Platform",
    description: "A leading portfolio platform connecting Gen Z creatives to their next opportunity.",
    fullDescription: "CLLCTVE is a digital portfolio platform built to empower Gen Z creators. It provides a space for users to showcase their work, grow their professional network, and connect with brands through creative challenges. The platform bridges the gap between young talent and professional opportunities—offering rewards, exposure, and a home for their evolving digital identity.",
    image: "/lovable-uploads/96e0002f-13cc-470b-925d-2e1d627aa695.png",
    category: "Platform",
    tags: ["Platform", "Creative", "Gen Z", "Portfolio"],
    role: "Frontend Developer",
    duration: "1 year, 10 months",
    year: "2022",
    challenge: "How do we give Gen Z creators a platform that feels like home for their creative work—and one that connects them with real opportunities? Many portfolio platforms lack the visual appeal, interactivity, and network-building features Gen Z users want. CLLCTVE needed to stand out as a hybrid between portfolio, discovery, and challenge platform.",
    process: [
      "User Research & Strategy - Identified key user behaviors: mobile-first, visual-heavy interaction, low barrier to entry. Needed a platform that 'felt fun,' but still provided career value.",
      "Design Collaboration - Converted wireframes to modular, scalable UI components. Used Ant Design for quick prototyping, paired with custom Styled Components for brand fit.",
      "Frontend Development - Built pages: Onboarding, Challenge Discovery, Profile, and Brand Collab. Axios used for data calls to MongoDB.",
      "Iteration & Feedback - Beta tested with Gen Z creators. Improved mobile load times and simplified challenge submission flow based on feedback."
    ],
    deliverables: [
      "Custom Portfolio Builder – Drag-and-drop interface for content arrangement",
      "Modular Portfolios – Creators can visually organize work by category",
      "Branded Pages – Custom-styled areas for brand-hosted challenges",
      "Notification Panel – Keeps users updated on challenges and opportunities"
    ],
    images: [
      "/lovable-uploads/96e0002f-13cc-470b-925d-2e1d627aa695.png",
      "/lovable-uploads/bb480e3a-f008-47a7-ab1f-621a3954be31.png",
      "/lovable-uploads/fbb376a0-30ad-4530-8445-159e6767e748.png",
      "/lovable-uploads/b1ef10bb-d85b-4368-91b9-03baf5a58d03.png",
      "/lovable-uploads/90799d18-8b1c-45e0-af74-77d0d2ed0b22.png"
    ],
    conclusion: {
      impact: "The platform successfully created a community of creative talent, resulting in numerous brand partnerships and collaborations. User engagement metrics showed strong retention, with creators regularly updating their portfolios and participating in challenges.",
      learnings: "CLLCTVE pushed me to grow as a developer and collaborator. I learned how user research drives design decisions, how to build components that scale with product goals, and how to balance brand expression with accessibility.",
      nextSteps: "This project reinforced the importance of shipping fast—but thoughtfully—with real users in mind."
    },
    techStack: ["React.js", "MongoDB", "Ant Design", "Axios", "Styled Components"],
    keyAchievements: [
      "Improved page load time through code optimization and asset management",
      "Implemented responsive design system that increased mobile engagement", 
      "Delivered 4 major UI feature launches with zero critical bugs"
    ],
    problemSolved: "The gap between young creative talent and professional opportunities, providing Gen Z creators with a platform that feels like home for their work.",
    technicalHighlights: [
      "Built responsive layouts with Styled Components",
      "Performance tuning for mobile experience",
      "Implemented real-time validation in challenge flows",
      "Scalable front-end architecture as product grew"
    ],
    teamSize: "6 members",
    methodologies: ["Agile", "Bi-weekly Sprints", "User Testing", "React.js", "Figma", "Ant Design"],
    summary: "CLLCTVE is a leading portfolio platform connecting Gen Z creatives to their next opportunity through an intuitive, highly visual portfolio experience.",
    date: "2022-06-15",
    solution: "Built an intuitive, highly visual portfolio platform that connects Gen Z creatives with brands through hosted challenges, while providing a sense of community and career development.",
    liveUrl: "https://cllctve-demo.web.app"
  };
};
