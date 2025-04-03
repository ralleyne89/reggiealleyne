
import { ProjectType } from '../../../types/project';

export const getChillVibesProject = (): ProjectType => {
  return {
    id: 7,
    slug: "chill-vibes-music-player", 
    title: "Chill Vibes Music Player",
    description: "A minimalist music player app designed for ambient and lo-fi music enthusiasts, featuring playlist curation and mood-based recommendations.",
    fullDescription: "Chill Vibes is a specialized music streaming application focused on providing a distraction-free listening experience for ambient, lo-fi, and meditation music. The app features intelligent mood detection, custom playlist creation, and integration with multiple streaming platforms.",
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa",
    tags: ["Music", "UX/UI", "Mobile App"],
    role: "Developer & UI Designer",
    duration: "2 months",
    year: "2020",
    challenge: "Create a distraction-free music experience focused on helping users relax and focus without the overwhelming features of mainstream streaming apps",
    process: [
      "Analyzed popular music streaming platforms and conducted competitive research to identify core feature requirements",
      "Created mood boards and design systems focused on minimalist UI with soothing color schemes",
      "Implemented user journey mapping to ensure the listening experience remained undisturbed",
      "Prototyped playback controls that minimize cognitive load while maintaining functionality",
      "Tested interface with actual users during meditation and focus sessions"
    ],
    deliverables: ["UI Design System", "Interactive Prototype", "User Research Report", "Feature Roadmap", "Marketing Assets"],
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    ],
    conclusion: {
      impact: "Reduction in UI interactions needed for continuous playback compared to mainstream apps",
      learnings: "Less is more - users valued the absence of features as much as the presence of essential ones",
      nextSteps: "Expanding the platform with sleep-timer functionality and integration with wellness apps"
    },
    techStack: ["React", "Figma", "Youtube API"],
    keyAchievements: ["Built responsive UI from scratch using React hooks", "Implemented custom audio controls with YouTube API integration", "Designed and shipped MVP in under 2 months"],
    problemSolved: "Mainstream music apps are designed for active engagement and discovery, creating friction for users who just want to relax and focus",
    technicalHighlights: ["Custom audio visualizer", "Cross-platform playlist syncing", "Background play optimization", "Sleep timer with fade-out"],
    teamSize: "1 member",
    liveUrl: "https://chill-vibes.web.app/",
    methodologies: ["Design Thinking", "Agile Development", "Lean UX"],
    summary: "Chill Vibes simplifies the listening experience for ambient and lo-fi music enthusiasts with a minimalist interface focused on reducing distractions and enhancing focus states.",
    solution: "A streamlined music player interface, simplified controls, and curated content specifically for relaxation and focus scenarios."
  };
};
