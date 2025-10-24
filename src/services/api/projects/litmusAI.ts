import { ProjectType } from '../../../types/project';

export const getLitmusAIProject = (): ProjectType => {
  return {
    id: 10,
    slug: 'litmus-ai',
    title: 'Litmus AI – AI Literacy Testing & Certification Platform',
    description: 'An adaptive AI-powered platform that measures and certifies AI literacy in under 5 minutes through personalized testing and learning pathways.',
    role: 'Founder & Product Designer, AI Strategist',
    year: '2025',
    duration: '2 months',
    teamSize: '1',
    tags: ['AI Education', 'EdTech', 'Adaptive Learning', 'Prompt Engineering', 'OpenAI API', 'Stripe Integration', 'UX Design', 'Gamified Learning'],
    image: '/images/litmus-ai-banner.png',
    summary: 'Litmus AI is an AI literacy testing and certification platform designed to measure understanding of artificial intelligence concepts in 5 minutes or less. The platform uses adaptive GPT-powered assessments to evaluate knowledge across machine learning, prompt engineering, ethics, and real-world AI applications, then provides personalized learning recommendations and verifiable certification.',
    problem: 'With AI technologies evolving rapidly, individuals and organizations struggle to evaluate true AI literacy beyond buzzwords. Traditional online courses lack a quick, data-driven way to assess baseline knowledge before suggesting training. There exists a critical gap between AI curiosity and verified competency — learners need a structured, measurable, and credible system to validate their understanding of AI concepts.',
    solution: 'Litmus AI addresses this challenge through an intelligent, adaptive testing system that provides instant AI literacy assessment and certification. The platform uses GPT-powered adaptive questioning to assess understanding across key AI domains, then generates personalized learning paths based on performance. Upon completing recommended modules, users earn verifiable AI Literacy Certificates, with flexible monetization through Stripe-powered subscriptions, one-time certification fees, and enterprise group packages.',
    methodologies: ['Human-Centered Design (HCD)', 'Prompt Engineering', 'Retrieval-Augmented Generation (RAG)', 'A/B Testing', 'User Feedback Loops'],
    process: [
      'Conducted research to define the core problem of AI knowledge validation gaps and mapped user personas including students, professionals, and corporate HR departments.',
      'Created comprehensive wireframes in Figma for testing interfaces and results dashboards, focusing on an adaptive quiz experience with progressive difficulty.',
      'Designed and integrated GPT-5 powered AI system for real-time question generation and intelligent scoring logic using embeddings for topic relevance.',
      'Developed RESTful API architecture for test data management and subscription control, integrating Stripe API for seamless payment processing.',
      'Deployed scalable platform on Supabase and Netlify with comprehensive testing to ensure adaptive learning pathways function correctly.',
      'Implemented continuous user feedback loops post-test to refine course recommendations and optimize question clarity and difficulty through A/B testing.'
    ],
    deliverables: [
      'Fully Functional MVP Web Platform',
      'Adaptive AI Literacy Test Engine (GPT-5 powered)',
      'Personalized Course Recommendation System',
      'Stripe Subscription Integration (recurring & one-time)',
      'Admin Dashboard for User Progress Tracking',
      'User-Facing Digital Certification System'
    ],
    images: [
      '/images/litmusai-1.png',
      '/images/litmusai-2.png',
      '/images/litmusai-3.png',
      '/images/litmusai-4.png',
      '/images/litmusai-5.png',
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: 'https://litmusai.netlify.app',
    prototypeUrl: 'https://litmusai.netlify.app',
    keyAchievements: [
      'Successfully launched fully functional AI literacy platform as solo founder in just 2 months',
      'Integrated advanced GPT-5 adaptive testing engine with real-time question generation and personalized learning pathways',
      'Implemented complete payment infrastructure with Stripe supporting multiple monetization models (subscriptions, one-time purchases, enterprise packages)',
      'Built scalable architecture capable of serving individual learners through enterprise clients with comprehensive admin analytics'
    ],
    technicalHighlights: [
      'GPT-4/GPT-5 powered adaptive assessment logic with dynamic difficulty adjustment',
      'Retrieval-Augmented Generation (RAG) for fact-based quiz content and knowledge validation',
      'Stripe API integration for flexible monetization (subscriptions + one-time checkout)',
      'Auth0 JWT authentication for secure user management',
      'Scalable deployment architecture using Netlify (frontend) + Supabase (backend)',
      'Comprehensive admin dashboard with user progress tracking, scores, and payment analytics'
    ]
  };
};
