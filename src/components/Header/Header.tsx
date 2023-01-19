import React from "react";
import { useMediaQuery } from "react-responsive";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// @ts-ignore
import styles from "./Header.module.scss";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 754px)" });
  if (isMobile) return null;
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center" }}
        className={styles.toolbar}
      >
        <Typography variant="h4" align="center">
          Welcome to your friendly crypto portfolio tracker!
        </Typography>
        <IconButton color="inherit" sx={{ ml: 5 }}>
          <MonetizationOnIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
