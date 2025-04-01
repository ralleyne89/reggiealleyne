
import { ProjectType } from '../../../types/project';

export const getImprovLearningProject = (): ProjectType => {
  return {
    id: 5,
    slug: "improv-learning", // Added proper slug
    title: "Improv Learning - Traffic School",
    description: "A high-converting website for Geico's traffic school partnership focused on increasing user sign-up rates.",
    fullDescription: "A comprehensive website designed for the new traffic school partnership with Geico Insurance. The platform aims to create a seamless user experience that encourages completion of traffic school requirements while maintaining an engaging learning environment.",
    image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51",
    tags: ["Web Design", "UX/UI", "Conversion Rate"],
    role: "Lead UX Designer",
    duration: "3 months",
    year: "2023",
    challenge: "Create a high-converting website that increases user sign-up rates while ensuring compliance with traffic school requirements",
    process: [
      "Conducted user research to understand pain points in existing traffic school experiences",
      "Analyzed Geico's design guidelines and brand requirements for cohesive integration",
      "Created low-fidelity wireframes focusing on the conversion funnel",
      "Developed interactive prototypes for user testing",
      "Collaborated with developers to optimize the implementation"
    ],
    deliverables: [
      "Responsive Website Design",
      "Sign-up Flow",
      "Course Selection Interface",
      "Payment Integration",
      "Certificate Generation System",
      "Mobile Optimization"
    ],
    images: [
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81",
      "https://images.unsplash.com/photo-1570125909232-9a054b0db644",
      "https://images.unsplash.com/photo-1505915230175-0754bfbab5d5"
    ],
    conclusion: {
      impact: "42% increase in sign-up conversions, 28% reduction in course drop-off rates",
      learnings: "The importance of streamlined form design and clear progress indicators for completion-focused experiences",
      nextSteps: "Expanding with additional course offerings and implementing gamification elements"
    },
    techStack: ["Figma", "React", "TailwindCSS", "Node.js"],
    keyAchievements: [
      "Increased course completion rate by 35%",
      "Reduced average completion time by 15%",
      "Improved mobile conversion by 50%"
    ],
    problemSolved: "Low conversion and high abandonment rates in traditional traffic school websites",
    technicalHighlights: [
      "Adaptive learning path algorithm",
      "Real-time progress tracking",
      "Seamless Geico account integration",
      "Auto-save feature to prevent data loss"
    ],
    teamSize: "5 members",
    methodologies: ["User-Centered Design", "Agile", "A/B Testing"],
    summary: "A high-converting traffic school website for Geico Insurance that significantly improved sign-up and completion rates through intuitive design."
  };
};
