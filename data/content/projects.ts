import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Ai Art Marketplace",
    desc: "Online Ai Arts Marketplace for buying and selling ai generated arts.",
    img: "/static/projects/ai-marketplace.png",
    link: "https://ai-art-marketplace.vercel.app/",
    github: "https://github.com/VSLuis1/ai-arts-marketplace",
    tags: ["React", "NextJS", "TailwindCSS", "spline"],
  },
  {
    id: 1,
    title: "Architecture Website Design",
    desc: "Minimilistick website templates ready-made for your next landing page.",
    img: "/static/projects/architecture.png",
    link: "https://architecture-nu.vercel.app/",
    github:"https://github.com/VSLuis1/architecture_landing_page",
    tags: ["Next JS", "Tailwind CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Code Snapper",
    desc: "Powerfull tool for creating and sharing code snippets on social media. [Ray.io clone] with extra features",
    img: "/static/projects/code-snapper.png",
    link: "https://code-snapper-red.vercel.app/",
    github: "https://github.com/VSLuis1/code-snapper",
    tags: ["React", "javascript"],
  },
  {
    id: 3,
    title: "Food App UI",
    desc: "Creative and well designed food app ui.[Created for technical round at Geekyness]",
    img: "/static/projects/food-app.png",
    link: "https://food-app1-nine.vercel.app/",
    github:"https://github.com/VSLuis1/food-app",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Kanban Board",
    desc: "Web based app for managing to do tasks using kanban method.",
    img: "/static/projects/kanban-board.png",
    link:"https://kanban-board-ecru.vercel.app/",
    github: "https://github.com/VSLuis1/kanban-board",
    tags: ["Next JS", "Typescript", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Candy Page",
    desc: "This Landing Page. [Created for technical round at Roc8 Career]",
    img: "/static/projects/candy-page.png",
    link:"https://frontend-dev-assignment.vercel.app/",
    github: "https://github.com/VSLuis1/frontend-dev-assignment",
    tags: ["React", "Tailwind CSS", "Javascript"],
  },
  {
    id: 6,
    title: "Onboarding Page",
    desc: "Onboarding page of website. [Created for technical round at Roc8 career]",
    img: "/static/projects/onboarding.png",
    link: "https://landing-page-nine-smoky.vercel.app/",
    github:"https://github.com/VSLuis1/frontend-dev-assignment-01",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "Notion Clone",
    desc: "[In Progress]. A fully funtional notion clone for managing day to day task.",
    img: "/static/projects/notion-clone.png",
    link: "#",
    github: "https://github.com/VSLuis1/notion-clone",
    tags: ["Next JS", "Typescript", "Clerk", "Convex"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects