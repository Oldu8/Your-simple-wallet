import React, { useEffect } from "react";
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
import ItemList from "../ItemList/ItemList";
import ListOfCoins from "../ListOfCoins/ListOfCoins";

const Portfolio = () => {
  // useEffect(() => {
  //   getCoinsList(page);
  // }, [page]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <section>
      <Container
        className={s.header}
        sx={{
          bgcolor: "#e2e9eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Balance></Balance>
        <Button variant="contained" size="large">
          Add new coin
        </Button>
      </Container>

      <section className={s.wrap}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" fontWeight={500}>
                  Rank
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Icon
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Name
                </StyledTableCell>
                <StyledTableCell align="center" fontWeight={500}>
                  Price
                </StyledTableCell>{" "}
                <StyledTableCell align="center" fontWeight={500}>
                  Price change percentage
                </StyledTableCell>
                <StyledTableCell align="center">Market Cap</StyledTableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </section>
    </section>
  );
};

export default Portfolio;
