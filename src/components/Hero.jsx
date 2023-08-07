/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import tochi from "../assets/images/tochi.png";
import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";
import { FaAngellist } from "react-icons/fa";
import { LiaEnvelopeSolid, LiaDownloadSolid } from "react-icons/lia";

function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-5 relative isolate py-32"
      id="hero">
      {/* Flex-container */}
      <div className="flex flex-col space-y-10 items-center mx-auto md:flex-row md:space-y-0">
        {/* Left item */}
        <div className=" flex flex-col md:w-1/2 space-y-8">
          <p className="text-lg text-center text-newGray font-semibold md:text-left dark:text-white">
            Hey!
          </p>
          <h1 className="text-4xl font-bold text-center md:text-4xl md:text-left text-newDarkGray dark:text-white">
            I’m <span className="text-newYellow">Okolie Tochi</span>. <br /> a
            Full-Stack Developer.
          </h1>
          <p className="max-w-sm mx-auto text-center text-newDarkGray md:text-left md:mx-0 dark:text-white">
            UX Designer based in Jakarta, Indonesia. I am designing with a
            minimal and beautiful design in mind.
          </p>
          <div className="flex justify-center items-center gap-5 text-newGray dark:text-white md:justify-start">
            <p className="text-xl">Follow Me</p>
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
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a
              href=""
              className="p-3 px-6 text-white font-bold bg-newYellow rounded-md flex gap-1 hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white">
              <LiaEnvelopeSolid className="text-2xl" />
              Mail Me
            </a>
            <a
              href=""
              className="p-3 px-4 text-newDarkGray font-bold bg-transparent border-2 border-newYellow rounded-md flex gap-1 dark:text-white hover:bg-newYellow hover:text-white">
              <LiaDownloadSolid className="text-2xl" />
              Download CV
            </a>
          </div>
        </div>
        <div className="mx-auto md:w-1/2">
          <div className="relative z-0 border border-newGray rounded-full w-64 h-64 md:h-96 md:w-96 mx-auto">
            {/* <img src={point} className="absolute top-[15.5rem]" alt={tochi} /> */}
            <div className="absolute -left-5 -top-[4rem] w-64 h-64 bg-newYellow rounded-full my-12 mx-auto overflow-hidden md:h-96 md:w-96 hover:bg-newbBlue">
              <img src={tochi} className="h-full object-cover" alt={tochi} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
