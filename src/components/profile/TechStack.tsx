import React from 'react';

const TechStack = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border p-5 rounded-[20px] border-[rgba(255,255,255,0.05)] border-solid">
      <div className="flex w-full flex-col items-center">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          My Stacks
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Tech Arsenal
        </div>
      </div>
      <div className="w-full mt-[30px]">
        <div className="flex w-full gap-2">
          <div className="flex text-sm text-[rgba(204,204,204,1)] font-medium whitespace-nowrap flex-1 shrink basis-[0%]">
            <div className="bg-[rgba(25,25,25,1)] flex w-full items-center justify-between flex-1 shrink basis-[0%] p-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Webflow
              </div>
            </div>
          </div>
          <div className="relative flex flex-1 shrink basis-[0%]">
            <div className="bg-[rgba(25,25,25,1)] z-0 flex w-full items-center text-sm text-[rgba(204,204,204,1)] font-medium whitespace-nowrap justify-between flex-1 shrink basis-[0%] p-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Figma
              </div>
            </div>
            <div className="absolute z-0 flex gap-2.5 w-3 left-[19px] bottom-[15px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/064b02e9bab19b6f636b21e0fcdd8eb4d7bf37d90544b9a5365167f1a6661e99?placeholderIfAbsent=true"
                className="aspect-[0.67] object-contain w-3"
                alt="Figma icon"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 text-sm text-[rgba(204,204,204,1)] font-medium mt-2">
          <div className="relative flex whitespace-nowrap w-[148px]">
            <div className="bg-[rgba(25,25,25,1)] z-0 flex w-[148px] items-center justify-between p-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Framer
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ac13e63a027eea3b66729bb1a9810ddf5beeaca62ae66b70ff4e09cd7a3e3e?placeholderIfAbsent=true"
              className="aspect-[0.69] object-contain w-[11px] absolute z-0 shrink-0 h-4 left-[19px] top-4"
              alt="Framer icon"
            />
          </div>
          <div className="relative flex w-[148px]">
            <div className="bg-[rgba(25,25,25,1)] z-0 flex w-[148px] items-center justify-between p-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Adobe XD
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29d2e8e4587413b9b685e0a35e789fc225c8a64ac3419737f9e14144e8ccf984?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[17px] absolute z-0 shrink-0 h-[17px] left-4 bottom-4"
              alt="Adobe XD icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;