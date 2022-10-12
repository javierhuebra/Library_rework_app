import { Link } from 'react-router-dom';
const Book = ({ title, firstAuthor, srcImage,bookId }) =>{
   return(
    <div className="book">
        <h2>{title}</h2>
        <h3>{firstAuthor}</h3>
        <img src={srcImage} alt="Book image"/>
        <Link to={`/book-detail/${bookId}`}><button>Detail</button></Link>
        <button>Delete</button>
    </div>
    ) 
}

export default Book;