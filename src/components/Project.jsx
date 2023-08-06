import { useState } from 'react';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images//project-2.jpg';
import { EyeIcon, CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function Project() {
  const [project, setProject] = useState([
    {
      id: 1,
      title: 'Project 1',
      image: project1,
      details: 'Lorem, ipsum dolor sit amet consectetur       adipisicing elit. Natus, molestiae. Deleniti cum nam accusamus dolor laudantium. Incidunt rerum suscipit facere in porro fugiat alias adipisci quam, autem natus, eaque ad.',
      live: '/',
      source: '/',
    },
    {
      id: 2,
      title: 'Project 2',
      image: project2,
      details: 'Lorem, ipsum dolor sit amet consectetur       adipisicing elit. Natus, molestiae. Deleniti cum nam accusamus dolor laudantium. Incidunt rerum suscipit facere in porro fugiat alias adipisci quam, autem natus, eaque ad.',
      live: '/',
      source: '/',
    },
    {
      id: 3,
      title: 'Project 3',
      image: project2,
      details: 'Lorem, ipsum dolor sit amet consectetur       adipisicing elit. Natus, molestiae. Deleniti cum nam accusamus dolor laudantium. Incidunt rerum suscipit facere in porro fugiat alias adipisci quam, autem natus, eaque ad.',
      live: '/',
      source: '/',
    },
    {
      id: 4,
      title: 'Project 4',
      image: project1,
      live: '/',
      details: 'Lorem, ipsum dolor sit amet consectetur       adipisicing elit. Natus, molestiae. Deleniti cum nam accusamus dolor laudantium. Incidunt rerum suscipit facere in porro fugiat alias adipisci quam, autem natus, eaque ad.',
      source: '/',
    }
  ]);
  
  return (
    <div id="Project">
      <div className="max-w-7xl mx-auto px-5 my-20">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <h2 className="w-60 mb-10 text-3xl font-bold">
            Look at my recent projects
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {project.map((item) => (
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src={item.image} alt={item.title} />
                  <a href="#!">
                    <div
                      className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </a>
                </div>
                <h5 className="mb-4 text-lg font-bold">{item.title}</h5>
                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a href={item.source}
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a href={item.source}
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Project