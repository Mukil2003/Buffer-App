import React from "react";
import "./Navbar.css";

let dropdown = {
  display: "flex",
  flexDirection: "row",
  padding: "10px",
  fontFamily: "Poppins",
  fontWeight: "300",
  cursor: "Pointer",
};

let icon = {
  fontWeight: "200",
  marginRight: "10px",
};

let content = {
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
  width: "100%",
};

let contents = {
  marginBottom: "10px",
};

let para = {
  color: "#636363",
};
function DropDown({ data }) {
  return (
    <div style={dropdown} className="dropdown">
      <div style={icon}>
        <i className={data.icon}></i>
      </div>
      <div style={content}>
        <h4 style={contents}>{data.title}</h4>
        <p style={para}>{data.content}</p>
      </div>
    </div>
  );
}

export default DropDown;
