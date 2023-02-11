import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Balance from "../Balance/Balance";
import ModalWindow from "../ModalWindow/ModalWindow";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { StyledTableCell } from "../Functions/funcForMUITable";
import styles from "./Portfolio.module.scss";
import { IState } from "../../interface/entities";
import { cellNamesForPortfolio } from "../../assets/arraysForTable";

const Portfolio = () => {
  const portfolioCoins = useSelector(
    (state: IState) => state.portfolioCoins.portfolioCoins
  );
  const [isModal, setModal] = useState(false);
  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <section>
      <Container
        className={styles.header}
        sx={{
          display: "flex",
        }}
      >
        <Balance />
        <Button variant="contained" size="medium" onClick={modalOpen}>
          Add new coin
        </Button>
        {isModal && <ModalWindow isModal={isModal} modalClose={modalClose} />}
      </Container>
      <section className={styles.wrap}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {cellNamesForPortfolio.map((i) => (
                  <StyledTableCell key={i}>{i}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            {portfolioCoins
              ? portfolioCoins.map((item, index) => (
                  <PortfolioItem item={item} key={index} />
                ))
              : null}
          </Table>
        </TableContainer>
      </section>
    </section>
  );
};

export default Portfolio;
