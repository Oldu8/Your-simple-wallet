import React from "react";
import { Typography, TableBody } from "@mui/material";
import {
  priceFormatter,
  percentageFormatter,
  capFormatter,
} from "../Functions/formatters";
import { StyledTableCell, StyledTableRow } from "../Functions/funcForMUITable";
import { priceChangeClass } from "../Functions/priceChangeClass";
import styles from "./ItemList.module.scss";
import { ItemListFunc } from "../../types/types";

const ItemList: ItemListFunc = ({ item }) => {
  if (!item) return null;
  return (
    <TableBody>
      <StyledTableRow className={styles.row}>
        <StyledTableCell
          align="center"
          className={styles.rank}
          sx={{ fontWeight: "medium" }}
        >
          <Typography align="center">{item.market_cap_rank}</Typography>
        </StyledTableCell>
        <StyledTableCell align="center">
          <img
            src={item.image}
            className={styles.img}
            alt="currency icon"
          ></img>
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
            {priceFormatter(+item.current_price)}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography
            align="center"
            fontWeight={500}
            className={priceChangeClass(item.price_change_percentage_24h)}
          >
            {percentageFormatter(item.price_change_percentage_24h / 100)}
          </Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography align="center" fontWeight={500}>
            {capFormatter(+item.market_cap)}
          </Typography>
        </StyledTableCell>
      </StyledTableRow>
    </TableBody>
  );
};

export default ItemList;
