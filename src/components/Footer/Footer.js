import React from "react";

import styles from "./Footer.module.scss";
import IconLogoHaloLab from "../../assets/IconLogoHaloLab/IconLogoHaloLab";

const Footer = () => {
  return (
    <footer className={styles.wrap}>
      <a href={"https://www.halo-lab.com/"} className={styles.content}>
        <p>With</p>

        <div className={styles.heart}>
          <p>&#x2764;&#xFE0F;</p>
        </div>

        <p>from</p>

        <div className={styles.logo}>
          <IconLogoHaloLab />
        </div>

        <p className={styles.haloLab}>HALO LAB</p>
      </a>
    </footer>
  );
};

export default Footer;
