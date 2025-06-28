import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { animate } from "framer-motion";
import GUIInterface from "../GUI/GUIInterface";

export const createCommands = (setShowSkillsModal, setHistory) => ({
  whoami: () => ({
    type: "info",
    animated: true,
    content: (
      <div className="flex items-start space-x-8 p-6 max-w-4xl">
        {/* Profile Image - Left Side */}
        <div className="flex-shrink-0">
          <img
            src="/portfolio/pic.jpg"
            alt="Aashutosh Avatar"
            className="w-48 h-48 rounded-xl border-2 border-green-400 shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 space-y-4 min-h-48 flex flex-col justify-center">
          {/* Name */}
          <h2 className="text-green-400 text-4xl font-bold tracking-tight">
            Aashutosh Dahal
          </h2>

          {/* Bio */}
          <div className="text-gray-300 text-lg leading-relaxed">
            Just another CS enthusiast who loves building things that work (even
            if they don't always look pretty the first time). I have a knack for
            backend systems and APIs, and I prefer minimalist UI—partly because
            I'm colorblind and partly because clean, functional design just
            makes sense.
          </div>

          <div className="text-gray-400 text-base leading-relaxed">
            When it comes to tech, I'm more about logic than layers, and I enjoy
            solving the stuff most people avoid.
          </div>

          {/* Optional: Add a subtle accent */}
          <div className="w-16 h-1 bg-green-400 rounded-full mt-2"></div>
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
          <div>launch projects - View my projects</div>
          <div>clear - Clear terminal</div>
          <div>sudo apt cv - View CV</div>
          <div>sudo apt resume - View Resume</div>
          <div>help - Show this help message</div>
          <div>cat contact.info - Display contact information</div>
          <div>la -la - List directory contents</div>
        </div>
      </div>
    ),
  }),

  "skills.exe": () => ({
    type: "skills",
    animated: true,
    content: <Skills />,
  }),

  "cat contact.info": () => ({
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
  "ls -la": () => ({
    type: "info",
    animated: true,
    content: (
      <div className="font-mono text-sm space-y-1">
        <div className="text-green-400">total 42</div>
        <div className="text-gray-300">
          drwxr-xr-x 1 aashutosh dev 512 Jun 28 2025 .
        </div>
        <div className="text-gray-300">
          drwxr-xr-x 1 aashutosh dev 512 Jun 28 2025 ..
        </div>
        <div className="text-blue-400">
          -rwxr-xr-x 1 aashutosh dev 2048 Jun 28 2025 skills.exe
        </div>
        <div className="text-gray-300">
          -rw-r--r-- 1 aashutosh dev 1024 Jun 28 2025 CV.pdf
        </div>
        <div className="text-gray-300">
          -rw-r--r-- 1 aashutosh dev 1024 Jun 28 2025 Resume.pdf
        </div>
        <div className="text-yellow-400">
          -rw-r--r-- 1 aashutosh dev 256 Jun 28 2025 contact.info
        </div>
        <div className="text-purple-400">
          drwxr-xr-x 1 aashutosh dev 512 Jun 28 2025 projects/
        </div>
        <div className="text-green-400">
          -rwxr-xr-x 1 aashutosh dev 128 Jun 28 2025 coffee.sh
        </div>
      </div>
    ),
  }),

  "launch projects": () => ({
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
