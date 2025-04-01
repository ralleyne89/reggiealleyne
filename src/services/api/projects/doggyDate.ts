
import { ProjectType } from '../../../types/project';

export const getDoggyDateProject = (): ProjectType => {
  return {
    id: 4,
    title: "Doggy Date",
    description: "The dating app for dog lovers - find matches who love dogs as much as you do.",
    fullDescription: "Doggy Date is a social network for dog owners with a dating app component. Once downloaded, and a user profile is created they will discover our multifaceted dog community.",
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
    tags: ["Social", "Dating App", "Dog Lovers"],
    role: "UX, UI & Visual Design",
    duration: "2 months",
    year: "2023",
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
      "UI Kit", 
      "Final App Design"
    ],
    images: [
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
      "https://images.unsplash.com/photo-1544568100-847a948585b9",
      "https://images.unsplash.com/photo-1583511666372-62fc211f8377"
    ],
    conclusion: {
      impact: "Created a unique dating platform for dog lovers that has a strong community focus",
      learnings: "The critical importance of creating a unique experience that differentiates from existing dating apps",
      nextSteps: "Implementing additional community-focused features and expanding to more cities"
    },
    techStack: ["Sketch", "Photoshop", "InVision", "Figma"],
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
    teamSize: "2 members",
    methodologies: ["User Interviews", "Persona Creation", "Wireframing", "Prototyping", "User Testing"],
    liveUrl: "https://www.doggydate.us/",
    githubUrl: null,
    summary: "Doggy Date is a social network and dating app for dog owners that enables them to connect with other local dog lovers, share hangout spots, and potentially find romance with someone who shares their passion for dogs."
  };
};
