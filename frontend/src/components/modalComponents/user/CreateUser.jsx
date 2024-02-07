/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import Button from "@mui/material/Button";

import { ModalContext } from "../../../contexts/ModalContext";
import { close } from "../../../assets";

function CreateUser() {
  const { inputValue, setInputValue, openCreateUser, setOpenCreateUser } =
    useContext(ModalContext);

  const handleClickCreate = () => {
    setOpenCreateUser(true);
  };

  const handleCloseCreate = () => {
    setOpenCreateUser(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted value:", inputValue);
    handleCloseCreate();
  };

  return (
    <div>
      <Dialog open={openCreateUser} style={{ zIndex: 9999 }}>
        <DialogTitle className="flex justify-between">
          <span>Add New User</span>
          <div
            onClick={handleCloseCreate}
            className="bg-black rounded-full p-2 w-[28px] h-[28px] items-center flex"
          >
            <img src={close} alt="close" className="w-[24px] h-[24px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex gap-4">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="UserName"
              type="text"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="User E-mail"
              type="text"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-4">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="UserCompany"
              type="text"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="User Role"
              type="text"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <TextField
              autoFocus
              margin="dense"
              id="img"
              label=""
              type="file"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCreate}
            color="primary"
            variant="contained"
            style={{ background: "cyan", color: "black" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            style={{ background: "yellow", color: "black" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateUser;
