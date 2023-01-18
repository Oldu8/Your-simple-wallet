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
import styles from "./Portfolio.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { StyledTableCell } from "../Functions/funcForMUITable";

const Portfolio = () => {
  const { portfolioCoins } = useSelector((state) => state.portfolioCoins);

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
                <StyledTableCell align="center" fontWeight={500}>
                  Icon
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Name
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Holdings
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Buy price
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Current Price
                </StyledTableCell>
                <StyledTableCell align="center">
                  Profit and Loss
                </StyledTableCell>
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
