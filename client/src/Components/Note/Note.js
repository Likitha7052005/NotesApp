import "./Note.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useNavigate } from "react-router-dom";

function Note(props) {
  const navigate = useNavigate();

  function clicked(e) {
    const id = props.noteDetails._id;
    navigate(`/note/${id}`);
  }

  return (
    <div className="card pb-3 note-card bg-light" onClick={clicked}>
      <div className="card-header card-date text-white">{props.noteDetails.date}</div>
      <div className="card-body text-start overflow-hidden bg-light">
        <h5 className="card-title text-start">{props.noteDetails.heading}</h5>
        <p className="card-text text-start">{props.noteDetails.body}</p>
      </div>
    </div>
  );
}

export default Note;
