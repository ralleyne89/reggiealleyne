import { ProjectType } from '../../../types/project';

export const getCllctveProject = (): ProjectType => {
  return {
    id: 1,
    slug: "cllctve-platform",
    title: "CLLCTVE Platform",
    description: "A mobile-first creator portfolio platform that reached 500+ creators by focusing on behavior fit instead of Behance-style feature parity.",
    fullDescription: "We chose mobile-first over desktop feature parity because creators needed a portfolio they could update and share from a phone. The resume reports 500+ creators, 15 brand partnerships, and 85% retention before the company closed.",
    image: "/images/cllctve-gen-z-card.jpg",
    category: "Platform",
    tags: ["Platform", "Creative", "Gen Z", "Portfolio"],
    role: "UX/UI Designer & Frontend Engineer",
    duration: "1 year, 10 months",
    year: "2022",
    challenge: "Behance already had reach, credibility, and desktop workflows. CLLCTVE had to give Gen Z creators a reason to use a smaller platform, so we bet on mobile creation, community feedback, and faster iteration instead of chasing every professional portfolio feature.",
    process: [
      "Used mobile browsing data to prioritize phone-first portfolio creation and viewing over desktop power tools.",
      "Stayed with React because it was the existing product stack and supported fast design-to-code iteration.",
      "Built the community feed before analytics to test whether feedback could create a stronger return loop.",
      "Constrained brand customization so challenge pages could flex without breaking the platform system."
    ],
    deliverables: [
      "Custom Portfolio Builder - Drag-and-drop interface that prioritized mobile touch interactions",
      "Modular Portfolios - Category-based organization designed for swipe-based browsing",
      "Branded Challenge Pages - Customization within strict design system constraints",
      "Real-time Notifications - Engagement hooks designed for return visits"
    ],
    images: [
      "/images/cllctve-gen-z-card.jpg",
      "/images/cllctve-profile-rebuilt.jpg",
      "/images/fbb376a0-30ad-4530-8445-159e6767e748.png",
      "/images/009d9393-dfb9-453e-8811-1f52d78bf7f1.png"
    ],
    conclusion: {
      impact: "Reached 500+ creators, 15 brand partnerships, and 85% user retention. The mobile-first choice gave us an engagement path larger desktop-first platforms were not prioritizing.",
      learnings: "The useful lesson was that the best technical choice depends on product risk. React was not the purest mobile answer, but it let our team learn faster.",
      nextSteps: "The company closed, but the product lesson still guides how I weigh user behavior against category convention."
    },
    techStack: ["React.js", "MongoDB", "Ant Design", "Axios", "Styled Components"],
    keyAchievements: [
      "85% user retention by prioritizing mobile experience over feature parity",
      "15 brand partnerships by limiting customization to maintain platform quality", 
      "500+ active creators in a market dominated by established players"
    ],
    problemSolved: "Gave Gen Z creators a portfolio flow built for mobile, visual sharing, and community feedback without forcing them into a desktop-first professional mold.",
    technicalHighlights: [
      "Used lazy loading to keep media-heavy portfolio pages manageable on mobile connections",
      "Built design token system that enabled brand customization without breaking platform coherence",
      "Implemented optimistic UI updates for instant-feeling interactions on slower mobile connections"
    ],
    methodologies: ["Agile", "Bi-weekly Sprints", "User Testing", "React.js", "Figma", "Ant Design"],
    summary: "A mobile-first portfolio platform that proved Gen Z creators would trade network size for a product shaped around how they already shared work.",
    date: "2022-06-15",
    solution: "Built a mobile-first portfolio platform that prioritized quick publishing, visual browsing, feedback, and brand opportunities over desktop feature parity.",
    liveUrl: "https://cllctve-demo.web.app"
  };
};
