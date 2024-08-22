import "./Notes.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useEffect, useState } from "react";
import Note from "../Note/Note";
import { getNotes } from "../../api/notes/notes.api";
import { getToken } from "../../Modules/token";
import Loader from "../Loader/Loader";
import { verifyUser } from "../../api/auth/verify/verify.user.api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../features/notesData/notesDataSlice";
import AddBtn from "../AddBtn/AddBtn";
import {Face} from "@moj-ui/fun-ui"
import EmptyPage from "../EmptyPage/EmptyPage";

function Notes() {

  const navigate = useNavigate()

  const [isUser, changeIsUser] = useState(true);

  const [isLoading, changeIsLoading] = useState(true);

  // const [notes, setNotes] = useState([]);

  const dispatch = useDispatch();
  const noteData = useSelector((state)=>state.notesData.value);
  const searchValue = useSelector((state)=>state.searchBar.value);

  const fetchNotes = async () => {
    const verifyResponse = await verifyUser();
    if (verifyResponse) {
        const response = await getNotes();
        dispatch(setData(response.data));
        // setNotes(response.data) 
        changeIsLoading(false);
    }
    else (
        navigate("/")
    )

  };
  useEffect(() => {
    fetchNotes();

    return () => {};
  }, []);

  const function1 = ()=>{
    let count = 0
     const data = noteData.map((note)=>{
      if(note.heading.includes(searchValue) || note.body.includes(searchValue)){
        return <Note noteDetails={note}/>
      }else{
        count += 1;
      }
  })
  if(count===data.length){
    return <EmptyPage />
  }
  return data;
  }

  function showNotes(){
    return <div className="notes-div">
        {noteData.length ? function1() : <EmptyPage/>}
    </div>
  }

  return (
    <div className="notes">
    {isLoading ? <Loader /> : showNotes()}
    <AddBtn/>
    </div>
  );
}

export default Notes;
