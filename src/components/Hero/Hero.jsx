import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  { id: "fullstack", label: "Full Stack", row: 1, featured: true },
  { id: "opensource", label: "Open Source", row: 1 },
  { id: "devtools", label: "Dev Tools", row: 1 },
  { id: "responsive", label: "Responsive", row: 2 },
  { id: "react", label: "React", row: 2, featured: true },
  { id: "personal-site", label: "Personal Site", row: 2 },
  { id: "minimal-ui", label: "Minimal UI", row: 3, featured: true },
  { id: "design-systems", label: "Design Systems", row: 3 },
  { id: "grid-layouts", label: "Grid Layouts", row: 3 },
  { id: "animation", label: "Animation", row: 4 },
  { id: "startup-showcase", label: "Startup Showcase", row: 4 },
  { id: "dark-theme", label: "Dark Theme", row: 4 },
  { id: "clean-code", label: "Clean Code", row: 5 },
  { id: "pastel-ui", label: "3 JS and AR", row: 5, featured: true },
  { id: "grid-v2", label: "Grid v2", row: 5 },
  { id: "typography", label: "Typography", row: 6 },
  { id: "illustrations", label: "Illustrations", row: 6 },
  { id: "deploy-ready", label: "Deploy Ready", row: 6 },
  { id: "playground", label: "Playground", row: 7 },
  { id: "ecommerce", label: "E-commerce", row: 7 },
  { id: "nextjs", label: "Next.js", row: 7, featured: true }
];

const Hero = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
const navigate=useNavigate()
  // Toggle category selection
  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleClick = () =>{
    navigate('/projects')
  }
  // Group categories by row
  const getCategoriesByRow = () => {
    const rows = {};
    CATEGORIES.forEach(category => {
      if (!rows[category.row]) {
        rows[category.row] = [];
      }
      rows[category.row].push(category);
    });
    return rows;
  };

  const categoryRows = getCategoriesByRow();

  return (
    <div className="flex w-full h-screen bg-black text-white">
      {/* Left side - Logo and Headline */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        {/* Logo */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold"
          >
            AD
          </motion.div>
        </div>

        {/* Main headline */}
        <div className="mb-40 ml-20">
          <motion.h1 
            className="text-9xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aashutosh Dahal
          </motion.h1>
          <motion.h2
            className="text-2xl font-light leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            just another cs geek who like working on projects, minimalist UI because i am colorblind and tend to messup colors while designing anything from scratch and i like working on backend apis and systems
          </motion.h2>
          
          <motion.button 
            className="mt-8 border border-white px-6 py-2 font-bold text-2xl hover:bg-white hover:text-black transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handleClick}
          >
            View Projects
          </motion.button>
          
          {/* Social Media Links */}
          <motion.div 
            className="mt-8 flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://github.com/AashutoshDL" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/aashutosh-dahal/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aashudahal11@gmail.com" className="hover:text-gray-400 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right side - Categories */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Render categories by row */}
          {Object.keys(categoryRows).map(rowNum => (
            <div key={rowNum} className="w-full flex flex-wrap gap-5 justify-center mb-4">
              {categoryRows[rowNum].map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`px-5 py-2 rounded-full border border-white transition-all
                    ${category.featured || selectedCategories.includes(category.id) 
                      ? "bg-white text-black" 
                      : "bg-transparent text-white hover:bg-white/10"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;