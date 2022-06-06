import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      {/* <Note
        title="Delegation"
        content="Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
      />
      <Note
        title="Delegation"
        content="Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
