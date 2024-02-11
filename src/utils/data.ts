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
  `I am a motivated full-stack developer with a strong passion for
creating well-designed and functional web applications.`,
  `While I primarily focus on front-end development, I have been
training myself to become a full-stack developer with a JavaScript
foundation. In particular, I have been emphasizing my studies on
React.js for the frontend and Node.js for the backend with the MERN Stack.`,
  `I love to learn new technologies and apply them to real-world
projects. I look forward to contributing to dynamic projects as a
team player and building user-friendly interfaces that leave a
lasting impression.`,
];

export const projects = [
  {
    name: "Moongtel-refactored",
    tags: ["#Fullstack", "#MERN", "#Redux-toolkit"],
    description:
      "This web application is a platform that facilitates hotel reservations, especially for pet-dedicated hotels. This is a solo full-stack project that I refactored my previous team project, 'Moongtel'.",
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
    githubLink: "https://github.com/bruadarach/moongtel-refactored",
    liveDemoLink: "https://moongtels.onrender.com/",
    documentLink:
      "https://sujeongji.notion.site/Moongtel-cont-c2737afcb751487b9a20260127f5b885?pvs=4",
  },
  {
    name: "Bruadarach",
    tags: ["#Fullstack", "#Next.js", "#Next-Auth"],
    description:
      "This web application provides information on Korean culture, events, and news to help foreigners living in Korea. This full-stack project is built with Next.js 13 and integrated with MongoDB",
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
    githubLink: "https://github.com/bruadarach/next-bruadarach",
    liveDemoLink: "https://next-bruadarach.vercel.app",
    documentLink:
      "https://sujeongji.notion.site/Bruadarach-f16a235c05934b7db65a5f6a5102604f?pvs=4",
  },
  {
    name: "Portfolio",
    tags: ["#Frontend", "#Next.js"],
    description:
      "This is a fully responsive portfolio web application built with Next.js 13. It showcases my current skills and projects.",
    skills: [
      ["Next", "/next.svg"],
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["Vercel", "/vercel.png"],
    ],
    githubLink: "https://github.com/bruadarach/next-portfolio",
    liveDemoLink: "https://www.sujeongji.com",
  },
  {
    name: "Moongtel",
    tags: ["#Frontend", "#Next.js", "#Recoil"],
    description:
      "This was a team project built with Next.js 12 and I participated as a frontend developer. (At present, it is not connected to a server.)",
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
];

export const cv =
  "https://drive.google.com/file/d/1J5Zu3avV6S1jqWu-4x2KFXUVylJCHYpG/view?usp=sharing";

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
