import React from "react";
import { Button } from "@mui/material";
import styles from "./SearchedItem.module.scss";
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
      <div className={styles.item} key={item.id}>
        <div className={styles.nameBox}>
          <img src={item.image.small} className={styles.img} alt={item.id} />
          <p className={styles.coinName}>{item.id}</p>
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
