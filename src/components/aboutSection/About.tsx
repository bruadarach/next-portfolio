import styles from "./about.module.css";
import Image from "next/image";
import { introduction } from "../../utils/data";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.title}>
        About <span>Me</span>
      </h1>
      <div className={styles.contents}>
        <div className={styles.imageWrapper}>
          <Image
            src="/work.png"
            alt="work"
            width={400}
            height={400}
            priority
            style={{ borderRadius: "10px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className={styles.textWrapper}>
          {introduction.map((item, index) => (
            <p key={index} className={styles.text}>
              {item}
              {index < introduction.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
