import React, { useEffect, useState, useCallback } from "react";
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

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const ModalWindow = ({ isModal, modalClose }) => {
  const [query, setQuery] = useState("");
  const [coinsArr, setCoinsArr] = useState([]);
  const [openedID, setOpenedId] = useState(null);

  const handleChange = (id) => {
    setOpenedId((prevId) => {
      return prevId === id ? null : id;
    });
  };

  // comment:
  // Vot ety shlyapy nado prikrytit` 4to bi zaprosi yhodili celie a ne po bykve //
  // function saveInput(query) {
  //   console.log("search for coin: " + query);
  // }
  // const processChange = debounce(() => setQuery(query));

  const debouncedChangeHandler = useCallback(
    debounce(() => console.log("fetch"), 400),
    []
  );

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
    debouncedChangeHandler();
  };

  const searchedCoin = async (query) => {
    // comment: если запрос выдаст ошибку то ошибка пойдет наверх. Обернуть здесь в try catch
    const result = await getCoin(query);
    const res = await result.json();

    if (result.ok && result.status === 200) {
      if (Array.isArray(res)) {
        const first6Coins = res.splice(0, 6);
        setCoinsArr(first6Coins);
        // comment: зачем возвращать (внизу тоже)
        return;
      } else {
        setCoinsArr([res]);
        return;
      }
    }
    return null;
  };

  // useEffect(() => {
  //   searchedCoin(query);
  // }, [query]);

  // comment: с таким условием модалка будет закрываться без анимации
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
      <Box sx={style} className={s.modal}>
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
            onChange={handleChangeInput}
            sx={searchStyle}
          />
          <div className={s.list}>
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
