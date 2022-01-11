import React from "react";
import ItemList from "../ItemList/ItemList";
import s from "./ListOfCoins.module.scss";

const ListOfCoins = () => {
  return (
    <section className={s.wrap}>
      <div className={s.header}>List of coins:</div>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.heading}>Rank</th>
            <th className={s.heading}>Name</th>
            <th className={s.heading}>Price</th>
            <th className={s.heading}>Market Cap</th>
          </tr>
        </thead>
        <ItemList />
      </table>
    </section>
  );
};

export default ListOfCoins;
