import React from "react";

const IntegratedOverview = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          The Challenge
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            So here's the thing—I love tech, I love fashion, but somehow every
            piece of wearable tech I saw looked like it belonged in a hospital.
            You know what I mean? Those chunky fitness trackers that scream "I
            prioritize function over literally everything else."
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I kept thinking, why can't a smartwatch be as covetable as a
            designer handbag? That's where Tech Noir came from—I wanted to
            create an e-commerce experience that made wearable tech feel like
            luxury fashion instead of medical equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegratedOverview;
