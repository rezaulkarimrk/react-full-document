import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import postReducer from "./todos/postSlice";

const store= configureStore({
    reducer: counterReducer,
    posts : postReducer
})

export default store;

