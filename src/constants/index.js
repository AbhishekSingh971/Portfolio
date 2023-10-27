import {
  frontend,
  backend,
  ux,
  prototyping,
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
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  express,
} from '../assets/index';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'JQuery',
    icon: jquery,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'PHP',
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
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  {
    title: 'Full Stack Developer',
    company_name: 'Star Fire Company',
    icon: dcc,
    iconBg: '#333333',
    date: 'June 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Weather',
    description: 'A Weather app that displays tempreture.',
    tags: [
      {
        name: 'react',
        color: 'blue',
      },
      {
        name: 'api',
        color: 'green',
      },
      {
        name: 'css',
        color: 'pink',
      },
    ],
    image: weather,
    repo: 'https://github.com/AbhishekSingh971/Weather',
    demo: 'https://weather-eaxqr9u3j-abhisheksingh971.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Disney+ clone',
    description:
      'A disney clone app that have feature of login ,logout with firebase and home pages.',
    tags: [
      {
        name: 'react',
        color: 'blue',
      },
      {
        name: 'firebase',
        color: 'green',
      },
      {
        name: 'css',
        color: 'pink',
      },
    ],
    image: disney,
    repo: 'https://github.com/AbhishekSingh971/Weather',
    demo: 'https://disneyplus-clone-70efd.firebaseapp.com/',
  },
  {
    id: 'project-3',
    name: 'Text manipulater',
    description: 'This is a Simple text manipulater app with react',
    tags: [
      {
        name: 'react',
        color: 'blue',
      },
      {
        name: 'bootstrap',
        color: 'green',
      },
      {
        name: 'css',
        color: 'pink',
      },
    ],
    image: textManipulator,
    repo: 'https://github.com/AbhishekSingh971/inotebook',
    demo: 'https://text-manipulater1.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Movix',
    description: `A website that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'ReactJs',
        color: 'blue',
      },
      {
        name: 'supabase',
        color: 'green',
      },
      {
        name: 'css',
        color: 'pink',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue',
      },
      {
        name: 'supabase',
        color: 'green',
      },
      {
        name: 'css',
        color: 'pink',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
