import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import NewNote from "../../Components/NewNote/NewNote";
import "./CreateNotePage.css"

function CreateNotePage(){
    return <div className="create-note-page">
        <HomePageHeader />
        <NewNote />
    </div>
}

export default CreateNotePage;