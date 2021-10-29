import "./style/Home.css";
import { useState, useEffect } from "react";
import { Typewriter } from "typewriting-react";
import YeanaAvatar from "../assets/yeanaAvatar.png";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const changeGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12 && currentHour > 5) {
        setGreeting("Good morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };
    changeGreeting();
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="home-left">
          <header>
            {greeting} 👋&nbsp;&nbsp;My name is<span id="yeana">Yeana Cho</span>
          </header>
          <div className="short-description">
            I am a <span className="highlight">software engineer</span> born in
            Seoul, South Korea 🇰🇷,{" "}
            <span className="based-in">
              and currently based in Houston, Texas 🇺🇸
            </span>
            <p>
              I enjoy building{" "}
              <Typewriter
                words={[
                  "interactive applications.",
                  "eye-catching applications.",
                  "clean and well-structured codebase.",
                ]}
                typingSpeed="50"
                erasingSpeed="60"
              />
            </p>
          </div>
        </div>
        <div className="home-right">
          <img src={YeanaAvatar} alt="yeana avatar" />
        </div>
      </div>
    </div>
  );
}
