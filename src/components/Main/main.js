import React, { useState } from "react";
import Balance from "../Balance/balance";
import Portfolio from "../Portfolio/portfolio";
import ListOfCoins from "../ListOfCoins/ListOfCoins";
import s from "./main.module.scss";

const Main = () => {
  const clickOnCoins = () => {
    console.log("open top 10 coins");
  };
  const clickOnPortfolio = () => {
    console.log("open portfolio");
  };

  return (
    <section className={s.wrap}>
      <div className={s.switchBlock}>
        <button className={s.switchBtn} onClick={clickOnCoins}>
          Top 10 coins
        </button>
        <button className={s.switchBtn} onClick={clickOnPortfolio}>
          My portfolio
        </button>
      </div>
      <ListOfCoins />
      {/* <Portfolio /> */}
    </section>
  );
};

export default Main;
