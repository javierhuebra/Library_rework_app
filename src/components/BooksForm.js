import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from '../features/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//SACARLE LOS <BR> SE LOS PUSE PARA VERLO LINDO NOMAS
const BookshtmlForm = ({ btonName,setStateModal }) =>{

    const dispatch = useDispatch();
    const params = useParams();
    const books = useSelector(state => state.books);
    

    const [book, setBook] = useState({
        title: "Sacar esto",
        author: ["Fulano"],
        yearOfPublication: "",
        srcImage: "https://us.123rf.com/450wm/nikiteev/nikiteev1712/nikiteev171200048/91247923-vector-de-dibujos-animados-amarillo-doodle-signo-de-interrogaci%C3%B3n-sobre-fondo-blanco-aislado.jpg?ver=6",
        description: "",
        isbn: ""
    });

    const handleChange = (e) =>{
        //console.log(e.target.name, e.target.value)
        let value = e.target.value;
        if (e.target.name === "author") {
        value = value.split(",");
    }
        setBook({
            ...book,
            [e.target.name]: value,
            
        })
        

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(book);
        
        
        
            if(params.id){
                dispatch(updateBook(book))
                toast.success("Book detail edited Successfully!");
                
            }else{
                dispatch(      //el spread operator permite anexarle el id dentro del mismo arreglo, si le saco los ... me devuelve un objeto con los datos por un lado y el id por el otro.
            addBook({
                ...book,
                id:uuidv4(),
                
                
            }));
            toast.success("Book added Successfully!");
            
            }
            setStateModal(false);
            
    }

    

    useEffect(()=>{
        console.log("Hay params?:",params.id)
        if(params.id){
            setBook(books.find((book) => book.id === params.id));
        }
    }, [])

    return(
      <div className="modal-edicion">
      <div className="prueba-clase-form">
          <h2 className="formbold-h2">{btonName}</h2>
          <form onSubmit={handleSubmit} className='form-class'>
            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label">
                Title*
              </label>
              <input
                name="title"
                type="text"
                placeholder="Book title"
                onChange={handleChange}
                value={book.title}
                htmlFor="off"
                className="formbold-form-input"
                required
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="author" className="formbold-form-label">
                Author/s*
              </label>
              <input
                name="author"
                type="text"
                placeholder="Author 1, Author 2, Author 3"
                onChange={handleChange}
                value={book.author}
                htmlFor="off"
                className="formbold-form-input"
                required
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="yearOfPublication" className="formbold-form-label">
                Edition year*
              </label>
              <input
                name="yearOfPublication"
                type="text"
                placeholder="1995"
                onChange={handleChange}
                value={book.yearOfPublication}
                htmlFor="off"
                className="formbold-form-input"
                pattern="^[12][0-9]{3}$"
                required
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="yearOfPublication" className="formbold-form-label">
                Cover image*
              </label>
              <input
                name="srcImage"
                type="text"
                placeholder="https://www.yourimage.com/image.png"
                onChange={handleChange}
                value={book.srcImage}
                htmlFor="off"
                className="formbold-form-input"
                required
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="yearOfPublication" className="formbold-form-label">
                ISBN
              </label>
              <input
                name="isbn"
                type="text"
                placeholder="3457269405679"
                onChange={handleChange}
                value={book.isbn}
                htmlFor="off"
                className="formbold-form-input"
                pattern="(ISBN[-]*(1[03])*[ ]*(: ){0,1})*(([0-9Xx][- ]*){13}|([0-9Xx][- ]*){10})"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="description" className="formbold-form-label">
                Book description*
              </label>
              <textarea
                rows="6"
                name="description"
                id="description"
                placeholder="Type the book's description"
                onChange={handleChange}
                value={book.description}
                htmlFor="off"
                className="formbold-form-input"
                required
              ></textarea>
            </div>
            <div className="formbold-mb-5">
              <p>(*) Mandatory fields</p>
            </div>
            <div>
              <button className="formbold-btn">{btonName}</button>
              <button onClick={() => setStateModal(false)}>Cancel</button>
            </div>
          </form>
          
        </div>
      </div>
    
    )
}

export default BookshtmlForm;