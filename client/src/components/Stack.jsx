import "./style/Stack.css";

export default function Stack(props) {
  return (
    <div className="project-tools">
      {props.stack.svg}
      {props.stack.name}
    </div>
  );
}
