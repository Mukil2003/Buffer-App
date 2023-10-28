import React from "react";

function Btn({ contents }) {
  let styles = {
    backgroundColor: `${contents.backgroundColor}`,
    color: `${contents.color}`,
    padding: `${contents.padding}`,
    fontFamily: "Poppins",
    border: "none",
    outline: "none",
    borderRadius: "10px",
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
