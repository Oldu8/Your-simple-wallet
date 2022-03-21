import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import s from "./header.module.scss";

const Header = () => {
  // comment: можно обойтись без лишнего стейта isMobile, потому что screenWidth возввращает если это мобилка
  const [isMobile, setMobile] = useState(false);

  const screenWidth = useMediaQuery({ query: "(max-width: 754px)" });
  useEffect(() => {
    setMobile(screenWidth);
  }, [screenWidth]);

  if (isMobile) {
    return null;
  }
  return (
    <AppBar position="static" className={s.header}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center" }}
        className={s.toolbar}
      >
        <Typography variant="h4" align="center">
          Welcome to your friendly crypto wallet
        </Typography>
        <IconButton color="inherit" sx={{ ml: 5 }}>
          <MonetizationOnIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
