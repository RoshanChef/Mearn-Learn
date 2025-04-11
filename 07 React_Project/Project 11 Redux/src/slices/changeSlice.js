import { createSlice } from "@reduxjs/toolkit";

const changeSlice = createSlice({
    name: "change",
    initialState: { value: "" },
    reducers: {
        change: (state, action) => {
            state.value = action.payload.data;
        }
    }
})

export const { change } = changeSlice.actions;
export default changeSlice.reducer;