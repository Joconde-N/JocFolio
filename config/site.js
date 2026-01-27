export const siteConfig = {
  name: "Ngoga Joconde",
  title: "Full Stack Developer",
  description: "Passionate about building innovative web applications that solve real-world problems.",
  email: "jocondengoga@gmail.com",
  cvLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
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
    { name: "VS Code", level: "Advanced" },
    { name: "Vercel", level: "Beginner" }
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
    image: "/projects/project2.jpg",
    tech: ["React", "JavaScript", "Vite", "TailwindCSS"],
    liveUrl: "https://tikeyanjye.netlify.app/",
    githubUrl: "https://github.com/Joconde-N/TikeYanjye"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Interactive dashboard with data visualization and analytics for business intelligence.",
    image: "/projects/project3.jpg",
    tech: ["React", "Python", "SQL"],
    liveUrl: "https://project3.example.com",
    githubUrl: "https://github.com/ngogajoconde/project3"
  }
];