import React, { useState } from "react";
import { Button } from "@mui/material";
import s from "./SearchedItem.module.scss";
import CoinOptionBlock from "../CoinOptionBlock/CoinOptionBlock";

const SearchedItem = ({ item, openedID, setOpen }) => {
  const btnStyle = {
    p: 0,
    minWidth: 40,
    borderRadius: 30,
  };
  if (!item) return null;
  return (
    <section>
      <div className={s.item} key={item.id}>
        <div className={s.nameBox}>
          <img src={item.image.small} className={s.img} alt={item.id} />
          <p className={s.coinName}>{item.id}</p>
        </div>
        <Button
          variant="contained"
          sx={btnStyle}
          onClick={() => setOpen(item.id)}
        >
          +
        </Button>
      </div>
      {openedID === item.id ? <CoinOptionBlock item={item} /> : null}
    </section>
  );
};

export default SearchedItem;
