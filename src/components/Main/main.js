import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import Portfolio from "../Portfolio/Portfolio";
import ListOfCoins from "../ListOfCoins/ListOfCoins";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <section className={s.wrap}>
      <div className={s.switchBlock}>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 3 }}
          className={s.switchBtn}
        >
          <Link to="/"> Top 10 coins</Link>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 3 }}
          className={s.switchBtn}
        >
          <Link to="/portfolio"> My portfolio</Link>
        </Button>
      </div>
      <Container>
        <Routes>
          <Route path="/" element={<ListOfCoins />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<ListOfCoins />}></Route>
        </Routes>
      </Container>
    </section>
  );
};

export default Main;
