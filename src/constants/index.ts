import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  firebase,
  cen,
  espe,
  prowess,
  oneCanva,
  tripguide,
  twoCanva,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },

];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "High English Skills",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineering Student",
    companyName: "Universidad de las Fuerzas Armadas - ESPE",
    icon: espe,
    iconBg: "#383E56",
    date: "2021 - Current",
    points: [
      "Rigorous coursework, hands-on projects, and collaborative endeavors, I've gained a deep understanding of fundamental programming principles, software design paradigms, and cutting-edge technologies. ",
    ],
  },
  {
    title: "English Language Program",
    companyName: "Centro Ecuatoriano Norteamericano (CEN)",
    icon: cen,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "My English language program to achieve a B2 proficiency level has been a fulfilling endeavor marked by consistent progress and newfound confidence in communication. Through immersive language exercises, interactive lessons, and dedicated self-study, I've honed my skills in reading, writing, listening, and speaking.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Prowess Agrícola",
    icon: prowess,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Creation of user interfaces for Prowess Agrícola's website using ReactJS, integration of APIs to provide functionalities to the website using ReactJS, integration of APIs to provide functionalities to the site, implementation of validations to ensure the integrity of the input data, resolution of the validations to ensure the integrity of the input data, troubleshooting and performance optimization of the and performance optimization of the application.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "",
    name: "Juan Pablo Pinza",
    designation: "",
    company: "2024",
    image: '/src/assets/CVImage2.jpg',
  },
];

const projects: TProject[] = [
  {
    name: "N-Queens Problem",
    description:
      "Development of a program to solve N problems by applying the backtracking algorithm. Implementation of the graphics.h library for the graphical interface of the program.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "graphics.h",
        color: "green-text-gradient",
      },
      {
        name: "algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: twoCanva,
    sourceCodeLink: "https://github.com/JuanPabloPinza/EstructuraDeDatos/tree/2566bb75395f2005b820e639bb041f065d9a297f/3P/Deberes/ProblemaNReinas",
  },
  {
    name: "Expense Master",
    description:
      "A web application that helps users keep track of their finances and reports on their expenses..",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/JuanPabloPinza/ProgramacionWeb/tree/6a8ed0c9ad0f0294daf4a60e26cad5b3c1cfd7a1/Tercer%20Parcial/Proyecto%20Final/mi-proyecto-web",
  },
  {
    name: "Prowess Agrícola",
    description:
      "Online shop for local farmers to sell their products, and for customers to purchase fresh produce directly from the source.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: oneCanva,
    sourceCodeLink: "https://prowessagricola.prowessec.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
