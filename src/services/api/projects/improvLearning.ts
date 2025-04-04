
import { ProjectType } from '../../../types/project';

export const getImprovLearningProject = (): ProjectType => {
  return {
    id: 5,
    slug: "improv-learning",
    title: "Improv Learning – Traffic School Landing Page",
    description: "A simplified landing experience for driving education and insurance savings",
    fullDescription: "Improv Traffic School partnered with GEICO to create a conversion-optimized landing page for their online defensive driving course. The goal was to boost signups by clearly communicating course benefits while maintaining trust and usability across all devices.",
    image: "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
    tags: ["Web Design", "UI Design", "Conversion Rate"],
    role: "UI Designer",
    duration: "3 weeks",
    year: "2019",
    challenge: "Users visiting the site were either unfamiliar with online traffic schools or unsure whether the course was legitimate and easy to complete. The landing page needed to remove friction, build trust, and guide users to sign up quickly—especially from mobile.",
    process: [
      "Mapped out user priorities: 'Is this legit?' → 'What do I get?' → 'Where do I sign up?'",
      "Wireframed a top-down content flow with emphasis on clear CTAs and minimal distractions",
      "Designed above-the-fold section to immediately highlight price, benefits, and a signup button",
      "Used bright CTA colors (orange) to contrast against neutral tones for high visibility",
      "Integrated GEICO brand elements (mascot, logo) to increase trust",
      "Worked with developers to implement collapsible components and layout responsiveness"
    ],
    deliverables: [
      "Responsive Landing Page",
      "Visual Modules for Key Benefits",
      "Testimonial Section",
      "Course Breakdown",
      "FAQ Accordion",
      "Support Information Block",
      "Trust Bar with Media Logos"
    ],
    images: [
      "/lovable-uploads/973f2c83-3ea0-443a-b54c-7f2a59dfbee0.png",
      "/lovable-uploads/e5cedc19-cd1f-4736-a165-a7111ec361a7.png"
    ],
    conclusion: {
      impact: "Helped launch the new landing experience on time and in sync with GEICO campaign rollout. Design feedback praised the clarity of layout and visual balance of trust + urgency.",
      learnings: "This project reinforced how UI design directly supports business goals. It was a fast-paced, high-impact opportunity to improve user trust and simplify the path to conversion.",
      nextSteps: "If expanded, I'd love to run deeper usability tests and explore A/B variants of the CTA structure."
    },
    techStack: ["Figma", "Adobe Photoshop", "HTML/CSS"],
    keyAchievements: [
      "Designed a single-page experience to increase course enrollment",
      "Focused on building trust through visual clarity and brand alignment",
      "Created a scalable design system for future promo pages",
      "Supported development in optimizing for mobile-first experience"
    ],
    problemSolved: "Users visiting the site were either unfamiliar with online traffic schools or unsure whether the course was legitimate and easy to complete.",
    technicalHighlights: [
      "Flash Sale Module with timed promo block",
      "Benefit Overview showcasing 'DMV Approved,' 'No Final Exam,' 'Save on Insurance'",
      "Testimonial Section with user avatars and review highlights",
      "FAQ Accordion for addressing objections",
      "Trust Bar featuring logos from NBC, PBS, and NY Times"
    ],
    teamSize: "3 members",
    methodologies: ["Mobile-First Design", "Visual Hierarchy", "Conversion Rate Optimization"],
    summary: "A simplified landing experience for Improv Traffic School's GEICO partnership focused on boosting course enrollment through clear communication of benefits and trust-building design elements."
  };
};
