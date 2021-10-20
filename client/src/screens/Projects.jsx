import "./style/Projects.css";
import Project from "../components/Project";
import { projects } from "../services/projects";

export default function Projects() {
  return (
    <div id="projects">
      <div id="container">
        <header id="projects-header">🖥 Recent projects I built</header>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
