import { ProjectType } from '../../../types/project';

export const getCllctveProject = (): ProjectType => {
  return {
    id: 1,
    slug: "cllctve-platform",
    title: "CLLCTVE Platform",
    description: "Solving the 'dead portfolio' problem: How we got 500+ creators to 85% retention by building what Behance wouldn't—a mobile-first platform that felt like Instagram for portfolios.",
    fullDescription: "We chose mobile-first over feature parity, sacrificing desktop power users to capture the 67% of Gen Z who browse portfolios on phones. Behance had the network effects—we bet that Gen Z would trade network size for platform native-ness. The gamble paid off: 500+ creators, 15 brand partnerships, and 85% retention before the company dissolved.",
    image: "/images/96e0002f-13cc-470b-925d-2e1d627aa695.png",
    category: "Platform",
    tags: ["Platform", "Creative", "Gen Z", "Portfolio"],
    role: "Product Designer & Design Systems Lead",
    duration: "1 year, 10 months",
    year: "2022",
    challenge: "Why would Gen Z creators choose us over Behance with its massive network effects? We had to make a strategic bet: mobile-first over feature parity, community over competition, and platform-native experience over professional polish. Every decision was a calculated trade-off, not ignorance of alternatives.",
    process: [
      "Strategic Bet: Mobile-First - 67% of our target users browsed portfolios on phones. We sacrificed desktop power-user features to win mobile engagement.",
      "React over Flutter - Despite slower time-to-mobile, our team's React expertise meant faster iteration cycles. Speed of learning beat theoretical mobile advantages.",
      "Community Feed Before Analytics - User research showed creators wanted validation, not metrics. We built what they wanted, not what seemed 'professional'.",
      "Limited Brand Customization - Brands wanted more control, but we prevented 'MySpace chaos' to maintain platform coherence."
    ],
    deliverables: [
      "Custom Portfolio Builder – Drag-and-drop interface that prioritized mobile touch interactions",
      "Modular Portfolios – Category-based organization designed for swipe-based browsing",
      "Branded Challenge Pages – Customization within strict design system constraints",
      "Real-time Notifications – Engagement hooks that felt native to Gen Z social patterns"
    ],
    images: [
      "/images/96e0002f-13cc-470b-925d-2e1d627aa695.png",
      "/images/fbb376a0-30ad-4530-8445-159e6767e748.png",
      "/images/009d9393-dfb9-453e-8811-1f52d78bf7f1.png"
    ],
    conclusion: {
      impact: "500+ creators, 15 brand partnerships, 85% user retention. The mobile-first bet paid off—our engagement metrics outperformed desktop-focused competitors despite having 1/100th of their user base.",
      learnings: "The biggest lesson: sometimes the 'wrong' technical choice is the right product choice. React wasn't ideal for mobile, but our team's expertise meant we could iterate 3x faster than learning Flutter.",
      nextSteps: "The company dissolved, but the strategic thinking—betting on user behavior over industry conventions—shapes how I approach every product decision now."
    },
    techStack: ["React.js", "MongoDB", "Ant Design", "Axios", "Styled Components"],
    keyAchievements: [
      "85% user retention by prioritizing mobile experience over feature parity",
      "15 brand partnerships by limiting customization to maintain platform quality", 
      "500+ active creators in a market dominated by established players"
    ],
    problemSolved: "Bridged the gap between Gen Z creator behavior (mobile-first, visual, community-driven) and professional portfolio needs—something Behance's desktop-first approach couldn't address.",
    technicalHighlights: [
      "Chose lazy loading over pre-rendering despite slower initial perception—Gen Z tolerates spinners better than 5MB page weights",
      "Built design token system that enabled brand customization without breaking platform coherence",
      "Implemented optimistic UI updates for instant-feeling interactions on slower mobile connections"
    ],
    teamSize: "6 members",
    methodologies: ["Agile", "Bi-weekly Sprints", "User Testing", "React.js", "Figma", "Ant Design"],
    summary: "A strategic bet on mobile-first design that proved Gen Z would trade network size for platform-native experience—500+ creators, 85% retention.",
    date: "2022-06-15",
    solution: "Built a mobile-first portfolio platform that felt native to Gen Z digital behavior, sacrificing desktop feature parity to win the mobile experience where 67% of our users actually browsed.",
    liveUrl: "https://cllctve-demo.web.app"
  };
};
