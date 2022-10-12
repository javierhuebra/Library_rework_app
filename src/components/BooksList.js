import { useSelector } from 'react-redux'; //el useSelector basicamente tiene acceso a toda la aplicacion, el useSelector es la forma en que podemos traer los datos del estado (seleccionar o traer desde el estado)
import  Book  from './Book';
//NO USAR INDEX EN MAP, USAR UUID

const BooksList = () =>{
    

    const books = useSelector (state => state.books);
    console.log("BooksList: ", books);
    return(
        <div>
            <h1>BooksList</h1>
            {
                books.map((book,index) =>{
                    return(
                        <Book
                        key={index}
                        title={book.title}
                        firstAuthor={book.author}
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