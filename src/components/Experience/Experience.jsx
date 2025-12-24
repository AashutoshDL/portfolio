import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "SMaRC (Skill Museum and Research Center)",
      role: "Frontend & Spatial Computing Intern",
      duration: "May 2024 – December 2025",
      description: (
        <ul className="list-disc list-inside space-y-1 text-white/70">
          <li>
            Developed an interactive riddle game for events at Kavya College,
            enhancing engagement and logical thinking among participants.
          </li>
          <li>
            Organized large-scale events such as Herald PUBG and Islington
            Mario, improving event coordination and leadership skills.
          </li>
          <li>
            Completed a 3D web development course and supported initial
            development of SMaRC’s 3D website, later taking over the project.
          </li>
          <li>
            Showcased innovative projects at Futurama events hosted at Islington
            College, Herald College, and Apex College, increasing visibility and
            outreach.
          </li>
          <li>
            Integrated AR and 3D technologies to design dynamic web applications
            for brochures and leaflets at Islington College Kathmandu.
          </li>
          <li>
            Created AR experiences using Google Model Viewer, Three.js, A-Frame,
            and MindAR, expanding proficiency in WebAR tools and development.
          </li>
          <li>
            Presented Final Year Project and AR project at BIC Experience event,
            including training volunteers on project use.
          </li>
          <li>
            Led development of a Gamified Cybersecurity Learning experience
            using React Three Fiber, managing the team as acting team lead.
          </li>
          <li>
            Delivered game development classes for the Skill Enrichment Program,
            fostering foundational skills among participants.
          </li>
          <li>
            Conducted web development workshops for the Global Professional
            Pathway Course, strengthening digital literacy for aspiring
            developers.
          </li>
          <li>
            Researched optimization techniques for augmented reality
            applications, improving performance and reducing latency across
            devices.
          </li>
          <li>
            Worked on content development for robotics kits for grades 4-9.
          </li>
          <li>
            Revamped the Gamified Cybersecurity learning experience in Unity
            through collaboration with a team of developers.
          </li>
        </ul>
      ),
    },
    {
      company: "V Light",
      role: "Shop Manager",
      duration: "2021 - 2022",
      description:
        "Managed day-to-day operations of the shop, supervised staff, handled inventory, and ensured smooth customer service.",
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-center items-center px-8 py-20 text-white">
      <motion.h2
        className="text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* CV Buttons */}
      <div className="flex gap-4 mb-12">
        {/* View CV */}
        <a
          href="/portfolio/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-black"
        >
          View CV
        </a>

        {/* Download CV */}
        <a
          href="/portfolio/Resume.pdf"
          download
          className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-black"
        >
          Download CV
        </a>
      </div>

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
            <div>{exp.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
