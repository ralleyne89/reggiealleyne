import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const reviews = [
  {
    name: "Sai Abhishek Mishra",
    location: "Mumbai, India",
    date: "11, Apr 2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af",
    text: "Sanjay is a remarkable Product Designer, renowned for his exceptional UI skills and creating Awwwards-worthy websites. I highly recommend Sanjay for any Product Designer role that requires a talented and dedicated professional with a focus on UI skills."
  },
  {
    name: "Alex Thompson",
    location: "London, UK",
    date: "10, Apr 2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af",
    text: "Working with Sanjay was an absolute pleasure. His attention to detail and innovative approach to UI/UX design transformed our project completely. His ability to understand and implement complex requirements while maintaining aesthetic appeal is remarkable."
  },
  {
    name: "Maria Garcia",
    location: "Barcelona, Spain",
    date: "9, Apr 2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af",
    text: "Sanjay's expertise in creating responsive and intuitive designs is outstanding. He not only delivered exactly what we needed but also provided valuable insights that improved our initial concept. A true professional who goes above and beyond."
  },
  {
    name: "David Chen",
    location: "Singapore",
    date: "8, Apr 2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af",
    text: "I've worked with many designers, but Sanjay stands out for his exceptional creativity and technical proficiency. His designs are not just beautiful but also highly functional and user-friendly. Looking forward to collaborating on more projects!"
  }
];

const TestimonialsCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border flex min-h-[369px] grow flex-col overflow-hidden items-center w-full pt-2.5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="bg-[rgba(16,16,16,1)] flex w-full max-w-[344px] flex-col items-center pb-2 border-[rgba(255,255,255,0.06)] border-b">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1.5">
          <MessageSquare className="w-4 h-4 text-[#916CE7]" />
          <span>Testimonials</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold text-center">
          Reviews Showcase
        </div>
      </div>
      <ScrollArea className="h-[280px] w-full px-3 pt-2">
        <div className="space-y-4 pr-4">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-[rgba(20,20,20,1)] border w-full p-3 rounded-xl border-[rgba(255,255,255,0.06)] border-solid"
            >
              <div className="flex w-full gap-7 justify-between pb-3 border-[rgba(255,255,255,0.06)] border-b">
                <div className="flex items-center gap-2.5">
                  <img
                    loading="lazy"
                    src={review.image}
                    className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto rounded-full"
                    alt={`${review.name}'s avatar`}
                  />
                  <div className="self-stretch my-auto">
                    <div className="text-[rgba(204,204,204,1)] text-sm">
                      {review.name}
                    </div>
                    <div className="text-[rgba(117,117,117,1)] text-xs">
                      {review.location}
                    </div>
                  </div>
                </div>
                <div className="text-[rgba(117,117,117,1)] text-xs">
                  {review.date}
                </div>
              </div>
              <div className="text-[rgba(117,117,117,1)] text-xs mt-3">
                {review.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TestimonialsCard;