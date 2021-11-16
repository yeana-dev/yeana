import "./style/Stack.css";

export default function Stack(props) {
  return (
    <li className="project-tools">
      {props.stack.svg}
      {props.stack.name}
    </li>
  );
}
