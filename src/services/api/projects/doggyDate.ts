
import { ProjectType } from '../../../types/project';

export const getDoggyDateProject = (): ProjectType => {
  return {
    id: 4,
    slug: 'doggy-date',
    title: "Doggy Date",
    description: "The dating app for dog lovers - find matches who love dogs as much as you do.",
    fullDescription: "Doggy Date is a social network for dog owners with a dating app component. Once downloaded, and a user profile is created they will discover our multifaceted dog community.",
    image: "/images/0b86301b-18ba-4c43-bd8a-ee1e0b41e1cd.png",
    tags: ["Social", "Dating App", "Dog Lovers"],
    role: "UX, UI & Visual Design",
    duration: "4 months",
    year: "2016",
    challenge: "Users that are accustomed to dating apps are already using competitors. Finding a way to make the app unique and interactive so users will use it continuously.",
    process: [
      "Visited dog parks around Los Angeles to interview dog owners about their views on dating apps.",
      "Created user personas based on the collected data to guide design decisions.",
      "Developed wireframes focusing on key features that would provide the most value.",
      "Designed a homepage featuring profiles and local hangouts to make suggestions to users.",
      "Integrated interactive features like 'Bark, Sniff & Lick' to make the app engaging and unique.",
      "Created a messaging system to allow users to connect and communicate with potential matches."
    ],
    deliverables: [
      "User Research Report", 
      "User Personas", 
      "Wireframes", 
      "Interactive Prototype", 
      "User Interface"
    ],
    // Removed duplicate images - Each image now appears only once in the array
    images: [
      "/images/57c3f150-f310-44ad-b0c2-e88165c01417.png",
      "/images/748d7e06-f545-44ba-842c-6401bf2284d1.png",
      "/images/b9b62216-4a0c-4367-bdab-32f608350015.png",
      "/images/0b86301b-18ba-4c43-bd8a-ee1e0b41e1cd.png",
      "/images/1e4175fe-fcab-40ea-8334-7f71053c9e27.png",
      "/images/1e5262b7-f4b4-42b2-a5b8-75ae974c6893.png",
      "/images/430a2d53-8e58-4b70-8af0-4055ce165684.png",
      "/images/d2647713-1d34-4235-8a9a-0e0b5b3645bd.png"
    ],
    conclusion: {
      impact: "Created a unique dating platform for dog lovers that has a strong community focus",
      learnings: "The critical importance of creating a unique experience that differentiates from existing dating apps",
      nextSteps: "Implementing additional community-focused features and expanding to more cities"
    },
    techStack: ["Photoshop", "Illustrator", "Adobe XD"],
    keyAchievements: [
      "Created a unique social network specifically for dog owners",
      "Developed 'Bark, Sniff & Lick' interactive notification system",
      "Designed local meetup features for dog owners"
    ],
    problemSolved: "Users that are accustomed to dating apps are already using competitors. Finding a way to make the app unique and interactive so users will use it continuously.",
    solution: "Along with a fun and interactive experience, Doggy Date will have a free messaging system that will allow users to interact with other local users. We also believe that having a dog focused theme that our users will enjoy the profile customization they can do for themselves and their furry best friend.",
    technicalHighlights: [
      "Bark, Sniff & Lick notification system",
      "Real-time messaging",
      "Location-based meetup suggestions",
      "Dual profile system for owners and dogs"
    ],
    teamSize: "4 members",
    methodologies: ["User Interviews", "Persona Creation", "Wireframing", "Prototyping", "User Testing"],
    // Removed liveUrl property
    githubUrl: null,
    summary: "Doggy Date is a social network and dating app for dog owners that enables them to connect with other local dog lovers, share hangout spots, and potentially find romance with someone who shares their passion for dogs."
  };
};
