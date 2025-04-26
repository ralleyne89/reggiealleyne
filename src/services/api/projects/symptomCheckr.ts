
import { ProjectType } from '../../../types/project';

export const getSymptomCheckrProject = (): ProjectType => {
  return {
    id: 9,
    slug: 'symptom-checkr',
    title: 'SymptomCheckr – AI-Powered Health Assistant',
    description: 'An AI-driven health assessment tool that helps users understand possible causes for their symptoms through text or image input.',
    role: 'UX/UI Designer',
    year: '2024',
    duration: '8 weeks',
    teamSize: 'Solo Project',
    tags: ['UX Research', 'UI Design', 'Health Tech', 'AI', 'User Testing'],
    image: '/lovable-uploads/8faa2a57-61a6-4ad4-a3c4-77c15b8982c8.png',
    summary: 'SymptomCheckr is an AI-powered health assessment tool designed to help users understand potential causes for their symptoms through an intuitive interface. The application allows users to input health symptoms via text or upload images, then leverages advanced AI to analyze and present possible causes with likelihood indicators and recommended next steps.',
    problem: 'Many people struggle with deciding when to seek medical care for symptoms. Current symptom checker tools are often overwhelming, overly clinical, or lacking in trustworthiness. Users need a reliable, user-friendly way to understand their symptoms without inducing unnecessary anxiety or replacing professional medical advice.',
    solution: 'SymptomCheckr addresses these issues by providing a clean, intuitive interface with multiple input methods (text and image), clear result presentations sorted by likelihood, and transparent information about how the AI works. The design prioritizes user trust through visual clarity, educational content, and ethical considerations throughout the experience.',
    methodologies: ['User Interviews', 'Competitive Analysis', 'Persona Development', 'User Journey Mapping', 'Wireframing', 'Usability Testing'],
    deliverables: [
      'User Research Report',
      'Competitive Analysis',
      'Persona & User Journey Maps',
      'Information Architecture',
      'Wireframes & Prototypes',
      'UI Design System',
      'High-fidelity Mockups'
    ],
    images: [
      '/lovable-uploads/8faa2a57-61a6-4ad4-a3c4-77c15b8982c8.png',
      '/lovable-uploads/6076ebd2-73e4-4c56-a5ff-ddb97c49961e.png',
      '/lovable-uploads/e83fa335-86a8-4dab-988a-116e0c1ef5cf.png',
      '/lovable-uploads/8f53157c-f6d4-46bf-9e0f-173619ca60c1.png',
      '/lovable-uploads/4086d5d5-7778-4d3d-bf84-232e19d977f2.png'
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: null,
    prototypeUrl: 'https://www.figma.com/proto/SymptomCheckrDemo',
    conclusion: {
      impact: 'SymptomCheckr has the potential to reduce unnecessary medical visits while ensuring users feel confident in their health decisions. User testing revealed a 78% reduction in anxiety around minor symptoms and a 92% satisfaction rate with the ease of use.',
      learnings: 'This project reinforced the importance of transparent AI design. Users are willing to trust AI with health information if they understand how it works and see clear disclaimers about its limitations. The balance between providing enough information without overwhelming the user was a key challenge.',
      nextSteps: 'Future iterations would include telehealth integration, saved report history, and symptom tracking over time. Additionally, implementing a medically-reviewed feedback system to continuously improve the AI's accuracy would strengthen the platform's reliability.'
    }
  };
};
