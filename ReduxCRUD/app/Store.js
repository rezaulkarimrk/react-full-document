import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../feature/BooksSlice";


const store =configureStore({
    reducer:{
        booksReducer: booksReducer
    }
})

export default store;