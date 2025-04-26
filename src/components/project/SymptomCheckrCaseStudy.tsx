
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, AlertCircle, BarChart, Users, Target, Lightbulb, Workflow, FileText, Layers, Image, CheckCircle, Lock } from 'lucide-react';

const SymptomCheckrCaseStudy = () => {
  return (
    <div className="mt-8 mb-16">
      {/* Research & Discovery Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Research & Discovery</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
                The research phase began with a competitive analysis of existing symptom checker tools including WebMD, Ada, and Buoy Health. While these platforms provide valuable medical information, they often overwhelm users with complex interfaces and alarming results that increase anxiety rather than provide clarity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Finding 1</h3>
                  <p className="text-gray-300">Existing tools often provide too much medical jargon without explaining implications clearly.</p>
                </div>
                
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Finding 2</h3>
                  <p className="text-gray-300">Users want transparency about how symptom analysis works to build trust in the results.</p>
                </div>
                
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Finding 3</h3>
                  <p className="text-gray-300">Most competitors lack visual input options, limiting accessibility for certain symptoms.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Persona Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">User Persona</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src="/lovable-uploads/4086d5d5-7778-4d3d-bf84-232e19d977f2.png" 
                  alt="Sarah Mitchell Persona" 
                  className="rounded-lg w-full"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-2">Sarah Mitchell</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Age</p>
                    <p className="text-white">38</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Occupation</p>
                    <p className="text-white">Working Parent, Marketing Manager</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Tech Comfort</p>
                    <p className="text-white">Medium-High</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Health Behavior</p>
                    <p className="text-white">Cautious, researches before seeking care</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-primary font-semibold mb-3">Goals</h4>
                    <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Understand symptoms quickly without rushing to urgent care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Save time and avoid unnecessary appointments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Feel reassured she's making the right call</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-semibold mb-3">Frustrations</h4>
                    <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Medical sites are overwhelming or vague</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Doesn't want to self-diagnose, but needs guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Worries about trusting unknown health tools</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-semibold mb-3">Needs</h4>
                    <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>A clean, friendly UI that feels trustworthy and private</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Fast results with actionable advice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Transparency about how AI works</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* User Journey Map */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">User Journey Map</h2>
            </div>
            
            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              This journey map follows Sarah as she navigates SymptomCheckr when concerned about her child's rash and fever. It highlights key emotional states and opportunities for design intervention.
            </p>
            
            <div className="overflow-x-auto pb-4">
              <img 
                src="/lovable-uploads/8f53157c-f6d4-46bf-9e0f-173619ca60c1.png" 
                alt="User Journey Map" 
                className="rounded-lg w-full min-w-[800px]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Trigger</h4>
                <p className="text-gray-300 text-sm">Design for initial anxiety with reassuring UI</p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Search & Entry</h4>
                <p className="text-gray-300 text-sm">Simple forms with privacy assurances</p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Analysis</h4>
                <p className="text-gray-300 text-sm">Transparent loading with clear explanation</p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Results</h4>
                <p className="text-gray-300 text-sm">Clear presentation with trust indicators</p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Follow-up</h4>
                <p className="text-gray-300 text-sm">Save options and next step guidance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Sitemap & Wireframes */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Sitemap & Wireframes</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl text-white font-semibold mb-4">Sitemap</h3>
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium mb-4">Home</div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center">Symptom Input</div>
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center">My Reports</div>
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center">How It Works</div>
                    <div className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center">Contact</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl text-white font-semibold mb-4">Wireframes</h3>
              <p className="text-[rgba(200,200,200,0.9)] mb-6">
                Low-fidelity wireframes were created to establish the basic structure of key screens, focusing on intuitive symptom input and clear result presentation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-primary font-medium mb-3">Symptom Input Screen</h4>
                  <img 
                    src="/lovable-uploads/e83fa335-86a8-4dab-988a-116e0c1ef5cf.png" 
                    alt="Symptom Input Wireframe" 
                    className="rounded-lg border border-gray-700"
                  />
                </div>
                
                <div>
                  <h4 className="text-primary font-medium mb-3">Results Screen</h4>
                  <img 
                    src="/lovable-uploads/6076ebd2-73e4-4c56-a5ff-ddb97c49961e.png" 
                    alt="Results Screen Wireframe" 
                    className="rounded-lg border border-gray-700"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Final UI Design */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Final UI Design</h2>
            </div>
            
            <p className="text-[rgba(200,200,200,0.9)] mb-8 leading-relaxed">
              The final UI design emphasizes clarity, trust, and accessibility. A calming color palette with clear visual hierarchies guides users through the symptom checking process while minimizing anxiety.
            </p>
            
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Text & Image Input</h3>
                  <p className="text-gray-300 text-sm">Users can choose between text description or image upload for symptoms, increasing accessibility and accuracy.</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Dual Input Methods</span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Privacy First</span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Accessibility</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Likelihood-Based Results</h3>
                  <p className="text-gray-300 text-sm">Results are clearly organized by likelihood, with actionable next steps for each potential cause.</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Clear Hierarchy</span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Actionable Information</span>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">No Alarmism</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3">
                <img 
                  src="/lovable-uploads/8faa2a57-61a6-4ad4-a3c4-77c15b8982c8.png" 
                  alt="SymptomCheckr Final UI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 text-sm text-center">Final UI design showcasing the symptom input and results screens</p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key UI Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Image className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Dual Input Options</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Text description or image upload for different types of symptoms and user preferences.</p>
                </div>
                
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BarChart className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Likelihood Indicators</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Visual scales showing probability of each potential cause based on symptom analysis.</p>
                </div>
                
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Privacy Controls</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Clear consent flows and options to delete data after each session.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* How It Works */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">How It Works</h2>
            </div>
            
            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              A dedicated "How It Works" section was designed to provide transparency about the AI system's functioning, building user trust through education.
            </p>
            
            <div className="space-y-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">AI Analysis Explained</h3>
                <p className="text-gray-300">
                  SymptomCheckr uses a medically-trained machine learning model that compares user-reported symptoms against a database of conditions and their typical presentations. The system is regularly updated with peer-reviewed medical literature and has been validated against known diagnoses.
                </p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Data Privacy</h3>
                <p className="text-gray-300">
                  User privacy is prioritized through encryption, data minimization principles, and optional anonymous usage. All symptom information can be automatically deleted after analysis, and the system provides clear consent options at each step.
                </p>
              </div>
              
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Ethical Considerations</h3>
                <p className="text-gray-300">
                  The system is designed with clear limitations and medical disclaimers. It emphasizes that results are possibilities rather than diagnoses and encourages appropriate medical consultation. The UI avoids alarmist language and provides balanced, actionable information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Challenges & Learnings */}
      <section>
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Challenges & Learnings</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Challenges</h3>
                
                <div className="space-y-4">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">Building User Trust</h4>
                    <p className="text-gray-300 text-sm">Creating a health tool that users would trust with sensitive information required extensive research on trust indicators and transparent design.</p>
                  </div>
                  
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">Balancing Detail vs. Clarity</h4>
                    <p className="text-gray-300 text-sm">Finding the right level of medical detail without overwhelming users or oversimplifying conditions was a constant challenge.</p>
                  </div>
                  
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">Avoiding Unused Features</h4>
                    <p className="text-gray-300 text-sm">Initial testing revealed that several planned features were rarely used, requiring a streamlined redesign to focus on core functionality.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Learnings</h3>
                
                <div className="space-y-4">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">Transparency Builds Trust</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Users were far more willing to trust the system when they understood how the AI worked and its limitations.</p>
                  </div>
                  
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">Visual Communication is Key</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Visual hierarchy and clear iconography significantly improved user comprehension of medical information.</p>
                  </div>
                  
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">Ethical Design is Non-Negotiable</h4>
                    </div>
                    <p className="text-gray-300 text-sm">In health tech, ethical considerations must be built into every aspect of the design process, not added as an afterthought.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Next Steps & Improvements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Telehealth Integration</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Connect users with healthcare providers for follow-up when symptoms warrant medical attention.</p>
                </div>
                
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Symptom Tracking</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Allow users to monitor symptoms over time to identify patterns and changes for more accurate assessments.</p>
                </div>
                
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Expanded AI Training</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Further train the AI model on diverse datasets to improve accuracy across different demographics and conditions.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SymptomCheckrCaseStudy;
