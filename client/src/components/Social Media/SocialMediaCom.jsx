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
                    {card.cardName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ textAlign: "right" }}
                  >
                    {card.info}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" style={{ background: "#B8B5FF" }}>
                    <p style={{color:"white"}}>לפורום</p>
                  </Button>
                </CardActions>
              </Card>
            ))
          : ""
      )}
    </div>
  );
}
