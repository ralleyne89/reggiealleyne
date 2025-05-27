import React from "react";
import { motion } from "framer-motion";
import { Play, MousePointer, DollarSign, TrendingUp } from "lucide-react";
interface FinalGameplayProps {
  handleImageClick: (imageSrc: string) => void;
}
const FinalGameplay = ({
  handleImageClick
}: FinalGameplayProps) => {
  const gameFeatures = [{
    icon: MousePointer,
    title: "Tap or Idle Play",
    description: "Earn coins by clicking or passively through investments"
  }, {
    icon: TrendingUp,
    title: "Upgradeable Hustles & Hustlers",
    description: "Strategic choice between active and passive income streams"
  }, {
    icon: Play,
    title: "Cosmetic Customization",
    description: "Outfit Bob with style as his empire grows"
  }, {
    icon: DollarSign,
    title: "Data Persistence",
    description: "Progress is saved across sessions using MongoDB backend"
  }];
  return <motion.section initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="py-16 bg-white">
      <div className="w-full px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Final Gameplay Experience
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The completed game offers a balanced idle experience with both active engagement and passive progression, 
            designed to be enjoyable in short bursts or extended play sessions.
          </p>
        </motion.div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {gameFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
            Experience Bob's Big Break
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Try the live demo to experience the game mechanics and see how the idle progression system works in practice.
          </p>
          <a href="https://bobsbigbreak.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
            <Play className="w-5 h-5 mr-2" />
            Play Now
          </a>
        </motion.div>
      </div>
    </motion.section>;
};
export default FinalGameplay;