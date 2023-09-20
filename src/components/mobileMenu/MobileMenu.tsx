import React, { useState } from "react";
import styles from "./mobileMenu.module.css";
import { navLinks } from "../navbar/Navbar";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  return (
    <>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div>
          <ul className={styles.responsiveMenus}>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={styles.responsiveMenu}
                onClick={() => setOpen(!open)}
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
