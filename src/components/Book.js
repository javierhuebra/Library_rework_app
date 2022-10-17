import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/booksSlice';
import { toast } from 'react-toastify';
const Book = ({ title, firstAuthor, srcImage,bookId, stateLogin, statePreview}) =>{

const dispatch = useDispatch();

const handleDelete = (id) => {
    dispatch(deleteBook(id));
    toast.error(`${title} deleted Succesfuly!`,{
        position: "bottom-right"});
  };

   return(
    <div className="book">
        <div className='title-author-cont'>
            <h2 className='bk-title'>{title}</h2>
            <h3>{firstAuthor}</h3>
        </div>
        
        <img src={srcImage} alt="Book image"/>
        <div className='buttons'>
            <Link to={`/book-detail/${bookId}`}><button className='btn-detail'>Detail</button></Link>
            {(stateLogin&&!statePreview) && <button className='btn-delete' onClick={() => handleDelete(bookId)}>Delete</button>} 
        </div>
        
           
    </div>//recordar que para que funcione la funcion por props se pone "() => deleteBook(id)"
    ) 
}

export default Book;