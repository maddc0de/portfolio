import {
  web,
  backend,
  frontend,
  design,
  plp,
  exercisetrove,
  foodshare,
  acebook,
  chitter,
  designSystem
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
    icon: frontend,
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
    name: "Product Listing Page",
    description:
      "A responsive web application for product listings, featuring filtering and sorting options for user convenience",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "json",
        color: "blue-text-gradient",
      }
    ],
    gif: plp,
    sourceCodeLink: "https://github.com/maddc0de/product-listing-page-vue",
  },
  {
    name: "Exercise Trove",
    description:
      "Web application that gives a user access to a vast collection of exercises through API integration. Each exercise has information about target muscle, body part and what equipment needed with a GIF that shows how to perform the exercise.",
    tags: [
      {
        name: "APIs",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      }
    ],
    gif: exercisetrove,
    sourceCodeLink: "https://github.com/maddc0de/exercise-trove",
  },
  {
    name: "Foodshare",
    description:
      "Food waste web application that connects food banks to local restaurants, supermarkets and other food outlets who wish to donate their surplus food.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jsonwebtoken",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "cypress",
        color: "pink-text-gradient",
      },
      {
        name: "jest",
        color: "blue-text-gradient",
      }
    ],
    gif : foodshare,
    sourceCodeLink: "https://github.com/maddc0de/foodshare",
  },
  {
    name: "Acebook",
    description:
      "MERN stack web application that emulates key features of Facebook. It allows users to create profiles, post messages and pictures, and react to others' content by liking or disliking and commenting on posts.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "multer",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
      {
        name: "cypress",
        color: "blue-text-gradient",
      },
    ],
    gif: acebook,
    sourceCodeLink: "https://github.com/maddc0de/acebook",
  },
  {
    name: "Chitter",
    description:
      "A small Twitter clone that will allow the users to post messages to a public stream.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "rspec",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "sinatra",
        color: "blue-text-gradient",
      },
      {
        name: "webrick",
        color: "green-text-gradient",
      },
      {
        name: "timecop",
        color: "pink-text-gradient",
      },
    ],
    gif: chitter,
    sourceCodeLink: "https://github.com/maddc0de/chitter-challenge",
  },
  {
    name: "Website Design System",
    description:
      "A responsive, pure CSS and HTML website containing a collection of colours, fonts and styles - inpired by iconic fashion brands such as Burberry and Gucci",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "githubPages",
        color: "pink-text-gradient",
      }
    ],
    gif: designSystem,
    sourceCodeLink: "https://github.com/maddc0de/website-design-system",
  },
];

export { services, projects };