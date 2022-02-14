import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  Modal,
  Container,
  TextField,
  Link,
} from "@mui/material";
import s from "./ModalWindow.module.scss";
import getCoin from "../getCoin";
import SearchedItem from "../SearchedItem/SearchedItem";

const ModalWindow = ({ isModal, modalClose }) => {
  const [query, setQuery] = useState("");
  const [coinsArr, setCoinsArr] = useState("");

  const searchedCoin = async (query) => {
    const result = await getCoin(query);
    const first10Coins = result.splice(0, 7);
    setCoinsArr(first10Coins);
    console.log(first10Coins);
  };

  useEffect(() => {
    searchedCoin(query);
  }, [query]);

  if (!isModal) return null;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const searchStyle = {
    display: "flex",
    flexAlign: "center",
    mb: 3,
    height: 50,
  };

  return (
    <Modal
      open={isModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
          sx={{
            pb: 2,
          }}
        >
          Select coin
        </Typography>
        <Container>
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={searchStyle}
          />
          <div className={s.list}>
            {coinsArr.map((item) => (
              <SearchedItem item={item} />
            ))}
          </div>
        </Container>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
