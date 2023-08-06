import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'dark';
  });

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
    const localTheme = localStorage.getItem("darkMode");
    document.querySelector('html').setAttribute("data-theme", localTheme);
  }, [darkMode]);
  
  return (
    <div className={`${darkMode ? 'dark' : ''} font-Poppins`}>
      <Navbar dark={handleDarkMode} data={darkMode} />
      <Hero />
      <About />
      <Project />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
