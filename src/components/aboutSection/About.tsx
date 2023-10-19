import styles from "./about.module.css";
import Image from "next/image";

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
          <p>
            I am a motivated frontend developer with a strong passion for
            creating well-designed and functional web applications. <br />
            <br />
            While I primarily focus on frontend development, I have been
            training myself to become a full-stack developer with a JavaScript
            foundation. In particular, I have been emphasizing my studies on
            React.js for the frontend and Node.js for the backend. <br />
            <br />I love to learn new technologies and apply them to real-world
            projects. I look forward to contributing to dynamic projects as a
            team player and building user-friendly interfaces that leave a
            lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
