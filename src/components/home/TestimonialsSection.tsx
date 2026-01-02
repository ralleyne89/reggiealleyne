import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jewels Kotikela",
      role: "Director of Product Management",
      company: "Blue Shield of California",
      avatar: "/images/avatar-sarah.jpg",
      rating: 5,
      text: "Reggie's ability to bridge design and development saved us months of back-and-forth. His healthcare platform designs were both beautiful and technically sound.",
      highlight: "saved us months of back-and-forth",
    },
    {
      id: 2,
      name: "Nina Birnbaum",
      role: "Medical Director, Innovation Acceleration",
      company: "Blue Shield of California",
      avatar: "/images/avatar-marcus.jpg",
      rating: 5,
      text: "Working with a designer who actually codes is a game-changer. Reggie delivered pixel-perfect implementations that worked flawlessly across all devices.",
      highlight: "pixel-perfect implementations",
    },
    {
      id: 3,
      name: "Yahkeef Davis",
      role: "Software Engineer - Machine Learning Partnerships & Operations",
      company: "Home Depot",
      avatar: "/images/avatar-yahkeef.jpg",
      rating: 5,
      text: "Reggie's technical depth as a designer is unmatched. He speaks our language and delivers designs that actually work in production without endless revisions.",
      highlight: "speaks our language",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            Trusted by <span className="text-primary">Teams & Leaders</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from colleagues and clients who've experienced the
            difference of working with a designer who codes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Senja/Shosay Style Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-primary/20 relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 bg-primary rounded-full p-2 shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-800 text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>

                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center gap-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>UI/UX Expert</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
