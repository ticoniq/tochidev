import {useEffect, useState} from 'react';
import axios from 'axios';
import leaderboard from "../assets/images/leaderboard.jpg";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
        
    };
    const getAPIData = async () => {
      try {
        const response = await axios('https://v1.nocodeapi.com/tochino/medium/yYCdTcEUlxhZyCOC', requestOptions);
        const data = response.data;
        setBlogPosts(data);
    
      } catch (error) {
        console.log(error);
      }
    }
    getAPIData();
  }, []);

  const extractImgSrc = (htmlContent) => {
    const imgRegex = /<img.*?src="(.*?)".*?>/g;
    const match = imgRegex.exec(htmlContent);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };
  
  return (
    <section id="Project">
      <div className="max-w-custom mx-auto px-5 my-28">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <article className="mb-16 text-center text-newDarkGray dark:text-white">
            <h2 className="font-semibold text-4xl mb-3">Latest Blog Article</h2>
            <p>Blog post</p>
          </article>
          <div className="grid gap-12 grid-cols-1">
          {blogPosts.map((item, index) => (
              <article className="grid gap-0 md:grid-cols-2 place-content-center md:gap-12" key={index}>
                <figure className="relative mb-6 max-h-72 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src={extractImgSrc(item.content)} alt="try" className="" />
                  <a href="#!">
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </a>
                </figure>
                <div>
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="mb-4 text-2xl font-bold cursor-pointer hover:text-newYellow dark:text-white dark:hover:text-newYellow">
                      {item.title}
                  </a>
                  <p className="text-newDarkGray dark:text-white mt-3 whitespace-pre-line">
                    {item.content.replace(/<\/?p[^>]*>/g, '').split(' ').slice(0, 50).join(' ')}
                  </p>
                  <div className="mt-4 flex justify-start text-sm">
                    <a
                      href={item.link}
                      rel="noreferrer"
                      target="_blank"
                      className="p-3 px-6 text-white font-bold bg-newYellow rounded-md flex gap-1 hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white">
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Blog;