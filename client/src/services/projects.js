// Main Preview
import AaajPreview from "../assets/projects/preview/aaaj_preview.png";
import WitmePreview from "../assets/projects/preview/witme_preview.png";
import YsfjPreview from "../assets/projects/preview/ysfj_preview.png";
import DevlogPreview from "../assets/projects/preview/devlog_preview.png";
import CritterdexPreview from "../assets/projects/preview/critterdex_preview.png";
import WeatherappPreview from "../assets/projects/preview/weatherapp_preview.png";
// Browser Preview on detail page
import AaajBrowser from "../assets/projects/browser/aaajBrowser.png";
import WitmeBrowser from "../assets/projects/browser/witmeBrowser.png";
import YsfjBrowser from "../assets/projects/browser/ysfjBrowser.png";
import DevlogBrowser from "../assets/projects/browser/devlogBrowser.png";
import CritterdexBrowser from "../assets/projects/browser/critterdexBrowser.png";
import WeatherBrowser from "../assets/projects/browser/weatherBrowser.png";

export const projects = [
  {
    title: "Asian American Advancing Justice",
    slug: "aaaj",
    mainPreview: AaajPreview,
    browser: AaajBrowser,
    sub_header:
      "A national affiliation of five civil rights non-profit organizations",
    description:
      "As participation of Essteem's Equality Hackathon, Our team of four designers and developers designed and built a new main website for AAAJ to clarify that they are five separate organizations in the Asian Americans Advancing Justice affiliation. We integrated Sanity.io headless CMS to make the website easily updatable by the organization. We developed two different responsive designs for mobile and desktop using Tailwind CSS.",
    used_stacks: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "React Router",
    ],
    siteURL: "https://advancing-justice.netlify.app",
    githubURL: "https://github.com/yeana-dev/essteem-advancing-justice",
  },
  {
    title: "Witme",
    slug: "witme",
    mainPreview: WitmePreview,
    browser: WitmeBrowser,
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
    slug: "ysfj",
    mainPreview: YsfjPreview,
    browser: YsfjBrowser,
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
    slug: "devlog",
    mainPreview: DevlogPreview,
    browser: DevlogBrowser,
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
    slug: "critterdex",
    mainPreview: CritterdexPreview,
    browser: CritterdexBrowser,
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
    slug: "weather_app",
    mainPreview: WeatherappPreview,
    browser: WeatherBrowser,
    seb_header: "test",
    description: "test",
    features: `test`,
    used_stacks: ["HTML"],
    siteURL: "https://advancing-justice.netlify.app",
    githubURL: "https://github.com",
  },
];
