import React from "react";

const TechNoirChallengesLearnings = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          What I Figured Out Along the Way
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              The Hard Parts
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">
                  Making Tech Specs Feel Sexy
                </h4>
                <p className="text-gray-300">
                  How do you talk about battery life and water resistance in a
                  way that doesn't kill the vibe? Turns out you bury the boring
                  stuff and lead with what it actually does for your life.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">
                  Nobody Trusted This Category Yet
                </h4>
                <p className="text-gray-300">
                  This was 2016—wearable tech was still pretty new and people
                  were skeptical. Is this just a fad? Will it actually look
                  good? Building confidence was half the battle.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              What Actually Worked
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">
                  Show, Don't Just Tell
                </h4>
                <p className="text-gray-300">
                  Product shots on white backgrounds are useless. People needed
                  to see how this stuff looked in real outfits, in real life.
                  Context changed everything.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">
                  Hand-Holding Actually Works
                </h4>
                <p className="text-gray-300">
                  75% of people felt way more confident about wearable tech
                  after using the platform. Turns out if you just explain how to
                  wear something, people will actually buy it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            If I Did This Again
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">
                Make It Personal
              </h4>
              <p className="text-gray-300">
                AI that actually knows your style and suggests stuff that works
                with what you already own. Like having a really smart friend who
                knows fashion.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">
                Let People Show Off
              </h4>
              <p className="text-gray-300">
                A place where users can share their own outfit combinations and
                styling tips. Because sometimes the best advice comes from other
                people figuring it out.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Better AR</h4>
              <p className="text-gray-300">
                The AR was cool but clunky. Real-time rendering that actually
                looks realistic and integrates better with the shopping flow
                would be game-changing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNoirChallengesLearnings;
