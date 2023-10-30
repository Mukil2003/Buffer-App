import React from "react";

function Btn({ contents }) {
  let styles = {
    backgroundColor: `${contents.backgroundColor}`,
    color: `${contents.color}`,
    padding: `${contents.padding}`,
    fontFamily: "Roboto",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    fontSize: `${contents.fontSize}`,
    cursor: "pointer",
  };

  return (
    <div>
      <button style={styles}>{contents.name}</button>
    </div>
  );
}

export default Btn;
