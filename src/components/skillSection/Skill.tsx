import styles from "./skill.module.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Skill = () => {
  const frontend = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Webpack",
    "Yarn Berry",
  ];

  const backend = ["Node.js", "Express.js", "MongoDB", "Firebase"];

  return (
    <section id="skill" className={styles.container}>
      <h1 className={styles.title}>
        My <span>Skills</span>
      </h1>
      <div className={styles.skills}>
        <div className={styles.skillBox}>
          <div>
            <h1>Frontend Development</h1>
          </div>
          <div>
            <ul>
              {frontend.map((skill, index) => (
                <li key={index}>
                  <BsCheckCircleFill className={styles.icon} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.skillBox}>
          <div>
            <h1>Backend Development</h1>
          </div>
          <div>
            <ul>
              {backend.map((skill, index) => (
                <li key={index}>
                  <BsCheckCircleFill className={styles.icon} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
