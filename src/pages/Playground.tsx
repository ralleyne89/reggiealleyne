import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Terminal, Sparkles, Gamepad2, Music, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiments = [
    {
      title: "Chill Vibes Music Player",
      description: "A lo-fi inspired music player with custom visualizations and ambient mode. Built with React and Web Audio API.",
      tags: ["React", "Web Audio API", "Canvas"],
      icon: Music,
      link: "/project/chill-vibes",
      status: "Live",
    },
    {
      title: "Bob's Big Break",
      description: "A Unity-based puzzle platformer exploring procedural level generation and physics-based mechanics.",
      tags: ["Unity", "C#", "Game Design"],
      icon: Gamepad2,
      link: "/project/bobs-big-break",
      status: "Live",
    },
    {
      title: "Wristband Controller",
      description: "Hardware + software prototype for gesture-based wearable input. Custom PCB design and embedded systems.",
      tags: ["Arduino", "PCB Design", "BLE"],
      icon: Zap,
      link: "/project/wristband",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-8 h-8 text-primary" />
              <p className="text-primary font-mono text-sm tracking-wide">
                ~/experiments
              </p>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-white">
              Playground
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Code experiments, creative coding, and things I build for fun. 
              This is where I explore ideas outside the constraints of client work.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl space-y-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link to={experiment.link}>
                <div className="group bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                      <experiment.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-heading font-semibold text-white group-hover:text-primary transition-colors">
                          {experiment.title}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                          {experiment.status}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{experiment.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experiment.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono bg-gray-800 text-gray-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mt-16"
        >
          <div className="border border-dashed border-gray-700 rounded-xl p-8 text-center">
            <Sparkles className="w-8 h-8 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-heading font-semibold text-gray-500 mb-2">
              More experiments coming soon
            </h3>
            <p className="text-gray-600 text-sm">
              Currently exploring: WebGL shaders, generative art, and AI-powered creative tools
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Playground;
