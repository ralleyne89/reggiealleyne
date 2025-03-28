
import React, { useEffect } from 'react';
import { ArrowLeft, BarChart2, Clock, Users, CheckCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

const HealthHomeProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Health@Home Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(5,5,5,1)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <Link 
          to="/works" 
          className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]">
              Healthcare
            </span>
            <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]">
              Enterprise UX
            </span>
            <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]">
              Telehealth
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[rgba(230,230,230,1)]">Health@Home Platform</h1>
          <p className="text-xl text-[rgba(153,153,153,1)] max-w-3xl">
            Designing a comprehensive telehealth solution for Blue Shield of California to enable remote patient monitoring and care during the COVID-19 pandemic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#333333] p-2 rounded-lg">
                <Lightbulb className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-semibold text-[rgba(230,230,230,1)]">The Challenge</h3>
            </div>
            <p className="text-[rgba(153,153,153,1)]">
              Develop an intuitive telehealth platform during COVID-19 that supports remote patient monitoring while maintaining HIPAA compliance.
            </p>
          </div>

          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#333333] p-2 rounded-lg">
                <Users className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-semibold text-[rgba(230,230,230,1)]">My Role</h3>
            </div>
            <p className="text-[rgba(153,153,153,1)]">
              Lead UX Designer responsible for research, wireframing, prototyping, and usability testing with a team of 4 designers.
            </p>
          </div>

          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#333333] p-2 rounded-lg">
                <Clock className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-semibold text-[rgba(230,230,230,1)]">Timeline</h3>
            </div>
            <p className="text-[rgba(153,153,153,1)]">
              8-week rapid development cycle with 2-week sprints from concept to MVP launch.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Key Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2">
                <BarChart2 className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">42%</h3>
              <p className="text-sm text-[rgba(153,153,153,1)]">Increase in patient engagement</p>
            </div>
            
            <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">28%</h3>
              <p className="text-sm text-[rgba(153,153,153,1)]">Reduction in hospital readmissions</p>
            </div>
            
            <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">25k+</h3>
              <p className="text-sm text-[rgba(153,153,153,1)]">Patients onboarded in first 3 months</p>
            </div>
            
            <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">93%</h3>
              <p className="text-sm text-[rgba(153,153,153,1)]">Satisfaction rating from healthcare providers</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
          
          <div className="border-l-2 border-[rgba(255,255,255,0.1)] pl-6 space-y-12 relative">
            <div className="relative">
              <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
              <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Research & Discovery</h3>
              <p className="text-[rgba(153,153,153,1)] mb-4">
                Conducted interviews with 15 healthcare providers and 30 patients to understand pain points in remote care. Created user personas and journey maps to identify opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
                  <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Evidence-Based Decision</h4>
                  <p className="text-sm text-[rgba(153,153,153,1)]">
                    Patient interviews revealed 76% struggled with complex medical interfaces, leading to our simplified dashboard design.
                  </p>
                </div>
                <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
                  <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Key Insight</h4>
                  <p className="text-sm text-[rgba(153,153,153,1)]">
                    Healthcare providers needed quick access to patient vitals with visual trend indicators for faster decision making.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
              <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Wireframing & Prototyping</h3>
              <p className="text-[rgba(153,153,153,1)] mb-4">
                Created low-fidelity wireframes for key user flows, focusing on the patient dashboard, vital tracking, and video consultation features. Developed interactive prototypes for user testing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Wireframes"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Prototype"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
              <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Usability Testing & Iteration</h3>
              <p className="text-[rgba(153,153,153,1)] mb-4">
                Conducted 3 rounds of usability testing with 12 participants per round. Identified and resolved key usability issues, particularly around the vital sign submission flow and appointment scheduling.
              </p>
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
                <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Evidence-Based Iteration</h4>
                <p className="text-sm text-[rgba(153,153,153,1)]">
                  Testing revealed 83% of users struggled with the original vital submission form. Redesigned with step-by-step guidance, reducing errors by 64%.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
              <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Final Design & Implementation</h3>
              <p className="text-[rgba(153,153,153,1)] mb-4">
                Delivered high-fidelity designs and a comprehensive design system. Worked closely with developers through implementation sprints, providing ongoing design support and QA.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Final Design 1"
                  className="w-full h-[150px] object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Final Design 2"
                  className="w-full h-[150px] object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Final Design 3"
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Key Learnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#9b87f5]">Accessibility is Non-Negotiable</h3>
              <p className="text-[rgba(153,153,153,1)]">
                Designing for a diverse patient population, including elderly users, reinforced the importance of accessible design patterns. Increased font sizes, simplified navigation, and high contrast ratios became essential design principles.
              </p>
            </div>
            <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#9b87f5]">Data Visualization Matters</h3>
              <p className="text-[rgba(153,153,153,1)]">
                Clear visualization of health data proved crucial for both patients and providers. Simple, intuitive charts and indicators helped users quickly understand complex health information and identify trends.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[rgba(255,255,255,0.1)]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[rgba(5,5,5,1)] px-6 text-lg text-[#9b87f5] font-medium">
                Client Testimonial
              </span>
            </div>
          </div>

          <div className="mt-8 bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
            <blockquote className="italic text-lg text-[rgba(204,204,204,1)] mb-4">
              "The Health@Home platform has transformed how we deliver care during these challenging times. The intuitive design has allowed even our least tech-savvy patients to engage comfortably, while giving our providers the data they need to make informed decisions remotely."
            </blockquote>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="text-[rgba(230,230,230,1)] font-medium">Dr. Samantha Johnson</p>
                <p className="text-[rgba(153,153,153,1)] text-sm">Director of Telehealth Services, Blue Shield of California</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HealthHomeProject;
