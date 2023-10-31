import React from "react";
import SliderItem from "./SliderItem";
import ScrollCarousel from "scroll-carousel-react";

let sliderItems = [
  {
    count: "200k",
    title: "Followers",
    img: "/images/Imgur.png",
    author: "Charles",
  },
  {
    count: "200k",
    title: "Followers",
    img: "/images/Imgur.png",
    author: "Charles",
  },
  {
    count: "200k",
    title: "Followers",
    img: "/images/majestyk-apps.png",
    author: "Charles",
  },
  {
    count: "200k",
    title: "Followers",
    img: "/images/Cern.png",
    author: "Charles",
  },
  {
    count: "200k",
    title: "Followers",
    img: "/images/velocity-juice.png",
    author: "Charles",
  },
];

function Slider() {
  return (
    <div className="slider">
      <ScrollCarousel autoplay speed={5} transitionDuration={500}>
        {sliderItems.map((item) => {
          return <SliderItem item={item} />;
        })}
      </ScrollCarousel>
    </div>
  );
}

export default Slider;
