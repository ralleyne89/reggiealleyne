import React from 'react';
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  Lightbulb, 
  Zap, 
  BookOpen, 
  Clock, 
  Code,
  Frown, 
  Smile, 
  Meh,
  ArrowRight,
  Save,
  Star
} from 'lucide-react';

const TutorDJourneyMap = () => {
  return (
    <div className="w-full">
      {/* Journey Map Header */}
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">User Journey: Alex's Experience with TutorD</h3>
        <p className="text-gray-300 text-center max-w-3xl mb-6">
          Following Alex as he uses TutorD to get help with a challenging algorithm problem for his Computer Science class.
        </p>
      </div>

      {/* Journey Map Visual */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Stages Header */}
          <div className="grid grid-cols-5 gap-4 mb-2">
            {['Problem', 'Discovery', 'Interaction', 'Solution', 'Application'].map((stage, index) => (
              <div key={index} className="bg-primary/10 rounded-lg p-3 text-center">
                <h4 className="text-primary font-semibold">{stage}</h4>
              </div>
            ))}
          </div>

          {/* User Actions */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {[
              <div className="flex flex-col items-center text-center">
                <HelpCircle className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Stuck on a recursive algorithm problem at 11pm before deadline</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Search className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Finds TutorD through Google search and creates account</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Uploads screenshot of problem and explains his confusion</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Lightbulb className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Reviews step-by-step explanation with visualizations</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Zap className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Applies concept to solve problem and saves explanation for future reference</p>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                {content}
              </div>
            ))}
          </div>

          {/* Connecting Arrows */}
          <div className="grid grid-cols-5 gap-4 mb-4 px-12">
            {[0, 1, 2, 3].map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="w-full h-px bg-gray-600"></div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
            <div></div>
          </div>

          {/* Emotional State */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {[
              <div className="flex flex-col items-center text-center">
                <Frown className="w-5 h-5 text-red-400 mb-2" />
                <p className="text-gray-300 text-sm">Frustrated & Anxious</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Meh className="w-5 h-5 text-yellow-400 mb-2" />
                <p className="text-gray-300 text-sm">Hopeful but Skeptical</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Meh className="w-5 h-5 text-yellow-400 mb-2" />
                <p className="text-gray-300 text-sm">Engaged & Curious</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Smile className="w-5 h-5 text-green-400 mb-2" />
                <p className="text-gray-300 text-sm">Relieved & Understanding</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Smile className="w-5 h-5 text-green-400 mb-2" />
                <p className="text-gray-300 text-sm">Confident & Satisfied</p>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                {content}
              </div>
            ))}
          </div>

          {/* Pain Points */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {[
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Deadline pressure causing stress</li>
                  <li>Previous attempts to find help online failed</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Concerned about cost</li>
                  <li>Unsure if AI can help with complex problems</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Difficulty articulating where he's stuck</li>
                  <li>Worried about getting just an answer, not understanding</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Some concepts still unclear</li>
                  <li>Needs to apply learning to his specific problem</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Wants to remember the concept for future problems</li>
                  <li>Needs to verify solution is correct</li>
                </ul>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                {content}
              </div>
            ))}
          </div>

          {/* Design Opportunities */}
          <div className="grid grid-cols-5 gap-4">
            {[
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Late-night support messaging</li>
                  <li>Stress-reducing interface design</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Clear free vs. paid features</li>
                  <li>Example problems showing AI capabilities</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Code snippet upload feature</li>
                  <li>Guided problem description form</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Interactive visualizations</li>
                  <li>Multiple explanation formats</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Personal learning library</li>
                  <li>Related concept suggestions</li>
                </ul>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                {content}
              </div>
            ))}
          </div>

          {/* Additional Row: Learning Outcomes */}
          <div className="mt-8 mb-4">
            <h5 className="text-white text-base font-medium mb-3">Learning Outcomes</h5>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[
              <div className="flex flex-col items-start">
                <h5 className="text-green-400 text-sm font-medium mb-2">Learning Outcomes</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Identifies problem pattern</li>
                  <li>Recognizes recursive structure</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-green-400 text-sm font-medium mb-2">Learning Outcomes</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Evaluates different learning resources</li>
                  <li>Makes informed platform choice</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-green-400 text-sm font-medium mb-2">Learning Outcomes</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Articulates specific challenges</li>
                  <li>Engages in active learning dialogue</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-green-400 text-sm font-medium mb-2">Learning Outcomes</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Understands core algorithm concepts</li>
                  <li>Visualizes recursive call stack</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-green-400 text-sm font-medium mb-2">Learning Outcomes</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Transfers knowledge to new context</li>
                  <li>Builds long-term understanding</li>
                </ul>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                {content}
              </div>
            ))}
          </div>

          {/* Additional Row: Key Features Used */}
          <div className="mt-8 mb-4">
            <h5 className="text-white text-base font-medium mb-3">Key Features Used</h5>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[
              <div className="flex flex-col items-center text-center">
                <Clock className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">24/7 Availability</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Search className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">Smart Topic Search</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Code className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">Code Snippet Analysis</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <BookOpen className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">Interactive Explanations</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Save className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">Personal Learning Library</p>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                {content}
              </div>
            ))}
          </div>

          {/* Additional Row: Long-term Benefits */}
          <div className="mt-8 mb-4">
            <h5 className="text-white text-base font-medium mb-3">Long-term Benefits</h5>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[
              <div className="flex flex-col items-start">
                <h5 className="text-yellow-400 text-sm font-medium mb-2">Long-term Benefits</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Reduced deadline anxiety</li>
                  <li>Better time management</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-yellow-400 text-sm font-medium mb-2">Long-term Benefits</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Resource evaluation skills</li>
                  <li>Digital literacy improvement</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-yellow-400 text-sm font-medium mb-2">Long-term Benefits</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Problem articulation skills</li>
                  <li>Technical communication</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-yellow-400 text-sm font-medium mb-2">Long-term Benefits</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Deeper conceptual understanding</li>
                  <li>Visual learning techniques</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-yellow-400 text-sm font-medium mb-2">Long-term Benefits</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Knowledge transfer abilities</li>
                  <li>Self-directed learning habits</li>
                </ul>
              </div>
            ].map((content, index) => (
              <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDJourneyMap;
