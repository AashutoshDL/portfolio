import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Sample project data
  const projectData = [
    {
      title: 'Ev Repair',
      description: 'An Ev Repair Website made for advert',
      image: '/image1.jpg',
      link: '',
      id: 1,
    },
    {
      title: 'Bhasalaya',
      description: 'This is an web application for learning Nepali, Samajik and Sanskrit',
      image: '/image2.jpg',
      link: '',
      id: 2,
    },
    {
      title: 'Medisys',
      description: 'Health Tracking Application (Web Application)',
      image: '/image2.jpg',
      link: '',
      id: 3,
    },
    {
      title: 'Weather Application',
      description: 'This is the web application using React Js and OpenWeatherAPI',
      image: '/image2.jpg',
      link: '',
      id: 4,
    },
    {
      title: 'VROOM',
      description: 'This is the Car Rental Web Application',
      image: '/image2.jpg',
      link: '',
      id: 5,
    },
    {
      title: 'GreenRides',
      description: 'This is an Ev based delivery application',
      image: '/image2.jpg',
      link: '',
      id: 6,
    },
    {
      title: 'Project Management System',
      description: 'Project Management System or Software for small offices and businesses',
      image: '/image2.jpg',
      link: '',
      id: 7,
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-8">
      <motion.h2 
        className="text-5xl font-bold mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className="border border-white/20 rounded p-6 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="mb-6 w-full h-64 overflow-hidden rounded">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-white/70 mb-6 flex-grow">{project.description}</p>
            
            <motion.a
              href={project.link || "#"}
              className="border border-white px-6 py-2 text-center hover:bg-white hover:text-black transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;