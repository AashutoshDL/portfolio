import React, { useState, useEffect } from "react";

// Typewriter component for terminal-style text animation
export const TypewriterText = ({ text, speed = 50, onComplete, link }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Conditionally render a link if provided
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-blue-400"
      >
        {displayedText}
      </a>
    );
  }

  return <span>{displayedText}</span>;
};

// Component for animating multi-line text with typewriter effect
export const TypewriterMultiline = ({
  children,
  speed = 30,
  lineDelay = 100,
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);

  // Convert children to array of lines if it's a string
  const lines = React.Children.toArray(children);

  const handleLineComplete = () => {
    setCompletedLines((prev) => [...prev, currentLine]);
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, lineDelay);
    }
  };

  return (
    <div>
      {lines.map((line, index) => (
        <div key={index}>
          {index < currentLine ? (
            line
          ) : index === currentLine ? (
            <TypewriterText
              text={
                typeof line === "string" ? line : line.props?.children || ""
              }
              speed={speed}
              onComplete={handleLineComplete}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
