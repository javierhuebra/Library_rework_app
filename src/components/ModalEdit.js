import { Link, useParams } from "react-router-dom"

const ModalEdit = () => {
    const { id } = useParams();
    return(
        
        <div className='modal-edicion'>
            Modal de edicion (TEST)
            <Link to={`/`}><button>Accept</button></Link>
            <Link to={`/book-detail/${id}`}><button>Cancel</button></Link>
        </div>
        
    )
}

export default ModalEdit;