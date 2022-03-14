import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useSelector, useDispatch } from "react-redux";
import { getCoins } from "../../redux-toolkit/slice";
import s from "./ListOfCoins.module.scss";
// import classNames from "classnames";
import {
  Typography,
  styled,
  Table,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Stack,
  Pagination,
} from "@mui/material";

import getListOfCoins from "../getListOfCoins";

const ListOfCoins = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  const getCoinsList = async (page) => {
    const result = await getListOfCoins(page);
    dispatch(getCoins(result));
  };

  const [page, setPage] = useState(1);

  useEffect(() => {
    getCoinsList(page);
  }, [page]);

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
              </StyledTableCell>
              <StyledTableCell align="center" fontWeight={500}>
                Price change percentage
              </StyledTableCell>
              <StyledTableCell align="center">Market Cap</StyledTableCell>
            </TableRow>
          </TableHead>
          {coins.map((coin) => (
            <ItemList item={coin} key={coin.symbol} />
          ))}
        </Table>
      </TableContainer>
      <Container
        sx={{
          pt: 3,
          pb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={3}>
          <Pagination
            count={10}
            page={page}
            color="primary"
            onChange={(_, num) => setPage(num)}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default ListOfCoins;
