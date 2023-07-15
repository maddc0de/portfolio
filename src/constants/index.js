import {
  mobile,
  backend,
  design,
  web,
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: projectExample,
    sourceCodeLink: "https://github.com/maddc0de/foodshare",
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
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: projectExample,
    sourceCodeLink: "https://github.com/maddc0de/acebook",
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
    sourceCodeLink: "https://github.com/maddc0de/workout-app",
  },
];

export { services, projects };