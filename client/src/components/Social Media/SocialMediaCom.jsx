import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import "./socialMedia.css";

export default function SocialMediaCom() {
  const [socialMediaData, setSoicalMediaDate] = useState([]);
  const [jobInterviewData, setJobInterviewData] = useState("");
  const idJobInterviews = "6166af3430004e4b84548fd6";

  useEffect(() => {
    fetch("http://localhost:8080/api/category/getall")
      .then((res) => res.json())
      .then((respond) => setSoicalMediaDate(respond.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(socialMediaData);

  return (
    <>
      <div className="hedaer-socialmedia-container">
        <div className="hedaer-socialmedia-container">
          <div className="hedaer-socialmedia-decortion-wrapper">
            <p style={{ marginRight: 10, fontSize: 24 }}>רשתות חברתיות </p>
            <div className="hedaer-socialmedia-decortion"></div>
          </div>
        </div>
      </div>
      <div className="social-media-card-conatiner">
        {socialMediaData.map((category, i) =>
          category._id === idJobInterviews
            ? category.cards.map((card, i) => (
                <Card sx={{ maxWidth: 345 }} className="social-media-card">
                  <CardMedia
                    component="img"
                    height="220"
                    image="https://img.graphicsurf.com/2020/10/social-media-vector-flat-illustration.jpg"
                    alt="picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <p style={{ textAlign: "right", fontSize: 20 }}>
                        {card.cardName}
                      </p>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ textAlign: "right" }}
                    >
                      {card.info}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            : ""
        )}
      </div>

      <Button
        variant="outlined"
        style={{
          width: "130px",
          borderRadius: 24,
          background: "#FF00E4",
          color: "white",
          border: "none",
          padding: 7,
          marginTop: 20,
        }}
      >
        <p className="home-btn-text">הירשם</p>
      </Button>
    </>
  );
}
