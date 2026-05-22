import { ProjectType } from '../../../types/project';

export const getSymptomCheckrProject = (): ProjectType => {
  return {
    id: 9,
    slug: 'symptom-checkr',
    title: 'SymptomCheckr: a calmer way to check symptoms',
    description: "A health-tech concept for people who check symptoms online and need guidance that feels clear, cautious, and easy to question.",
    role: 'UI/UX Designer',
    year: '2024',
    duration: '8 weeks',
    teamSize: '4',
    tags: ['Health UX', 'AI Guidance', 'Health Tech', 'UX Research'],
    image: '/images/symptomcheckr-trust-ai-card.jpg',
    summary: "Most symptom checkers give an answer without showing how they got there. I focused on making the AI's uncertainty visible: confidence levels, source links, plain-language reasoning, and saved reports people could bring to a clinician.",
    problem: "When health guidance feels like a sealed answer box, people either panic, over-trust it, or ignore it. The design challenge was to help users understand the level of uncertainty behind each recommendation.",
    solution: "I designed an AI-assisted symptom flow that explains what the system considered, shows confidence levels, links to sources, and gives users practical next steps without pretending to diagnose them.",
    methodologies: ['Health UX', 'AI Guidance', 'User Journey Mapping', 'Prototype Testing', 'Anxiety-Aware Design'],
    process: [
      "Trade-off #1: Kept the tone conversational without making the experience feel casual about health decisions.",
      "Trade-off #2: Added confidence levels and source links even though they made the results screen denser.",
      "Trade-off #3: Included photo-supported symptom input because some symptoms are hard to describe in words.",
      "Trade-off #4: Used graduated certainty instead of binary answers so the product could be honest about what it did and did not know."
    ],
    deliverables: [
      'AI guidance flow with confidence levels and source links',
      'Visual language for uncertainty, urgency, and follow-up care',
      'Calmer patterns for high-stress health moments',
      'High-fidelity responsive screens and report flows'
    ],
    images: [
      '/images/symptomcheckr-trust-ai-card.jpg',
      '/images/symptom-checkr-live-checker.png',
      '/images/symptom-checkr-live-results.png',
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
    prototypeUrl: null,
    keyAchievements: [
      'Designed AI guidance patterns that show why a recommendation appears',
      'Created a calmer health guidance flow with confidence levels, citations, and saved reports',
      'Balanced medical seriousness with plain-language explanation design'
    ],
    technicalHighlights: [
      'Results interface with confidence levels and source citations for each assessment',
      'Soft visual patterns that keep health information calm without making it feel casual',
      'Privacy-first architecture processing images locally when possible',
      'Graduated certainty indicators replacing binary yes/no outputs'
    ]
  };
};
