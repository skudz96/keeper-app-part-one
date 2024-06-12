import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notesEntry from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notesEntry.map((entry) => {
        return (
          <Notes key={entry.key} title={entry.title} content={entry.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
