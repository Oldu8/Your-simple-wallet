import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  styled,
  Paper,
} from "@mui/material";
import Balance from "../Balance/balance";
import s from "./portfolio.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import PortfolioItem from "../PortfolioItem/portfolioItem";
import { getPortfolioCoins } from "./selectors";

const Portfolio = () => {
  const portfolioArr = useSelector(getPortfolioCoins);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const [isModal, setModal] = useState(false);
  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  return (
    <section>
      <Container
        className={s.header}
        sx={{
          display: "flex",
        }}
      >
        <Balance></Balance>
        <Button variant="contained" size="large" onClick={modalOpen}>
          Add new coin
        </Button>
        <ModalWindow isModal={isModal} modalClose={modalClose} />
      </Container>
      <section className={s.wrap}>
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
            {portfolioArr
              ? portfolioArr.map((item, index) => (
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
