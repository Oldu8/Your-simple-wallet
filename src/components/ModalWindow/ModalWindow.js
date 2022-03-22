import React, { useEffect, useState } from "react";
import { Typography, Box, Modal, Container, TextField } from "@mui/material";
import styles from "./ModalWindow.module.scss";
import getCoin from "../Functions/getCoin";
import SearchedItem from "../SearchedItem/SearchedItem";

const ModalWindow = ({ isModal, modalClose }) => {
  const [query, setQuery] = useState("");
  const [coinsArr, setCoinsArr] = useState([]);
  const [openedID, setOpenedId] = useState(null);

  const handleChange = (id) => {
    setOpenedId((prevId) => {
      return prevId === id ? null : id;
    });
  };

  // Vot ety shlyapy nado prikrytit` 4to bi zaprosi yhodili celie a ne po bykve //
  function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function saveInput(query) {
    console.log("search for coin: " + query);
    searchedCoin(query);
  }

  const processChange = debounce(() => saveInput(query));

  const searchedCoin = async (query) => {
    const result = await getCoin(query);
    const res = await result.json();

    if (result.ok && result.status === 200) {
      if (Array.isArray(res)) {
        const first6Coins = res.splice(0, 6);
        setCoinsArr(first6Coins);
        return;
      } else {
        setCoinsArr([res]);
        return;
      }
    }
    return null;
  };

  useEffect(() => {
    processChange(query);
  }, [query]);

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
  if (!isModal) return null;

  return (
    <Modal
      open={isModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className={styles.modal}>
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
          <div className={styles.list}>
            {coinsArr.map((item, key) => (
              <SearchedItem
                item={item}
                openedID={openedID}
                setOpen={handleChange}
                key={key}
              />
            ))}
          </div>
        </Container>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
