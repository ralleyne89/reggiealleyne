
import React, { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import HealthHomeHeader from '@/components/projects/healthhome/HealthHomeHeader';
import HealthHomeOutcomes from '@/components/projects/healthhome/HealthHomeOutcomes';
import HealthHomeDesignProcess from '@/components/projects/healthhome/HealthHomeDesignProcess';
import HealthHomeLearnings from '@/components/projects/healthhome/HealthHomeLearnings';
import HealthHomeTestimonial from '@/components/projects/healthhome/HealthHomeTestimonial';
import HealthHomePrototype from '@/components/projects/healthhome/HealthHomePrototype';

const HealthHomeProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">
      <HealthHomeHeader />
      
      <div className="max-w-7xl mx-auto px-6">
        <HealthHomeOutcomes />
        <HealthHomeDesignProcess />
        <HealthHomeLearnings />
        <HealthHomeTestimonial />
        <HealthHomePrototype />
      </div>

      <Footer />
    </div>
  );
};

export default HealthHomeProject;
