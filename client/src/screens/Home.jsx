import { Typewriter } from "typewriting-react";
import YeanaAvatar from "../assets/yeanaAvatar.png";

export default function Home() {
  return (
    <div
      id="home"
      className="max-w-6xl mx-auto px-4 flex h-screen justify-between items-center"
    >
      <header>
        <h1 className="font-bold text-5xl">
          Hi 👋&nbsp;&nbsp;My name is{" "}
          <span className="text-purple-500">Yeana</span>,
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
      <div className="h-full">
        <img
          src={YeanaAvatar}
          alt="yeana avatar"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
}
