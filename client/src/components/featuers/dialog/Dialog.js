import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import CheckIcon from "@mui/icons-material/Check";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./dialog.css";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [iseditEditButtonClicked, setiseditEditButtonClicked] =
    React.useState(false);
  const [isPasswordValid, setIsValidPassword] = React.useState();
  const [validPassword, setValidPassword] = React.useState("");
  const user = {
    userName: "someGuy",
    password: "fghjk123",
    email: "fghjk123@.mail",
    phone: "0546193138",
    gitHub: "someGuygithub",
  };
  const [user1, SetUser] = React.useState(user);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setiseditEditButtonClicked(false);
  };

  const showEditInput = () => {
    setiseditEditButtonClicked(true);
  };
  const checkout = () => {
    setiseditEditButtonClicked(false);
    if (validPassword === user1.password) {
      setIsValidPassword(true);
    }
    else{
      setIsValidPassword(false);

    }
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const onEditUser = (e) => {
    SetUser({
      ...user1,
      [e.target.id]: e.target.value,
    });
    console.log(user1);
  };

  const OnValidPassword = (e) => {
    setValidPassword(e.target.value);
    console.log(validPassword);
  };

  return (
    <div>
      <AccountCircleIcon
        style={{ color: "#716f81", width: 30, marginTop: 25 }}
        onClick={handleClickOpen}
      ></AccountCircleIcon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "right" }}>היי שם משתמש </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "right", padding: "10px" }}>
            הפריטים האישיים שלך
            {!iseditEditButtonClicked ? (
              <EditIcon onClick={showEditInput} />
            ) : (
              <CheckIcon style={{ color: "green" }} onClick={checkout} />
            )}
          </DialogContentText>

          {!iseditEditButtonClicked ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    key={"userName"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user1.userName}
                    </TableCell>
                    <TableCell align="right">שם משתמש</TableCell>
                  </TableRow>

                  <TableRow
                    key={"password"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user1.password}
                    </TableCell>
                    <TableCell align="right">סיסמה</TableCell>
                  </TableRow>

                  <TableRow
                    key={"phone"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user1.phone}
                    </TableCell>
                    <TableCell align="right">טלפון</TableCell>
                  </TableRow>
                  <TableRow
                    key={"phone"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user1.email}
                    </TableCell>
                    <TableCell align="right">איימל</TableCell>
                  </TableRow>
                  <TableRow
                    key={"phone"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user1.gitHub}
                    </TableCell>
                    <TableCell align="right">גיט האב</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="userName"
                label="הכנס שם משתמש חדש"
                type="text"
                fullWidth
                variant="standard"
                onChange={onEditUser}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="הכנס סיסמה חדשה"
                type="password"
                fullWidth
                variant="standard"
                onChange={onEditUser}
              />{" "}
              <TextField
                autoFocus
                margin="dense"
                id="passwordValid"
                label={"אנא אמת סיסמה"}
                type="password"
                fullWidth
                variant="standard"
                onChange={OnValidPassword}
              />{" "}
              {!isPasswordValid ? <p>"הסיסמאות אינן תואמות"</p> : ""}
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="הכנס איימל חדש"
                type="email"
                fullWidth
                variant="standard"
                onChange={onEditUser}
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="הכנס טלפון חדש"
                type="email"
                fullWidth
                variant="standard"
                onChange={onEditUser}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
