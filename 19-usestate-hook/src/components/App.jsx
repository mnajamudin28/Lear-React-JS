import React, { useState } from "react";

// const [red, green, blue] = [9, 132, 227]; contoh array

function App() {
  //const array yang pertama adalah variable value kedua adalah function
  const [count, setCount] = useState(0);
  // usestate diambil dari modul React kita sebut count
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
