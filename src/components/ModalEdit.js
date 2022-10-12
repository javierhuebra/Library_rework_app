import { Link, useParams } from "react-router-dom"

const ModalEdit = () => {
    const { id } = useParams();
    return(
        
        <div className='modal-edicion'>
            Modal de edicion (TEST)
            <form >
            
            <label>Title: </label>
            <input
            name="title" 
            type="text" 
            placeholder="Write"
           
            />

            <br/> 

            <label>Author: </label>
            <input 
            name="author"
            type="text" 
            placeholder="Write"
            />
            
            <br/> 

            <label>Edition Year: </label>
            <input
            name="yearOfPublication" 
            type="text" 
            placeholder="1995"
            />

            <br/>
            

            <label>Source Image: </label>
            <input
            name="srcImage" 
            type="text" 
            placeholder="https://www.yourimage.com/image.png"
            />

            <br/>

            <label>Description: </label>
            <textarea
            name="description" 
            type="text" 
            placeholder="Description..."
           />

            <br/> 

            <label>ISBN: </label>
            <input
            name="isbn" 
            type="text" 
            placeholder="Optional"
           />

            <br/>

            

        </form>
            <Link to={`/`}><button>Accept</button></Link>
            <Link to={`/book-detail/${id}`}><button>Cancel</button></Link>
        </div>
        
    )
}

export default ModalEdit;