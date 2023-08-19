import {useEffect, useState} from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40okolietochi&api_key=viszahx6nnqt9oziufo7qgdp8ogrhn1lsu73nzoz');
        setBlogPosts(response.data.items);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
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
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-16 text-center text-newDarkGray dark:text-white">
            <h2 className="font-semibold text-4xl mb-3">Latest Blog Article</h2>
            <p>Blog post</p>
          </motion.article>
          <div className="grid gap-12 grid-cols-1">
          {blogPosts.map((item, index) => (
              <article className="grid gap-0 md:grid-cols-2 place-content-center md:gap-12" key={index}>
                <motion.figure
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="relative mb-6 max-h-72 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src={extractImgSrc(item.content)} alt="try" className="" />
                  <a href={item.link}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </a>
                </motion.figure>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="mb-4 text-2xl font-bold cursor-pointer hover:text-newYellow dark:text-white dark:hover:text-newYellow">
                      {item.title}
                  </a>
                  <p className="text-newDarkGray dark:text-white whitespace-pre-line">
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
                </motion.div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Blog;