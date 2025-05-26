import React from "react";

const TechNoirProblemSpace = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          What's Actually Going On Here
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Look, wearable tech has a serious image problem. It works fine, but
          fashionable? Not even close. People want to be early adopters, but
          they also don't want to look like they're cosplaying as a cyborg at
          brunch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              It Just Looks... Clinical
            </h3>
            <p className="text-gray-300">
              Most wearable tech is designed by engineers who clearly never had
              to worry about matching their outfit. Everything looks like it
              belongs in a lab, not on your wrist at dinner.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Nobody Knows How to Wear This Stuff
            </h3>
            <p className="text-gray-300">
              Even when people find something they like, they have no clue how
              to style it. Is this a statement piece? Does it go with
              everything? Without guidance, that $300 smartwatch just sits in a
              drawer.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Shopping Feels Like Best Buy
            </h3>
            <p className="text-gray-300">
              Every site just lists specs and features. Battery life, water
              resistance, whatever. But where's the inspiration? Where are the
              outfit ideas? It's like shopping for a router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNoirProblemSpace;
