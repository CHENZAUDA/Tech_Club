import React from "react";
import "./JobInterView.css";
import ForumIcon from "@material-ui/icons/Forum";
import { useState, useEffect } from "react";
export default function JobInterView() {
  const [categoryData, setCategoryData] = useState([]);
  const [jobInterviewData, setJobInterviewData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/category/getall")
      .then((res) => res.json())
      .then((respond) => setCategoryData(respond.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categoryData);
  const idJobInterviews = "61662ff4aab53e6d0471903f";
  // console.log(categoryData[0].name);
  console.log(jobInterviewData);
  return (
    <>
      <h3 style ={{textAlign:"center"}}>ראיונות עבודה</h3>

      <div className="container">
        <div></div>
        <div className="categorybox">
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
