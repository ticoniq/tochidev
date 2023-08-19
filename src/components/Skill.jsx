/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaGithubAlt,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { PiDevToLogo } from "react-icons/pi";
import { 
  SiJest, 
  SiRedux, 
  SiMysql, 
  SiVercel, 
  SiDaisyui, 
  SiWebpack, 
  SiNodedotjs, 
  SiRuby, 
  // SiRubyonrails, 
  // SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

function Skill() {
  const [activeTab, setActiveTab] = useState('all');
  const [frontendFrameworks, setFrontendFrameworks] = useState([]);
  const [frontendLibraries, setFrontendLibraries] = useState([]);
  const [frontendTools, setFrontendTools] = useState([]);
  const [backendLanguages, setBackendLanguages] = useState([]);
  const [backendFrameworks, setBackendFrameworks] = useState([]);
  const [backendDatabases, setBackendDatabases] = useState([]);

  const technologyStack = {
    frontend: {
      frameworks: [
        { name: 'JavaScript', icon: <TbBrandJavascript />, color: 'bg-newYellow' },
        { name: 'React', icon: <FaReact />, color: 'bg-blue-300' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
        { name: 'CSS3', icon: <FaCss3 />, color: 'bg-blue-600' },
      ],
      libraries: [
        { name: 'Redux', icon: <SiRedux />, color: 'bg-purple-500' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-teal-500' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: 'bg-purple-900' },
      ],
      tools: [
        { name: 'Webpack', icon: <SiWebpack />, color: 'bg-blue-500' },
        { name: 'DaisyUI', icon: <SiDaisyui />, color: 'bg-teal-600' },
      ],
    },
    backend: {
      languages: [
        { name: 'Node.js', icon: <SiNodedotjs /> , color: 'bg-purple-500' },
        { name: 'PHP', icon: <FaPhp /> , color: 'bg-blue-600' },
        { name: 'Ruby', icon: <SiRuby /> , color: 'bg-red-500' },
      ],
      frameworks: [
        { name: 'Laravel', icon: <FaLaravel /> , color: 'bg-red-400' },
        // { name: 'Ruby on Rails', icon: <SiRubyonrails /> },
      ],
      databases: [
        // { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> , color: 'bg-orange-400' },
        { name: 'PostgreSQL', icon: <SiPostgresql /> , color: 'bg-blue-900' },
      ],
    },
    tools: [
      { name: 'Git', icon: <FaGithub />, color: 'bg-gray-500' },
      { name: 'GitHub', icon: <FaGithubAlt />, color: 'bg-gray-600' },
      { name: 'vercel', icon: <SiVercel />, color: 'bg-gray-950' },
      { name: 'DevTools', icon: <PiDevToLogo />, color: 'bg-blue-500' },
      { name: 'Jest', icon: <SiJest />, color: 'bg-red-600' },
    ],
  };

  useEffect(() => {
    setFrontendFrameworks(technologyStack.frontend.frameworks);
    setFrontendLibraries(technologyStack.frontend.libraries);
    setFrontendTools(technologyStack.frontend.tools);
    setBackendLanguages(technologyStack.backend.languages);
    setBackendFrameworks(technologyStack.backend.frameworks);
    setBackendDatabases(technologyStack.backend.databases);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section id="Skill" className="py-28">
        <div className="max-w-custom mx-auto px-5">
          <article className="mb-16 text-center text-newDarkGray dark:text-white">
            <h2 className="font-semibold text-4xl mb-3">Skills</h2>
            <p>My technical level</p>
          </article>
          <div className="flex flex- justify-center items-start gap-0 mb-10 md:gap-3">
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white ${
                activeTab === 'all' ? 'bg-newGreen text-white hover:bg-newGreen' : 'hover:text-white hover:bg-newYellow'
              }`}
              onClick={() => handleTabChange('all')}
            >
              All
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white hover:text-white ${
                activeTab === 'frontend' ? 'bg-newGreen text-white hover:bg-newGreen' : 'hover:text-white hover:bg-newYellow'
              }`}
              onClick={() => handleTabChange('frontend')}
            >
              Frontend
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white hover:text-white ${
                activeTab === 'backend' ? 'bg-newGreen text-white hover:bg-newGreen' : 'hover:text-white hover:bg-newYellow'
              }`}
              onClick={() => handleTabChange('backend')}
            >
              Backend
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold border-0 rounded-md dark:text-white hover:text-white hover:bg-newYellow ${
                activeTab === 'tools' ? 'bg-newGreen text-white hover:bg-newGreen' : ''
              }`}
              onClick={() => handleTabChange('tools')}
            >
              Tools
            </button>
          </div>
          <article className="grid grid-cols-1 gap-12">
          {activeTab === 'all' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {frontendFrameworks.map((framework, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${framework.color}`}>
                      <span className="text-4xl md:text-6xl">{framework.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{framework.name}</p>
                    </li>
                  ))}
                  {frontendLibraries.map((library, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${library.color}`}>
                      <span className="text-4xl md:text-6xl">{library.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{library.name}</p>
                    </li>
                  ))}
                  {frontendTools.map((tool, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{tool.name}</p>
                    </li>
                  ))}
                  {backendLanguages.map((language, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${language.color}`}>
                      <span className="text-4xl md:text-6xl">{language.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{language.name}</p>
                    </li>
                  ))}
                  {backendFrameworks.map((framework, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${framework.color}`}>
                      <span className="text-4xl md:text-6xl">{framework.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{framework.name}</p>
                    </li>
                  ))}
                  {backendDatabases.map((database, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${database.color}`}>
                      <span className="text-4xl md:text-6xl">{database.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{database.name}</p>
                    </li>
                  ))}
                  {technologyStack.tools.map((tool, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm">{tool.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'frontend' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {frontendFrameworks.map((framework, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${framework.color}`}>
                      <span className="text-4xl md:text-6xl">{framework.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{framework.name}</p>
                    </li>
                  ))}
                  {frontendLibraries.map((library, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${library.color}`}>
                      <span className="text-4xl md:text-6xl">{library.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{library.name}</p>
                    </li>
                  ))}
                  {frontendTools.map((tool, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{tool.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'backend' && (
            <div className="grid flex-grow place-items-center py-10">
              <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                {backendLanguages.map((language, index) => (
                  <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${language.color}`}>
                    <span className="text-4xl md:text-6xl">{language.icon}</span>
                    <p className="font-semibold text-sm md:text-lg">{language.name}</p>
                  </li>
                ))}
                {backendFrameworks.map((framework, index) => (
                  <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${framework.color}`}>
                    <span className="text-4xl md:text-6xl">{framework.icon}</span>
                    <p className="font-semibold text-sm md:text-lg">{framework.name}</p>
                  </li>
                ))}
                {backendDatabases.map((database, index) => (
                  <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${database.color}`}>
                    <span className="text-4xl md:text-6xl">{database.icon}</span>
                    <p className="font-semibold text-sm md:text-lg">{database.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            )}
            {activeTab === 'tools' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {technologyStack.tools.map((tool, index) => (
                    <li key={index} className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm">{tool.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>
      <div className="max-w-custom mx-auto">
        <hr className="bg-gray-600 dark:bg-gray-300 h-0.5" />
      </div>
    </>
  );
}

export default Skill;
