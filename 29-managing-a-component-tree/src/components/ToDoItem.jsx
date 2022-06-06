import React, { useState } from "react";

//untuk list coret
// function ToDoItem(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.text}
//       </li>
//       ;
//     </div>
//   );
// }

// export default ToDoItem;

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default ToDoItem;