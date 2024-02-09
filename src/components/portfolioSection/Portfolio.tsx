import styles from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../utils/data";

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
                    href={project.liveDemoLink}
                    target="_blank"
                    passHref
                    rel="noopener noreferrer"
                  >
                    <span>Live</span> Demo
                  </Link>
                </div>
                {project.documentLink ? (
                  <div className={styles.link}>
                    <Link
                      href={project.documentLink}
                      target="_blank"
                      passHref
                      rel="noopener noreferrer"
                    >
                      Doc
                    </Link>
                  </div>
                ) : null}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
