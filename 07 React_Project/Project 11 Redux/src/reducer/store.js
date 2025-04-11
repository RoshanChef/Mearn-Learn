import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import productReducer from "../slices/productSlice";
import changeReducer from "../slices/changeSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        counter: counterReducer,
        change: changeReducer
    }
})

export default store;   