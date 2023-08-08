import { Tab, initTE } from "tw-elements";
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
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { PiDevToLogo } from "react-icons/pi";
import { SiJest, SiRedux, SiMysql, SiVercel } from "react-icons/si";

function About() {
  initTE({ Tab });

  return (
    <div id="About" className="bg-gray-50 py-20 dark:bg-neutral">
      <div className="max-w-custom mx-auto px-5">
        <div className="card space-y-10 md:flex-row md:flex md:gap-5 md:space-y-0">
          <div className="card-body p-0 md:w-1/2 dark:text-white">
            <h2 className="card-title text-3xl text-newDarkGray dark:text-white">
              About Me
            </h2>
            <p>
              Hello I’m a software developer! I can help you build a product ,
              feature or website. Look through some of my work and experience!
              If you like what you see and have a project you need coded, don’t
              hesitate to contact me.
              <br />
              <br />
              Email me <br />
              <span className="font-semibold">tochi@tochidev.com</span>
            </p>
          </div>
          <div
            id="accordionFlushExample"
            className="md:w-1/2 text-newDark dark:text-white">
            
            <ul
              className="mb-5 flex list-none gap-2 flex-row flex-wrap border-b-0 pl-0"
              role="tablist"
              data-te-nav-ref>
              <li role="presentation">
                <a
                  href="#tabs-home"
                  className="my-2 block rounded-lg border-2 border-newDark px-4 py-3 text-xs font-medium uppercase leading-tight focus:border-transparent data-[te-nav-active]:border-newYellow data-[te-nav-active]:text-newYellow dark:data-[te-nav-active]:border-newYellow dark:border-white"
                  data-te-toggle="pill"
                  data-te-target="#tabs-home"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true">
                  FrontEnd
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#tabs-profile"
                  className="my-2 block rounded-lg border-2 border-newDark px-4 py-3 text-xs font-medium uppercase leading-tight focus:border-transparent data-[te-nav-active]:border-newYellow data-[te-nav-active]:text-newYellow dark:data-[te-nav-active]:border-newYellow dark:border-white"
                  data-te-toggle="pill"
                  data-te-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-profile"
                  aria-selected="false">
                  BackEnd
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#tabs-messages"
                  className="my-2 block rounded-lg border-2 border-newDark px-4 py-3 text-xs font-medium uppercase leading-tight focus:border-transparent data-[te-nav-active]:border-newYellow data-[te-nav-active]:text-newYellow dark:data-[te-nav-active]:border-newYellow dark:border-white"
                  data-te-toggle="pill"
                  data-te-target="#tabs-messages"
                  role="tab"
                  aria-controls="tabs-messages"
                  aria-selected="false">
                  Skills
                </a>
              </li>
            </ul>

            <div className="mb-6">
              <div
                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab"
                data-te-tab-active>
                <div className="flex flex-wrap gap-5 py-4 text-center">
                  <div className="inline-block rounded-lg bg-newYellow p-3 text-white">
                    <TbBrandJavascript className="text-5xl" />
                    <p className="font-bold">JS</p>
                  </div>
                  <div className="inline-block rounded-lg bg-newbBlue p-3 space-y-2 text-white">
                    <FaReact className="text-6xl" />
                    <p className="font-bold text-xs">REACTJS</p>
                  </div>
                  <div className="inline-block rounded-lg bg-blue-500 p-3 space-y-2 text-white">
                    <SiRedux className="text-6xl" />
                    <p className="font-bold text-xs">Redux</p>
                  </div>
                  <div className="inline-block rounded-lg bg-blue-950 p-3 space-y-2 text-white">
                    <BiLogoTailwindCss className="text-5xl" />
                    <p className="font-bold text-xs">TAILWIND</p>
                  </div>
                  <div className="inline-block rounded-md bg-orange-500 p-3 text-white">
                    <FaHtml5 className="text-5xl" />
                    <p className="font-bold">HTML5</p>
                  </div>
                  <div className="inline-block rounded-md bg-blue-600 p-3 text-white">
                    <FaCss3 className="text-5xl" />
                    <p className="font-bold">CSS3</p>
                  </div>
                  <div className="inline-block rounded-lg bg-blue-700 p-3 space-y-2 text-white text-center">
                    <BsBootstrap className="text-5xl" />
                    <p className="font-bold text-xs">BOOTSTRAP</p>
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab">
                <div className="flex flex-wrap gap-5 py-4 text-center">
                  <div className="inline-block rounded-lg bg-red-500 p-3 space-y-2 text-white text-center">
                    <SiJest className="text-5xl" />
                    <p className="font-bold text-xs">JEST</p>
                  </div>
                  <div className="inline-block rounded-md bg-blue-400 p-3 text-white">
                    <FaPhp className="text-5xl" />
                    <p className="font-bold">PHP</p>
                  </div>
                  <div className="inline-block rounded-lg bg-red-500 p-3 space-y-2 text-white text-center">
                    <FaLaravel className="text-5xl" />
                    <p className="font-bold text-xs">LARAVEL</p>
                  </div>
                  <div className="inline-block rounded-lg bg-orange-500 p-3 space-y-2 text-white text-center">
                    <SiMysql className="text-5xl" />
                    <p className="font-bold text-xs">MySQL</p>
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-messages"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab">
                <div className="flex flex-wrap gap-5 py-4 text-center">
                  <div className="inline-block rounded-lg bg-red-500 p-3 space-y-2 text-white text-center">
                    <FaGithub className="text-5xl" />
                    <p className="font-bold text-xs">GIT</p>
                  </div>
                  <div className="inline-block rounded-md bg-blue-400 p-3 text-white">
                    <FaGithubAlt className="text-5xl" />
                    <p className="font-bold text-xs">GITHUB</p>
                  </div>
                  <div className="inline-block rounded-lg bg-red-500 p-3 space-y-2 text-white text-center">
                    <SiVercel className="text-5xl" />
                    <p className="font-bold text-xs">VERCEL</p>
                  </div>
                  <div className="inline-block rounded-lg bg-fuchsia-500 p-3 space-y-2 text-white text-center">
                    <PiDevToLogo className="text-5xl" />
                    <p className="font-bold text-xs">DevTools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
