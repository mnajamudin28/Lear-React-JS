import React from "react";
import ReactDOM from "react-dom";

const name = "Moe";
const currentDate = new Date();
const year = currentDate.getFullYear(); // membuat method tahun terupdate bikin var dulu diatas

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
