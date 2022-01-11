import React from "react";
import s from "./coinList.module.scss";
import testArr from "../../testArr";

const CoinList = () => {
  return (
    <section className={s.wrap}>
      <div className={s.header}>Your assets:</div>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Holdings</th>
            <th>Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={s.fullName}>{testArr[0].fullName}</td>
            <td className={s.price}>{testArr[0].price}</td>
            <td className={s.holding}>0</td>
            <td className={s.equivalent}>0</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CoinList;
