import React from "react";
import Balance from "../Balance/balance";
import CoinList from "../CoinList/coinList";
import ListOfCoins from "../ListOfCoins/ListOfCoins";
import s from "./main.module.scss";

const Main = () => {
  return (
    <section className={s.wrap}>
      <div className={s.switchBlock}>
        <button className={s.switchBtn}>Top 10 coins</button>
        <button className={s.switchBtn}>My portfolio</button>
      </div>
      <ListOfCoins />
      {/* <Balance />
      <CoinList /> */}
    </section>
  );
};

export default Main;
