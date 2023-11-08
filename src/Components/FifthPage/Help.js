import React from "react";
import "./Help.css";
import Btn from "../Btn";

let btnStyle = {
  backgroundColor: "none",
  name: "Get started now",
  color: "#2C4BFF",
  padding: "10px 20px",
  fontSize: "14px",
  border: "1px solid #2C4BFF",
};

function Help() {
  return (
    <div className="help">
      <div className="help-1">
        <div className="help-head">
          <h2>And we are here to help</h2>
          <p>
            Our customer advocates are standing by 24/7 to support you via email
            and social media. We also have a comprehensive, regularly updated
            help center for those who prefer to find help themselves.
          </p>
          <Btn contents={btnStyle} />
        </div>

        <div className="help-img">
          <img src="/images/hero-6.png" alt="hero" />
        </div>
      </div>
      <div className="help-2">
        <div className="help-2-head">
          <h3>An official marketing partner of the industry leaders</h3>
        </div>
        <div className="help-img-bx">
          <div className="help-bx">
            <img src="/images/meta.png" alt="png" />
          </div>
          <div className="help-bx">
            <img src="/images/pinterest.png" alt="png" />
          </div>
          <div className="help-bx">
            <img src="/images/linkedin.png" alt="png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
