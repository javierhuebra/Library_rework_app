import { useSelector } from 'react-redux'; //el useSelector basicamente tiene acceso a toda la aplicacion, el useSelector es la forma en que podemos traer los datos del estado (seleccionar o traer desde el estado)
import  Book  from './Book';
import { Link } from 'react-router-dom';

//NO USAR INDEX EN MAP, USAR UUID

const BooksList = () =>{
    

    const books = useSelector (state => state.books);

    console.log("BooksList: ", books);
    

    return(
        <div className='book-list-container'>
            <Link to='/add-book'>
                <div className='btn-add-book'>
                    <p className='add-book-plus'>+</p>
                    <p className='add-book-text'>Add Book</p>
                </div>
            </Link>
            <h1>BooksList</h1>
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