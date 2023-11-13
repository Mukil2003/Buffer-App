import React from "react";
import "./Banner.css";
import Btn from "../Btn";

let btnStyle = {
  backgroundColor: "rgb(233, 114, 132)",
  name: "Get started now",
  color: "#fff",
  padding: "20px 20px",
  fontSize: "18px",
  border: "none",
};

function Banner() {
  return (
    <div className="banner">
      <h1>
        140,000+ people like you use Buffer to build their brand on social media
        every month
      </h1>
      <div className="banner-btn">
        <Btn contents={btnStyle} />
      </div>
    </div>
  );
}

export default Banner;
