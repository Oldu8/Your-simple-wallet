import React from "react";
import styles from "./PortfolioItem.module.scss";
import { Typography, TableBody } from "@mui/material";
import { profitFunc } from "../Functions/profitFunc";
import { ReactComponent as TrashIcon } from "../../assets/TrashIcon/TrashIcon.svg";
import { useDispatch } from "react-redux";
import { removeCoin } from "../../redux-toolkit/addCoinSlice";
import { priceFormatter, quantityFormatter } from "../Functions/formatters";
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
        <StyledTableRow className={styles.row}>
          <StyledTableCell align="center">
            <img src={item.image.small} alt='currency icon small' className={styles.img}></img>
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
              {quantityFormatter(+item.queryQuantity)}
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography align="center" fontWeight={500}>
              {priceFormatter(+item.queryPrice)}
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography align="center" fontWeight={500}>
              {priceFormatter(+item.market_data.current_price.usd)}
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography
              align="center"
              fontWeight={500}
              className={priceChangeClass(coinPnL)}
            >
              {priceFormatter(+coinPnL)}
            </Typography>
          </StyledTableCell>
          <td className={styles.trashIcon} onClick={() => deleteCoin(item)}>
            <TrashIcon />
          </td>
        </StyledTableRow>
      </TableBody>
    </>
  );
};

export default PortfolioItem;
