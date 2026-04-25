import { ProjectType } from '../../../types/project';

export const getSymptomCheckrProject = (): ProjectType => {
  return {
    id: 9,
    slug: 'symptom-checkr',
    title: 'SymptomCheckr: Designing for Trust in Probabilistic AI',
    description: "A concept for reducing health-search anxiety with visible AI confidence, source citations, and reasoning chains instead of black-box symptom guidance.",
    role: 'UI/UX Designer',
    year: '2024',
    duration: '8 weeks',
    teamSize: '4',
    tags: ['Trust Design', 'Explainable AI', 'Health Tech', 'UX Research'],
    image: '/images/symptomcheckr-trust-ai-card.jpg',
    summary: "Most symptom checkers hide the reasoning behind their outputs. This concept makes a different choice: show the reasoning, cite the sources, and display confidence levels so users can understand uncertainty without spiraling.",
    problem: "Black box AI in healthcare creates anxiety, not relief. When users can't see how conclusions are reached, they either blindly trust or completely dismiss the results. We chose to solve the trust problem, not just the diagnosis problem.",
    solution: "Designed an Explainable AI (XAI) interface showing confidence levels, source citations, and reasoning chains. The trade-off: more screen real estate for explanations, but a calmer and more trustworthy health guidance model.",
    methodologies: ['Trust Design', 'Explainable AI (XAI)', 'User Journey Mapping', 'A/B Testing', 'Anxiety Reduction Research'],
    process: [
      "Trade-off #1: Chose conversational warmth over clinical accuracy - Ada's precision came at the cost of user comfort. We accepted slightly lower clinical signal for dramatically higher user trust.",
      "Trade-off #2: Chose transparency over simplicity - Showing AI confidence levels and source citations increased UI complexity, but made the reasoning easier to evaluate.",
      "Trade-off #3: Implemented image-based inputs despite 40% higher dev cost - Text-only input had a 40% misdiagnosis rate for skin conditions in MVP testing.",
      "Trade-off #4: Chose graduated certainty over binary outputs - 'Possibly X (65% confidence)' tested better than 'You might have X' despite requiring more explanation."
    ],
    deliverables: [
      'XAI Interface Design - Confidence levels, source citations, reasoning chains',
      'Trust Design System - Visual language for uncertainty and probability',
      'Anxiety Reduction Patterns - Tested approaches for calming UI in health contexts',
      'High-fidelity Prototypes with Explainability Built-In'
    ],
    images: [
      '/images/symptomcheckr-trust-ai-card.jpg',
      '/images/Symptom-Checkr-My-Reports-Saved-Final.jpg',
      '/images/Symptom-Checkr-My-Reports-saved.jpg',
      '/images/Symptom-Checkr-My-Reports-Empty-Final.jpg',
      '/images/Symptom-Checkr-My-Reports-empty.jpg',
      '/images/Symptom-Checkr-Contact.jpg',
      '/images/Symptom-Checkr-Contact-Final.jpg',
      '/images/Symptom-Checkr-Home.jpg',
      '/images/symptom-checkr-home-optimized.jpg'
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: 'https://symptom-checkr.web.app/',
    prototypeUrl: 'https://symptom-checkr.web.app/',
    keyAchievements: [
      'Designed explainable AI patterns that expose reasoning instead of asking users to trust a black box',
      'Created a calmer health guidance flow with graduated certainty, citations, and saved reports',
      'Balanced medical seriousness with accessible explanation design'
    ],
    technicalHighlights: [
      'XAI interface showing confidence levels and source citations for every assessment',
      'Used soft visual patterns to make high-stakes health information feel calm without becoming casual',
      'Privacy-first architecture processing images locally when possible',
      'Graduated certainty indicators replacing binary yes/no outputs'
    ]
  };
};
