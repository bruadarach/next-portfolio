import React from "react";
import styles from "./intro.module.css";
import Image from "next/image";
import Link from "next/link";
import DownloadPDF from "../downloadPDF/DownloadPDF";
import SocialAccount from "../socialAccount/SocialAccount";

const Intro = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.hello}>
          Hello<b>,</b> I am
        </div>
        <div className={styles.name}>Sujeong Ji</div>
        <div className={styles.job}>Frontend Developoer</div>
        <DownloadPDF />
        <SocialAccount />
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile.png"
            alt="profile"
            width={400}
            height={400}
            priority
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
