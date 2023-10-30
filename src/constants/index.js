import {
  frontend,
  backend,
  ux,
  // prototyping,
  javascript,
  html,
  css,
  jquery,
  java,
  php,
  mongodb,
  redux,
  reactjs,
  python,
  nodejs,
  git,
  bootstrap,
  weather,
  disney,
  textManipulator,
  movie,
  codsoft,
  ibm,
  express,
  ecommerce,
  whatsapp,
  cargoa
} from "../assets/index";

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
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: "HTML 5",
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
    name: "JQuery",
    icon: jquery,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [
  // {
  //   title: 'Front-End Developer',
  //   company_name: 'Cover Hunt',
  //   icon: coverhunt,
  //   iconBg: '#333333',
  //   date: 'Aug 2021 - Feb 2022',
  // },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  {
    title: "Front-end Development",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#333333",
    date: "June 2023 - July 2023",
  },
  {
    title: "Web Development",
    company_name: "Codsof",
    icon: codsoft,
    iconBg: "#333333",
    date: "Aug 2023 - Sep 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Weather",
    description: "A Weather app that displays tempreture.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "api",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: weather,
    repo: "https://github.com/AbhishekSingh971/Weather",
    demo: "https://weather-eaxqr9u3j-abhisheksingh971.vercel.app/",
  },
  {
    id: "project-2",
    name: "Disney+ clone",
    description:
      "A disney clone app that have feature of login ,logout with firebase and home pages.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "firebase",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: disney,
    repo: "https://github.com/AbhishekSingh971/Weather",
    demo: "https://disneyplus-clone-70efd.firebaseapp.com/",
  },
  {
    id: "project-3",
    name: "Text manipulater",
    description: "This is a Simple text manipulater app with react",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "bootstrap",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: textManipulator,
    repo: "https://github.com/AbhishekSingh971/inotebook",
    demo: "https://text-manipulater1.vercel.app/",
  },
  {
    id: "project-4",
    name: "Movix",
    description: `A website that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "ReactJs",
        color: "blue",
      },
      {
        name: "supabase",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: movie,
    repo: "https://github.com/AbhishekSingh971/Movix",
    demo: "https://653bd09d1a881c063284a899--shimmering-fudge-e70242.netlify.app/",
  },
  {
    id: "project-5",
    name: "Kharido",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "ReactJs",
        color: "blue",
      },
      {
        name: "supabase",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: ecommerce,
    repo: "https://github.com/AbhishekSingh971/Ecommerce-frontend.git",
    demo: "https://ecommerce-frontend-five-omega.vercel.app/",
  },
  {
    id: "project-6",
    name: "Whatsapp-Clone",
    description: "This is a demo website for a Whatsapp for practice.",
    tags: [
      {
        name: "ReactJs",
        color: "blue",
      },
      {
        name: "supabase",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: whatsapp,
    repo: "https://github.com/AbhishekSingh971/Whatsapp-clone-frontend.git",
    demo: "https://delicate-buttercream-18e55e.netlify.app/",
  },
  {
    id: "project-7",
    name: "Cargoa",
    description: "This is a website for helping manufacturer and transporter.",
    tags: [
      {
        name: "ReactJs",
        color: "blue",
      },
      {
        name: "supabase",
        color: "green",
      },
      {
        name: "css",
        color: "pink",
      },
    ],
    image: cargoa,
    repo: "https://github.com/AbhishekSingh971/Cargoa_Frontend.git",
    demo: "https://cargoa-frontend-mu.vercel.app/",
  }
];

export { services, technologies, experiences, projects };
