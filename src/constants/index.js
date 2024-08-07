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
    title: "MERN Full Stack Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
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
    title: "Software Engineer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "August 2021- Present",
    points: [
      "Developed several server-side functionalities using Node.js and Express.js.",
      "Reduced API response time by an average of 100ms by implementing enhanced database queries, indexing and query optimization and caching mechanisms.",
      " Developed responsive and intuitive user interfaces using React.js , leveraging state management with Redux for complex application logic.", 
      "Optimized frontend performance by implementing code-splitting, lazy loading, and caching strategies , resulting in 15% faster load times.",
      "Collaborated with cross-functional teams including testers, product managers and other developers to create high-quality products.",
      "Conducted code reviews and facilitated pull requests to ensure high code quality and adherence to project standards.",
      "Streamlined API integration among services within an established Microservices framework.",
      "Integrated Single Sign On in the application using OKTA as the service provider with OIDC."
    ],
  },
  {
    title: "Intern",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "March 2021 -   May 2021",
    points: [
      "Completed internship focused on web fundamentals including HTML, CSS and JAVASCRIPT.",
      "Gained experience in developing web applications during this internship.",
      "Managed MySQL database management , including schema design, query optimization, and data manipulation.",
      "Utilized Git for version control in a collaborative environment."
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
