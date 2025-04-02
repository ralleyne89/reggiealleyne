
import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border relative flex min-h-[180px] w-full flex-col overflow-hidden pt-4 pb-[120px] px-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="self-stretch z-0 flex w-full flex-col items-center mb-4">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1">
          <FolderGit2 className="w-4 h-4 text-[#916CE7]" />
          <span>Projects</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-xl font-semibold">
          Works Gallery
        </div>
      </div>
      
      <div className="relative w-full h-[100px] overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,0.8)] to-transparent z-10" />
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356"
          className="w-full h-full object-cover object-center"
          alt="Projects gallery preview"
        />
      </div>

      <Link 
        to="/works"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-[rgba(145,108,231,1)] gap-2.5 text-sm text-white font-medium px-8 py-2.5 rounded-xl border-[rgba(16,16,16,1)] border-solid border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
      >
        View Works
      </Link>
    </div>
  );
};

export default ProjectsCard;
