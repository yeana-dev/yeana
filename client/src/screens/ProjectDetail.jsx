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
    <div className="pt-16">
      <header className="bg-split-grey-top py-10">
        <div className="max-w-6xl mx-auto flex justify-between">
          <img src={project.browser} width="600" alt="" />
          <div className="flex flex-col gap-10 items-end justify-center">
            <h1 className="font-bold text-6xl tracking-tighter text-right">
              {project.title}
            </h1>
            <div className="flex flex-col gap-5 items-end italic">
              <h2 className="block">"{project.sub_header}"</h2>
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
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-9">
        <h3 className="text-3xl font-bold tracking-tighter bg-split-purple-bottom">
          🛠️ Built with
        </h3>
        <ul className="flex gap-7">
          {stacksIcon.map((icon) => (
            <li className="w-20 flex flex-col justify-center items-center gap-2">
              <div className="w-8">{icon.svg}</div>
              <span className="text-xs">{icon.name}</span>
            </li>
          ))}
        </ul>
        <p className="font-serif text-lg leading-10 text-center">
          {project.description}
        </p>
      </div>
    </div>
  );
}
