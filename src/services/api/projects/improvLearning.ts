
import { ProjectType } from '../../../types/project';

export const getImprovLearningProject = (): ProjectType => {
  return {
    id: 5,
    slug: "improv-learning",
    title: "Improv Learning - Traffic School",
    description: "A high-converting website for Geico's traffic school partnership focused on increasing user sign-up rates.",
    fullDescription: "A comprehensive website designed for the new traffic school partnership with Geico Insurance. The platform aims to create a seamless user experience that encourages completion of traffic school requirements while maintaining an engaging learning environment.",
    image: "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
    tags: ["Web Design", "UX/UI", "Conversion Rate"],
    role: "UX/UI Designer",
    duration: "3 months",
    year: "2019",
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
      "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
      "/lovable-uploads/e5cedc19-cd1f-4736-a165-a7111ec361a7.png"
    ],
    conclusion: {
      impact: "Increase in sign-up conversions, reduction in course drop-off rates",
      learnings: "The importance of streamlined form design and clear progress indicators for completion-focused experiences",
      nextSteps: "Expanding with additional course offerings and implementing gamification elements"
    },
    techStack: ["Figma", "Illustrator"],
    keyAchievements: [
      "Increased course completion rate",
      "Reduced average completion time",
      "Improved mobile conversion"
    ],
    problemSolved: "Low conversion and high abandonment rates in traditional traffic school websites",
    technicalHighlights: [
      "Adaptive learning path algorithm",
      "Real-time progress tracking",
      "Seamless Geico account integration",
      "Auto-save feature to prevent data loss"
    ],
    teamSize: "4 members",
    methodologies: ["User-Centered Design", "Agile", "A/B Testing"],
    summary: "A high-converting traffic school website for Geico Insurance that significantly improved sign-up and completion rates through intuitive design."
  };
};
