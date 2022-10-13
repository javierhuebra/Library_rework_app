import { Link, useParams } from "react-router-dom"
import BooksForm from "./BooksForm";

const ModalEdit = () => {
    const { id } = useParams();
    return(
        
        <div className='modal-edicion'>
            Modal de edicion (TEST)
            
            <BooksForm btonName={'Update'}/>
            
            
            <Link to={`/book-detail/${id}`}><button>Cancel</button></Link>
        </div>
        
    )
}

export default ModalEdit;