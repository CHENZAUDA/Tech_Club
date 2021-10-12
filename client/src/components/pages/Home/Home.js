import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AccountMenu from "../../featuers/Navbar/Navbar";
import Navbar from "../../featuers/Navbar/Navbar";
import LearningContect from "../learningContent/LearningContent";
const Home = () => {
  const history = useHistory();
  return (
    <div className="home-body">
      <div className="home-first-section">
        <div className="home-first-section-content-container">
          <div className="home-first-section-content">
            <p className="home-first-section-header">Tech Some Help </p>
            פלטפורמה ייחודית, אשר בעיה לפתור את בעיית התקשורת בין בוגרי קורס "טק
            קריירה" לסטודנטים הנוכחים, בקלות וביעילות.
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
        </div>
        <div className="home-first-section-img-container">
          <img id="home-img-first-section" src="./learing-vector.jpg" />
        </div>
      </div>
      <button onClick={() => history.push("/forum")}>Click</button>
    </div>
  );

};

export default Home;
