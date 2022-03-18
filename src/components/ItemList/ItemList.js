import React from "react";
import s from "./ItemList.module.scss";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ItemList = ({ item }) => {
  if (!item) return null;

  const capFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const priceFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const percentageFormatter = new Intl.NumberFormat("de-DE", {
    style: "percent",
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
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const priceChangeClass = () => {
    if (item.price_change_percentage_24h > 0) {
      return s.percentagePlus;
    } else {
      return s.percentageMinus;
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
          <Typography align="center" fontWeight={500}>
            {priceFormatter.format(item.current_price)}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography
            align="center"
            fontWeight={500}
            className={priceChangeClass()}
          >
            {percentageFormatter.format(item.price_change_percentage_24h / 100)}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography align="center" fontWeight={500}>
            {capFormatter.format(item.market_cap)}
          </Typography>
        </StyledTableCell>
      </StyledTableRow>
    </TableBody>
  );
};

export default ItemList;
