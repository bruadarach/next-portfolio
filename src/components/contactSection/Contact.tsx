"use client";
import React from "react";
import styles from "./contact.module.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { ContactEmail } from "../contactEmail/ContactEmail";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.title}>
        Contact <span>Me</span>
      </h1>
      <div className={styles.contact}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>
                <MdEmail />
              </span>
            </div>
            <div className={styles.infoWrapper}>
              <h2>Have a question?</h2>
              <p>
                <u>
                  <a href="mailto:suji.sujeongji@gmail.com">
                    suji.sujeongji@gmail.com
                  </a>
                </u>
              </p>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>
                <MdLocationOn />
              </span>
            </div>
            <div className={styles.infoWrapper}>
              <h2>Current Location</h2>
              <p>South Korea</p>
            </div>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <ContactEmail />
        </div>
      </div>
    </section>
  );
};

export default Contact;
