import React from "react";

let challenge = {
  color: "white",
  backgroundColor: "#6B81FF",
  width: "100%",
  height: "70px",
  textAlign: "center",
  fontFamily: "Roboto,sans-serif ",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  fontSize: "13px",
};

let challengeBtn = {
  backgroundColor: "#D5DBFF",
  padding: "8px",
  color: "#0020D6",
  borderRadius: "20px",
  fontSize: "12px",
  margin: "20px",
};

let challengeRow = {
  margin: "10px",
  lineHeight: "28px",
};

let challengeLink = {
  fontSize: "13px",
  color: "#fff",
};
function Challenge() {
  return (
    <div style={challenge}>
      <h3 style={challengeRow}>
        <span style={challengeBtn}>Want a Challenge?</span>
        2x your growth in 2 weeks with the AI Accelerator 🚀
        <a href="www.google.com" style={challengeLink}>
          Learn More
        </a>
      </h3>
    </div>
  );
}

export default Challenge;
