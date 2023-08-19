import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#About" },
  { name: "Skill", href: "#Skill" },
  { name: "Project", href: "#Project" },
  { name: "Contact", href: "#Contact" },
];

function Navbar({ dark, data }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-new sticky w-full top-0 z-20 bg-white dark:bg-base-100 dark:text-white transition-all duration-200 ${
        showShadow ? "shadow-md" : ""
      }`}
      id="Home">
      <header className="inset-x-0 top-0 z-50 dark:bg-base-100">
        <nav
          className="flex items-center justify-between py-4 max-w-custom mx-auto px-5"
          aria-label="Global">
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 dark:text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex lg:flex-1">
            <a href="#Home" className="">
              <span className="font-semibold md:font-bold text-lg md:text-xl">TochiDev</span>
            </a>
          </div>
          <div className="hidden md:flex md:gap-x-16 items-center lg:mr-16">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-newDarkYello dark:text-white dark:hover:text-newDarkYello">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={dark}
                checked={data ? "dark" : ""}
              />
              {/* sun icon */}
              <SunIcon className="text-newDarkYello swap-on w-6" />
              {/* moon icon */}
              <MoonIcon className="swap-off  w-6" />
            </label>
          </div>
        </nav>
        <Dialog
          as="div"
          className={`${dark ? "dark" : ""} font-Poppins md:hidden`}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-opacity-90  bg-white dark:bg-base-100 dark:bg-opacity-90" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full h-5/6 overflow-auto bg-white px-6 py-6 sm:max-w-full dark:bg-base-100">
            <div className="flex items-center justify-between">
              <a href="/" className="font-bold text-xl dark:text-white">
                TochiDev
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-newDarkYello dark:text-white">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
