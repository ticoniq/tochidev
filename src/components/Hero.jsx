/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import tochi from "../assets/images/tochi.png";
import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";
import { FaAngellist } from 'react-icons/fa';

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 relative isolate">
      {/* Flex-container */}
      <div className="flex flex-col items-center mx-auto my-28 md:flex-row">
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
            <p className="text-xl mr-5">Follow Me</p>
            <a href="/" className="text-2xl hover:text-newDarkYello">
              <FiLinkedin />
            </a>
            <a href="/" className="text-2xl hover:text-newDarkYello">
              <FiGithub />
            </a>
            <a href="/" className="text-2xl hover:text-newDarkYello">
              <FiGlobe />
            </a>
            <a href="/" className="text-2xl hover:text-newDarkYello">
              <FaAngellist />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a
              href=""
              className="p-3 px-6 text-white font-bold bg-newYellow rounded-md flex gap-1 hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white">
              <EnvelopeIcon className="w-5" />
              Mail Me
            </a>
            <a
              href=""
              className="p-3 px-6 text-newDarkGray font-bold bg-transparent border-2 border-newYellow rounded-md flex gap-1 dark:text-white hover:bg-newYellow hover:text-white">
              <ArrowDownTrayIcon className="w-5" />
              Download CV
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 bg-newYellow rounded-full my-12 mx-auto overflow-hidden md:h-96 md:w-96 hover:bg-newbBlue">
          <img src={tochi} className="h-full object-cover" alt={tochi} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
