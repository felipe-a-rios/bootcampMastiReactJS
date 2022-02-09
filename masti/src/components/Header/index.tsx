import logoImg from "../../assets/images/logo_blue_full.png";
import { BlueLine } from "../BlueLine";
import styles from "./styles.module.css";
type headerProps = {
  linkText?: string;
  linkText2?: string;
  buttonText?: string;
};

export default function Header({ linkText, buttonText, linkText2 }: headerProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgBox}>
          <a href="https://masti.com.br/">
            <img src={logoImg} className={styles.logo} alt="logo Masti" />
          </a>
        </div>
        <div className={styles.linkBox}>
          <a href="/">{linkText}</a>
          <hr className={styles.bar}></hr>
          <a href="/">{linkText2}</a>
          <button className={styles.mainButton}>{buttonText}</button>
        </div>
      </header>
      <BlueLine />
    </>
  );
}
