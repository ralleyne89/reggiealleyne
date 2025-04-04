
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const TestimonialsCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border flex min-h-[369px] grow flex-col overflow-hidden w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center mb-6">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <MessageSquare className="w-4 h-4 text-[#916CE7]" />
          <span>Portfolio Highlights</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-xl font-semibold">
          Featured Projects
        </div>
      </div>
      <ScrollArea className="h-[280px] w-full pr-4">
        <div className="flex flex-col items-center justify-center h-full text-center p-6">
          <p className="text-[rgba(204,204,204,1)] text-lg">
            Browse my portfolio to see my latest work and projects
          </p>
          <p className="text-[rgba(153,153,153,1)] text-sm mt-2">
            Each project showcases my approach to problem-solving through design and development
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TestimonialsCard;
