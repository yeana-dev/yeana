import { projects } from "../services/projects";
import { Link } from "react-router-dom";
import "./style/Projects.css";

export default function Projects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="font-sans font-bold text-4xl uppercase tracking-tighter text-center bg-split-purple-bottom">
        🖥 Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-16 my-20 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link to={`/${project.slug}`}>
            <div className="container relative">
              <img src={project.mainPreview} alt="" />
              <div className="overlay absolute inset-0 transition duration-300 ease opacity-0 bg-white w-full h-full rounded-3xl">
                <div className="text flex flex-col gap-2 justify-center items-center h-full w-full">
                  <span className="font-semibold text-2xl text-center tracking-tight">
                    {project.title}
                  </span>
                  <button className="text-xs uppercase font-semibold border border-black py-1 px-3">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
