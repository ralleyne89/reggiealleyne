import React from 'react';
import { 
  AlertCircle, 
  Search, 
  Smartphone, 
  MessageSquare, 
  FileText, 
  CheckCircle, 
  Clock, 
  Heart, 
  Frown, 
  Smile, 
  Meh,
  ArrowRight
} from 'lucide-react';

const SymptomCheckrJourneyMap = () => {
  return (
    <div className="w-full">
      {/* Journey Map Header */}
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">User Journey: Sarah's Experience with Symptom Checkr</h3>
        <p className="text-gray-300 text-center max-w-3xl mb-6">
          Following Sarah as she navigates the Symptom Checkr when concerned about her child's rash and fever.
        </p>
      </div>

      {/* Journey Map Visual */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Stages Header */}
          <div className="grid grid-cols-5 gap-4 mb-2">
            {['Trigger', 'Search & Entry', 'Assessment', 'Results', 'Follow-up'].map((stage, index) => (
              <div key={index} className="bg-[rgba(155,135,245,0.1)] rounded-lg p-3 text-center">
                <h4 className="text-primary font-semibold">{stage}</h4>
              </div>
            ))}
          </div>

          {/* User Actions */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {[
              <div className="flex flex-col items-center text-center">
                <Smartphone className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Child develops rash and fever; Sarah opens health plan app</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Search className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Finds Symptom Checkr and enters basic information</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Answers questions about symptoms and uploads photo of rash</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <FileText className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Reviews possible causes and recommended actions</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-5 h-5 text-white mb-2" />
                <p className="text-gray-300 text-sm">Books telehealth appointment and saves symptom report</p>
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
                <p className="text-gray-300 text-sm">Worried & Anxious</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Meh className="w-5 h-5 text-yellow-400 mb-2" />
                <p className="text-gray-300 text-sm">Cautious & Uncertain</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Meh className="w-5 h-5 text-yellow-400 mb-2" />
                <p className="text-gray-300 text-sm">Engaged & Hopeful</p>
              </div>,
              <div className="flex flex-col items-center text-center">
                <Smile className="w-5 h-5 text-green-400 mb-2" />
                <p className="text-gray-300 text-sm">Relieved & Informed</p>
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
                  <li>Initial anxiety about child's symptoms</li>
                  <li>Unsure if she should go to ER</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Concerned about privacy</li>
                  <li>Skeptical of online tools</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Unsure how detailed to be</li>
                  <li>Worried about missing symptoms</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Multiple possible causes</li>
                  <li>Needs to decide on next steps</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Wait time for appointment</li>
                  <li>Wants to track symptoms</li>
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
                  <li>Reassuring welcome screen</li>
                  <li>Clear indication of medical backing</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Transparent privacy controls</li>
                  <li>Simple, guided entry process</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Adaptive questioning</li>
                  <li>Visual symptom selection</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Clear likelihood indicators</li>
                  <li>In-network care options</li>
                </ul>
              </div>,
              <div className="flex flex-col items-start">
                <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  <li>Symptom tracking reminders</li>
                  <li>Doctor report sharing</li>
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

export default SymptomCheckrJourneyMap;
