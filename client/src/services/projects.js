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
    description:
      "Witme is a platform for developers and designers to create a team for their side-project or study group. Users can create a post describing their current team and project (if they already have one) or create a study group. In addition, the list can be categorized by role(Front-end, Back-end, Designer) they are recruiting.",
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
      "MERN full-stack application built as a group of four developers. We implemented User authentication/authorization using JWT, and users have their indivisual carts where they can add and remove.",
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
    sub_header: "Blog for developers",
    description:
      "Single-page application for developers to log their learning progress and post their projects. Posts are categorized by languages and framework, and they are added automatically whenever user creates a post with new language/framework.",
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
    description: `Nintendo switch game 'Animal Crossing' critter encyclopedia. Basic application for users to search critters from Animal Crossing by many search methods.`,
    used_stacks: ["HTML", "CSS", "JavaScript"],
    siteURL: "https://critterdex.netlify.app",
    githubURL: "https://github.com/yeana-dev/Critterdex-for-animal-crossing",
  },
  {
    title: "Weather App",
    slug: "weather_app",
    mainPreview: WeatherappPreview,
    browser: WeatherBrowser,
    sub_header: "Simple themed weather application built with React",
    description:
      "This is my first ever made React application! User can search by any city in the world or simply search weather for current location, and it's also designed with two responsive screen sizes.",
    used_stacks: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    siteURL: "https://yeana-react-weather.page/",
    githubURL: "https://github.com/yeana-dev/Weather-App-React",
  },
];
