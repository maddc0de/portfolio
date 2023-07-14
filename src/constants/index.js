import {
  mobile,
  backend,
  design,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  shopify,
  threejs,
  projectExample,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Design",
    icon: design,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "test_title",
    company_name: "test_company",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Point number 1",
      "Point number 2",
      "Point number 3",
      "Point number 4",
    ],
  },
  {
    title: "test_title",
    company_name: "test_company",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Point number 1",
      "Point number 2",
      "Point number 3",
      "Point number 4",
    ],
  },
  {
    title: "test_title",
    company_name: "test_company",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Point number 1",
      "Point number 2",
      "Point number 3",
      "Point number 4",
    ],
  }
];

const projects = [
  {
    name: "Foodshare",
    description:
      "Food waste application that connects food banks to local restaurants, supermarkets and other food outlets who wish to donate their surplus food.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap, css",
        color: "pink-text-gradient",
      },
    ],
    image: projectExample,
    source_code_link: "https://github.com/",
  },
  {
    name: "Acebook",
    description:
      "MERN stack web application that emulates key features of Facebook. It allows users to create profiles, post messages and pictures, and react to others' content by liking or disliking and commenting on posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projectExample,
    source_code_link: "https://github.com/",
  },
  {
    name: "Workout App",
    description:
      "Web application that gives a user access to a vast collection of exercises through API integration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projectExample,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };