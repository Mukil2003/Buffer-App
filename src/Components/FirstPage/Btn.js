import React from "react";

function Btn(props) {
  return (
    <div>
      <button style={{ backgroundColor: `${props.bgc}` }}>{props.name}</button>
    </div>
  );
}

export default Btn;
