import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "V Light",
      role: "Shop Manager",
      duration: "2021 - 2022",
      description:
        "Managed day-to-day operations of the shop, supervised staff, handled inventory, and ensured smooth customer service.",
    },
    {
      company: "SMaRC (Skill Museum and Research Center)",
      role: "3D & AR Developer",
      duration: "2024 - Present",
      description:
        "Worked on immersive web-based experiences using Three.js and AR technologies. Developed interactive 3D scenes, AR applications, and WebGL projects for educational and interactive museum setups.",
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-center items-center px-8 py-20 text-white">
      <motion.h2
        className="text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-12 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border border-white/20 rounded-lg p-6 bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <span className="text-sm opacity-70">{exp.duration}</span>
            </div>
            <h4 className="text-lg font-medium mb-2">{exp.role}</h4>
            <p className="text-white/70">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
