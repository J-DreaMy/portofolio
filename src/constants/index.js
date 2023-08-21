import {
  mobile,
  javascript,
  typescript,
  server,
  website,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  docker,
  asterindo,
  artpedia,
  grhadigitalindonesia,
  laravel,
  vuejs,
  nestjs,
  golang,
  postgresql,
  freelance,
  asterindoProject,
  artpediaProject,
  PosProject as posProject,
  blivingProject,
} from "../assets";

export const navLinks = [
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
    icon: website,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: server,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "PT. Asterindo Jaya",
    icon: asterindo,
    iconBg: "#383E56",
    date: "2017 - 2019",
    points: [
      "Developing and maintaining web applications using Laravel, Jquery, Vue.JS and bootstrap.",
      "Building management item, order applications and calculating profit & expenses for client requirements who need computer or technology items.",
      "Building sales application for collect customer shop data",
      "Building todo list for internal company",
      "Building application services computer",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "PT. Grha Digital Indonesia",
    icon: grhadigitalindonesia,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Developing Face Recognize using python, OpenCV, and Tensorflow",
      "Building smart home applications with features controlling devices, intergrate with Spotify, and geolocation",
      "Developing and maintaining custom software using ExpressJs, NestJs, Vue.JS & Flutter",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Artpedia",
    icon: artpedia,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Developing backend architecture using Django and FastAPI",
      "Collection and extract data transaction, collections and items NFT from blockchain mainnet ethereum, arbitrum, optimism and polygon (matic)",
      "Building AI image generator from text to image & image to image.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "2019 - Present",
    points: [
      "Building class scheduling using Laravel & Jquery and Genetic Algorithm for school.",
      "Developing store-building mobile apps",
      "Developing and maintaining accounting and internal apps",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amaster",
    description:
      "Amaster is internal program Asterindo to handle orders from ayooklik.id. The apps can increase revenue by projecting or simulation the orders first, searching items by profit, calculating shipping costs, tax and other expenses. Save the history item, archived photos, and export reports.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
    ],
    image: asterindoProject,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Home",
    description:
      "Smart home apps that can control almost all additional electrical devices such as lights, TV, AC, Auto Gate, Window Curtain, and so on. Can be control devices remotely and schedule it",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: blivingProject,
    source_code_link: "https://github.com/",
  },
  {
    name: "Point of Sale",
    description:
      "Point Of Sales system (POS) that can help you manage your business with various features needed. You can record transactions, monitor finances, manage product stock and so on",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: posProject,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFT Marketplace",
    description:
      "Build NFT Marketplace using web3 support network ETH, polygon, arbitrum and optimism blockchain. Users can make transactions (buy/sell/bid), upload the art and searching collection items.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
    ],
    image: artpediaProject,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
