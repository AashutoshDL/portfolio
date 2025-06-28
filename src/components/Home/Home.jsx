import React, { useState } from "react";
import Hero from "../Hero/Hero";
import GUIInterface from "../GUI/GUIInterface";

const Home = () => {
  const [selectedInterface, setSelectedInterface] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleInterfaceSelect = (interfaceType) => {
    setSelectedInterface(interfaceType);
    setShowOverlay(false);
  };

  const BootingOverlay = () => (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div className="mt-12 space-y-6 animate-fade-in">
          <div className="mt-3 text-5xl font-mono animate-fade-in">
            WELCOME USER
          </div>
          <div className="text-green-400 text-xl font-mono mb-8">
            SELECT INTERFACE
          </div>

          <div className="flex space-x-8 justify-center">
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
    <div className="flex flex-col min-h-screen text-white">
      {showOverlay && <BootingOverlay />}
      {selectedInterface === "terminal" && (
        <Hero selectedInterface="terminal" />
      )}
      {selectedInterface === "gui" && <GUIInterface />}
    </div>
  );
};

export default Home;
