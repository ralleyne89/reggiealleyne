import { ProjectType } from "../../../types/project";

export const getLitmusAIProject = (): ProjectType => {
  return {
    id: 10,
    slug: "litmus-ai",
    title: "Litmus AI - AI Literacy Testing & Certification Platform",
    description:
      "An adaptive AI literacy test and certificate flow that gives users a baseline in under five minutes, then points them to the next lesson.",
    role: "UX/UI Designer & Frontend Developer",
    year: "2025",
    duration: "2 months",
    teamSize: "Lean product team",
    tags: [
      "AI Education",
      "EdTech",
      "Adaptive Learning",
      "AI Assessment",
      "Supabase",
      "Stripe Integration",
      "UX Design",
      "Training Platform",
    ],
    image: "/images/litmus-ai-literacy-card.jpg",
    summary:
      "Litmus AI measures practical AI literacy across concepts, communication, ethics, and everyday use cases. The MVP uses a short readiness assessment, results page, role-aware training recommendations, and a certificate flow so users can see what they know and what to study next.",
    problem:
      "People and teams were trying to talk about AI skills without a quick way to check the basics. Courses help after someone commits, but they do not answer the first question: what does this person already understand, and where are the gaps?",
    solution:
      "I built a short assessment that calibrates the user's starting level, scores across core AI topics, recommends lessons, and supports certification and billing paths through Stripe.",
    methodologies: [
      "Human-Centered Design (HCD)",
      "Information Architecture",
      "Assessment UX",
      "Frontend Engineering",
      "Payment Flow Design",
    ],
    process: [
      "Researched how students, professionals, and HR teams evaluate AI readiness, then narrowed the product around a fast baseline test.",
      "Mapped the quiz, results, recommendations, and admin dashboard in Figma before building the MVP.",
      "Designed the level-selection, progress, domain-score, and recommendation states so the test could stay fast without feeling thin.",
      "Built frontend routes for assessment, training, certification, billing, dashboard, profile, login, and registration.",
      "Connected Supabase auth, the platform API, training data, and Stripe-backed billing states into one MVP path.",
      "Tested assessment start, result states, training access, certification entry, and checkout handoffs across local and production-style paths.",
    ],
    deliverables: [
      "Functional MVP Web Platform",
      "Adaptive AI Literacy Test Engine",
      "Personalized Course Recommendations",
      "Stripe Subscription and Certificate Payments",
      "Admin Dashboard for User Progress",
      "User-Facing Digital Certificate Flow",
    ],
    images: [
      "/images/litmus-live-home.png",
      "/images/litmus-live-assessment.png",
      "/images/litmus-live-training.png",
      "/images/litmus-live-certification.png",
      "/images/litmus-live-pricing.png",
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://litmusai.netlify.app",
    prototypeUrl: null,
    keyAchievements: [
      "Delivered the MVP in two months against a focused product brief",
      "Built a short AI readiness assessment with level selection, scoring, and learning recommendations",
      "Added Stripe payments for subscriptions, one-time certification, and enterprise packages",
      "Designed admin analytics for scores, progress, and payment signals across individual and group customers",
    ],
    technicalHighlights: [
      "Assessment flow with level calibration, progress tracking, domain scoring, and recommendations",
      "Stripe checkout for subscriptions and one-time certificate purchases",
      "Supabase authentication for user accounts",
      "Netlify frontend with Supabase backend services",
      "Admin dashboard for progress, scores, and payment review",
    ],
  };
};
