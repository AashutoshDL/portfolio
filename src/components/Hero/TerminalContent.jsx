import React from "react";
import { motion } from "framer-motion";

export const TerminalContent = ({ 
  history, 
  currentDirectory, 
  input, 
  setInput, 
  inputRef, 
  terminalRef, 
  executeCommand 
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        executeCommand(input);
        setInput("");
      }
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="h-[calc(100vh-60px)] overflow-auto p-4 space-y-2"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Command History */}
      {history.map((entry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1"
        >
          {entry.command && (
            <div className="flex items-center gap-2">
              <span className="text-green-400">aashutosh@portfolio:</span>
              <span className="text-blue-400">{currentDirectory}</span>
              <span className="text-white">$</span>
              <span className="text-gray-300">{entry.command}</span>
            </div>
          )}
          {entry.output && (
            <div className="ml-4">
              {entry.output.content}
            </div>
          )}
        </motion.div>
      ))}

      {/* Current Input Line */}
      <div className="flex items-center gap-2">
        <span className="text-green-400">aashutosh@portfolio:</span>
        <span className="text-blue-400">{currentDirectory}</span>
        <span className="text-white">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-white"
          autoFocus
        />
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="text-white"
        >
          _
        </motion.span>
      </div>
    </div>
  );
};