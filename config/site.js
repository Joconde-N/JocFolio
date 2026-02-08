export const siteConfig = {
  name: "Ngoga Joconde",
  logoText: "NJ",
  title: "Full Stack Developer",
  description: "Passionate about building innovative web applications that solve real-world problems.",
  email: "jocondengoga@gmail.com",
  cvLink: "https://drive.google.com/file/d/1HOChcrck5-pmmW9-c_3ZYFKabmqyFE6B/view",
  social: {
    github: "https://github.com/Joconde-N",
    linkedin: "https://www.linkedin.com/in/joconde-ngoga/",
    email: "mailto:jocondengoga@gmail.com"
  }
};

export const skills = {
  frontend: [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" }
  ],
  backend: [
    { name: "PHP", level: "Basic" },
    { name: "Python", level: "Basic" },
    { name: "Node.js", level: "Basic" }
  ],
  database: [
    { name: "MySQL", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" }
  ],
  tools: [
    { name: "Git", level: "Intermediate" },
    { name: "GitHub", level: "Intermediate" },
    { name: "GitLab", level: "Beginner" },
    { name: "VS Code", level: "Advanced" },
    { name: "Vercel", level: "Beginner" },
    { name: "netlify", level: "Beginner" }
  ],
  design: [
    { name: "Figma", level: "Beginner" },
    { name: "Canva", level: "Beginner" },
    { name: "Affinity", level: "Beginner" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "FilmFolio",
    description: "FilmFolio is a clean, modern movie watchlist web app that lets users discover films, save favorites to watchlist, track watching progress, and organize personal movie collections. Built with React for a smooth, responsive experience.",
    image: "/projects/film.PNG",
    tech: ["React", "Node.js", "TailwindCSS", "JavaScript", " Vite", "TMDB API"],
    liveUrl: "https://f-folio.netlify.app",
    githubUrl: "https://github.com/Joconde-N/FilmFolio"
  },
  {
    id: 2,
    title: "TikeYanjye",
    description: "TikeYanjye is a modern bus ticket reservation web app that allows users to search trips across Rwanda, select seats, make secure payments, and receive instant ticket confirmations, all through a clean, user-friendly interface.",
    image: "/projects/tikeyanjye.PNG",
    tech: ["React", "JavaScript", "Vite", "TailwindCSS"],
    liveUrl: "https://tikeyanjye.netlify.app/",
    githubUrl: "https://github.com/Joconde-N/TikeYanjye"
  },
  {
    id: 3,
    title: "CarLink",
    description: "Car-Link is a car rental booking application that allows users to browse a catalog of vehicles, view detailed information about each car, and manage their bookings. The app features a multi-page interface with a car listing page, individual car detail pages, and a bookings management section.",
    image: "/projects/carlink.PNG",
    tech: ["React", "Vite", "Tailwind css", "JavaScript"],
    liveUrl: "https://carslink.netlify.app/",
    githubUrl: "https://github.com/Joconde-N/carLink"
  }
];