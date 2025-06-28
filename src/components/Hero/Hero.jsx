import React, { useState, useEffect, useRef } from "react";
import { createCommands } from "./TerminalCommands";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalContent } from "./TerminalContent";

const Hero = ({ selectedInterface }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [currentDirectory] = useState("~");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = createCommands(setShowSkillsModal, setHistory);

  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();

    if (trimmedCommand === "clear") {
      commands.clear();
      return;
    }

    const newEntry = {
      command,
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

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current && selectedInterface === "terminal") {
      inputRef.current.focus();
    }
  }, [selectedInterface]);

  useEffect(() => {
    if (selectedInterface === "terminal") {
      const welcomeMessage = {
        command: "",
        output: {
          type: "welcome",
          animated: true,
          content: (
            <div className="space-y-2">
              {/* <div className="text-green-400 text-2xl font-bold">
                Terminal Interface Loaded
              </div> */}
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

  return (
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
  );
};

export default Hero;
