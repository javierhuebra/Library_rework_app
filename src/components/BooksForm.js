import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from '../features/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//SACARLE LOS <BR> SE LOS PUSE PARA VERLO LINDO NOMAS
const BooksForm = ({ btonName,setStateModal }) =>{

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
                toast.success("Book detail edited Succesfuly!");
                
            }else{
                dispatch(      //el spread operator permite anexarle el id dentro del mismo arreglo, si le saco los ... me devuelve un objeto con los datos por un lado y el id por el otro.
            addBook({
                ...book,
                id:uuidv4(),
                
                
            }));
            toast.success("Book added Succesfuly!");
            
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
    <div className='modal-edicion'>
        
        <form onSubmit={handleSubmit} className='form-styled'>
            
            <label>Title: </label>
            <input
            name="title" 
            type="text" 
            placeholder="Write"
            onChange={handleChange}
            value={book.title}
            autoComplete='off'
            />

            <br/> 

            <label>Author/s: </label>
            <input 
            name="author"
            type="text" 
            placeholder="Write"
            onChange={handleChange}
            value={book.author}
            autoComplete='off'/>
            
            <br/> 

            <label>Edition Year: </label>
            <input
            name="yearOfPublication" 
            type="text" 
            placeholder="1995"
            onChange={handleChange}
            value={book.yearOfPublication}
            autoComplete='off'/>

            <br/>
            

            <label>Source Image: </label>
            <input
            name="srcImage" 
            type="text" 
            placeholder="https://www.yourimage.com/image.png"
            onChange={handleChange}
            value={book.srcImage}
            autoComplete='off'/>

            <br/>

            <label>Description: </label>
            <textarea
            name="description" 
            type="text" 
            placeholder="Description..."
            onChange={handleChange}
            value={book.description}
            autoComplete='off'/>

            <br/> 

            <label>ISBN: </label>
            <input
            name="isbn" 
            type="text" 
            placeholder="Optional"
            onChange={handleChange}
            value={book.isbn}
            autoComplete='off'/>

            <br/>

            <button>{btonName}</button>

        </form>
        <button onClick={() => setStateModal(false)}>Cancel</button>
    </div>
    )
}

export default BooksForm;