import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Skills from "./Skills";
import { Link } from "react-router-dom";

export const createCommands = (setShowSkillsModal, setHistory) => ({
  whoami: () => ({
    type: "info",
    animated: true,
    content: (
      <div className="flex items-start space-x-6 p-4">
        {/* Profile Image - Left Side */}
        <div className="flex-shrink-0">
          <img
            src="/portfolio/pic.jpg"
            alt="Aashutosh Avatar"
            className="w-64 h-64 rounded-lg border-2 border-green-400 shadow-lg object-cover"
          />
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 space-y-3">
          {/* Name */}
          <h2 className="text-green-400 text-5xl font-bold">Aashutosh Dahal</h2>

          {/* Bio */}
          <div className="text-gray-300 text-3xl text-sm leading-relaxed">
            Just another CS enthusiast who loves building things that work (even
            if they don't always look pretty the first time). I have a knack for
            backend systems and APIs, and I prefer minimalist UI—partly because
            I'm colorblind and partly because clean, functional design just
            makes sense.
          </div>

          <div className="text-gray-400 text-xl text-sm">
            When it comes to tech, I'm more about logic than layers, and I enjoy
            solving the stuff most people avoid.
          </div>
        </div>
      </div>
    ),
  }),

  help: () => ({
    type: "help",
    animated: true,
    content: (
      <div className="space-y-1">
        <div className="text-green-400 font-bold">Available Commands:</div>
        <div className="text-gray-300 space-y-1 mt-2">
          <div>whoami - Display user information</div>
          <div>skills.exe - Launch skills viewer</div>
          <div>contact - Show contact information</div>
          <div>projects - View my projects</div>
          <div>clear - Clear terminal</div>
          <div>sudo apt cv - View CV</div>
          <div>sudo apt resume - View Resume</div>
          <div>help - Show this help message</div>
        </div>
      </div>
    ),
  }),

  "sudo apt cv": () => ({
    type: "file",
    animated: true,
    content: (
      <div className="bg-gray-900 rounded-lg border border-green-400/50 p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-mono text-sm">
            Opening CV...
          </span>
        </div>
        <div className="text-gray-300 text-sm font-mono">
          📄 cv.pdf - Fetching from /public/cv.pdf
        </div>
      </div>
    ),
    action: () => {
      // Open CV in new tab
      window.open("/portfolio/CV.pdf", "_blank", "noopener,noreferrer");
    },
  }),

  "sudo apt resume": () => ({
    type: "file",
    animated: true,
    content: (
      <div className="bg-gray-900 rounded-lg border border-blue-400/50 p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 font-mono text-sm">
            Opening Resume...
          </span>
        </div>
        <div className="text-gray-300 text-sm font-mono">
          📄 resume.pdf - Fetching from /public/resume.pdf
        </div>
      </div>
    ),
    action: () => {
      // Open Resume in new tab
      window.open("/portfolio/CV.pdf", "noopener,noreferrer");
    },
  }),

  "skills.exe": () => ({
    type: "skills",
    animated: true,
    content: <Skills />,
  }),

  contact: () => ({
    type: "info",
    animated: true,
    content: (
      <div className="space-y-2">
        <div className="text-green-400 font-bold">Contact Information:</div>
        <div className="space-y-2 mt-3">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={16} />
            <span>aashudahal11@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Github size={16} />
            <a
              href="https://github.com/AashutoshDL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/AashutoshDL
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Linkedin size={16} />
            <a
              href="https://www.linkedin.com/in/aashutosh-dahal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/aashutosh-dahal
            </a>
          </div>
        </div>
      </div>
    ),
  }),

  projects: () => ({
    type: "info",
    animated: true,
    content: (
      <Link to="/projects" className="text-green-400 hover:underline">
        View Projects
      </Link>
    ),
  }),

  clear: () => {
    setHistory([]);
    return null;
  },
});
