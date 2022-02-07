import React from "react";
// import { useSelector } from "react-redux";
import s from "./ItemList.module.scss";
// import { connect } from "react-redux";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classNames from "classnames";

const ItemList = ({ item }) => {
  if (!item) return null;

  const capFormatter = new Intl.NumberFormat("de-DE");
  const priceFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const percentageFormatter = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const priceChangeClass = () => {
    if (item.price_change_percentage_24h > 0) {
      return [s.percentagePlus, s.price_change_percentage_24h];
    } else {
      return [s.percentageMinus, s.price_change_percentage_24h];
    }
  };

  return (
    <TableBody>
      <StyledTableRow className={s.row}>
        <StyledTableCell
          align="center"
          className={s.rank}
          sx={{ fontWeight: "medium" }}
        >
          <Typography align="center">{item.market_cap_rank}</Typography>
        </StyledTableCell>
        <StyledTableCell align="center">
          <img src={item.image} className={s.img}></img>
        </StyledTableCell>
        <StyledTableCell>
          <Typography
            align="center"
            fontWeight={500}
            sx={{ fontWeight: "medium" }}
          >
            {item.name}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography align="center" fontWeight={500} className={s.price}>
            {priceFormatter.format(item.current_price)}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography
            align="center"
            fontWeight={500}
            className={priceChangeClass()}
          >
            {percentageFormatter.format(item.price_change_percentage_24h)}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography align="center" fontWeight={500} className={s.marketCap}>
            {capFormatter.format(item.market_cap)}
          </Typography>
        </StyledTableCell>
      </StyledTableRow>
    </TableBody>
  );
};

export default ItemList;
