import React, { useState } from "react";
import "./Navbar.css";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";
import Btn from "../Btn";

let dropDown1 = [
  {
    icon: "fa-regular fa-paper-plane",
    title: "Publishing",
    content: "Plan, collaborate, and publish thumb-stopping content",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Analytics",
    content: "Analyze social media performance and create reports",
  },
  {
    icon: "fa-regular fa-message",
    title: "Engagement",
    content: "Quickly navigate your comments and engage with your audience",
  },
  {
    icon: "fa-solid fa-pen-nib",
    title: "Start Page",
    content: "Build a customized landing page in minutes",
  },
  {
    icon: "fa-regular fa-lightbulb",
    title: "AI Assistant",
    content:
      "Generate ideas, repurpose posts, and rewrite copy in just a click",
  },
];

let dropDown2 = [
  {
    icon: "fa-brands fa-facebook-f",
    title: "Facebook",
  },
  {
    icon: "fa-brands fa-google",
    title: "Google Business Profile",
  },
  {
    icon: "fa-brands fa-instagram",
    title: "Instagram",
  },
  {
    icon: "fa-brands fa-linkedin",
    title: "LinkedIn",
  },
  {
    icon: "fa-brands fa-mastodon",
    title: "Mastodon",
  },
  {
    icon: "fa-brands fa-pinterest",
    title: "Pinterest",
  },
  {
    icon: "fa-brands fa-shopify",
    title: "Shopify",
  },
  {
    icon: "fa-brands fa-tiktok",
    title: "TikTok",
  },
];

let btnStyle = {
  backgroundColor: "#6B81FF",
  name: "Get started now",
  color: "#fff",
  padding: "15px 30px",
  fontSize: "15px",
};

function Navbar() {
  let [isActive, setIsActive] = useState(false);
  let [isActive2, setIsActive2] = useState(false);

  let handleClick = () => {
    setIsActive(!isActive);
  };

  let handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  return (
    <div className="head">
      <div className="header">
        <div className="logo">
          <h1>
            <i class="fa-brands fa-buffer"></i>
            Buffer
          </h1>
          <div className="img-bx">
            <img src="/images/books.png" alt="book" />
          </div>
        </div>
        <nav>
          <ul className="navbar">
            <li className="nav-item">
              <div className="menu" onClick={handleClick2}>
                Tools
                <i class="fa-solid fa-caret-down"></i>
              </div>
              <div
                className={isActive2 ? "dropdown-menu" : "hide"}
                onClick={handleClick2}
              >
                {dropDown1.map((d) => {
                  return <DropDown data={d} />;
                })}
              </div>
            </li>
            <li className="nav-item">
              <div className="menu" onClick={handleClick}>
                Channels
                <i class="fa-solid fa-caret-down"></i>
              </div>
              <div
                className={isActive ? "dropdown-menu2" : "hide"}
                onClick={handleClick}
              >
                {dropDown2.map((d) => {
                  return <DropDown2 data={d} />;
                })}
              </div>
            </li>
            <li className="nav-item menu">Pricing</li>
            <li className="nav-item menu">Blog</li>
          </ul>
        </nav>

        <div className="login">
          <a href="www.google.com">Log In</a>
          <Btn contents={btnStyle} className="btn" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
