import { desc } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// All commands in one simple object
const commands = {
  ls: {
    description: "Show available directories",
    output: (
      <div className="text-green-400">
        <div className="mb-2">Available directories:</div>
        <div className="text-gray-300 space-y-1">
          <div>
            <span className="text-yellow-400">about</span>
            <br />
            <span className="text-yellow-400">skills.sh</span>
            <br />
            <span className="text-yellow-400">contact.txt</span>
            <br />
            <span className="text-yellow-400">projects</span>
            <br />
          </div>
        </div>
      </div>
    ),
  },

  "--help": {
    description: "Show available commands",
    output: (
      <div className="text-green-400">
        <div className="mb-1">Available commands:</div>
        <div className="text-gray-300 ml-4 space-y-0.5 text-sm tracking-tight">
          <div>
            <span className="text-yellow-400">whoami</span> — Learn more about
            me
          </div>
          <div>
            <span className="text-yellow-400">skills.sh</span> — View my
            technical skills
          </div>
          <div>
            <span className="text-yellow-400">cat contact.info</span> — Get my
            contact information
          </div>
          <div>
            <span className="text-yellow-400">cd projects</span> — See my
            projects
          </div>
          <div>
            <span className="text-yellow-400">sudo apt resume</span> — Download
            my resume
          </div>
          <div>
            <span className="text-yellow-400">view resume</span> — View my
            resume
          </div>
          <div>
            <span className="text-yellow-400">sudo apt cv</span> — Download my
            CV
          </div>
          <div>
            <span className="text-yellow-400">view cv</span> — View my CV
          </div>
          <div>
            <span className="text-yellow-400">clear</span> — Clear the terminal
          </div>
          <div>
            <span className="text-yellow-400">ls</span> — Show available
            directories
          </div>
          <div>
            <span className="text-yellow-400">--help</span> — Show this help
            message
          </div>
        </div>
      </div>
    ),
  },

  whoami: {
    description: "Information about me",
    output: (
      <div className="text-gray-300">
        <div className="text-blue-400 text-xl mb-2">
          Hi, I'm Aashutosh Dahal
        </div>
        <div className="space-y-1">
          <p>Just another CS enthusiast who loves building things that work.</p>
          <p>
            I have a knack for backend systems and APIs, and I prefer minimalist
            UI.
          </p>
          <p>When it comes to tech, I'm more about logic than layers.</p>
        </div>
      </div>
    ),
  },

  "skills.sh": {
    description: "My technical skills",
    output: (
      <div className="text-gray-300 space-y-3">
        <div className="text-green-400 font-bold">Technical Skills:</div>

        <div>
          <div className="text-yellow-400">Languages:</div>
          <div className="ml-4">JavaScript, Python, TypeScript</div>
        </div>

        <div>
          <div className="text-yellow-400">Frontend:</div>
          <div className="ml-4">React, Next.js, HTML5, CSS3, Tailwind CSS</div>
        </div>

        <div>
          <div className="text-yellow-400">Backend:</div>
          <div className="ml-4">Node.js, Express, Django, REST APIs</div>
        </div>

        <div>
          <div className="text-yellow-400">Database:</div>
          <div className="ml-4">MongoDB, PostgreSQL, MySQL, Redis</div>
        </div>

        <div>
          <div className="text-yellow-400">Tools:</div>
          <div className="ml-4">Git, Docker, Linux, Figma</div>
        </div>
      </div>
    ),
  },

  exit: {
    description: "Exit from the terminal",
  },

  "cat contact.info": {
    description: "Contact information",
    output: (
      <div className="text-gray-300 space-y-2">
        <div className="text-green-400 font-bold">Contact Information:</div>
        <div>📧 Email: aashudahal11@gmail.com</div>
        <div>
          🐙 GitHub:{" "}
          <a
            href="https://github.com/AashutoshDL"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            github.com/AashutoshDL
          </a>
        </div>
        <div>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/aashutosh-dahal/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/aashutosh-dahal
          </a>
        </div>
      </div>
    ),
  },

  "cd projects": {
    description: "My projects",
  },

  "sudo apt resume": {
    description: "Download resume",
    output: (
      <div className="text-gray-300">
        <div className="text-green-400">📄 Resume:</div>
        <div className="text-yellow-400 mt-2">Downloading resume...</div>
      </div>
    ),
  },

  "view resume": {
    description: "View resume",
    output: (
      <div className="text-gray-300">
        <div className="text-green-400">📄 Resume:</div>
        <div className="text-yellow-400 mt-2">Viewing resume...</div>
      </div>
    ),
  },

  "sudo apt cv": {
    description: "Download resume",
    output: (
      <div className="text-gray-300">
        <div className="text-green-400">📄 CV:</div>
        <div className="text-yellow-400 mt-2">Downloading CV...</div>
      </div>
    ),
  },

  "view cv": {
    description: "View CV",
    output: (
      <div className="text-gray-300">
        <div className="text-green-400">📄 CV:</div>
        <div className="text-yellow-400 mt-2">Viewing CV...</div>
      </div>
    ),
  },
};

