import React from "react";
import ReactDOM from "react-dom";

// style={{ color: "red" }} menggunakan inline styling

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

// customStyle.color = "blue" jika ingin update dilain waktu

ReactDOM.render(
  // <h1 style={{ color: "red" }}>Hello World!</h1>,
  // document.getElementById("root")
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
