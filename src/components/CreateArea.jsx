import React from "react";

function CreateArea(props) {
  function addKeeper(evt) {
    props.addEntry(evt);
  }

  return (
    <div>
      <form onChange={addKeeper}>
        <input
          value={props.entryValue.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={props.entryValue.content}
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
