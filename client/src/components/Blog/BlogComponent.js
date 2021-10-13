import React , {useState,useEffect} from "react";
import "./Blog.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  useHistory
} from "react-router-dom";
import {blogAPI} from '../../service/api.service'

export default function BlogComponent() {
  const history = useHistory();
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    fetch(blogAPI)
    .then(res=> res.json())
    .then(list => setBlogs(list.data))
  },[])
  

  return (
    <div className="container-blog">
      {blogs.map((subject) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image={subject.img}
              alt="picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {subject.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{textAlign:"right"}}>
                תבוא נארגן אותך
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                
                onClick={() => history.push(`/blog/${subject._id}`)}
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
