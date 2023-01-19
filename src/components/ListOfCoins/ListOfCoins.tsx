import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopCoins } from "../../redux-toolkit/getTopCoinsSliceFetch";
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Stack,
  Pagination,
} from "@mui/material";

import { StyledTableCell } from "../Functions/funcForMUITable";
// @ts-ignore
import styles from "./ListOfCoins.module.scss";
import { IState } from "../../interface/entities";
import { paginationStyle } from "../Functions/stylesForMUI";
import { cellNamesForTop } from "../../assets/arraysForTable";

const ListOfCoins = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state: IState) => state.coins.coins);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchTopCoins(page.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <section className={styles.wrap}>
      <Typography
        variant="h3"
        align="center"
        color="primary.dark"
        sx={{ fontWeight: "medium" }}
      >
        List of coins:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {cellNamesForTop.map((i) => (
                <StyledTableCell key={i}>{i}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {coins.map((coin) => (
            <ItemList item={coin} key={coin.symbol} />
          ))}
        </Table>
      </TableContainer>
      <Container sx={paginationStyle}>
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
