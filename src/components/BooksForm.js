import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/booksSlice';

//SACARLE LOS <BR> SE LOS PUSE PARA VERLO LINDO NOMAS
const BooksForm = () =>{

    const [book, setBook] = useState({
    // id: "", 
        title: "Whitout Title",
        author: "Unknown",
        yearOfPublication: "Unknown",
        srcImage: "https://i.postimg.cc/SNDkWj8c/Sin-t-tulodd-1.png",
        description: "Without Description",
        isbn: "Unknown"
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
        dispatch(addBook(book));
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