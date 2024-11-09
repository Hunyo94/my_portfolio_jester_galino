import {
  evve,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html5,
  css3,
  vue,
  react,
  bootstrap,
  laravel,
  mysql,
  mongo,
  csharp,
  tailwind,
  node,
  git,
  rubyrails,
  coverhunt,
  clientportal,
  gymerls,
  aksha,
  shiftminds,
  loyaltylinx,
  ourfather,
  flutter,
  dart,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html5,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css3,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  // {
  //   name: 'MySQL',
  //   icon: mysql,
  // },
  {
    name: "Mongoose",
    icon: mongo,
  },
  // {
  //   name: 'CSharp',
  //   icon: csharp,
  // },
];

const experiences = [
  {
    title: "Cake decorator - Full Time",
    company_name: "Jelexie Bake Shop.",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Dec 2021 - Jun 2022",
  },
  {
    title: "Full Stack Dev - Part Time",
    company_name: "Shipminds Technology",
    icon: coverhunt,
    iconBg: "#333333",
    date: "April 2024 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Gymerls 2.0",
    description:
      "This platform empowers gym owners and trainers to efficiently manage memberships, schedule classes, track attendance, and handle billing, among other key functionalities",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gymerls,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://www.gymerls.com/",
  },
  {
    id: "project-2",
    name: "Aksha christening",
    description: `Our Christening Web Page is a beautifully designed online platform tailored to help families celebrate and commemorate the special occasion of a child's christening or baptism`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aksha,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://akshaillyria.netlify.app/",
  },
  {
    id: "project-3",
    name: "Shift Minds",
    description:
      "Welcome to ShiftMinds official website, your gateway to discovering our products, services, and mission.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shiftminds,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://www.shiftminds.com.ph/",
  },
  {
    id: "project-4",
    name: "Loyalty Linx",
    description:
      "Welcome to Loyalty Linx Web official website, your gate way to exclusive rewards and easy credit access",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: loyaltylinx,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://loyalty-linx-web.vercel.app/#/",
  },
  {
    id: "project-5",
    name: "Loyalty Linx",
    description:
      "Welcome to Our Father Eternal and Memorial Garden, where we provide a serene and natural environment to honor and remember your loved ones. Discover our wide range of services, beautiful garden settings, and personalized memorialization options.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ourfather,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://www.ourfathermemorial.ph/",
  },
];

export { services, technologies, experiences, projects };
