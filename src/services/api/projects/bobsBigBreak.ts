
import { ProjectType } from '../../../types/project';

export const getBobsBigBreakProject = (): ProjectType => {
  return {
    id: 8,
    slug: "bobs-big-break",
    title: "Bob's Big Break",
    description: "A low-effort, high-reward idle game for the moments in life when your brain needs a break—but your hustle doesn't.",
    fullDescription: "An incremental clicker game designed for short attention spans and mobile-friendly interaction. Players help Bob, a scrappy entrepreneur, earn Coins through hustles or by hiring hustlers for passive income.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff",
    category: "Game Development",
    tags: ["React", "Node.js", "Game Design", "School Project"],
    role: "UX/UI Designer & Web Developer",
    duration: "2 weeks",
    year: "2020",
    challenge: "Whether it's a tired commuter on the way home, a parent entertaining a curious child, or a user waiting on a phone call, there are times when people want a game that doesn't demand much focus but still feels rewarding.",
    process: [
      "We began with concept development and used whiteboarding to define the user journey and key game mechanics. The goal was to streamline the clicker mechanics into a simple flow that would allow for immediate playability and long-term satisfaction.",
      "I led the design of our MVP components, including the dashboard, upgrade store, and character profile. I also designed custom character art and branding assets, including a logo and UI icons. Wireframes helped us visualize the game economy and interface before development.",
      "I built the frontend in React and styled it with Bulma, while integrating backend functionality using Node.js and MongoDB. We set up a basic economy system and character progression logic, including local data persistence and real-time passive income tracking."
    ],
    deliverables: ["UX/UI Design", "Frontend Development", "Backend Integration", "Game Economy Design", "Character Art"],
    images: [
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
      "https://images.unsplash.com/photo-1553481187-be93c21490a9"
    ],
    conclusion: {
      impact: "Successfully delivered a playable game prototype as part of a school project",
      learnings: "Balancing complexity in idle mechanics taught me how to scale features without overwhelming users. Designing for low-attention states challenged my UX instincts and helped me think more empathetically about user context.",
      nextSteps: "User testing with casual players, achievements or social sharing to increase player retention, mobile optimization for even more intuitive thumb-first interaction"
    },
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Bulma"],
    keyAchievements: [
      "Designed and developed a functional game prototype in just 2 weeks",
      "Created a balanced game economy with both active and passive progression systems",
      "Implemented data persistence using MongoDB to save player progress"
    ],
    githubUrl: "https://github.com/username/bobs-big-break",
    liveUrl: null,
    problemSolved: "Creating an engaging game experience for low-attention, short-session moments",
    technicalHighlights: [
      "Tap or Idle Play: Earn coins by clicking or passively through investments",
      "Upgradeable Hustles & Hustlers: Strategic choice between active and passive income streams",
      "Cosmetic Customization: Outfit Bob with style as his empire grows",
      "Data Persistence: Progress is saved across sessions using a MongoDB backend"
    ],
    teamSize: "2 members",
    methodologies: ["Rapid Prototyping", "Iterative Design", "Game Balance Testing"],
    summary: "A lighthearted incremental clicker game where players help Bob, an entrepreneur, earn coins through active clicking or passive income generators. Built as a school project in 2 weeks.",
    date: "2020-08-15"
  };
};
