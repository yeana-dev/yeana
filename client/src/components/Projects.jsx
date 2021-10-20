import "./style/Projects.css";
import WitmePreview from "../assets/witme_preview.png";
import YsfjPreview from "../assets/ysfj_preview.png";
import DevlogPreview from "../assets/devlog_preview.png";
import CritterdexPreview from "../assets/critterdex_preview.png";

export default function Projects() {
  return (
    <div id="projects">
      <div id="container">
        <header id="projects-header">🖥 Recent projects I built</header>
        <div className="project">
          <img src={WitmePreview} />
          <article>
            <header>Witme</header>
            <span>"A collaborative platform for devs and designers"</span>
            <ul>
              <li>
                A Full-stack application using PostgreSQL and Ruby on Rails.
              </li>
              <li>
                Features: WYSIWYG text editor{" "}
                <a href="https://ui.toast.com/tui-editor" target="_blank">
                  Toast UI Editor
                </a>
                , comments, login/signup using JWT and Bcrypt
              </li>
              <li>
                HTML, CSS, JavaScript, React, React-router, Bootstrap, Ruby on
                Rails, PostgreSQL.
              </li>
            </ul>
            <a href="https://witme.netlify.app" target="_blank">
              <button>Deployed Site Here</button>
            </a>
            <a href="https://github.com/yeana-dev/Witme" target="_blank">
              <button>
                <i class="fab fa-github"></i> Github
              </button>
            </a>
          </article>
        </div>
        <div className="project">
          <img src={YsfjPreview} />
          <article>
            <header>YSFJ</header>
            <span>"E-commerce for a virtual eyewear boutique"</span>
            <ul>
              <li>
                A full-stack MERN application built with three other developers
                using MongoDB and Express.js. Used JWT and bcrypt for user
                authentication and authorization.
              </li>
              <li>
                Glasses' image datas are from{" "}
                <a href="https://www.warbyparker.com/" target="_blank">
                  Warby Parker
                </a>
              </li>
              <li>
                HTML, CSS, JavaScript, React, React-router, Bootstrap, Node.js,
                Express, MongoDB
              </li>
            </ul>
            <a href="https://ysfj.netlify.app" target="_blank">
              <button>Deployed Site Here</button>
            </a>
            <a href="https://github.com/yeana-dev/ysfj" target="_blank">
              <button>
                <i class="fab fa-github"></i> Github
              </button>
            </a>
          </article>
        </div>
        <div className="project">
          <img src={DevlogPreview} />
          <article>
            <header>Devlog</header>
            <span>"Developer’s Log"</span>
            <ul>
              <li>
                Single-page application for developers to log their learning
                progress and post their projects. Posts are categorized by
                languages and framework.
              </li>
              <li>
                Used{" "}
                <a href="https://www.airtable.com/" target="_blank">
                  Airtable RESTful API
                </a>
              </li>
              <li>HTML, CSS, JavaScript, React, React-Router, Bootstrap</li>
            </ul>
            <a href="https://yeana-devlog.netlify.app" target="_blank">
              <button>Deployed Site Here</button>
            </a>
            <a href="https://github.com/yeana-dev/devlog" target="_blank">
              <button>
                <i class="fab fa-github"></i> Github
              </button>
            </a>
          </article>
        </div>
        <div className="project">
          <img src={CritterdexPreview} />
          <article>
            <header>Critterdex</header>
            <span>
              "Nintendo Switch game 'Animal Crossing' critter encyclopedia"
            </span>
            <ul>
              <li>
                Pure JavaScript application for users to search critters by many
                search methods. User can insert time slot to see which critters
                are available, or simply search by their name.
              </li>
              <li>
                Used{" "}
                <a href="http://acnhapi.com/" target="_blank">
                  ACNH RESTful API
                </a>
              </li>
              <li>HTML, CSS, Vanilla JavaScript</li>
            </ul>
            <a href="https://critterdex.netlify.app" target="_blank">
              <button>Deployed Site Here</button>
            </a>
            <a
              href="https://github.com/yeana-dev/Critterdex-for-animal-crossing"
              target="_blank"
            >
              <button>
                <i class="fab fa-github"></i> Github
              </button>
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
