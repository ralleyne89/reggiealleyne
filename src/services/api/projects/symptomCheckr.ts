

import { ProjectType } from '../../../types/project';

export const getSymptomCheckrProject = (): ProjectType => {
  return {
    id: 9,
    slug: 'symptom-checkr',
    title: 'SymptomCheckr – AI-Powered Health Assistant',
    description: 'An AI-driven health assessment tool that helps users understand possible causes for their symptoms through text or image input.',
    role: 'UI/UX Designer',
    year: '2024',
    duration: '8 weeks',
    teamSize: '4',
    tags: ['UX Research', 'UI Design', 'Health Tech', 'AI', 'User Testing'],
    image: '/images/Symptom-Checkr-Home-Final.jpg',
    summary: 'SymptomCheckr is an AI-powered health assessment tool designed to help users understand potential causes for their symptoms through an intuitive interface. The application allows users to input health symptoms via text or upload images, then leverages advanced AI to analyze and present possible causes with likelihood indicators and recommended next steps.',
    problem: 'Many people struggle with deciding when to seek medical care for symptoms. Current symptom checker tools are often overwhelming, overly clinical, or lacking in trustworthiness. Users need a reliable, user-friendly way to understand their symptoms without inducing unnecessary anxiety or replacing professional medical advice.',
    solution: 'SymptomCheckr addresses these issues by providing a clean, intuitive interface with multiple input methods (text and image), clear result presentations sorted by likelihood, and transparent information about how the AI works. The design prioritizes user trust through visual clarity, educational content, and ethical considerations throughout the experience.',
    methodologies: ['User Interviews', 'Competitive Analysis', 'Persona Development', 'User Journey Mapping', 'Wireframing', 'Usability Testing'],
    process: [
      'Conducted competitive analysis of existing symptom checker tools including WebMD, Ada, and Buoy Health to identify gaps and opportunities.',
      'Developed detailed user personas based on interviews with potential users across different demographics and health literacy levels.',
      'Created user journey maps to visualize the emotional states and pain points throughout the symptom checking process.',
      'Designed information architecture and sitemaps to ensure intuitive navigation and clear user paths.',
      'Developed low-fidelity wireframes focused on streamlining the symptom input process and clearly presenting results.',
      'Conducted usability testing with 12 participants to refine the interface, identify confusion points, and optimize the user experience.'
    ],
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
      '/images/Symptom-Checkr-My-Reports-Saved-Final.jpg',
      '/images/Symptom-Checkr-My-Reports-saved.jpg',
      '/images/Symptom-Checkr-My-Reports-Empty-Final.jpg',
      '/images/Symptom-Checkr-My-Reports-empty.jpg',
      '/images/Symptom-Checkr-Contact.jpg',
      '/images/Symptom-Checkr-Contact-Final.jpg',
      '/images/Symptom-Checkr-Home.jpg',
      '/images/Symptom-Checkr-Home-Final.jpg'
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: 'https://symptom-checkr.web.app/',
    prototypeUrl: 'https://symptom-checkr.web.app/',
    keyAchievements: [
      '78% reduction in user anxiety around minor symptoms based on before/after user testing',
      '92% satisfaction rate with the ease of use compared to 43% for competitor tools',
      'Successfully balanced medical detail with user-friendly presentation based on iterative testing'
    ],
    technicalHighlights: [
      'Image recognition AI for symptom identification from uploaded photos',
      'Privacy-first architecture that processes images locally when possible',
      'Transparent likelihood indicators based on symptom correlation',
      'Educational tooltips throughout the interface to build user understanding'
    ]
  };
};

