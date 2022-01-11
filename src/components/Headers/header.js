import React from "react";
// import "header.scss";
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <div className={s.headline}>Welcome to your friendly crypto wallet</div>
    </header>
  );
};

export default Header;
