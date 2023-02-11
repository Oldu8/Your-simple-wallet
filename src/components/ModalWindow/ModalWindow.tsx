import React, { useEffect, useState, useCallback } from "react";
import { Typography, Box, Modal, Container, TextField } from "@mui/material";
import styles from "./ModalWindow.module.scss";
import { getCoin } from "../Functions/getCoin";
import SearchedItem from "../SearchedItem/SearchedItem";
import { modalStyle, searchStyle } from "../Functions/stylesForMUI";
import {
  ChangeHandler,
  DebouncedChangeHandler,
  ModalWindowFunc,
} from "../../types/types";
import { ICoinPortfolio } from "../../interface/entities";

type debounceCallBack = (arg: string) => void;

const debounce = (func: debounceCallBack, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<debounceCallBack>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const ModalWindow: ModalWindowFunc = ({ isModal, modalClose }) => {
  const [query, setQuery] = useState<string>("");
  const [coinsArr, setCoinsArr] = useState<[] | ICoinPortfolio[]>([]);
  const [openedID, setOpenedId] = useState<string | null>(null);

  const handleChange: (id: string) => void = (id) => {
    setOpenedId((prevId) => (prevId === id ? null : id));
  };

  const searchedCoin: (e: string) => void = async (e) => {
    try {
      const result = await getCoin(e);
      if (Array.isArray(result)) {
        const first6Coins: ICoinPortfolio[] = result.splice(0, 6);
        setCoinsArr(first6Coins);
        return;
      } else {
        setCoinsArr([result]);
        return;
      }
    } catch {
      console.log("error");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler: DebouncedChangeHandler = useCallback(
    debounce((e: string) => {
      searchedCoin(e);
    }, 600),
    []
  );

  const handleChangeInput: ChangeHandler = (e) => {
    setQuery(e.target.value);
    debouncedChangeHandler(e.target.value);
  };

  useEffect(() => {
    searchedCoin(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isModal) return null;

  return (
    <Modal
      open={isModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle} className={styles.modal}>
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
