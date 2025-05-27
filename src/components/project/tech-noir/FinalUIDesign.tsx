import React from "react";

interface TechNoirFinalUIDesignProps {
  handleImageClick: (imageSrc: string) => void;
}

const TechNoirFinalUIDesign = ({
  handleImageClick,
}: TechNoirFinalUIDesignProps) => {
  const uiImages = [
    {
      title: "Home Screen",
      src: "/lovable-uploads/9e3be8d8-c9d0-4857-a786-b488a8b288c1.png",
      alt: "Tech Noir Home screen",
    },
    {
      title: "Product Discovery",
      src: "/lovable-uploads/d0f10fb1-b1eb-4e30-b666-c68f00716676.png",
      alt: "Tech Noir Product Discovery",
    },
    {
      title: "How to Wear Guide",
      src: "/lovable-uploads/e047ad0c-5a06-4795-938c-c65d62909828.png",
      alt: "Tech Noir How to Wear Guide",
    },
    {
      title: "AR Try-On",
      src: "/lovable-uploads/a473ef7d-6076-4386-af99-13262b6e684f.png",
      alt: "Tech Noir AR Try-On Feature",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          What I Actually Built
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          I went full luxury with this—dark, moody, expensive-looking. Think
          Net-A-Porter but for people who want their smartwatch to feel as
          covetable as a designer handbag. Every product shot looks like it
          belongs in Vogue, not a Best Buy catalog.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {uiImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handleImageClick(image.src)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              The Whole Journey Makes Sense
            </h3>
            <p className="text-gray-300">
              You discover something cool, learn how to wear it, try it on
              virtually, then buy it feeling confident. No more "I hope this
              doesn't make me look weird."
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Try Before You Cry
            </h3>
            <p className="text-gray-300">
              AR try-on so you can see how that smartwatch actually looks with
              your outfit. Because nobody wants to spend $400 on something that
              clashes with everything they own.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Someone Else Did the Homework
            </h3>
            <p className="text-gray-300">
              Curated collections so you don't have to wade through a million
              ugly options. Only the stuff that actually looks good makes it
              onto the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNoirFinalUIDesign;
