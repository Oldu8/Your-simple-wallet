import React from "react";
import s from "./portfolioItem.module.scss";
import {
  Typography,
  styled,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { profitFunc } from "./profitFunc";
import TrashIcon from "../../assets/trashIcon";
import { useDispatch } from "react-redux";
import { removeCoin } from "../../redux-toolkit/addCoinSlice";

const PortfolioItem = ({ item }) => {
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
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const coinPnL = profitFunc(
    item.queryPrice,
    item.queryQuantity,
    item.market_data.current_price.usd
  );

  const priceChangeClass = () => {
    if (coinPnL > 0) {
      return s.percentagePlus;
    } else {
      return s.percentageMinus;
    }
  };

  const dispatch = useDispatch();

  const deleteCoin = (item) => {
    dispatch(removeCoin(item));
  };

  return (
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
            className={priceChangeClass()}
          >
            {priceFormatter.format(coinPnL)}
          </Typography>
        </StyledTableCell>
        <div className={s.trashIcon} onClick={() => deleteCoin(item)}>
          <TrashIcon />
        </div>
      </StyledTableRow>
    </TableBody>
  );
};

export default PortfolioItem;
