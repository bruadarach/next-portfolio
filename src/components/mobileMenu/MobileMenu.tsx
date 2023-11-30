import styles from "./mobileMenu.module.css";
import { navLinks } from "../navbar/Navbar";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  openMenu: () => void;
  closeMenu: (
    e:
      | React.MouseEvent<HTMLLIElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

const MobileMenu = ({ open, openMenu, closeMenu }: MobileMenuProps) => {
  return (
    <>
      <div className={styles.hamburger} onClick={() => openMenu()}>
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
                onClick={(e) => closeMenu(e)}
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
