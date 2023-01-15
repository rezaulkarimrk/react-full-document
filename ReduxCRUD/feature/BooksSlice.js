const {createSlice} = require("@reduxjs/toolkit")

const {v4: uuidv4} = require('uuid');

const  iniitialBooks={
    books :[
        {id: uuidv4(), title: 'Katu miya', author: 'Humayun Ahmed'},
        {id: uuidv4(), title: 'Our University', author: 'Maxim Gaurki'},
        {id: uuidv4(), title: 'Want to Fly', author: 'Rezual Karim RK'},
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: iniitialBooks,
    reducers:{
        showBooks: (state)=>state,
        addBooks: (state, action)=>{
            state.books.push(action.payload);
        },
        updateBook: (state, action)=>{
            const {id, title, author}=action.payload;
            const isBookExist= state.books.filter((book)=>book.id===id);
            if(isBookExist){
                isBookExist[0].title=title;
                isBookExist[0].author=author;
            }
        },
        deleteBook: (state, action)=>{
            const id =action.payload;
            state.books=state.books.filter((book)=>book.id!==id);
        }
    },
});

export const {showBooks, addBooks, deleteBook, updateBook }=booksSlice.actions;
export default booksSlice.reducer;