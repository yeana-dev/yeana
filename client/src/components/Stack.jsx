import "./style/Stack.css";

export default function Stack(props) {
  return (
    <li className="project-tools">
      {props.stack.svg}
      <span className="font-sans text-xs">{props.stack.name}</span>
    </li>
  );
}
