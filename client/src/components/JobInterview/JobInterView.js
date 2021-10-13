import React from "react";
import "./JobInterView.css";
import ForumIcon from "@material-ui/icons/Forum";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./JobInterView.css";
export default function JobInterView() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/category/getall")
      .then((res) => res.json())
      .then((respond) => setCategoryData(respond.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categoryData);
  const idJobInterviews = "61662ff4aab53e6d0471903f";

  return (
    <>
    <div>
      <div className="hedaer-socialmedia-container" >
          <div className="hedaer-socialmedia-decortion-wrapper" style={{marginTop:20}}>
            <p style={{ marginRight: 10, fontSize: 24 }}>ראיונות עבודה</p>
            <div className="hedaer-socialmedia-decortion"></div>
          </div>
        </div>
      </div>

        <div className="social-media-card-conatiner">
        <div className="social-media-card-conatiner">
          {categoryData.map((category, i) =>
            category._id === idJobInterviews ? (
              category.cards.map((card, i) => (
                <Card sx={{ maxWidth: 345 }} className="social-media-card">
                  <CardMedia
                    component="img"
                    height="220"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJ1o1K1iWN8swf5wGxg55QUSo7LFq73DrRgtXNkefSR-ypMUbRz2VF4UM_g7AUIjnXaI&usqp=CAU"
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
                      <p style={{ color: "white" }}>לפורום</p>
                    </Button>
                  </CardActions>
                </Card>
              ))
            ) : (
              ""
            )
          )}
        </div>
      </div>
      {/* <div className="container">
        <div className="categorybox">
          <span>
            {categoryData.map((category, i) =>
              category._id === idJobInterviews ? (
                category.cards.map((card, i) => (
                  <div className="template">
                    <h4>{card.cardName}</h4>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/InheritanceVehicles.png" />
                    <p>{card.info}</p>
                    <span className="icons">
                      <ForumIcon> icon</ForumIcon>
                    </span>
                  </div>
                ))
              ) : (
                <h1>dont </h1>
              )
            )}
          </span>
        </div>
      </div> */}
    </>
  );
}
