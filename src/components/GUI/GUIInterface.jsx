import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Palette,
  ArrowDown,
  TerminalIcon,
  ArrowUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GUIInterface = () => {
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const navigate = useNavigate();

  // Apply theme colors to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--foreground-color",
      foregroundColor
    );
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  }, [foregroundColor, backgroundColor]);

  const handleTerminalClick = () => {
    console.log("Navigate to terminal");
    navigate("/terminal");
  };

  const handleProjectsClick = () => {
    console.log("Navigate to projects");
    navigate("/projects");
  };

  const handleExperienceClick = () => {
    console.log("Navigate to Experience Component");
    navigate("/experience");
  };

  const swapColors = () => {
    const temp = foregroundColor;
    setForegroundColor(backgroundColor);
    setBackgroundColor(temp);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-between p-8 lg:p-12 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-start relative">
        {/* Theme Controls */}
        <div className="flex items-center gap-4 relative">
          <button
            onClick={swapColors}
            className="p-2 border transition-all duration-200 hover:opacity-70"
            style={{
              borderColor: foregroundColor,
              color: foregroundColor,
            }}
            title="Swap colors"
          >
            <Palette size={20} />
          </button>

          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 border transition-all duration-200 hover:opacity-70 relative"
            style={{
              borderColor: foregroundColor,
              color: foregroundColor,
            }}
            title="Customize colors"
          >
            ●
          </button>

          {/* Animated Arrow pointing to color picker */}
          {!showColorPicker && (
            <>
              <div
                className="absolute -bottom-12 left-4 animate-bounce"
                style={{ color: foregroundColor }}
              >
                <ArrowUp size={24} className="animate-pulse" />
              </div>

              {/* Arrow label */}
              <div
                className="absolute -bottom-20 left-0 text-sm whitespace-nowrap animate-pulse"
                style={{ color: foregroundColor, opacity: 0.7 }}
              >
                Try this!
              </div>
            </>
          )}
        </div>

        <button
          onClick={handleTerminalClick}
          className="text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-200 hover:opacity-70 active:scale-95 flex items-center gap-2"
          style={{ color: foregroundColor }}
          title="Open Terminal"
        >
          <TerminalIcon size={28} />
        </button>
      </header>

      {/* Color Picker Panel */}
      {showColorPicker && (
        <div
          className="absolute top-20 left-8 lg:left-12 p-6 border shadow-lg z-10 animate-in fade-in duration-200"
          style={{
            backgroundColor: backgroundColor,
            borderColor: foregroundColor,
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium min-w-[80px]">Text:</label>
              <input
                type="color"
                value={foregroundColor}
                onChange={(e) => setForegroundColor(e.target.value)}
                className="w-8 h-8 border-0 cursor-pointer rounded"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium min-w-[80px]">
                Background:
              </label>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-8 h-8 border-0 cursor-pointer rounded"
              />
            </div>
            <button
              onClick={() => {
                setForegroundColor("#000000");
                setBackgroundColor("#ffffff");
              }}
              className="text-xs py-1 px-2 border transition-all duration-200 hover:opacity-70"
              style={{
                borderColor: foregroundColor,
                color: foregroundColor,
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-6"
            style={{ color: foregroundColor }}
          >
            Aashutosh Dahal
          </h1>

          <div className="max-w-3xl mx-auto mb-10">
            <p
              className="text-lg lg:text-xl xl:text-2xl font-light leading-relaxed"
              style={{ color: foregroundColor, opacity: 0.8 }}
            >
              Just another CS geek who likes working on projects. Minimalist UI
              because I am colorblind and tend to mess up colors while designing
              anything from scratch. I like working on backend APIs and systems.
            </p>
          </div>

          <button
            onClick={handleProjectsClick}
            className="px-8 py-3 text-lg lg:text-xl font-medium border-2 transition-all duration-200 hover:opacity-70 active:scale-95"
            style={{
              borderColor: foregroundColor,
              color: foregroundColor,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = foregroundColor;
              e.target.style.color = backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = foregroundColor;
            }}
          >
            View Projects
          </button>
          <button
            onClick={handleExperienceClick}
            className="px-8 py-3 ml-10 text-lg lg:text-xl font-medium border-2 transition-all duration-200 hover:opacity-70 active:scale-95"
            style={{
              borderColor: foregroundColor,
              color: foregroundColor,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = foregroundColor;
              e.target.style.color = backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = foregroundColor;
            }}
          >
            View Experience
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/AashutoshDL"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70"
            style={{ color: foregroundColor }}
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/aashutosh-dahal/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70"
            style={{ color: foregroundColor }}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aashudahal11@gmail.com"
            className="transition-opacity duration-200 hover:opacity-70"
            style={{ color: foregroundColor }}
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm opacity-60" style={{ color: foregroundColor }}>
          © 2025 Aashutosh Dahal
        </div>
      </footer>
    </div>
  );
};

export default GUIInterface;
