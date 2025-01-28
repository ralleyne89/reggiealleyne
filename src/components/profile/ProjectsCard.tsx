import React, { useEffect } from 'react';
import { FolderGit2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectsCard = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  const projects = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5",
      alt: "Project 1"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5",
      alt: "Project 2"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2a196c42d26391473d2b9a645ee0f0f60cfa5a053ac0cba58cbad32789c3bb5",
      alt: "Project 3"
    }
  ];

  return (
    <div className="bg-[rgba(16,16,16,1)] border relative flex min-h-[226px] w-full flex-col overflow-hidden pt-5 pb-[151px] px-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="self-stretch z-0 flex w-full flex-col items-center">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1.5">
          <FolderGit2 className="w-4 h-4 text-[#916CE7]" />
          <span>Projects</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Works Gallery
        </div>
      </div>
      
      <Carousel
        ref={emblaRef}
        className="w-full max-w-[344px] mx-auto mt-4"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <img
                loading="lazy"
                src={project.image}
                alt={project.alt}
                className="aspect-[4.2] object-contain w-full h-[82px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button className="absolute left-1/2 -translate-x-1/2 bottom-[18px] bg-[rgba(145,108,231,1)] gap-2.5 text-sm text-white font-medium px-[30px] py-[13px] rounded-xl border-[rgba(16,16,16,1)] border-solid border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner max-md:px-5">
        View Works
      </button>
    </div>
  );
};

export default ProjectsCard;