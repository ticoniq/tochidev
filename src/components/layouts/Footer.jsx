import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";
import { FaAngellist } from "react-icons/fa";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-8 justify-between items-center dark:text-white md:flex-row">
        <div>
          <span className="text-xl">Let's Connect</span>
        </div>
        <div className="flex justify-center items-center gap-5 text-newGray md:justify-start dark:text-white">
          <a
            href="https://www.linkedin.com/in/ticoniq/"
            rel="noreferrer"
            target="_blank"
            className="text-2xl hover:text-newDarkYello">
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/ticoniq"
            rel="noreferrer"
            target="_blank"
            className="text-2xl hover:text-newDarkYello">
            <FiGithub />
          </a>
          <a
            href="https://tochidev.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-newDarkYello">
            <FiGlobe />
          </a>
          <a
            href="https://wellfound.com/u/tochi-okolie"
            rel="noreferrer"
            target="_blank"
            className="text-2xl hover:text-newDarkYello">
            <FaAngellist />
          </a>
        </div>
        <div>
          <button
            className="flex gap-3 items-center justify-center rounded-md p-2.5 text-gray-700 ml-4 dark:text-white"
            onClick={handleScrollToTop}>
            <span className="sr-only">Back to Top</span>
            Back to Top
            <ArrowUpIcon className="w-5" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
