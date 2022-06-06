import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLoggedin = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        //   if (isLoggedin === true) {
        //     return <h1> Hello </h1>;
        //   } else {
        //     return <Login />;
        //   }
        // }</div>; //menjadi
        // isLoggedin === true ? <h1> Hello </h1> : <Login /> //atau
        // isLoggedin ? <h1> Hello </h1> : <Login />
        currentTime > 11 ? <h1>why are you still working?</h1> : null
      }
    </div>
  );
}

export default App;
