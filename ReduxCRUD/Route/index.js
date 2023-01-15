import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../feature/Home';
import Error from '../pages/Error';
import Navbar from '../LayOut/Navbar';
import BookView from '../feature/BookView';
import AddBook from '../feature/addBook';
import EditBook from '../feature/EditBook';
import Footer from '../LayOut/Footer';

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<Error />} />
                <Route path='/show-books' element={<BookView />} />
                <Route path='edit-book' element={<EditBook/>}/>
                <Route path='add-book' element={<AddBook />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default Index
