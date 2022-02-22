import React from "react";
import { Button } from "@mui/material";
import s from "./SearchedItem.module.scss";

const SearchedItem = ({ item }) => {
  const btnStyle = {
    p: 0,
    minWidth: 40,
    borderRadius: 30,
  };
  if (!item) return null;
  // console.log(item);
  return (
    <div className={s.item} key={item.id}>
      <div className={s.nameBox}>
        <img src={item.image.small} className={s.img} alt={item.id} />
        <p className={s.coinName}>{item.id}</p>
      </div>
      <Button
        variant="contained"
        sx={btnStyle}
        onClick={() => console.log(item.id)}
      >
        +
      </Button>
    </div>
  );
};

export default SearchedItem;
