import { useSelector } from 'react-redux'; //el useSelector basicamente tiene acceso a toda la aplicacion, el useSelector es la forma en que podemos traer los datos del estado (seleccionar o traer desde el estado)
import  Book  from './Book';
import BooksForm from './BooksForm';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";

const BooksList = ({stateModal, setStateModal, stateLogin}) =>{
    

    const books = useSelector (state => state.books);

    
    

    return(
        <div className='book-list-container'>
            <ToastContainer autoClose={2000} theme="colored"/>
            {stateModal && <BooksForm 
                btonName={'Add Book'} 
                setStateModal={setStateModal}
            />}

            
            
            
            {stateLogin &&<h1 className='view-account'><BsPersonCircle/> { stateLogin && 'Administrator View'}</h1>}
            <div className='books-list'>
                {
                    books.map((book,index) =>{
                        return(
                            <Book
                            key={index}
                            title={book.title}
                            firstAuthor={book.author[0]}
                            srcImage={book.srcImage}
                            bookId={book.id}
                            stateLogin={stateLogin}
                        />
                        )
                    
                    })
                }
            </div>
        </div>
    )
}

export default BooksList;