import React, { useEffect, useState } from "react";
import s from "./balance.module.scss";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Balance = () => {
  const priceFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const { portfolioCoins } = useSelector((state) => state.portfolioCoins);
  const [yourBalance, setBalance] = useState(0);
  useEffect(() => {
    // comment: если болле современно то можно через метод массива .reduce
    let total = 0;

    portfolioCoins.forEach((item) => {
      total += item.queryQuantity * item.queryPrice;
    });
    setBalance(total);
  }, [portfolioCoins]);

  return (
    <Container className={s.wrap}>
      <h4 className={s.balance}>Your balance:</h4>
      <Typography
        variant="span"
        sx={{ color: "rgb(61, 56, 56)" }}
        className={s.balance}
      >
        {priceFormatter.format(yourBalance)}
      </Typography>
    </Container>
  );
};

export default Balance;
