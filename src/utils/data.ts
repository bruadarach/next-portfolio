import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";

export const socialAccounts = [
  {
    name: "Github",
    href: "https://github.com/bruadarach",
    icon: AiFillGithub,
    size: 32,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sujeongji",
    icon: AiFillLinkedin,
    size: 33,
  },
  {
    name: "Notion",
    href: "https://sujeongji.notion.site/SUJEONG-JI-675d7a916010494ea8c38ff771aafedf?pvs=4",
    icon: RxNotionLogo,
    size: 32,
  },
];

export const introduction = [
  `I am a motivated frontend developer with a strong passion for
creating well-designed and functional web applications.`,
  `While I primarily focus on frontend development, I have been
training myself to become a full-stack developer with a JavaScript
foundation. In particular, I have been emphasizing my studies on
React.js for the frontend and Node.js for the backend.`,
  `I love to learn new technologies and apply them to real-world
projects. I look forward to contributing to dynamic projects as a
team player and building user-friendly interfaces that leave a
lasting impression.`,
];

export const projects = [
  {
    name: "Moongtel-refactored",
    tags: ["#Full-stack", "#MERN", "#Redux-toolkit"],
    description:
      "This is a solo full-stack project that I refactored my previous team project, 'Moongtel'.",
    skills: [
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["Redux-toolkit", "/redux.svg"],
      ["Webpack", "/webpack.svg"],
      ["Yarn Berry", "/yarn-berry.png"],
      ["Styled-components", "/styledcomponents.png"],
      ["Node", "/node.svg"],
      ["MongoDB", "/mongodb.svg"],
      ["NaverCloud", "/navercloud.png"],
      ["Firebase", "/firebase.svg"],
      ["Render", "/render.png"],
    ],
    githubLink: "https://github.com/bruadarach/moongtels",
    liveDemoLink: "https://moongtels.onrender.com",
  },
  {
    name: "Moongtel",
    tags: ["#Front-end", "#Next.js", "#Recoil"],
    description:
      "This is a team project in which I participated as a frontend developer. (At present, it is not connected to a server.)",
    skills: [
      ["Next", "/next.svg"],
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["Recoil", "/recoil.png"],
      ["Styled-components", "/styledcomponents.png"],
      ["Java", "/java.svg"],
      ["Vercel", "/vercel.png"],
    ],
    githubLink: "https://github.com/codestates-seb/seb39_main_012",
    liveDemoLink: "https://moongtel.vercel.app/",
  },

  {
    name: "Bruadarach",
    tags: ["#Full-stack", "#Next.js", "#Next-Auth"],
    description:
      "This is a full-stack project, built with Next.js and integrated with MongoDB. It offers  OAuth by Next-Auth.",
    skills: [
      ["Next", "/next.svg"],
      ["Next-Auth", "/next-auth.png"],
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["MongoDB", "/mongodb.svg"],
      ["Prisma", "/prisma.svg"],
      ["Firebase", "/firebase.svg"],
      ["Vercel", "/vercel.png"],
    ],
    githubLink: "https://github.com/bruadarach/next-blog",
    liveDemoLink: "https://next-bruadarach.vercel.app",
  },
  {
    name: "Portfolio",
    tags: ["#Front-end", "#Next.js"],
    description:
      "This is a fully responsive portfolio web/app built with Next.js. It showcases my current skills and projects.",
    skills: [
      ["Next", "/next.svg"],
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["Vercel", "/vercel.png"],
    ],
    githubLink: "https://github.com/bruadarach/next-portfolio",
    liveDemoLink: "https://next-portfolio-bruadarach.vercel.app",
  },
];

export const skills = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Webpack",
    "Yarn Berry",
  ],
  backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
};