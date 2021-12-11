import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);
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
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-100">
      <div className="flex flex-col items-center max-w-6xl mx-auto p-6 gap-3">
        <header className="flex w-full md:w-2/3 flex-col gap-10 items-center">
          <h1 className="text-4xl font-bold tracking-tighter bg-split-green-bottom">
            📬 Contact me
          </h1>
          <p className="text-sm font-serif leading-6 text-center">
            I would love to have a chat with you! So fill in your info in the
            form, and let's <i>build something creative!</i> Feel free to look
            at my resume, GitHub, and LinkedIn 😊 Looking forward to speaking
            with you!
          </p>
          <div className="flex gap-3">
            <a
              href="https://drive.google.com/file/d/1f-v5MgcNb6cZegXW-SYpRv36UIILGKZH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-sm bg-black text-white rounded-lg px-4 py-1">
                <i className="fas fa-file" /> Resume
              </button>
            </a>
            <a
              href="https://github.com/yeana-dev"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-sm bg-black text-white rounded-lg px-4 py-1">
                <i className="fab fa-github-square" /> Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/yeanacho/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-sm bg-black text-white rounded-lg px-4 py-1">
                <i className="fab fa-linkedin" /> LinkedIn
              </button>
            </a>
          </div>
        </header>
        <form
          className="w-full md:w-2/3 flex flex-col gap-3 my-10"
          ref={form}
          onSubmit={sendEmail}
          onChange={() => setSent(false)}
        >
          <input
            type="text"
            placeholder="Your name"
            name="user_name"
            required
            className="p-4 rounded-md text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="p-4 rounded-md text-sm"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            required
            className="p-4 rounded-md text-sm resize-none"
          />
          <input
            type="submit"
            value={sent ? "Sent! Talk to you soon 😊" : "Submit"}
            className="cursor-pointer font-semibold font-sans text-sm tracking-tight bg-purple-200 hover:bg-purple-300 rounded-md py-2"
          />
        </form>
      </div>
    </div>
  );
}
