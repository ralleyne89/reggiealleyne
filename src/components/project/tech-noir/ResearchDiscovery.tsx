import React from "react";

const TechNoirResearchDiscovery = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          What People Actually Think
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          I talked to a bunch of people about wearable tech—surveys, interviews,
          the whole deal. Turns out my hunch was right: everyone wants this
          stuff, they just want it to not look terrible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              What I Found Out
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                • 78% of people were curious about wearable tech but had zero
                clue how to make it work with their style
              </li>
              <li>
                • Most wanted to try stuff on in person because they were
                worried about looking ridiculous
              </li>
              <li>• Everyone kept asking "but how do I actually wear this?"</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              The Big Takeaways
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  People Need Hand-Holding
                </h4>
                <p className="text-gray-300 text-sm">
                  It's not enough to show what something does. You have to show
                  how it fits into their actual life and wardrobe.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  Make It Feel Expensive
                </h4>
                <p className="text-gray-300 text-sm">
                  The second you position wearable tech as luxury accessories
                  instead of gadgets, people suddenly want them way more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNoirResearchDiscovery;
