import React from 'react';
import { FileText } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full max-w-[463px] p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full gap-[15px] flex-col sm:flex-row">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee1aac22c3d415f1ee9dc0d3132144837315cc7345e8417972a2ac9ffdb58848?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[101px] shrink-0 rounded-lg mx-auto sm:mx-0"
          alt="Profile"
        />
        <div className="flex flex-col items-stretch flex-1 shrink basis-[0%]">
          <div className="flex w-full items-center gap-2 justify-between flex-wrap">
            <div className="bg-[rgba(20,20,20,1)] border flex items-center gap-2 text-sm text-[rgba(153,153,153,1)] px-4 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid whitespace-nowrap">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full border border-green-500 animate-ping"></div>
              </div>
              <span className="ml-2">Available To Work</span>
            </div>
            <button className="flex items-center gap-2 text-[13px] text-[rgba(204,204,204,1)] whitespace-nowrap">
              <span>Resume</span>
              <div className="bg-[rgba(31,31,31,1)] p-1.5 rounded-lg">
                <FileText size={16} className="text-white" />
              </div>
            </button>
          </div>
          <div className="mt-3">
            <h1 className="text-[rgba(230,230,230,1)] text-[22px] font-semibold leading-none">
              Sanjay Billa
            </h1>
            <div className="flex items-center gap-1 text-sm mt-2.5">
              <span className="text-[rgba(153,153,153,1)] font-medium">
                I'm a
              </span>
              <div className="overflow-hidden text-[rgba(145,108,231,1)] font-semibold w-[134px]">
                <div className="overflow-hidden py-1">
                  Product Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(20,20,20,1)] border flex w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] font-medium flex-wrap mt-[30px] p-3 rounded-xl border-[rgba(255,255,255,0.06)] border-solid">
        <span className="bg-[rgba(25,25,25,1)] border px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          India
        </span>
        <span className="bg-[rgba(25,25,25,1)] border px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          English & Hindi
        </span>
        <span className="bg-[rgba(25,25,25,1)] border px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          Product Designer
        </span>
        <span className="bg-[rgba(25,25,25,1)] border px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          Mumbai University
        </span>
        <span className="bg-[rgba(25,25,25,1)] border px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          IST
        </span>
      </div>
      <div className="flex w-full gap-3 text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px] flex-col sm:flex-row">
        <button className="bg-[rgba(31,31,31,1)] flex items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-2.5 py-4 rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4e16f2fb3849aaf3a314fdc317a701757edf5f9c1450cc4fd14a4c442accee0?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            alt="Instagram"
          />
          <span>DM me (Instagram)</span>
        </button>
        <button className="bg-[rgba(31,31,31,1)] gap-2.5 flex-1 shrink px-2.5 py-4 rounded-xl">
          WhatsApp Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;