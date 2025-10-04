import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Terminal from "./components/Terminal/Terminal";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/terminal" element={<Terminal />} />
    </Routes>
  );
}

export default App;