const TerminalPortfolio = () => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const navigate = useNavigate();

  // Welcome message when component loads
  useEffect(() => {
    setHistory([
      {
        command: "",
        output: (
          <div className="text-green-400">
            <div className="text-xl mb-2">
              Welcome to Aashutosh's Terminal Portfolio! 🚀
            </div>
            <div className="text-gray-300">
              Type <span className="text-yellow-400">ls</span> to see available
              directories.
              <br />
              Type <span className="text-yellow-400">--help</span> to see
              available commands.
            </div>
          </div>
        ),
        timestamp: Date.now(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when clicking anywhere on terminal
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Handle command execution
  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();

    // Special case for clear command
    if (trimmedCommand === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCommand === "exit") {
      navigate("/");
      return;
    }

    if (trimmedCommand === "cd projects") {
      navigate("/projects");
      return;
    }

    if (trimmedCommand === "sudo apt resume") {
      const newEntry = {
        command,
        output: commands[trimmedCommand].output,
        timestamp: Date.now(),
      };
      setHistory((prev) => [...prev, newEntry]);
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/portfolio/Resume.pdf"; // file in public folder
        link.download = "Aashutosh_Dahal_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);

      return;
    }

    if (trimmedCommand === "view resume") {
      const newEntry = {
        command,
        output: commands[trimmedCommand].output,
        timestamp: Date.now(),
      };
      setHistory((prev) => [...prev, newEntry]);
      setTimeout(() => {
        window.open("/portfolio/Resume.pdf", "_blank"); // open in new tab
      }, 500);

      return;
    }

    if (trimmedCommand === "sudo apt cv") {
      const newEntry = {
        command,
        output: commands[trimmedCommand].output,
        timestamp: Date.now(),
      };
      setHistory((prev) => [...prev, newEntry]);
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/portfolio/CV.pdf"; // file in public folder
        link.download = "Aashutosh_Dahal_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);

      return;
    }

    if (trimmedCommand === "view cv") {
      const newEntry = {
        command,
        output: commands[trimmedCommand].output,
        timestamp: Date.now(),
      };
      setHistory((prev) => [...prev, newEntry]);
      setTimeout(() => {
        window.open("/portfolio/CV.pdf", "_blank"); // open in new tab
      }, 500);

      return;
    }

    // Create new history entry
    const newEntry = {
      command: command,
      output: commands[trimmedCommand] ? (
        commands[trimmedCommand].output
      ) : (
        <div className="text-red-400">
          Command '{command}' not found. Type 'ls' for available commands.
        </div>
      ),
      timestamp: Date.now(),
    };

    setHistory((prev) => [...prev, newEntry]);
  };

  // Handle keyboard input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (currentInput.trim()) {
        executeCommand(currentInput);
      }
      setCurrentInput("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Terminal Header */}
      <div className="border-b border-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm">Terminal Portfolio</div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="h-[calc(100vh-60px)] overflow-auto p-4 space-y-2"
        onClick={focusInput}
      >
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="space-y-1">
            {/* Show command if it exists */}
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-green-400">aashutosh@portfolio:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-gray-300">{entry.command}</span>
              </div>
            )}
            {/* Show output */}
            <div className="ml-4">{entry.output}</div>
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center gap-2">
          <span className="text-green-400">aashutosh@portfolio:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white"
            autoFocus
            placeholder="Type a command..."
          />
          {/* Blinking cursor */}
          <span className="animate-pulse text-white">_</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
