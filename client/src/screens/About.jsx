import Stack from "../components/Stack";
import YeanaImg from "../assets/yeana.png";
import { stacks } from "../services/stacks";

export default function About() {
  return (
    <div id="about" className="flex flex-col">
      <header className="bg-gray-200">
        <h1 className="uppercase tracking-widest text-sm py-4 opacity-80 flex justify-center items-center">
          <a href="#about" className="hover:opacity-50 transition-all">
            <i class="fas fa-angle-double-down" />
            <span className="mx-3">Scroll</span>
            <i class="fas fa-angle-double-down" />
          </a>
        </h1>
      </header>
      <div className="py-10">
        <main className="flex flex-col items-center gap-16 max-w-6xl mx-auto">
          <div className="flex flex-col lg:gap-20 lg:flex-row items-center">
            <img src={YeanaImg} alt="yeana" />
            <article className="text-sm font-serif flex flex-col gap-10 mt-10 leading-loose">
              <h1 className="text-2xl lg:text-3xl font-bold bg-split-purple-bottom font-sans px-4 lg:px-0">
                😉 Hi! Thank you for checking in!
              </h1>
              {/* Paragraph container */}
              <div className="flex flex-col gap-10 px-6 lg:px-0 text-center lg:text-left">
                <p>
                  I am a{" "}
                  <span className="bg-yellow-100">software engineer</span>{" "}
                  graduated from General Assembly's software engineer immersive
                  program, where I developed my JavaScript, React, Ruby on
                  Rails, and other technical skills. I am passionate about
                  building creative and innovative applications that makes a
                  positive impact on people!{" "}
                </p>
                <p>
                  Before I became a software engineer, I’ve worked in{" "}
                  <span className="bg-yellow-100">
                    hospitality for the past eight years
                  </span>
                  , and it was such a fun experience. Not only did I learn about
                  Japanese cuisine 🍣 and wine, I learned{" "}
                  <span className="bg-yellow-100">
                    how to work in a collaborative environment by working in a
                    diverse team
                  </span>
                  . I met so many amazing people by gaining{" "}
                  <span className="bg-yellow-100">
                    strong adaptability skills
                  </span>{" "}
                  and learned how to{" "}
                  <span className="bg-yellow-100">
                    cultivate a positive workplace
                  </span>{" "}
                  by managing the front-of-house staff, which has become one of
                  my greatest strengths. Ultimately, a software engineer’s job
                  is to collaborate with a team and continuously learn, and I
                  knew I could bring my strong teamwork skills.
                </p>
                <p>
                  After taking General Assembly's immersive program, I{" "}
                  <span className="bg-yellow-100">
                    participated in a hackathon
                  </span>{" "}
                  where I got my hands-on skills on Tailwind CSS and headless
                  CMS.{" "}
                  <span className="text-xs">(You can see the detail here)</span>{" "}
                  Currently, I am{" "}
                  <span className="bg-yellow-100">
                    volunteering as a web developer
                  </span>{" "}
                  at the non-profit organization called Ring of Keys. I am
                  excited to see where this journey takes me 🚀
                </p>
                <p>
                  When I am not coding, you can find me playing Pokemon Unite or
                  Animal crossing on my switch 🎮, or going for a walk with my
                  two furry babie.
                </p>
              </div>
            </article>
          </div>
          <h1 className="text-2xl font-semibold bg-split-green-bottom">
            👩🏻‍💻 My current stacks
          </h1>
          <ul className="flex flex-wrap justify-center gap-5">
            {stacks.slice(0, 10).map((stack) => (
              <Stack stack={stack} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
