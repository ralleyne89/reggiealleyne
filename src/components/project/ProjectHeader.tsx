
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface ProjectHeaderProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
}

const ProjectHeader = ({ image, tags, title, description }: ProjectHeaderProps) => {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = () => {
    console.error(`Header image failed to load: ${image}`);
    setImageError(true);
  };

  return (
    <>
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={imageError ? "/placeholder.svg" : image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(5,5,5,0.7)] to-[rgba(5,5,5,1)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10">
        <Link 
          to="/works" 
          className="inline-flex items-center text-white bg-purple/20 px-4 py-2 rounded-full border border-purple/30 hover:bg-purple/40 transition-all duration-300 mb-6 hover:shadow-glow"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>

        <div className={`mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-gradient-to-r from-purple/20 to-purple/30 backdrop-blur-sm border border-purple/20 rounded-full text-white transition-all duration-300 hover:shadow-glow hover:border-purple/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-gradient-to-r from-white via-white to-white/70 bg-clip-text">{title}</h1>
          <p className="text-xl text-[rgba(180,180,180,1)] max-w-3xl font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
