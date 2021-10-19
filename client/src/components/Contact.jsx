import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./style/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iiwc60s",
        "template_9h0ofss",
        form.current,
        "user_YOH18ApgTgggDNs7eGZD9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div id="contact-left">
        <header>💌 Contact me!</header>
        <p>
          I would love to have a chat with you! So fill in your info in the
          form, and let's build something creative! Feel free to look at my
          resume, GitHub, and LinkedIn 😊 Looking forward to speaking with you!
        </p>
        <div id="about-links">
          <a
            href="https://drive.google.com/file/d/13QWoYpUSJ78O2bbw-zrunp_qmQq6-FBq/view?usp=sharing"
            target="_blank"
          >
            <button>
              <i className="fas fa-file" /> Resume
            </button>
          </a>
          <a href="https://github.com/yeana-dev" target="_blank">
            <button>
              <i className="fab fa-github-square" /> Github
            </button>
          </a>
          <a href="https://www.linkedin.com/in/yeanacho/" target="_blank">
            <button>
              <i className="fab fa-linkedin" /> LinkedIn
            </button>
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your name" name="user_name" />
        <input type="email" placeholder="Email" name="user_email" />
        <textarea name="message" placeholder="Message" rows="6" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
