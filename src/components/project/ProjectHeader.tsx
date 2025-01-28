import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectHeaderProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
}

const ProjectHeader = ({ image, tags, title, description }: ProjectHeaderProps) => {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(5,5,5,1)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <Link 
          to="/works" 
          className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[rgba(230,230,230,1)]">{title}</h1>
          <p className="text-xl text-[rgba(153,153,153,1)] max-w-3xl">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;