import { desc } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// All commands in one simple object
const commands = {
  help: {
    description: "Show available commands",
    output: (
      <div className="text-green-400">
        <div className="mb-2">Available commands:</div>
        <div className="text-gray-300 space-y-1">
          <div>
            • <span className="text-yellow-400">about</span> - Learn about me
          </div>
          <div>
            • <span className="text-yellow-400">skills</span> - View my
            technical skills
          </div>
          <div>
            • <span className="text-yellow-400">contact</span> - Get my contact
            info
          </div>
          <div>
            • <span className="text-yellow-400">projects</span> - See my
            projects
          </div>
          <div>
            • <span className="text-yellow-400">resume</span> - View my resume
          </div>
          <div>
            • <span className="text-yellow-400">clear</span> - Clear the
            terminal
          </div>
          <div>
            • <span className="text-yellow-400">exit</span> - Exit from the
            terminal
          </div>
        </div>
      </div>
    ),
  },

  about: {
    description: "Information about me",
    output: (
      <div className="text-gray-300">
        <div className="text-green-400 text-xl mb-2">
          👋 Hi, I'm Aashutosh Dahal
        </div>
        <div className="space-y-2">
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

  skills: {
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
    output: (() => {
      // navigate("/");
      return null; // render nothing, just redirect
    })(),
  },

  contact: {
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

  projects: {
    description: "My projects",
    output: (
      <div className="text-gray-300 space-y-3">
        <div className="text-green-400 font-bold">Projects:</div>
        <div>🚀 Coming soon... Check my GitHub for latest work!</div>
        <div>
          Visit:{" "}
          <a
            href="https://github.com/AashutoshDL"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            github.com/AashutoshDL
          </a>
        </div>
      </div>
    ),
  },

  resume: {
    description: "View resume",
    output: (
      <div className="text-gray-300">
        <div className="text-green-400">📄 Resume:</div>
        <div className="mt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Open Resume in New Tab
          </a>
        </div>
        <div className="text-yellow-400 mt-2">
          Contact me for the latest version!
        </div>
      </div>
    ),
  },
};

const TerminalPortfolio = () => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  // const navigate = useNavigate();

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
              Type <span className="text-yellow-400">'help'</span> to see
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

    // Create new history entry
    const newEntry = {
      command: command,
      output: commands[trimmedCommand] ? (
        commands[trimmedCommand].output
      ) : (
        <div className="text-red-400">
          Command '{command}' not found. Type 'help' for available commands.
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
