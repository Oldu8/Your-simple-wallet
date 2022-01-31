import React, { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { connect } from "react-redux";
import { downloadCoins, removeCoins } from "../../redux/actions";
import s from "./ListOfCoins.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import getCoins from "../getCoins";

const ListOfCoins = ({ topCoins, downloadCoins, removeCoins }) => {
  const getCoinsList = async () => {
    const result = await getCoins();
    downloadCoins(result);
  };

  useEffect(() => {
    getCoinsList();
  }, []);

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
    <section className={s.wrap}>
      <Typography
        variant="h2"
        align="center"
        color="primary.dark"
        sx={{ fontWeight: "medium" }}
        className="header"
      >
        List of coins:
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Rank</StyledTableCell>
              <StyledTableCell align="center">Icon</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Market Cap</StyledTableCell>
            </TableRow>
          </TableHead>
          {topCoins.map((coin) => (
            <ItemList item={coin} key={coin.symbol} />
          ))}
          <ItemList />
        </Table>
      </TableContainer>
      <div></div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    topCoins: state.coins.coins,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return { downloadCoins: (data) => dispatch(downloadCoins(data)) };
  return {
    downloadCoins: (data) => {
      dispatch({ type: "DOWNLOAD_COINS", payload: data });
    },
    removeCoins: () => {
      dispatch(removeCoins());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfCoins);
