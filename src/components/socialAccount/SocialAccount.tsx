import React from "react";
import styles from "./socialAccount.module.css";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";

const SocialAccount = () => {
  return (
    <>
      <div className={styles.social}>
        <ul>
          <li>
            <Link
              href="https://github.com/bruadarach"
              target="_blank"
              passHref
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={35}
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/sujeongji"
              target="_blank"
              passHref
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={36}
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://sujeongji.notion.site/SUJEONG-JI-675d7a916010494ea8c38ff771aafedf?pvs=4"
              target="_blank"
              passHref
              rel="noopener noreferrer"
            >
              <RxNotionLogo
                size={35}
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialAccount;
