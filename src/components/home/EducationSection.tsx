
import React from "react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const education = [{
    year: "2014",
    title: "Graphic Design",
    school: "Art Institute of California – Los Angeles",
    description: "Studied graphic design principles, design thinking, and interaction design"
  }, {
    year: "2016",
    title: "UX/UI Design",
    school: "General Assembly",
    description: "Certification in user experience design methodologies"
  }, {
    year: "2020",
    title: "Fullstack Web Development",
    school: "UCLA Extension",
    description: "Comprehensive full stack web development program"
  }];

  return (
    <section id="education" className="py-20 bg-secondary-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            My <span className="text-primary">Experience</span>
          </motion.h2>

          <motion.p className="text-gray-400" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
            My educational background and training that have shaped my design
            and development skills.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div key={index} className="bg-secondary rounded-3xl p-6 relative overflow-hidden group" initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true,
              amount: 0.3
            }} whileHover={{
              y: -5
            }}>
              <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block mb-4">
                {item.year}
              </div>

              <h3 className="text-xl font-heading font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-primary mb-3 text-sm">{item.school}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
