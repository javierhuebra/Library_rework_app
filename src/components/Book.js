import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/booksSlice';

const Book = ({ title, firstAuthor, srcImage,bookId}) =>{

const dispatch = useDispatch();

const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

   return(
    <div className="book">
        <h2>{title}</h2>
        <h3>{firstAuthor}</h3>
        <img src={srcImage} alt="Book image"/>
        <div className='buttons'>
            <Link to={`/book-detail/${bookId}`}><button className='btn-detail'>Detail</button></Link>
            <div className='delete-logo' onClick={() => handleDelete(bookId)}>
                <p className='delete-text'>Delete</p>
                <p className='x-text'>+</p>
            </div> 
        </div>
        
           
    </div>//recordar que para que funcione la funcion por props se pone "() => deleteBook(id)"
    ) 
}

export default Book;