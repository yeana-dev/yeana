// Main Preview
import AaajPreview from "../assets/aaaj_preview.png";
import WitmePreview from "../assets/witme_preview.png";
import YsfjPreview from "../assets/ysfj_preview.png";
import DevlogPreview from "../assets/devlog_preview.png";
import CritterdexPreview from "../assets/critterdex_preview.png";
import WeatherappPreview from "../assets/weatherapp_preview.png";
// Prototype
import WitmePrototype from "../assets/prototype/witme_preview.png";
import YsfjPrototype from "../assets/prototype/ysfj_preview.png";
import DevlogPrototype from "../assets/prototype/devlog_preview.png";
import CritterdexPrototype from "../assets/prototype/critterdex_preview.png";

export const projects = [
  {
    title: "Asian American Advancing Justice",
    mainPreview: AaajPreview,
    // prototype: AaajPrototype,
    seb_header: "test",
    description: "test",
    features: `test`,
    used_stacks: ["HTML"],
    siteURL: "https://advancing-justice.netlify.app",
    githubURL: "https://github.com",
  },
  {
    title: "Witme",
    mainPreview: WitmePreview,
    prototype: WitmePrototype,
    sub_header: "A collaborative platform for devs and designers",
    description: "A Full-stack application using PostgreSQL and Ruby on Rails.",
    features: `Features: WYSIWYG text editor <a href="https://ui.toast.com/tui-editor" target="_blank" rel="noreferrer">Toast UI Editor</a>, comments, login/signup using JWT and Bcrypt`,
    used_stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Bootstrap",
      "Ruby",
      "Ruby on Rails",
      "PostgreSQL",
    ],
    siteURL: "https://witme.netlify.app",
    githubURL: "https://github.com/yeana-dev/Witme",
  },
  {
    title: "YSFJ",
    mainPreview: YsfjPreview,
    prototype: YsfjPrototype,
    sub_header: "E-commerce for a virtual eyewear boutique",
    description:
      "A full-stack MERN application built with three other developers using MongoDB and Express.js. Used JWT and bcrypt for user authentication and authorization.",
    features: `Glasses' image datas are from <a href="https://www.warbyparker.com/" target="_blank" rel="noreferrer">Warby Parker</a>`,
    used_stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    siteURL: "https://ysfj.netlify.app",
    githubURL: "https://github.com/yeana-dev/ysfj",
  },
  {
    title: "Devlog",
    mainPreview: DevlogPreview,
    prototype: DevlogPrototype,
    sub_header: "Developer’s Log",
    description:
      "Single-page application for developers to log their learning progress and post their projects. Posts are categorized by languages and framework.",
    features: `Used <a href="https://www.airtable.com/" target="_blank" rel="noreferrer">Airtable RESTful API</a>`,
    used_stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Bootstrap",
    ],
    siteURL: "https://yeana-devlog.netlify.app",
    githubURL: "https://github.com/yeana-dev/devlog",
  },
  {
    title: "Critterdex",
    mainPreview: CritterdexPreview,
    prototype: CritterdexPrototype,
    sub_header: "Nintendo Switch game 'Animal Crossing' critter encyclopedia",
    description:
      "Pure JavaScript application for users to search critters by many search methods. User can insert time slot to see which critters are available, or simply search by their name.",
    features: `Used <a href="http://acnhapi.com/" target="_blank" rel="noreferrer">ACNH RESTful API</a>`,
    used_stacks: ["HTML", "CSS", "JavaScript"],
    siteURL: "https://critterdex.netlify.app",
    githubURL: "https://github.com/yeana-dev/Critterdex-for-animal-crossing",
  },
  {
    title: "Weather App",
    mainPreview: WeatherappPreview,
    // prototype: AaajPrototype,
    seb_header: "test",
    description: "test",
    features: `test`,
    used_stacks: ["HTML"],
    siteURL: "https://advancing-justice.netlify.app",
    githubURL: "https://github.com",
  },
];
