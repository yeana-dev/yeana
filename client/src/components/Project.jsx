import "./style/Project.css";
import Stack from "./Stack";
import { stacks } from "../services/stacks";
import { useState, useEffect } from "react";

export default function Project(props) {
  const [stackIcons, setStackIcons] = useState([]);
  useEffect(() => {
    const filterStacks = () => {
      let result = [];
      stacks.map((stack) => {
        if (props.project.used_stacks.includes(stack.name)) {
          result.push(stack);
        }
        return result;
      });
      setStackIcons(result);
    };
    filterStacks();
  }, [props.project.used_stacks]);

  return (
    <div className="project">
      <img src={props.project.preview} alt="App preview" />
      <article>
        <header>{props.project.title}</header>
        <span>"{props.project.sub_header}"</span>
        <ul>
          <li>{props.project.description}</li>
          <li>{props.project.features}</li>
          <li className="stack-list">
            {stackIcons.map((stack) => (
              <Stack stack={stack} />
            ))}
          </li>
        </ul>
        <a href={props.project.siteURL} target="_blank" rel="noreferrer">
          <button>Deployed Site Here</button>
        </a>
        <a href={props.project.githubURL} target="_blank" rel="noreferrer">
          <button>
            <i class="fab fa-github"></i> Github
          </button>
        </a>
      </article>
    </div>
  );
}
