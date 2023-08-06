/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Collapse, Dropdown, initTE } from "tw-elements";

function Navbar({ dark, data }) {
  initTE({ Collapse, Dropdown });

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#About" },
    { name: "Project", href: "#Project" },
    { name: "Contact", href: "#Contact" },
  ];

  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-new fixed w-full top-0 z-20 bg-white dark:bg-base-100 dark:text-white transition-all duration-200 ${showShadow ? 'shadow-md' : ''}`} id="Home">
      <nav className="py-4 max-w-7xl mx-auto px-5" data-te-navbar-ref aria-label="Global">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />
              {/* sun icon */}
              <XMarkIcon className="swap-on w-8" />
              {/* moon icon */}
              <Bars3Icon className="swap-off  w-8" />
            </label>
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item>
            <a className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#">hello</a>
            <ul
              className="flex flex-col gap-10 pl-0 lg:flex-row"
              data-te-navbar-nav-ref>
              {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-newDarkYello dark:text-white dark:hover:text-newDarkYello">
                {item.name}
              </a>
            ))}
            </ul>
          </div>
          <div className="relative flex items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={dark}
                checked={data ? "dark" : ""}
              />
              {/* sun icon */}
              <SunIcon className="text-newDarkYello swap-on w-8" />
              {/* moon icon */}
              <MoonIcon className="swap-off  w-8" />
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
