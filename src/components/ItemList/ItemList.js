import React from "react";
// import { useSelector } from "react-redux";
import s from "./ItemList.module.scss";
// import { connect } from "react-redux";

const ItemList = ({ item }) => {
  if (!item) return null;
  const formatter = new Intl.NumberFormat("de-DE");
  return (
    <tbody>
      <tr className={s.row}>
        <td className={s.rank}>{item.market_cap_rank}</td>
        <td className={s.name}>{item.id}</td>
        <td className={s.price}>
          {formatter.format(item.current_price)}
          {/* {item.current_price} */}
        </td>
        <td className={s.marketCap}>{formatter.format(item.market_cap)}</td>
      </tr>
    </tbody>
  );
};

export default ItemList;
