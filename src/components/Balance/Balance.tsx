import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { priceFormatter } from "../Functions/formatters";
import { IState } from "../../interface/entities";
// @ts-ignore
import styles from "./Balance.module.scss";

const Balance = () => {
  const portfolioCoins = useSelector(
    (state: IState) => state.portfolioCoins.portfolioCoins
  );
  const [yourBalance, setBalance] = useState(0);

  useEffect(() => {
    if (portfolioCoins.length > 0) {
      const res = portfolioCoins.reduce((sum, current) => {
        let multi = +current.queryQuantity * +current.queryPrice;
        return sum + multi;
      }, 0);
      setBalance(res);
    }
  }, [portfolioCoins]);

  return (
    <Container className={styles.wrap}>
      <h4 className={styles.balance}>Your balance:</h4>
      <Typography
        variant="body2"
        sx={{
          color: "rgb(61, 56, 56)",
          fontWeight: "bold",
          fontSize: "2.5rem",
        }}
        className={styles.balance}
      >
        {priceFormatter(+yourBalance)}
      </Typography>
    </Container>
  );
};

export default Balance;
