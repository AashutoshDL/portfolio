import React, { useState, useEffect, useRef } from "react";
import { createCommands } from "./TerminalCommands";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalContent } from "./TerminalContent";
import GUIInterface from "../GUI/GUIInterface";

const Hero = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [currentDirectory] = useState("~");
  const [showOverlay, setShowOverlay] = useState(true);
  const [bootingComplete, setBootingComplete] = useState(false);
  const [selectedInterface, setSelectedInterface] = useState(null);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Create commands with necessary state setters
  const commands = createCommands(setShowSkillsModal, setHistory);

  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();

    if (trimmedCommand === "clear") {
      commands.clear();
      return;
    }

    const newEntry = {
      command: command,
      output: commands[trimmedCommand]
        ? commands[trimmedCommand]()
        : {
            type: "error",
            content: (
              <div className="text-red-400">
                Command not found: {command}. Type 'help' for available
                commands.
              </div>
            ),
          },
      timestamp: Date.now(),
    };

    setHistory((prev) => [...prev, newEntry]);
  };

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current && selectedInterface === "terminal") {
      inputRef.current.focus();
    }
  }, [selectedInterface]);

  // Initial welcome message for terminal
  useEffect(() => {
    if (selectedInterface === "terminal") {
      const welcomeMessage = {
        command: "",
        output: {
          type: "welcome",
          animated: true,
          content: (
            <div className="space-y-2">
              <div className="text-green-400 text-2xl font-bold">
                Terminal Interface Loaded
              </div>
              <div className="text-gray-300 mt-2">
                Type 'help' for available commands
              </div>
            </div>
          ),
        },
        timestamp: Date.now(),
      };
      setHistory([welcomeMessage]);
    }
  }, [selectedInterface]);

  const handleInterfaceSelect = (interfaceType) => {
    setSelectedInterface(interfaceType);
    setShowOverlay(false);
  };

  // Booting Overlay Component
  const BootingOverlay = () => (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div className="mt-12 space-y-6 animate-fade-in">
          <div className="mt-3 text-5xl font-mono animate-fade-in">
            WELCOME TO THE PORTFOLIO SYSTEM
          </div>
          <div className="text-green-400 text-xl font-mono mb-8">
            SELECT INTERFACE
          </div>

          <div className="flex space-x-8 justify-center">
            {/* Terminal Option */}
            <button
              onClick={() => handleInterfaceSelect("terminal")}
              className="group relative bg-gray-900 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 p-6 rounded-lg min-w-48"
            >
              <div className="text-center space-y-3">
                <div className="text-2xl">💻</div>
                <div className="font-mono font-bold">TERMINAL</div>
                <div className="text-sm opacity-75">Command Line Interface</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </button>

            {/* GUI Option */}
            <button
              onClick={() => handleInterfaceSelect("gui")}
              className="group relative bg-gray-900 border-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 p-6 rounded-lg min-w-48"
            >
              <div className="text-center space-y-3">
                <div className="text-2xl">🖱️</div>
                <div className="font-mono font-bold">GUI</div>
                <div className="text-sm opacity-75">Graphical Interface</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </button>
          </div>

          <div className="text-gray-500 text-xs font-mono mt-4">
            Choose your preferred interaction method
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Show overlay on initial load */}
      {showOverlay && <BootingOverlay />}

      {/* Terminal Interface */}
      {selectedInterface === "terminal" && (
        <div className="min-h-screen bg-black text-white font-mono">
          <TerminalHeader />
          <TerminalContent
            history={history}
            currentDirectory={currentDirectory}
            input={input}
            setInput={setInput}
            inputRef={inputRef}
            terminalRef={terminalRef}
            executeCommand={executeCommand}
          />
        </div>
      )}

      {/* GUI Interface */}
      {selectedInterface === "gui" && <GUIInterface />}
    </>
  );
};

export default Hero;
