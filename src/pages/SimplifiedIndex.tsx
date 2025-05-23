
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const SimplifiedIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary-dark text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <img
                src="/lovable-uploads/1686931266900.jpeg"
                alt="Reggie Alleyne"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Reggie Alleyne
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Principal Designer
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I shape digital experiences that make complexity feel intuitive
            </p>

            {/* Location and Experience */}
            <div className="flex items-center justify-center gap-6 mb-12 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-primary" />
                <span>10+ Years Experience</span>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/works"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Availability Status */}
            <motion.div 
              className="mt-8 inline-flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-white/10 text-gray-300 px-4 py-2 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full border border-green-500 animate-ping"></div>
              </div>
              <span>Available for new projects</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SimplifiedIndex;
