import React, { useState } from "react";
import s from "./CoinOptionBlock.module.scss";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { addCoinToPortfolio } from "../../redux/actions";
import { useDispatch } from "react-redux";

const CoinOptionBlock = (item) => {
  const [queryQuantity, setQueryQuantity] = useState("");
  const [queryPrice, setQueryPrice] = useState("");

  const checkComma = (digit) => {
    const price = digit.replace(/,/, ".");
    setQueryPrice(price);
  };

  const dispatch = useDispatch();

  const addCoin = ({ item }) => {
    const coinInfo = { ...item, queryPrice, queryQuantity };
    dispatch(addCoinToPortfolio(coinInfo));
  };

  return (
    <Container className={s.wrap} sx={{ display: "flex" }}>
      <div className={s.block}>
        <TextField
          id="standard-basic"
          label="Quantity"
          variant="standard"
          value={queryQuantity}
          onChange={(e) => setQueryQuantity(e.target.value)}
        ></TextField>
      </div>
      <div className={s.block}>
        <TextField
          id="standard-basic"
          label="Price per coin"
          variant="standard"
          value={queryPrice}
          onChange={(e) => checkComma(e.target.value)}
        ></TextField>
      </div>
      <Button
        variant="outlined"
        color="success"
        size="small"
        className={s.button}
        onClick={() => addCoin(item)}
      >
        Add
      </Button>
    </Container>
  );
};

export default CoinOptionBlock;
