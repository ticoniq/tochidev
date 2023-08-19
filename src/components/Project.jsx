/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LiaEnvelopeSolid } from "react-icons/lia";

import leaderboard from "../assets/images/leaderboard.jpg";
import bookstore from "../assets/images/bookstore.jpg";
import cryptoniq from "../assets/images/cryptoniq.jpg";
import weather from "../assets/images/weather.jpg";

function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Leaderboard",
      image: leaderboard,
      details:
        "Leaderboard is a way to track the performance of teams in a competitive environment. It is displayed as a list, with the teams ranked by their scores. Leaderboards provide a sense of accomplishment, and to create a sense of community. ",
      techStack: "HTML, CSS, JavaScript, Web-Pack",
      live: "https://leaderboard-git-ui-styling-ticoniq.vercel.app/",
      source: "https://github.com/ticoniq/Leaderboard",
    },
    {
      id: 2,
      title: "Bookstore",
      image: bookstore,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-ab8fwc2h0-ticoniq.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 3,
      title: "Cryptoniq",
      image: cryptoniq,
      details:
        "Cryptoniq is a web application that displays up-to-date market cap data for the top 10 cryptocurrencies. It provides an easy overview of the overall crypto market's performance.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://cryptoniq-git-test-ticoniq.vercel.app",
      source: "https://github.com/ticoniq/cryptoniq",
    },
    {
      id: 4,
      title: "Weather JS 4",
      image: weather,
      details:
        "weather web application made using HTML5, CSS3, and JavaScript. It's working process is simple. It takes the name of the City as input from the -user and create a HTTP request and send it to Openweathermap.org API to get back the deatils in the form of a JSON Response.",
      techStack: "HTML, CSS, JavaScript, Web-Pack",
      live: "https://weather-js-delta.vercel.app",
      source: "https://github.com/ticoniq/weatherJS",
    },
  ]);

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProjectIndex]);

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = projects[selectedProjectIndex];

  return (
    <div id="Project">
      <div className="max-w-custom mx-auto px-5 my-28">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <article className="mb-16 text-center text-newDarkGray dark:text-white">
            <h2 className="font-semibold text-4xl mb-3">Portfolio</h2>
            <p>Most recent work</p>
          </article>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, index) => (
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src={item.image} alt={item.title} />
                  <a href="#!" onClick={() => openModal(index)}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </a>
                </div>
                <h5
                  className="mb-4 text-lg font-bold cursor-pointer hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  onClick={() => openModal(index)}>
                  {item.title}
                </h5>
                {techStackToArray(item.techStack).map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold">
                    {tech}
                  </span>
                ))}

                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={item.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow">
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={item.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal Popup */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll">
          <div className="max-w-5xl p-6 bg-white dark:bg-neutral rounded-lg m-5">
            <div className="flex justify-end items-center">
              <XMarkIcon className="w-6 cursor-pointer" onClick={closeModal} />
            </div>
            <article className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <figure>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </figure>
              <aside>
                <h2 className="text-2xl font-semibold dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-newDarkGray dark:text-white">
                  {selectedProject.details}
                </p>
                <div className="my-5">
                  {techStackToArray(selectedProject.techStack).map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold">
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={selectedProject.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow">
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
              </aside>
            </article>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevProject}
                className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                Previous
              </button>
              <button
                onClick={nextProject}
                className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-custom mx-auto px-5 my-28">
        <div className="flex flex-col p-10 rounded-box place-items-center justify-between bg-newYellow dark:neutral md:flex-row">
          <h3 className="text-3xl text-center mb-5 font-semibold text-white md:mb-0">
            Interested working with me?
          </h3>
          <a
            href="mailto:okolietochi@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="p-3 px-6 text-newDark font-bold bg-white rounded-md flex gap-1 hover:bg-transparent hover:text-white hover:border-2 hover:border-white">
            <LiaEnvelopeSolid className="text-2xl" />
            Mail Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
