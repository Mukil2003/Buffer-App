import React from "react";
import "./About.css";
import Btn from "../Btn";

function AboutItem({ datas }) {
  return (
    <div className="about-item">
      <div className="about-item-content">
        <h3>{datas.title}</h3>
        <h2>{datas.aboutName}</h2>
        <p>{datas.about}</p>
        <Btn contents={datas} />
      </div>

      <div className="about-item-img">
        <img src={datas.img} alt="hero" />
      </div>
    </div>
  );
}

export default AboutItem;
