import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false">
      {/* menambahkan class untuk css harus menggunakan className  */}
      My Favourite Foods
    </h1>
    {/* <img src={img} /> penting intuk menambahkan / pada akhir tag */}
    {/* <img src={img +"?grayscale"} /> // grayscale mengambil id dari web picsum.photos */}
    <img src={img + "?grayscale"} />
    <img
      className="food-img"
      src="https://asset.kompas.com/crops/fQVOtLSPe9n2ymE8jOG6fNCf0xQ=/0x0:1000x667/750x500/data/photo/2021/10/21/6170ffb140316.jpg"
    />
  </div>,
  document.getElementById("root")
);
