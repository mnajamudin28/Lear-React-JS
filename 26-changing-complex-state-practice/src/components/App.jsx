import React, { useState } from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }
  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }
  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    //dihaganti dengan const { value, name } = event.target;
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {/* Hello {fName} {lName} */}
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
