import { useSelector } from 'react-redux'; //el useSelector basicamente tiene acceso a toda la aplicacion, el useSelector es la forma en que podemos traer los datos del estado (seleccionar o traer desde el estado)
import  Book  from './Book';
import BooksForm from './BooksForm';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";

const BooksList = () =>{
    

    const books = useSelector (state => state.books);

    const [stateModal, setStateModal] = useState(false);

    //console.log("BooksList: ", books);

    //ESTO ES PARA DESACTIVAR EL SCROLL SI SE ABRE EL MODAL (MODAL CASERITO, HAND MADE, PARA PRACTICAR JE)
    if(stateModal){
         document.body.style.overflow = 'hidden'; 
    }else{
        document.body.style.overflow = 'unset'; 
    }
    

    return(
        <div className='book-list-container'>
            <ToastContainer autoClose={2000} theme="colored"/>
            {stateModal && <BooksForm 
                btonName={'Add Book'} 
                setStateModal={setStateModal}
            />}

            
            <div onClick={ () => setStateModal(true) } className='btn-add-book'>
                <p className='add-book-plus'>+</p>
                <p className='add-book-text'>Add Book</p>
            </div>
            
            <h1 className='view-account'><BsPersonCircle/> Administrator View</h1>
            {
                books.map((book,index) =>{
                    return(
                        <Book
                        key={index}
                        title={book.title}
                        firstAuthor={book.author[0]}
                        srcImage={book.srcImage}
                        bookId={book.id}
                        
                    />
                    )
                    
                })
            }
        </div>
    )
}

export default BooksList;