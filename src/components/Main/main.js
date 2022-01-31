import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
          <Link to="/"> Top 10 coins</Link>
        </button>
        <button className={s.switchBtn} onClick={clickOnPortfolio}>
          <Link to="/portfolio"> My portfolio</Link>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<ListOfCoins />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="*" element={<ListOfCoins />}></Route>
      </Routes>
    </section>
  );
};

export default Main;
