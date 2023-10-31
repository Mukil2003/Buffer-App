import React from "react";
import "./Slider.css";

function SliderItem({ item }) {
  return (
    <div className="slider-item">
      <div className="slider-contents">
        <h3>{item.count}</h3>
        <p>{item.title}</p>
      </div>
      <div className="slider-img">
        <div className="slider-img-bx">
          <img src={item.img} alt="img" />
        </div>
        <p>{item.author}</p>
      </div>
    </div>
  );
}

export default SliderItem;
