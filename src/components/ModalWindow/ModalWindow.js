import React, { useEffect, useState } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import s from "./ModalWindow.module.scss";

const ModalWindow = ({ isModal, modalClose }) => {
  if (!isModal) return null;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Header of modal window
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          text of modal window
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
