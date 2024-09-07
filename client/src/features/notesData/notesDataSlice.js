import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value : [],
}

export const notesDataSlice = createSlice({
    name : "notesData",
    initialState,
    reducers: {
        setData : (state,action) => {
            state.value = action.payload
        },
    },
})

export const {setData} = notesDataSlice.actions

export default notesDataSlice.reducer