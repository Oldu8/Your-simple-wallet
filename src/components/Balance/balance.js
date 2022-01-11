import React from "react";
import s from "./balance.module.scss";

const Balance = () => {
  return (
    <section className={s.wrap}>
      <div>Your balance:</div>
      <span className={s.balance}>7777$</span>
    </section>
  );
};

export default Balance;
