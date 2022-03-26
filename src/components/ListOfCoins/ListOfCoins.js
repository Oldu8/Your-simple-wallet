import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopCoins } from "../../redux-toolkit/getTopCoinsSliceFetch";
import styles from "./ListOfCoins.module.scss";
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

const ListOfCoins = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTopCoins(page));
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
          p: 0,
          pt: 2,
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
