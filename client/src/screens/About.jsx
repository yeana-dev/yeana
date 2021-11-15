import "./style/About.css";
import Stack from "../components/Stack";
import YeanaImg from "../assets/yeana.png";
import { stacks } from "../services/stacks";

export default function About() {
  return (
    <div id="about">
      <div id="container">
        <img src={YeanaImg} alt="yeana" />
        <div id="about-right-col">
          <article>
            <header>😉 Hi! Thank you for checking in!</header>
            <p>
              I am a software engineer graduated from General Assembly's
              software engineer immersive program, where I developed my
              JavaScript, React, Ruby on Rails, and other technical skills. I
              strive to be an excellent team player and am passionate about
              solving problems and finding perfect solutions to teams while
              bringing a creative perspective to build well-structured
              applications.
            </p>

            <p>
              When I am not coding, you can find me playing Pokemon Unite or
              Animal crossing on my switch, or working on my side project 👩🏻‍💻
            </p>

            <p>
              Let's chat! You can reach me through <a href="#contact">HERE</a>,
              or email me at{" "}
              <a href="mailto:yeana.dev@gmail.com">yeana.dev@gmail.com</a>
            </p>
          </article>

          <div className="tools">
            <header>👩🏻‍💻 My current stacks</header>
            <div className="tools-list">
              {stacks.slice(0, 10).map((stack) => (
                <Stack stack={stack} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
