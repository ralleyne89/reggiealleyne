import React from 'react';

const TestimonialsCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border flex min-h-[369px] grow flex-col overflow-hidden items-center w-full pt-2.5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="bg-[rgba(16,16,16,1)] flex w-full max-w-[344px] flex-col items-center pb-3 border-[rgba(255,255,255,0.06)] border-b">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1.5">
          Testimonials
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Reviews Showcase
        </div>
      </div>
      <div className="max-w-full w-[342px] overflow-hidden font-medium">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd3e52e929827d304f729a85d214474d12caf422363803615f133bb560a4a44d?placeholderIfAbsent=true"
          className="aspect-[4.81] object-contain w-full z-10"
          alt="Review background"
        />
        <div className="bg-[rgba(20,20,20,1)] border mt-[-65px] w-[291px] max-w-full ml-3 p-3 rounded-xl border-[rgba(255,255,255,0.06)] border-solid max-md:ml-2.5">
          <div className="flex w-full gap-7 justify-between pb-3 border-[rgba(255,255,255,0.06)] border-b">
            <div className="flex items-center gap-2.5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81560e126a18746ce974cc6777d7146cfc7ddae84580e8f2fea57b60e94c02af?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto rounded-full"
                alt="Reviewer"
              />
              <div className="self-stretch my-auto">
                <div className="text-[rgba(204,204,204,1)] text-sm">
                  Sai Abhishek Mishra
                </div>
                <div className="text-[rgba(117,117,117,1)] text-xs">
                  Mumbai, India
                </div>
              </div>
            </div>
            <div className="text-[rgba(117,117,117,1)] text-xs">
              11, Apr 2024
            </div>
          </div>
          <div className="text-[rgba(117,117,117,1)] text-xs mt-3">
            Sanjay is a remarkable Product Designer, renowned for his exceptional UI skills and creating Awwwards-worthy websites. I highly recommend Sanjay for any Product Designer role that requires a talented and dedicated professional with a focus on UI skills.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;