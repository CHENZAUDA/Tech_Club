import * as React from "react";
import "./Blog.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

export default function BlogComponent() {
  const history = useHistory();

 
  const data = [
    {
      title: "REACT",
      url: "https://miro.medium.com/max/1400/0*IzgBBsyQfiV_xGIs.png",
    },
    {
      title: "Node js",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    },
    {
      title: "Mongo DB",
      url: "https://i.ibb.co/kX3JpCQ/1-b0-Tt-GI6g-WFLlt-L1-Qk-Rx-Vdg.png",
    },
  ];

  return (
    <div className="container-blog">
      {/* <header className="blog-title">Wellcome !!</header> */}
      {data.map((subject) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image={subject.url}
              alt="picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {subject.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                תבוא נארגן אותך
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                
                onClick={() => history.push("/blog")}
                variant="contained"
                size="large"
              >
                לחץ כאן לשמוע עוד
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
