import { Typewriter } from "typewriting-react";
import YeanaAvatar from "../assets/yeanaAvatar.png";

export default function Home() {
  return (
    <div
      id="home"
      className="max-w-6xl h-screen mx-auto flex flex-col justify-end"
    >
      <header>
        <h1 className="font-bold text-6xl">
          Hi 👋&nbsp;&nbsp;My name is{" "}
          <span className="text-purple-400">Yeana</span>,
        </h1>
        <div className="font-semibold text-3xl py-3">
          and I am a software engineer who strives to <br />
          build{" "}
          <Typewriter
            words={[
              "creative and interactive applications.",
              "eye-catching applications.",
              "clean and well-structured codebase.",
            ]}
            typingSpeed="50"
            erasingSpeed="60"
          />
        </div>
      </header>
      <div className="h-96 flex justify-end items-end mt-8">
        <img src={YeanaAvatar} alt="yeana avatar" />
      </div>
    </div>
  );
}
