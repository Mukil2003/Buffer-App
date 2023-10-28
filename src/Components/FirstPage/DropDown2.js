import React from "react";
import "./Navbar.css";

let dropdown = {
  display: "flex",
  flexDirection: "row",
  fontFamily: "Poppins",
  fontWeight: "100",
  padding: "15px 5px",
};

let icon = {
  padding: "5px",
};

let content = {
  fontSize: "15px",
  margin: "5px",
};

let contents = {};

function DropDown2({ data }) {
  return (
    <div style={dropdown} className="dropdown">
      <div style={icon}>
        <i className={data.icon}></i>
      </div>
      <div style={content}>
        <h4 style={contents}>{data.title}</h4>
      </div>
    </div>
  );
}

export default DropDown2;
