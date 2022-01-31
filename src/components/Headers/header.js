import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import s from "./header.module.scss";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
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
