"use client";

import React, { useEffect, useState } from "react";
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

  const openMenu = () => {
    document.body.style.overflowY = "hidden";
    setOpen(!open);
  };

  const closeMenu = (
    e:
      | React.MouseEvent<HTMLLIElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    document.body.style.overflowY = "auto";
    setOpen(false);
  };

  return (
    <nav className={isScrolled ? styles.isScrolled : styles.sticky}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={(e) => closeMenu(e)}>
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
          <MobileMenu open={open} openMenu={openMenu} closeMenu={closeMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
