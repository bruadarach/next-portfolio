"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import MobileMenu from "../mobileMenu/MobileMenu";

export const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skill",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? styles.isScrolled : styles.sticky}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            Suji<b>.</b>
          </Link>
        </div>
        <div>
          <ul className={styles.menus}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.menu}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mobileMenu}>
          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
