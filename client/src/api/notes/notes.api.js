import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const getNotes = async () => {
  const token = sessionStorage.getItem("token");
  const reponse = await axios.get(`${URL}/home/notes`, {
    headers: {
      "x-access-token": token,
    },
  });
  console.log(reponse);
  return reponse;
};

export const createNote = async (noteDetails) => {
  try{
    const token = sessionStorage.getItem("token");
    const response = await axios.post(`${URL}/notes/create`, noteDetails, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response)
    return response;
  }catch(err){
    console.log(err)
    return err
  }
};

export const getNoteById = async (id) => {
  const token = sessionStorage.getItem("token");
  const response = await axios.get(`${URL}/home/notes/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  return response;
};

export const deleteNoteId = async (id) => {
  const token = sessionStorage.getItem("token");
  const response = await axios.delete(`${URL}/notes/delete/${id}`,{
    headers: {
      "x-access-token": token,
    },
  })
  return response
};

export const updateNote = async(id,noteDetails) =>{
  const token = sessionStorage.getItem("token");
  const response = await axios.put(`${URL}/notes/edit/${id}`,noteDetails,{
    headers: {
      "x-access-token": token,
    },
  })
  return response
}
