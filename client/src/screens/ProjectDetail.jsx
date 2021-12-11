import { useParams } from "react-router-dom";
import { projects } from "../services/projects";
import { stacks } from "../services/stacks";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  let stacksIcon = [];
  project.used_stacks.forEach((stack) => {
    stacks.forEach((icon) => {
      if (icon.name === stack) {
        stacksIcon.push(icon);
      }
    });
  });
  function openSite() {
    window.open(project.siteURL);
  }
  function openGithub() {
    window.open(project.githubURL);
  }

  return (
    <div className="py-16">
      <header className="bg-split-grey-top py-10 px-14 md:px-7">
        <div className="max-w-6xl mx-auto flex md:justify-between flex-col md:flex-row">
          <img
            src={project.browser}
            className="ml-4 md:ml-0"
            width="600"
            alt=""
          />
          <div className="flex flex-col gap-10 items-center md:items-end justify-center">
            <h1 className="font-bold text-6xl tracking-tighter text-center md:text-right">
              {project.title}
            </h1>
            <div className="flex flex-col gap-5 items-center md:items-end italic">
              <h2 className="block text-center md:text-right">
                "{project.sub_header}"
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={() => openSite()}
                  className="bg-purple-100 py-2 px-5 rounded-xl font-bold uppercase text-sm transition hover:bg-purple-200 hover:ease-in-out duration-250"
                >
                  Deployed Site
                </button>
                <button
                  onClick={() => openGithub()}
                  className="bg-purple-100 py-2 px-5 rounded-xl font-bold uppercase text-sm transition hover:bg-purple-200 hover:ease-in-out duration-250"
                >
                  Github Repo
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-9">
        <h3 className="text-3xl font-bold tracking-tighter bg-split-purple-bottom">
          🛠️ Built with
        </h3>
        <ul className="flex gap-7 flex-wrap justify-center">
          {stacksIcon.map((icon) => (
            <li className="w-20 flex flex-col justify-center items-center gap-2">
              <div className="w-8">{icon.svg}</div>
              <span className="text-xs">{icon.name}</span>
            </li>
          ))}
          {slug === "aaaj" && (
            <li className="w-20 flex flex-col justify-center items-center gap-2">
              <div className="w-8">
                <img
                  src="https://spectrum.imgix.net/communities/3dd95226-4475-4f9a-8324-a4ac8ffdc4d5/B1Yr0X-oG-sanity_logo.png?w=256&h=256&dpr=2&auto=compress&expires=1613174400000&ixlib=js-1.3.0&s=032fe12fded6453d07541777482b0c73"
                  alt=""
                />
              </div>
              <span className="text-xs">Sanity.io CMS</span>
            </li>
          )}
        </ul>
        <p className="font-serif leading-10 text-center px-8">
          {project.description}
        </p>
      </div>
    </div>
  );
}
