import React, {useState, useReducer} from 'react';

const booksData=[
    {id:1,name:"Boatman of the Padma"},
    {id:2,name:"Mid-Night of Himu"},
    {id:3,name:"Cracking the coding interview"}
]

const Model=({modelText})=>{
    return <p>{modelText}</p>
}

const reducer = (state, action)=>{
    if(action.type ==='ADD'){
        const allBooks=[...state.books, action.payload]
        return{
            ...state,
            books: allBooks,
            isModel: true,
            modelText: 'Book is added'
        }
    }
    if(action.type==='REMOVE'){
        const filteredBooks=[...state.books].filter(book=> book.id!==action.payload);
        return{
            ...state,
            books:filteredBooks,
            isModel: true,
            modelText: 'Book is Remove'
        }
    }
    return state;
}

const UseReducer = () => {
// const [books, setBooks]=useState(booksData);
// const [isModel, setIsModel]=useState(false);
// const [modelText, setModelText]=useState('');
const InitialState={
    books: booksData,
    isModel: false,
    modelText:''}
const [bookState, dispatch]= useReducer(reducer, InitialState);
const [bookName, setBookName]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
     const newBook= {id: new Date().getTime().toString(), name:bookName};
     dispatch({type: "ADD", payload: newBook});
    // setBooks((prevState)=>{
    //     const newBook={id: new Date().getTime().toString(), name: bookName}
    //     return [...prevState, newBook];
    // })
    // setIsModel(true);
    // setModelText("Books is added");
}
const RemoveBook =(id)=>{
    dispatch({type: "REMOVE", payload: id});
}


  return (
    <>
    <h1>Book List</h1>
    <form onSubmit={handleSubmit}>
        <input type='text' value={bookName} onChange={(e)=>{setBookName(e.target.value)}} />
        <button type='submit'>Add Book</button>
    </form>
    {/* {isModel && <Model modelText={modelText}/>} */}
    {bookState.isModel && <Model modelText={bookState.modelText}/>}
    {
        bookState.books.map((book)=>{
            const {id, name}=book;
            return <div key={id}>
                        {/* <h4 style={{display:'inline'}}>{id}</h4> */}
                        <h4 style={{display:'inline'}}>   {name}</h4>
                        <button onClick={()=>RemoveBook(id)}>Remove</button>
                    </div>
            
        })
    }
    </>
  )
}

export default UseReducer;
