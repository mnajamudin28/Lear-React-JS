import React from "react";

function Input(props) {
  //ganti "type dengan props.type"
  return <input type={props.type} placeholder={props.placeholder} />;
}

export default Input;
