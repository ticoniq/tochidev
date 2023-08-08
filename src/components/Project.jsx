import React, { useState, useEffect } from "react";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import leaderboard from "../assets/images/leaderboard.jpg";
import bookstore from "../assets/images/bookstore.jpg";
import cryptoniq from "../assets/images/cryptoniq.jpg";

function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Leaderboard",
      image: leaderboard,
      details:
        "Leader board is a way to track the performance of users or teams in a competitive environment. It is typically displayed as a table or list, with the users or teams ranked by their scores. Leader boards can be used to motivate users to improve their performance, to provide a sense of accomplishment, and to create a sense of community. ",
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
      live: "https://bookstore-ab8fwc2h0-ticoniq.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 3,
      title: "Cryptoniq",
      image: cryptoniq,
      details:
        "Cryptoniq is a web application that displays up-to-date market cap data for the top 10 cryptocurrencies. It provides an easy overview of the overall crypto market's performance.",
      live: "https://cryptoniq-git-test-ticoniq.vercel.app",
      source: "https://github.com/ticoniq/cryptoniq",
    },
    {
      id: 4,
      title: "Project 4",
      image: leaderboard,
      details:
        "Lorem, ipsum dolor sit amet consectetur       adipisicing elit. Natus, molestiae. Deleniti cum nam accusamus dolor laudantium. Incidunt rerum suscipit facere in porro fugiat alias adipisci quam, autem natus, eaque ad.",
      live: "https://bookstore-ab8fwc2h0-ticoniq.vercel.app",
      source: "/",
    },
  ]);

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
      <div className="max-w-custom mx-auto px-5 my-20">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <h2 className="w-60 mb-10 text-3xl font-bold">
            Look at my recent projects
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((item, index) => (
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src={item.image} alt={item.title} />
                  <a href="#!" onClick={() => openModal(index)}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </a>
                </div>
                <h5 className="mb-4 text-lg font-bold">{item.title}</h5>
                <h5 className="mb-4 text-lg font-bold">{item.techStack}</h5>

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
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-75 p-5 overflow-auto">
          <div className="max-w-xl p-6 bg-white dark:bg-neutral rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                {selectedProject.title}
              </h2>
              <XMarkIcon className="w-8 cursor-pointer" onClick={closeModal} />
            </div>
            <div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-4 text-newDarkGray dark:text-white">
              {selectedProject.details}
            </p>
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

            <div className="flex justify-between mt-6">
              <button
                onClick={prevProject}
                className="text-newDarkGray hover:text-newYellow font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                Previous
              </button>
              <button
                onClick={nextProject}
                className="text-newDarkGray hover:text-newYellow font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
