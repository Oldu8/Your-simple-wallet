import React, { useEffect, useState } from "react";
import styles from "./Balance.module.scss";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { priceFormatter } from "../Functions/formatters";

const Balance = () => {
  const { portfolioCoins } = useSelector((state) => state.portfolioCoins);
  const [yourBalance, setBalance] = useState(0);
  useEffect(() => {
    let total = 0;
    portfolioCoins.forEach((item) => {
      total += item.queryQuantity * item.queryPrice;
    });
    setBalance(total);
  }, [portfolioCoins]);

  return (
    <Container className={styles.wrap}>
      <h4 className={styles.balance}>Your balance:</h4>
      <Typography
        variant="span"
        sx={{ color: "rgb(61, 56, 56)" }}
        className={styles.balance}
      >
        {priceFormatter.format(yourBalance)}
      </Typography>
    </Container>
  );
};

export default Balance;
