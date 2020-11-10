import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [entry, setEntry] = useState({
    title: "",
    content: ""
  });

  function addEntry(evt) {
    let { name, value } = evt.target;
    setEntry((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addEntry={addEntry} entryValue={entry} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
