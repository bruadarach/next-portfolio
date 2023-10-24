import styles from "./skill.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { skills } from "../../utils/data";

const Skill = () => {
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
              {skills.frontend.map((skill, index) => (
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
              {skills.backend.map((skill, index) => (
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
