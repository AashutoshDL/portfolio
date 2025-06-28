import React from "react";

export const TerminalHeader = () => {
  return (
    <div className="border-b border-gray-800 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-400 text-sm">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};