import React from 'react';

const ProjectsCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border relative flex min-h-[226px] w-full flex-col overflow-hidden pt-5 pb-[151px] px-5 border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="self-stretch z-0 flex w-full flex-col items-center">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1.5">
          Projects
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Works Gallery
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5?placeholderIfAbsent=true"
        className="aspect-[4.2] object-contain w-[344px] absolute z-0 max-w-full h-[82px] right-0 bottom-[39px]"
        alt="Projects gallery"
      />
      <div className="absolute z-0 flex min-h-[105px] max-w-full w-[344px] -translate-x-2/4 translate-y-[0%] h-[105px] left-2/4 bottom-0" />
      <button className="self-stretch bg-[rgba(145,108,231,1)] absolute gap-2.5 text-sm text-white font-medium px-[30px] py-[13px] rounded-xl border-[rgba(16,16,16,1)] border-solid border-2 right-[104px] bottom-[18px] max-md:px-5">
        View Works
      </button>
    </div>
  );
};

export default ProjectsCard;
