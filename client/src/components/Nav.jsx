import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  // Enable navbar collapse onClick on mobile-sized screen
  const menu = document.getElementById("menu");
  const hide = () => menu.classList.toggle("hidden");
  return (
    <nav className="fixed w-full bg-white z-50" id="top">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-7 justify-between">
          <div>
            <Link
              to="/"
              className="flex items-center py-4 px-2 italic text-xl font-semibold tracking-tighter"
            >
              yeana.dev
            </Link>
          </div>

          <ul className="hidden md:flex items-center space-x-4 wide-menu text-sm uppercase">
            <li>
              <a href="/#home" className="py-4 px-2 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="py-4 px-2 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="py-4 px-2 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="py-4 px-2 transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1f-v5MgcNb6cZegXW-SYpRv36UIILGKZH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="py-4 px-2 transition duration-300"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <svg
                className="w-6 h-6 text-aajc-darkgrey hover:text-black"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile screen navbar */}
      <section
        className={`${
          !toggle && "hidden"
        } mobile-menu md:hidden px-3 border-t-8 border-aajc-orange`}
        id="menu"
        onClick={() => hide()}
      >
        <ul>
          <li>
            <a
              href="/"
              className="block text-sm px-2 py-3 text-black hover:bg-black hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
