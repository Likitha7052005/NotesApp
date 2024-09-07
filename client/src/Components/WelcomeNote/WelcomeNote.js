import "./WelcomeNote.css";
const {todayDateString} = require("../../Modules/date");

function WelcomeNote(){

    const note = {
        date : todayDateString(),
        heading : "Hello! Welcome To Notes App.",
        body : "Create and Manage you Daily Notes Here"
    }

    return <div className="note-main-div">
        <div className="close-btn-div">
        </div>
        <div className="date-div bg-light border">
            <p className="h-100 m-0 d-flex align-items-center">{note.date}</p>
        </div>
        <div className="heading-div bg-light border">
            <h4>{note.heading}</h4>
        </div>
        <div className="body-div bg-light border">
            <p>{note.body}</p>
        </div>
    </div>
}

export default WelcomeNote;