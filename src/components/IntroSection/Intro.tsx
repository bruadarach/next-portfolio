import React from "react";
import styles from "./intro.module.css";

const Intro = () => {
  return (
    <section id="home" className={styles.container}>
      <div>
        <div className={styles.hello}>
          Hello<b>,</b> I am
        </div>
        <div className={styles.name}>Sujeong Ji</div>
        <div className={styles.job}>Frontend Developoer</div>
        <div className={styles.cv}>
          <button>Download CV</button>
        </div>
      </div>
      <div>Picture</div>
    </section>
  );
};

export default Intro;
