
import { ProjectType } from '../../../types/project';

export const getChillVibesProject = (): ProjectType => {
  return {
    id: 7,
    slug: "chill-vibes-music-player", 
    title: "Chill Vibes Music Player",
    description: "A minimalist React-based music app designed for focus and flow, featuring clean UI and lofi hip hop to help users concentrate without distractions.",
    fullDescription: "Chill Vibes is a personal project created to explore how simple, thoughtful design can enhance everyday routines. Built as a responsive web app, it plays calming lofi hip hop to help users focus, relax, or just vibe out—no ads, no distractions, just good energy.",
    image: "/placeholder.svg",
    tags: ["Music", "UX/UI", "React.js", "Firebase"],
    role: "Frontend Engineer & Designer",
    duration: "1 month",
    year: "2020",
    challenge: "Music apps often come loaded with too many features, popups, or clutter. For people who just want something simple and low-maintenance, especially while working or studying, there aren't many clean, browser-based options that just play calming music and get out of the way.",
    process: [
      "Sketched out a single-screen layout focused on a centered music player with minimal UI elements",
      "Decided early on to avoid traditional nav bars and menus—just a play/pause button, track name, and vibe",
      "Chose dark tones and soft gradients to visually support the chill aesthetic",
      "Built in React.js using functional components and hooks",
      "Used Firebase Hosting for live deployment and future scalability",
      "Created a modular structure to easily swap or add new music streams",
      "Used Bootstrap to speed up responsive layout handling"
    ],
    deliverables: [
      "One-Click Playback - Users land, press play, and relax—no signups or steps",
      "Dark UI Theme - Designed to feel calm, clean, and non-distracting",
      "Mobile Responsive - Built with small-screen usage as a priority", 
      "Embedded Audio Stream - Easy to update or extend for future tracks",
      "Firebase Hosted - Fast, scalable, and live online at all times"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    conclusion: {
      impact: "Chill Vibes reminded me how impactful small projects can be. I got to combine design thinking with front-end implementation in a way that felt fun and personal.",
      learnings: "Even without user accounts or complex features, it serves a purpose—and gave me space to experiment with UI, theming, and React structure.",
      nextSteps: "I plan to continue building it out with more music sources, user customization, and lightweight account features. But even in its current form, it's a tool I find myself coming back to daily."
    },
    techStack: ["React.js", "Firebase", "Bootstrap", "CSS Modules"],
    keyAchievements: [
      "Designed and developed the entire app independently",
      "Focused on simplicity, mobile responsiveness, and user flow", 
      "Used this as a sandbox to grow skills in React.js and Firebase",
      "Built a foundation for future features like playlists, favoriting, and user auth"
    ],
    problemSolved: "For people who just want something simple and low-maintenance while working or studying, Chill Vibes provides a clean, browser-based option that just plays calming music and gets out of the way.",
    technicalHighlights: [
      "Functional components and React Hooks",
      "Mobile-first responsive design",
      "Modular architecture for easy expansion",
      "Firebase integration for hosting",
      "Dark mode UI with custom gradients"
    ],
    teamSize: "1 member (Solo Project)",
    liveUrl: "https://chill-vibes.web.app/",
    methodologies: ["Mobile-First Design", "Minimalist UI/UX", "Design Thinking"],
    summary: "Chill Vibes is a personal project created to explore how simple, thoughtful design can enhance everyday routines through a dedicated space for background music while working remotely.",
    solution: "A fully responsive, browser-friendly music player with minimalist UI, mood-aligned design, and distraction-free interface focused on helping users concentrate."
  };
};
