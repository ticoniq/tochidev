import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/layouts/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "dark";
  });

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "dark" : "light");
    const localTheme = localStorage.getItem("darkMode");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} font-Poppins`}>
      {children}
      <SpeedInsights />
      <Analytics />
      <Navbar dark={handleDarkMode} data={darkMode} />
      <main>
        <Hero />
        <About /> 
        <Skill /> 
        <Project />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
