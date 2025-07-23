import React from "react";

const TechNoirUserPersona = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Meet Tina (She's Basically Everyone I Talked To)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Tech Tina</h3>
                  <p className="text-gray-400">Fashion-Forward Professional</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Profile</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Age:</span>{" "}
                  <span className="text-white">27</span>
                </div>
                <div>
                  <span className="text-gray-400">Life:</span>{" "}
                  <span className="text-white">
                    Fashion-forward professional
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Tech Skills:</span>{" "}
                  <span className="text-white">
                    Early adopter, always on trend
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Style:</span>{" "}
                  <span className="text-white">
                    Minimalist with statement pieces
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                What She Wants
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • To be the friend everyone asks "where did you get that?"
                </li>
                <li>• Tech that actually looks good with her outfits</li>
                <li>
                  • To stay ahead of trends without looking like she raided a
                  RadioShack
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                What Drives Her Crazy
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Everything looks like it belongs in a doctor's office</li>
                <li>
                  • Zero help figuring out how to actually wear this stuff
                </li>
                <li>• The "fashionable" options are still pretty ugly</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                What Would Actually Help
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Someone to curate the good stuff so she doesn't have to dig
                </li>
                <li>• Real styling advice, not just product specs</li>
                <li>
                  • Confidence that she'll look cool, not like a walking
                  computer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechNoirUserPersona;
