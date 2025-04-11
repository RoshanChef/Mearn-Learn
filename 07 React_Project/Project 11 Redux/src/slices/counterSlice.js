import { createSlice } from "@reduxjs/toolkit"

// in redux state are immutable they only possible in object/array bcoz of immer library

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,//this state handle by reducers
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
        reset() {
            return 0;
        },
        increaseByAmt(state, action) {
            return state + action.payload;
        }
    }
})

export const { decrease, increase, reset, increaseByAmt } = counterSlice.actions;
export default counterSlice.reducer;