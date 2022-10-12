import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

//SACARLE LOS <BR> SE LOS PUSE PARA VERLO LINDO NOMAS
const BooksForm = () =>{

    const [book, setBook] = useState({
        title: "Nothing Typed",
        author: "Nothing Typed",
        yearOfPublication: "Nothing Typed",
        srcImage: "https://us.123rf.com/450wm/nikiteev/nikiteev1712/nikiteev171200048/91247923-vector-de-dibujos-animados-amarillo-doodle-signo-de-interrogaci%C3%B3n-sobre-fondo-blanco-aislado.jpg?ver=6",
        description: "Nothing Typed",
        isbn: "Nothing Typed"
    });
    
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        //console.log(e.target.name, e.target.value)
        setBook({
            ...book,
            [e.target.name]: e.target.value,
            
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(book);
        
        dispatch(      //el spread operator permite anexarle el id dentro del mismo arreglo, si le saco los ... me devuelve un objeto con los datos por un lado y el id por el otro.
            addBook({
                ...book,
                id:uuidv4(),
                
            }));
    }

    return(
        <form onSubmit={handleSubmit}>
            
            <label>Title: </label>
            <input
            name="title" 
            type="text" 
            placeholder="Write"
            onChange={handleChange}/>

            <br/> 

            <label>Author: </label>
            <input 
            name="author"
            type="text" 
            placeholder="Write"
            onChange={handleChange}/>
            
            <br/> 

            <label>Edition Year: </label>
            <input
            name="yearOfPublication" 
            type="text" 
            placeholder="1995"
            onChange={handleChange}/>

            <br/>
            

            <label>Source Image: </label>
            <input
            name="srcImage" 
            type="text" 
            placeholder="https://www.yourimage.com/image.png"
            onChange={handleChange}/>

            <br/>

            <label>Description: </label>
            <textarea
            name="description" 
            type="text" 
            placeholder="Description..."
            onChange={handleChange}/>

            <br/> 

            <label>ISBN: </label>
            <input
            name="isbn" 
            type="text" 
            placeholder="Optional"
            onChange={handleChange}/>

            <br/>

            <button>Save</button>

        </form>
    )
}

export default BooksForm;