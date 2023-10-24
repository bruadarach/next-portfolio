import styles from "./socialAccount.module.css";
import Link from "next/link";
import { socialAccounts } from "../../utils/data";

const SocialAccount = () => {
  return (
    <>
      <div className={styles.social}>
        <ul>
          {socialAccounts.map((account, index) => {
            const Icon = account.icon;
            return (
              <li key={index}>
                <Link
                  href={account.href}
                  target="_blank"
                  passHref
                  rel="noopener noreferrer"
                >
                  {account.icon && (
                    <Icon size={account.size} style={{ cursor: "pointer" }} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SocialAccount;
