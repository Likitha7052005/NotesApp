import { useNavigate } from "react-router-dom";
import "./NewNote.css";
import { useEffect, useState } from "react";
import { createNote } from "../../api/notes/notes.api";
const { todayDateString, todayDate } = require("../../Modules/date");

function NewNote() {
  const navigate = useNavigate();
  const [noteHeading, changeNoteHeading] = useState("");
  const [noteBody, changeNoteBody] = useState("");
  const noteDetails = {
    date: todayDateString(),
    heading: noteHeading,
    body: noteBody,
  };

  function changeHeading(e) {
    changeNoteHeading(e.target.value);
  }

  function changeBody(e) {
    changeNoteBody(e.target.value);
  }

  function cancelChanges() {
    if (window.confirm("cancel Changes")) {
      navigate("/home");
    }
  }

  async function saveChanges(e) {
    e.preventDefault();
    if (window.confirm("Save Changes ?")) {
      try {
        await createNote(noteDetails);
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="new-note-div">
      <div className="new-note p-2">
        <form onSubmit={saveChanges}>
          <div className="new-note-date">
            <p className="rounded border p-1">{todayDateString()}</p>
          </div>
          <div className="new-note-heading">
            <input
              className="rounded border p-1"
              type="text"
              value={noteHeading}
              onChange={changeHeading}
              placeholder="Note Heading..."
            ></input>
          </div>
          <div className="new-note-body">
            <textarea
              className="rounded border p-1"
              value={noteBody}
              onChange={changeBody}
              required
              placeholder="Note..."
            ></textarea>
          </div>
          <div className="footer-div">
            <button type="button" className="border rounded text-white" onClick={cancelChanges}>
              Cancel
            </button>
            <button type="submit" className="border rounded text-white">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNote;
