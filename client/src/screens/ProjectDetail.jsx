import { useParams } from "react-router-dom";
import { projects } from "../services/projects";

export default function ProjectDetail({ props }) {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  return (
    <div className="pt-16">
      <header className="bg-split-grey-top py-10">
        <div className="max-w-6xl mx-auto flex justify-between">
          <img src={project.browser} width="600" />
          <h1 className="flex items-center font-bold text-5xl tracking-tighter text-right">
            {project.title}
          </h1>
        </div>
      </header>
    </div>
  );
}
