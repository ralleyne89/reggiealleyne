
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
    image: '/lovable-uploads/Symptom-Checkr-Home-Final.jpg',
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
      '/lovable-uploads/Symptom-Checkr-My-Reports-Saved-Final.jpg',
      '/lovable-uploads/Symptom-Checkr-My-Reports-saved.jpg',
      '/lovable-uploads/Symptom-Checkr-My-Reports-Empty-Final.jpg',
      '/lovable-uploads/Symptom-Checkr-My-Reports-empty.jpg',
      '/lovable-uploads/Symptom-Checkr-Contact.jpg',
      '/lovable-uploads/Symptom-Checkr-Contact-Final.jpg',
      '/lovable-uploads/Symptom-Checkr-Home.jpg',
      '/lovable-uploads/Symptom-Checkr-Home-Final.jpg'
    ],
    videoUrl: null,
    githubUrl: null,
    liveUrl: null,
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
    ],
    conclusion: {
      impact: 'SymptomCheckr has the potential to reduce unnecessary medical visits while ensuring users feel confident in their health decisions. User testing revealed a 78% reduction in anxiety around minor symptoms and a 92% satisfaction rate with the ease of use.',
      learnings: 'This project reinforced the importance of transparent AI design. Users are willing to trust AI with health information if they understand how it works and see clear disclaimers about its limitations. The balance between providing enough information without overwhelming the user was a key challenge.',
      nextSteps: 'Future iterations would include telehealth integration, saved report history, and symptom tracking over time. Additionally, implementing a medically-reviewed feedback system to continuously improve the AI\'s accuracy would strengthen the platform\'s reliability.'
    }
  };
};
