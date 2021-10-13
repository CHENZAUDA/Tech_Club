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
        <div>
        <FacebookIcon fontSize="large" color="primary" />
        </div>
        <div className="copy-rights">
        <CopyrightIcon color="primary" fontSize="small" />
        <p>כל הזכויות שמורות לקבוצה של חן</p>
        </div>
        <div>
        <LinkedInIcon fontSize="large" color="primary" />
        </div>
      </div>
    </div>
    </div>
  );
}
