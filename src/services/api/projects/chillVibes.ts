
import { ProjectType } from '../../../types/project';

export const getChillVibesProject = (): ProjectType => {
  return {
    id: 7,
    slug: "chill-vibes-music-player", 
    title: "Chill Vibes Music Player",
    description: "A freelance project where I built a minimalist music streaming MVP for a client who was tired of cluttered music apps. Clean interface, smooth playback, no distractions.",
    fullDescription: "Got hired by a client who wanted to prove that music apps didn't have to be overwhelming. I designed and built the entire thing from wireframes to deployment - a responsive web app focused on just playing music without all the usual bells and whistles.",
    image: "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png",
    tags: ["Music", "UX/UI", "React.js", "Firebase"],
    role: "UI/UX Designer & Frontend Developer",
    duration: "6 months",
    year: "2020",
    challenge: "The client was frustrated with how every music app felt like a social media platform. They wanted something for people who just want to listen to music - no podcasts, no social feeds, no algorithmic chaos. Just clean design and good tunes.",
    process: [
      "Started with user interviews and competitive analysis to understand what people actually wanted",
      "Wireframed a super simple interface - literally just the music and basic controls",
      "Designed in Figma with a dark, minimal aesthetic that wouldn't compete with the music",
      "Built the frontend in React with clean, reusable components",
      "Integrated with music streaming APIs and optimized for smooth playback",
      "Made everything responsive because people listen to music on their phones",
      "Deployed on Firebase for easy client testing and feedback"
    ],
    deliverables: [
      "Clean Music Interface - Land on the page and immediately know how to play music",
      "Dark Mode Design - Easy on the eyes and won't compete with your music",
      "Mobile-First Build - Works perfectly on phones because that's where people listen", 
      "Smooth Audio Streaming - Music plays reliably without stutters or gaps",
      "Live MVP Deployment - Hosted and ready for the client to test with real users"
    ],
    images: [
      "/images/a6e65372-edc9-4098-aa00-82ee5a49def0.png",
      "/images/668e3d64-e2f9-4f31-9499-72d8db2269f0.png",
      "/images/7c5ca8bf-a2f4-41e8-a3fa-71e0099a2adf.png",
      "/images/6c61f05a-9d32-4df9-bcbe-d5187f822b51.png",
      "/images/6f0c29e0-049e-4fed-addf-089a0fd9abbe.png",
      "/images/77847d00-98c9-4081-9595-ed324d71c1e6.png"
    ],
    conclusion: {
      impact: "The client was stoked with how the MVP turned out. It proved their point that music apps could be simple and still functional. They got the validation they needed to move forward with user testing.",
      learnings: "This project taught me that sometimes the best feature is the one you don't build. Every decision was about what to leave out, not what to add in.",
      nextSteps: "The client took the MVP and ran user tests, which gave them great feedback for the next iteration. They're now working on adding social features, but keeping the core experience clean."
    },
    techStack: ["React.js", "Firebase", "Bootstrap", "CSS Modules"],
    keyAchievements: [
      "Delivered a complete MVP that the client could immediately test with users",
      "Created an interface so simple that user onboarding was basically non-existent", 
      "Built a responsive web app that worked perfectly on mobile from day one",
      "Proved that music apps don't need to be complicated to be useful"
    ],
    problemSolved: "My client wanted to prove that music streaming could be simple and focused. I built them an MVP that does exactly that - plays music without getting in your way.",
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
    summary: "A freelance project where I helped a client prove that music apps could be simple and focused instead of overwhelming and cluttered.",
    solution: "A clean, responsive music streaming MVP that prioritizes the music experience over everything else - no social feeds, no complex menus, just good tunes."
  };
};
