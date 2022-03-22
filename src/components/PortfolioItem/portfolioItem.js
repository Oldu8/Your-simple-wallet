import React from "react";
import s from "./PortfolioItem.module.scss";
import { Typography, TableBody } from "@mui/material";
import { profitFunc } from "../Functions/profitFunc";
import TrashIcon from "../../assets/TrashIcon/TrashIcon";
import { useDispatch } from "react-redux";
import { removeCoin } from "../../redux-toolkit/addCoinSlice";
import { priceFormatter, percentageFormatter } from "../Functions/formatters";
import { StyledTableCell, StyledTableRow } from "../Functions/funcForMUITable";
import { priceChangeClass } from "../Functions/priceChangeClass";

const PortfolioItem = ({ item }) => {
  const coinPnL = profitFunc(
    item.queryPrice,
    item.queryQuantity,
    item.market_data.current_price.usd
  );

  const dispatch = useDispatch();

  const deleteCoin = (item) => {
    dispatch(removeCoin(item));
  };

  return (
    <>
      <TableBody>
        <StyledTableRow className={s.row}>
          <StyledTableCell align="center">
            <img src={item.image.small} className={s.img}></img>
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
              {percentageFormatter.format(item.queryQuantity)}
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography align="center" fontWeight={500}>
              {priceFormatter.format(item.queryPrice)}
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography align="center" fontWeight={500}>
              {priceFormatter.format(item.market_data.current_price.usd)}
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography
              align="center"
              fontWeight={500}
              className={priceChangeClass(coinPnL)}
            >
              {priceFormatter.format(coinPnL)}
            </Typography>
          </StyledTableCell>
          <td className={s.trashIcon} onClick={() => deleteCoin(item)}>
            <TrashIcon />
          </td>
        </StyledTableRow>
      </TableBody>
    </>
  );
};

export default PortfolioItem;
