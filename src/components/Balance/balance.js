import React, { useEffect, useState } from "react";
import s from "./balance.module.scss";
import { Container, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getPortfolioCoins } from "./selectors";

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

  const portfolioArr = useSelector(getPortfolioCoins);
  const [yourBalance, setBalance] = useState(0);

  const priceChangeClass = () => {
    if (yourBalance > 0) {
      return [s.percentagePlus, s.percentage];
    } else {
      return [s.percentageMinus, s.percentage];
    }
  };

  useEffect(() => {
    let total = 0;
    portfolioArr.forEach((item) => {
      total += item.queryQuantity * item.queryPrice;
    });
    setBalance(total);
  }, [portfolioArr]);

  return (
    <Container className={s.wrap}>
      <Typography variant="h4" mt={1}>
        Your balance:
      </Typography>
      <Typography
        variant="span"
        sx={{ color: "rgb(61, 56, 56)" }}
        className={s.balance}
      >
        {priceFormatter.format(yourBalance)}
      </Typography>
      {/* <Typography
        variant="span"
        sx={{ color: "rgb(61, 56, 56)" }}
        className={priceChangeClass()}
      >
        {percentageFormatter.format(0.666)}
      </Typography> */}
    </Container>
  );
};

export default Balance;
