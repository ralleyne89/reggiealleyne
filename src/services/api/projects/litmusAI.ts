import { ProjectType } from "../../../types/project";

export const getLitmusAIProject = (): ProjectType => {
  return {
    id: 10,
    slug: "litmus-ai",
    title: "Litmus AI – AI Literacy Testing & Certification Platform",
    description:
      "An adaptive AI literacy test and certificate flow that gives users a baseline in under five minutes, then points them to the next lesson.",
    role: "Product Designer & AI Strategist",
    year: "2025",
    duration: "2 months",
    teamSize: "Lean product team",
    tags: [
      "AI Education",
      "EdTech",
      "Adaptive Learning",
      "Prompt Engineering",
      "OpenAI API",
      "Stripe Integration",
      "UX Design",
      "Gamified Learning",
    ],
    image: "/images/litmus-ai-literacy-card.jpg",
    summary:
      "Litmus AI measures practical AI literacy across concepts, prompting, ethics, and everyday use cases. The MVP uses GPT-powered adaptive questions, a results page, learning recommendations, and a certificate flow so users can see what they know and what to study next.",
    problem:
      "People and teams were trying to talk about AI skills without a quick way to check the basics. Courses help after someone commits, but they do not answer the first question: what does this person already understand, and where are the gaps?",
    solution:
      "I built a short adaptive assessment that changes difficulty as users answer, scores across core AI topics, recommends lessons, and supports certification and payment paths through Stripe.",
    methodologies: [
      "Human-Centered Design (HCD)",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "A/B Testing",
      "User Feedback Loops",
    ],
    process: [
      "Researched how students, professionals, and HR teams evaluate AI readiness, then narrowed the product around a fast baseline test.",
      "Mapped the quiz, results, recommendations, and admin dashboard in Figma before building the MVP.",
      "Designed GPT-5 powered question generation and scoring logic with topic checks so the assessment could adapt without drifting off-subject.",
      "Built API routes for assessment data, recommendations, and subscription state, with Stripe handling checkout.",
      "Deployed on Supabase and Netlify, then tested adaptive paths, result states, and payment flows.",
      "Used post-test feedback and A/B tests to tune question clarity, difficulty, and recommendation quality.",
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
      "/images/litmusai-1.png",
      "/images/litmusai-2.png",
      "/images/litmusai-3.png",
      "/images/litmusai-4.png",
      "/images/litmusai-5.png",
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: "https://litmusai.netlify.app",
    prototypeUrl: null,
    keyAchievements: [
      "Delivered the MVP in two months against a focused product brief",
      "Built GPT-5 adaptive testing with real-time question generation, scoring, and learning recommendations",
      "Added Stripe payments for subscriptions, one-time certification, and enterprise packages",
      "Designed admin analytics for scores, progress, and payment signals across individual and group customers",
    ],
    technicalHighlights: [
      "GPT-5 adaptive assessment logic with dynamic difficulty adjustment",
      "RAG-backed quiz checks for topic relevance and fact grounding",
      "Stripe checkout for subscriptions and one-time certificate purchases",
      "Auth0 JWT authentication for user accounts",
      "Netlify frontend with Supabase backend services",
      "Admin dashboard for progress, scores, and payment review",
    ],
  };
};
