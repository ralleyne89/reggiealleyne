import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
}

const ProjectHeader = ({
  image,
  tags,
  title,
  description,
}: ProjectHeaderProps) => {
  const [imageError, setImageError] = useState(false);

  // Check if this is the Chill Vibes project by title
  const isChillVibesProject = title === "Chill Vibes Music Player";

  // Check if this is the Bob's Big Break project by title
  const isBobsProject = title === "Bob's Big Break";

  // Check if this is the SymptomCheckr project by title
  const isSymptomCheckrProject = title.includes("SymptomCheckr");

  // Check if this is the CLLCTVE project by title
  const isCllctveProject = title === "CLLCTVE Platform";

  // Check if this is the Tutor D project by title
  const isTutorDProject = title === "Tutor D";

  // Check if this is a case study project (Symptom Checkr, TutorD, CLLCTVE, Chill Vibes, Bob's Big Break, or Wristband)
  const isCaseStudy =
    title.includes("SymptomCheckr") || 
    title.includes("Tutor D") || 
    title === "CLLCTVE Platform" ||
    title === "Bob's Big Break" ||
    title === "Chill Vibes Music Player" ||
    title === "WRISTBAND";

  const handleImageError = () => {
    console.error(`Header image failed to load: ${image}`);
    setImageError(true);
  };

  if (isCaseStudy) {
    // Special styling for SymptomCheckr with background image
    if (isSymptomCheckrProject) {
      return (
        <div 
          className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/441aff50-0a80-413b-80af-cc94a0718412.png')`
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Link 
                  to="/works" 
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Works
                </Link>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
                  {title}
                </h1>

                <p className="text-xl text-gray-100 leading-relaxed max-w-4xl drop-shadow-md">
                  {description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Special styling for Chill Vibes with background image
    if (isChillVibesProject) {
      return (
        <div 
          className="relative pt-24 pb-16 bg-contain bg-center bg-no-repeat min-h-[500px]"
          style={{
            backgroundImage: `url('/lovable-uploads/85ce6121-b2ba-435d-b8cd-2606e0e3cc63.png')`,
            backgroundColor: '#1a1a1a'
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Link 
                  to="/works" 
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Works
                </Link>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
                  {title}
                </h1>

                <p className="text-xl text-gray-100 leading-relaxed max-w-4xl drop-shadow-md">
                  {description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Special styling for CLLCTVE with background image
    if (isCllctveProject) {
      return (
        <div 
          className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/7f203bc1-d77d-484d-a6fd-bef5e6adf027.png')`
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Link 
                  to="/works" 
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Works
                </Link>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
                  {title}
                </h1>

                <p className="text-xl text-gray-100 leading-relaxed max-w-4xl drop-shadow-md">
                  {description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Special styling for Tutor D with background image
    if (isTutorDProject) {
      return (
        <div 
          className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/bfe72208-e9fa-458d-9323-791c39cf2292.png')`
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Link 
                  to="/works" 
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Works
                </Link>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
                  {title}
                </h1>

                <p className="text-xl text-gray-100 leading-relaxed max-w-4xl drop-shadow-md">
                  {description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Clean, minimal header for other case studies
    return (
      <div className="bg-secondary-dark pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <Link 
                to="/works" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Works
              </Link>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                {title}
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={
            isChillVibesProject
              ? "/lovable-uploads/a6e65372-edc9-4098-aa00-82ee5a49def0.png"
              : isBobsProject
              ? "/lovable-uploads/71cb9624-eeb6-4af5-a137-8a38307549f4.png"
              : imageError
              ? "/placeholder.svg"
              : image
          }
          alt={title}
          className={`w-full h-full ${
            isChillVibesProject || isBobsProject
              ? "object-contain bg-black"
              : "object-cover"
          }`}
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[rgba(5,5,5,1)]"></div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6 transform -translate-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md font-heading">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 mb-12 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-6">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 bg-[rgba(20,20,20,0.9)] backdrop-blur-sm text-primary hover:bg-[rgba(30,30,30,0.9)] hover:text-white border border-gray-600 px-4 py-2 rounded-md transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Works
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,0.9)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] rounded-full text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
