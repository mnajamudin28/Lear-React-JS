import React from "react";

function Avatar(props) {
  // tambahkan props agar bisa mengambil dari file ini src={props.img}
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Avatar;
