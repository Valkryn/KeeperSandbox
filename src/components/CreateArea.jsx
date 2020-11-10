import React, { useState } from "react";

function CreateArea(props) {
  const [entry, setEntry] = useState({
    title: "",
    content: ""
  });

  function handleChange(evt) {
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
      <form onChange={handleChange}>
        <input value={entry.title} name="title" placeholder="Title" />
        <textarea
          value={entry.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
