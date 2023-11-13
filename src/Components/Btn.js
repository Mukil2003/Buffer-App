import React from "react";

function Btn({ contents }) {
  let styles = {
    backgroundColor: `${contents.backgroundColor}`,
    color: `${contents.color}`,
    padding: `${contents.padding}`,
    fontFamily: "Roboto",
    outline: "none",
    borderRadius: "5px",
    fontSize: `${contents.fontSize}`,
    cursor: "pointer",
    border: `${contents.border}`,
  };

  return (
    <div>
      <button style={styles}>
        <i style={{ margin: "0 10px 0 0" }} className={contents.icon}></i>
        {contents.name}
      </button>
    </div>
  );
}

export default Btn;
