import React from "react";
import { motion } from "framer-motion";
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-gray-300"
    >
      {/* Header */}
      <div className="border-b border-green-400 pb-2 mb-4">
        <div className="text-green-400 font-bold text-lg">
          $ skills --list --verbose
        </div>
        <div className="text-gray-500 text-sm mt-1">
          Displaying technical expertise and competencies
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="space-y-2"
          >
            {/* Category Header */}
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 font-bold">
                [{skillGroup.category.toUpperCase()}]
              </span>
              <span className="text-green-400">
                {"─".repeat(Math.max(0, 40 - skillGroup.category.length))}
              </span>
            </div>

            {/* Skills List */}
            <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-1">
              {skillGroup.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + skillIndex * 0.05 }}
                  className="text-gray-300 hover:text-white transition-colors cursor-default group"
                >
                  <span className="text-green-400 group-hover:text-yellow-400 transition-colors">
                    ├─
                  </span>
                  <span className="ml-2">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: skills.length * 0.15 + 0.3 }}
        className="mt-6 pt-4 border-t border-gray-700"
      >
        <div className="text-green-400 text-sm">
          ✓ Skills enumeration complete
        </div>
        <div className="text-gray-500 text-xs mt-1">
          Total categories: {skills.length} | Total skills:{" "}
          {skills.reduce((total, group) => total + group.items.length, 0)}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
