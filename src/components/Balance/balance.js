import React from "react";
import s from "./balance.module.scss";
import { Container, Typography, Box } from "@mui/material";

const Balance = () => {
  const priceFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const percentageFormatter = new Intl.NumberFormat("de-DE", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const priceChangeClass = (item) => {
    if (item > 0) {
      return [s.percentagePlus, s.percentage];
    } else {
      return [s.percentageMinus, s.percentage];
    }
  };
  return (
    <Container className={s.wrap}>
      <Typography variant="h4" mt={1}>
        Your balance:
      </Typography>
      <span className={s.balance}>7777$</span>
      <span className={priceChangeClass()}>
        {percentageFormatter.format(0.666)}
      </span>
    </Container>
  );
};

export default Balance;
