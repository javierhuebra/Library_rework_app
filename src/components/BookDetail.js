import { Link, useParams } from "react-router-dom"
import { useSelector } from 'react-redux'; //el useSelector basicamente tiene acceso a toda la aplicacion, el useSelector es la forma en que podemos traer los datos del estado (seleccionar o traer desde el estado)

const BookDetail = () =>{
    
    const { id } = useParams();
    const books = useSelector(state => state.books);
    
    //console.log("Accediendo a la store desde Detail: ",books);
    
    let bookDetailed = books.filter(book => book.id === id);
    //console.log("bookDetailed:",bookDetailed)

    return(
        <div className="book-detail">
            <h3>Book Detail</h3>
            
            
            <img src={bookDetailed[0].srcImage} alt="Book Image BIG"/>
            <p>Title: {bookDetailed[0].title}</p>
            <p>Author: {bookDetailed[0].author.map(aut=>{
                return(aut+", ")
            })}</p>
            <p>Year: {bookDetailed[0].yearOfPublication}</p>
            <p>Description: {bookDetailed[0].description}</p>
            <p>ISBN: {bookDetailed[0].isbn}</p> 
            {/* <p>id: {id}</p> */}
            <Link to={'/'}><button>Back</button></Link>
            <Link to={`/book-detail/${id}/edit`}><button>Edit Information</button></Link>
            
            
            
        </div>
    )
}

export default BookDetail;