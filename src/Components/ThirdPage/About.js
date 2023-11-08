import React from "react";
import "./About.css";
import AboutItem from "./AboutItem";

let aboutItems = [
  {
    title: "1. SHARE CLICK-WORTHY CONTENT",
    aboutName: "Get the clicks you deserve",
    about:
      "Buffer will tell you when and what to publish to make your content stand out.",
    img: "/images/hero-2.png",
    color: "#fff",
    name: "Start Creating",
    backgroundColor: "#2C4BFF",
    padding: "15px 35px",
    fontSize: "18px",
    border: "none",
  },
  {
    title: "2. BUILD AN ENGAGED AUDIENCE",
    aboutName: "Grow your following",
    about:
      "Buffer will share your content on the right channels, with suggested hashtags to help you grow.",
    img: "/images/hero-3.png",
    color: "#fff",
    name: "Start Growing",
    backgroundColor: "#2C4BFF",
    padding: "15px 35px",
    fontSize: "18px",
    border: "none",
  },
  {
    title: "3. SAVE TONS OF TIME",
    aboutName: "Halve your workload",
    about:
      "Buffer will publish everything for you to save time and it’ll showcase your work with automated reports.",
    img: "/images/hero-4.png",
    color: "#fff",
    name: "Start Optimizing",
    backgroundColor: "#2C4BFF",
    padding: "15px 35px",
    fontSize: "18px",
    border: "none",
  },
  {
    title: "4. COORDINATE WITH EASE",
    aboutName: "Collaboration has never been easier",
    about:
      "With Buffer’s permissions levels and approval flows, your team can work freely without any micro-management.",
    img: "/images/hero-5.png",
    color: "#fff",
    name: "Start Collaborating",
    backgroundColor: "#2C4BFF",
    padding: "15px 35px",
    fontSize: "18px",
    border: "none",
  },
];

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Build a following without draining your time</h1>
        <p>
          Creating content is hard enough. Let alone distributing it to all the
          different marketing channels. Here are four ways Buffer can help.
        </p>
      </div>

      <div className="about-contents">
        {aboutItems.map((data) => {
          return <AboutItem datas={data} />;
        })}
      </div>
    </div>
  );
}

export default About;
