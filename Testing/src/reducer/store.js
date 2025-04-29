import { configureStore } from "@reduxjs/toolkit";
import couterReducer from './slice';
const store = configureStore({
    reducer: {
        counter: couterReducer
    }
})

export default store; 