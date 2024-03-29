import React, { useState } from "react";
import styles from "./CoinOptionBlock.module.scss";
import { Container, TextField, Button } from "@mui/material";
import { addCoinToPortfolio } from "../../redux-toolkit/addCoinSlice";
import { useDispatch } from "react-redux";
import { CoinOptionBlockComp } from "../../types/types";
import { AddCoinAction, ICoinPortfolio } from "../../interface/entities";

const CoinOptionBlock: CoinOptionBlockComp = ({ itemOption }) => {
  const inititalState = 0;
  const [queryQuantity, setQueryQuantity] = useState<number>(inititalState);
  const [queryPrice, setQueryPrice] = useState<number>(inititalState);

  const dispatch = useDispatch();

  const checkComma = (digit: string) => {
    const price = digit.replace(/,/, ".");
    setQueryPrice(+price);
  };

  const addCoin = () => {
    const coinInfo: AddCoinAction & ICoinPortfolio = {
      ...itemOption,
      queryPrice,
      queryQuantity,
    };
    dispatch(addCoinToPortfolio(coinInfo));
    setQueryPrice(inititalState);
    setQueryQuantity(inititalState);
  };

  return (
    <Container className={styles.wrap} sx={{ display: "flex" }}>
      <div className={styles.block}>
        <TextField
          id="standard-basic"
          label="Quantity"
          variant="standard"
          value={queryQuantity}
          onChange={(e) => setQueryQuantity(+e.target.value)}
        ></TextField>
      </div>
      <div className={styles.block}>
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
        className={styles.button}
        onClick={() => addCoin()}
        disabled={queryQuantity && queryPrice ? false : true}
      >
        Add
      </Button>
    </Container>
  );
};

export default CoinOptionBlock;
