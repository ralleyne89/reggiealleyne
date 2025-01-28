import React from 'react';
import { UserPlus, Github, Instagram, Twitter, Globe } from 'lucide-react';

const SocialCard = () => {
  const socialLinks = [
    { handle: 'visualsbyartam', icon: Globe },
    { handle: 'sanjay-billa', icon: Github },
    { handle: 'sanjaybilla', icon: Twitter },
    { handle: 'visualsbyartam', icon: Instagram },
  ];

  return (
    <div className="bg-[rgba(16,16,16,1)] border min-h-[369px] grow overflow-hidden w-full p-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center mb-6">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <UserPlus className="w-4 h-4 text-[#916CE7]" />
          <span>Follow Me</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-xl font-semibold">
          Online Presence
        </div>
      </div>
      <div className="w-full space-y-3">
        {socialLinks.map(({ handle, icon: Icon }, index) => (
          <div 
            key={index} 
            className="bg-[rgba(25,25,25,1)] flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:scale-[1.02] hover:shadow-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-[#333333] p-2 rounded-lg">
              <Icon size={20} className="text-white" />
            </div>
            <span className="text-[rgba(204,204,204,1)] font-medium">
              {handle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCard;