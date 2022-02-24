import React from "react";
import { Button } from "@mui/material";
import s from "./SearchedItem.module.scss";
import { useDispatch } from "react-redux";
import { addCoinToPortfolio } from "../../redux/actions";

const SearchedItem = ({ item }) => {
  const dispatch = useDispatch();

  const addCoin = (item) => {
    console.log(item);
    dispatch(addCoinToPortfolio(item));
  };

  const btnStyle = {
    p: 0,
    minWidth: 40,
    borderRadius: 30,
  };
  if (!item) return null;
  return (
    <div className={s.item} key={item.id}>
      <div className={s.nameBox}>
        <img src={item.image.small} className={s.img} alt={item.id} />
        <p className={s.coinName}>{item.id}</p>
      </div>
      <Button variant="contained" sx={btnStyle} onClick={() => addCoin(item)}>
        +
      </Button>
    </div>
  );
};

export default SearchedItem;
