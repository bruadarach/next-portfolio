"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactEmail.module.css";

export const ContactEmail = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.current?.elements.namedItem(
      "from_name"
    ) as HTMLInputElement;
    const email = form.current?.elements.namedItem(
      "from_email"
    ) as HTMLInputElement;
    const message = form.current?.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    if (!name.value || !email.value || !message.value) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const nameRegex = /^[가-힣a-zA-Z\s]+$/;
    if (!name.value.match(nameRegex)) {
      alert("Please enter a valid name with English or Korean characters.");
      return;
    }

    const serviceID: string = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const userID: string = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, userID).then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Your message has not been sent. Please try again.");
        }
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.container}>
      <div className="inputContainer">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="from_name" placeholder="Your name" />
      </div>
      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="from_email"
          placeholder="Your email"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="Your message" />
      </div>
      <div className="inputContainer">
        <input type="submit" value="Send Message" />
      </div>
    </form>
  );
};
