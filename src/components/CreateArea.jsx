import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [display, setDisplay] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={() => setDisplay((preValue) => (preValue ? false : true))}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {display && (
          <div>
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={display ? 3 : 1}
            />
            <Zoom in="true">
              <Fab color="sssssecondry" onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
