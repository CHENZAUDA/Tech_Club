import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
      <div className="big-boss-container">
    <div className="footer-container">
      <div className="sub-container">
        <FacebookIcon fontSize="large" color="primary" />
        <LinkedInIcon fontSize="large" color="primary" />
        <CopyrightIcon fontSize="small" >כל הזכויות שמורות לצוות המפתחים</CopyrightIcon>
      </div>
    </div>
    </div>
  );
}
