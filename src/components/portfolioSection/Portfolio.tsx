import styles from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Moongtels",
    tags: ["#Refactoring", "#Full-stack", "#MERN"],
    description:
      "This is a solo full-stack project that I refactored my previous team project, 'Moongtel'.",
    skills: [
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["Redux-toolkit", "/redux.svg"],
      ["Webpack", "/webpack.svg"],
      ["Styled-components", "/styledcomponents.png"],
      ["Node", "/node.svg"],
      ["MongoDB", "/mongodb.svg"],
      ["NaverCloud", "/navercloud.png"],
      ["Firebase", "/firebase.svg"],
    ],
    githubLink: "https://github.com/bruadarach/moongtels",
    liveDemoLink: "https://moongtels.onrender.com",
  },
  {
    name: "Moongtel",
    tags: ["#Front-end", "#Next.js"],
    description:
      "This is a team project in which I participated as a frontend developer. (At present, it is not connected to a server.)",
    skills: [
      ["Next", "/next.svg"],
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
      ["Recoil", "/recoil.png"],
      ["Styled-components", "/styledcomponents.png"],
      ["Java", "/java.svg"],
    ],
    githubLink: "https://github.com/codestates-seb/seb39_main_012",
    liveDemoLink: "https://moongtel.vercel.app/",
  },
  {
    name: "Portfolio",
    tags: ["#Front-end", "#Next.js"],
    description:
      "This is a fully responsive portfolio web/app built with Next.js. (Database integration is planned for the future.)",
    skills: [
      ["Next", "/next.svg"],
      ["React", "/react.svg"],
      ["TypeScript", "/typescript.svg"],
    ],
    githubLink: "https://github.com/bruadarach",
    liveDemoLink: "https://",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <h1 className={styles.title}>
        My <span>Portfolio</span>
      </h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`/project-${project.name.toLowerCase()}.png`}
                  alt={`project ${project.name}`}
                  width={580}
                  height={320}
                  priority
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className={styles.textSection}>
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
              <div className={styles.name}>{project.name}</div>
              <div className={styles.desc}>{project.description}</div>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  {project.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <Image
                        src={skill[1]}
                        alt={skill[0]}
                        width={25}
                        height={25}
                        priority
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.link}>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    passHref
                    rel="noopener noreferrer"
                  >
                    Github
                  </Link>
                </div>
                <div className={styles.link}>
                  <Link
                    href={project.liveDemoLink}
                    target="_blank"
                    passHref
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
