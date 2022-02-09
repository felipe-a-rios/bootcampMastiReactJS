import styles from "./styles.module.css";
import logoWhite from "../../assets/images/logo_white_full.png";
import { BlueLine } from "../BlueLine";

import faceLogo from "../../assets/images/facebook.svg";
import instaLogo from "../../assets/images/instagram.svg";
export default function FooterTable() {
  // cada tr é uma linha da tabela
  // cada td é uma coluna da tabela
  //https://www.tablesgenerator.com/text_tables
  return (
    <>
      <BlueLine />
      <div className={styles.footer}>
        <table className={styles.table}>
          <tr>
            <td>
              <div className={styles.logoBox}>
                <a href="https://masti.com.br/">
                  <img
                    className={styles.logo}
                    src={logoWhite}
                    alt="logo masti"
                  />
                </a>
              </div>
            </td>
            <td>
              <div className={styles.linkContent}>
                <div className={styles.linkBox}>
                  <a href="/">Política de privacidade</a>
                  <a href="/"> Cursos</a>
                  <a href="/"> Sobre</a>
                  <a href="/"> Contato</a>
                  <a href="/"> Cadastrar</a>
                  <hr />
                  <button className={styles.loginButton}>ENTRAR</button>
                </div>
              </div>
            </td>
          </tr>
          <tr style={{ height: "100px" }}>
            <td colSpan={2}>
              <hr className={styles.linhaInfernal} />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.textBox}>
                <span>
                  Copyright 2019 Itsam, desenvolvido pela{" "}
                  <a className={styles.masti} href="https://masti.com.br/">
                    MASTI
                  </a>
                </span>
              </div>
            </td>
            <td>
              <div className={styles.iconsBox}>
                <a href="https://www.facebook.com/grupomasti">
                  <img src={faceLogo} alt="facebook logo" />
                </a>
                <a href="https://www.instagram.com/masti.tech/">
                  <img src={instaLogo} alt="instagram logo" />
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
