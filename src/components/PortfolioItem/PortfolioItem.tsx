import React from "react";
import { TableBody } from "@mui/material";
import { profitFunc } from "../Functions/profitFunc";
import TrashIcon from "../../assets/TrashIcon/TrashIcon.svg";
import { useDispatch } from "react-redux";
import { removeCoin } from "../../redux-toolkit/addCoinSlice";
import { priceFormatter, quantityFormatter } from "../Functions/formatters";
import { StyledTableCell, StyledTableRow } from "../Functions/funcForMUITable";
import { priceChangeClass } from "../Functions/priceChangeClass";
import styles from "./PortfolioItem.module.scss";
import { ItemPortfolioFunc } from "../../types/types";
import { ICoinPortfolio } from "../../interface/entities";

const PortfolioItem: ItemPortfolioFunc = ({ item }) => {
  const coinPnL = profitFunc(
    item.queryPrice,
    item.queryQuantity,
    item.market_data.current_price.usd
  );

  const dispatch = useDispatch();
  const deleteCoin = (item: ICoinPortfolio) => {
    dispatch(removeCoin(item));
  };

  return (
    <>
      <TableBody>
        <StyledTableRow className={styles.row}>
          <StyledTableCell align="center">
            <img
              src={item.image.small}
              alt="currency icon small"
              className={styles.img}
            ></img>
          </StyledTableCell>
          <StyledTableCell>
            <h5 className={styles.header}>{item.name}</h5>
          </StyledTableCell>
          <StyledTableCell>
            <h5 className={styles.header}>
              {quantityFormatter(+item.queryQuantity)}
            </h5>
          </StyledTableCell>
          <StyledTableCell>
            <h5 className={styles.header}>
              {priceFormatter(+item.queryPrice)}
            </h5>
          </StyledTableCell>
          <StyledTableCell>
            <h5 className={styles.header}>
              {priceFormatter(+item.market_data.current_price.usd)}
            </h5>
          </StyledTableCell>
          <StyledTableCell>
            <h5 className={priceChangeClass(coinPnL)}>
              {priceFormatter(+coinPnL)}
            </h5>
          </StyledTableCell>
          <td className={styles.trashIcon} onClick={() => deleteCoin(item)}>
            <img src={TrashIcon} alt="delete icon" />
          </td>
        </StyledTableRow>
      </TableBody>
    </>
  );
};

export default PortfolioItem;
