import { projects } from "../services/projects";

export default function Projects() {
  return (
    <div className="py-20 " id="projects">
      <h1 className="font-sans font-bold text-4xl uppercase tracking-tighter text-center bg-split-purple-bottom">
        🖥 Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-16 my-20 max-w-6xl mx-auto">
        {projects.map((project) => (
          <img src={project.mainPreview} />
        ))}
      </div>
    </div>
  );
}
