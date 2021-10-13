import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import FormDialog from "../dialog/Dialog";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <img
            id="navbar-logo-tech"
            src="./techCareerImg.jpg"
            alt="tech career logo"
          />
          <Button
            variant="outlined"
            style={{
              width: "100px",
              borderRadius: 24,
              background: "#C2FFD9",
              color: "white",
              border: "none",
              padding: 7,
              marginTop: 20,
            }}
          >
            <p className="navbar-login-btn-text">התחבר</p>
          </Button>
          <FormDialog  />
          <NotificationsNoneIcon
            style={{
              color: "#716f81",
              width: 30,
              marginTop: 20,
            }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <div className="menu-items">
            <a className="menu-item">
              {" "}
              <div>חנות</div>
            </a>
            {/* <Link to="/home/learning-contect"> */}
            <a className="menu-item">
              <div>תכני למידה </div>
            </a>
            {/* </Link> */}
            <a className="menu-item">
              {" "}
              <div>ראיונות</div>
            </a>
            <a className="menu-item"> אודותינו</a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;