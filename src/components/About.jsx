import pic from '../assets/images/pic.png';
import { LiaDownloadSolid } from "react-icons/lia";

function About() {
  return (
    <div id="About" className="bg-gray-50 py-28 dark:bg-neutral">
      <div className="max-w-custom mx-auto px-5">
        <article className="mb-16 text-center text-newDarkGray dark:text-white">
          <h2 className="font-semibold text-4xl mb-3">About Me</h2>
          <p>My introduction</p>
        </article>
        <div className="card grid grid-cols-1 space-y-10 md:gap-12 md:space-y-0 md:grid-cols-2">
          <figure className="">
            <img src={pic} alt="about-pics" className="h-80 " />
          </figure>
          <div className="card-body p-0 dark:text-white">
            <p>
              Hello, I’m a Full-Stack Developer! I can help you build a product,
              feature or website. Look through some of my work and experience!
              If you like what you see and have a project you need coded, don’t
              hesitate to contact me.
              <br />
              <br />
              Email me <br />
              <span className="font-semibold">tochi@tochidev.com</span>
              <div>
              <a
                href="https://drive.google.com/file/d/1Pf6WkcfjZY4F-ash5zu2v4X1rJuZITvG/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className="p-3 px-6 w-36 my-7 text-white font-bold bg-newYellow rounded-md flex gap-1 justify-center hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white">
                <LiaDownloadSolid className="text-2xl" />
                Resume
              </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
