import React from "react";
import s from "./ItemList.module.scss";
import { Typography, TableBody } from "@mui/material";
import {
  priceFormatter,
  percentageFormatter,
  capFormatter,
} from "../Functions/formatters";
import { StyledTableCell, StyledTableRow } from "../Functions/funcForMUITable";
import { priceChangeClass } from "../Functions/priceChangeClass";

const ItemList = ({ item }) => {
  if (!item) return null;

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
            className={priceChangeClass(item.price_change_percentage_24h)}
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
