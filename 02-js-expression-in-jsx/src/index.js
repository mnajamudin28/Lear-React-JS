import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 9;

ReactDOM.render(
  <div>
    {/* <h1>Hello {fName} !</h1> */}
    {/* <h1>Hello {` ${fName} ${lName}`} !</h1> */}
    <h1>Hello {fName + " " + lName} !</h1>
    <p> Your lucky number {num}</p>
    {/* <p> Your lucky number {num}</p> */}
    {/* <p> Your lucky number {3+12}</p> //adding */}
    {/* <p> Your lucky number {Math.floor(Math.random() *10)}</p> // math floor untuk membulatkan ke bawah */}
    {/* <p> Your lucky number {
      if(name === "Angela" ){
        return 7;
      }else if( name === "Jack"){
        return 12;
      }
    }</p> // ini adalah statement tidak bisa di eksekusi */}
  </div>,
  document.getElementById("root")
); //dari div id di html);
