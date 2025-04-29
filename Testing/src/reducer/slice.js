import { createSlice } from '@reduxjs/toolkit';

const initialState = { cnt: 0, data: "" };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase(state, action) {
            state.cnt++;
        },
        decrease(state) {
            state.cnt--;
        },
        setData(state, action) {
            state.data = action.payload
        }
    }
})

export const { increase, decrease, setData } = counterSlice.actions;
export default counterSlice.reducer; 