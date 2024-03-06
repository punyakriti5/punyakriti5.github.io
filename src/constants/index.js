import {
  mobile,
  backend,
  web,
  javascript,
  mui,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  capgemini,
  pesto,
  resolvia,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Developed server-side functionalities using Node.js and other related technologies.",
      "Collaborated with cross-functional teams including testers, product managers and other developers to create high-quality products.",
      "Participated in code reviews and contributed constructive feedback for Node.js modules.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "September 2021 - December 2022",
    points: [
      "Modernized a legacy JSP application by transforming it into an adaptable single page application using React and Material UI.",
      "Facilitated smooth integration with the existing system.",
      "Resulted in 30% increase in user engagement after design and architecture of highly scalable internal user management application catering to the user base of 1 million.",
    ],
  },
];

const trainings = [
  {
    title: "Full Stack MERN Developer",
    company_name: "Pesto Tech",
    icon: pesto,
    iconBg: "#383E56",
    date: "April 2023 - February 2024",
    points: [
      "Completed comprehensive MERN Development course on Pesto tech.",
      "Learned essential data structures and algorithms concepts and algorithmic thinking.",
      "Learned fundamental principles of system design, including scalability, reliability, and performance optimization.",
      "Demonstrated expertise in database management, server-side development and client-side rendering.",
      "Applied knowledge gained from the course to complete various projects, assigned assessments and mock interviews efficiently.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "March 2021 - May 2021",
    points: [
      "Web fundamentals (HTML, CSS, JS)",
      "Basics of React application development.",
    ],
  },
];

const projects = [
  {
    name: "Resolvia",
    description:
      "Resolvia facilitates a technical discussion platform for idea sharing and document sharing between like-minded individuals.A Full Stack App with authentication(OAuth), search,filtering, document sharing using MERN Stack Development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "blue-text-gradient",
      },
    ],
    image: resolvia,
    source_code_link: "https://github.com/punyakriti5/resolvia-frontend",
  },
];

export { services, navLinks, technologies, experiences, trainings, projects };
