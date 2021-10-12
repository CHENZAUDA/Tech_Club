import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import "./dialog.css";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [iseditButtonClicked, setIseditButtonClicked] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const user = {
    userName: "someGuy",
    password: "fghjk123",
    email: "fghjk123@.mail",
    phone: "0546193138",
    gitHub: "someGuygithub",
  };

  const showEditInput = () => {
    setIseditButtonClicked(true)
  };
  return (
    <div>
      <AccountCircleIcon
        variant="outlined"
        onClick={handleClickOpen}
        style={{ color: "#716f81", marginTop: 20 }}
      ></AccountCircleIcon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>היי שם משתמש </DialogTitle>
        <DialogContent>
          הפריטים האישיים
          <DialogContentText></DialogContentText>
          <div className="profile-details-wrapper">
            <div className>
              <div className="profile-details-row">
                <p>{user.userName}</p>:
                <p className="profile-details-key">שם משתמש</p>
                <EditLocationAltIcon onClick={showEditInput} />
              </div>
              <div className="profile-details-row">
                <p>{user.password}</p>:
                <p className="profile-details-key">סימסה</p>
              </div>
              <div className="profile-details-row">
              {iseditButtonClicked?<h1>hello</h1>:<p>{user.phone}</p>}
                <p className="profile-details-key">טלפון </p>
              </div>
              <div className="profile-details-row">
                <p>{user.email}</p>:
                <p className="profile-details-key"> מייל </p>
              </div>
              <div className="profile-details-row">
                <p>{user.gitHub}</p>:
                <p className="profile-details-key"> גיט האב </p>
              </div>
            </div>
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />{" "}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
