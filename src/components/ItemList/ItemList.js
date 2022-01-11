import React from "react";
import s from "./ItemList.module.scss";

const ItemList = () => {
  const formatter = new Intl.NumberFormat("de-DE");

  return (
    <tbody>
      <tr className={s.row}>
        <td className={s.rank}>1</td>
        <td className={s.name}>Bitcoin</td>
        <td className={s.price}>{formatter.format(41935)}</td>
        <td className={s.marketCap}>{formatter.format(34303531)}</td>
      </tr>
    </tbody>
  );
};

export default ItemList;
