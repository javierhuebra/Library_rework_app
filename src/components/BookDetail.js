import { Link, useParams } from "react-router-dom"
import { useSelector } from 'react-redux'; //el useSelector basicamente tiene acceso a toda la aplicacion, el useSelector es la forma en que podemos traer los datos del estado (seleccionar o traer desde el estado)
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import BooksForm from "./BooksForm";
import { FaArrowLeft } from "react-icons/fa";
import { RiSettings5Fill, RiUser3Line } from "react-icons/ri";
const BookDetail = ({ stateLogin, statePreview }) => {

    const { id } = useParams();
    const books = useSelector(state => state.books);

    const [stateModal, setStateModal] = useState(false);

    //console.log("Accediendo a la store desde Detail: ",books);

    let bookDetailed = books.filter(book => book.id === id);
    //console.log("bookDetailed:",bookDetailed)

    return (


        <div className="book-detail">
            {stateModal && <BooksForm
                btonName={'Update'}
                setStateModal={setStateModal}
            />}
            <ToastContainer autoClose={2000} theme="colored" />

            {stateLogin && <h1 className={`view-account ${(stateLogin && statePreview) ? 'title-client' : ''}`}>{(stateLogin && statePreview) ? <RiUser3Line /> : <RiSettings5Fill />} {(stateLogin && statePreview) ? 'Client View' : 'Administrator View'}</h1>}
            <div className="container-details-ult">
                <div className="centrar-data">
                    <img className="bk-detail-img" src={bookDetailed[0].srcImage} alt="Book Image BIG" />
                    <div className="container-details">
                        <div className="info-detail-container">

                            <p className="paraph-detail"><span className="detail-key">Title:</span> {bookDetailed[0].title}</p>
                            <p className="paraph-detail"><span className="detail-key">Author:</span> {bookDetailed[0].author.map(aut => {
                                return (aut + ", ")
                            })}</p>
                            <p className="paraph-detail"><span className="detail-key">Year:</span> {bookDetailed[0].yearOfPublication}</p>
                            <div className="description-box">
                                <p className="paraph-detail"><span className="detail-key">Description:</span> {bookDetailed[0].description}</p>
                            </div>
                            <p className="paraph-detail"><span className="detail-key">ISBN:</span> {bookDetailed[0].isbn}</p>
                            {/* <p>id: {id}</p> */}
                        </div>
                    </div>
                    <div className="buttons-detail">
                        <Link to={'/'}><button className=" bt back-btn"><FaArrowLeft /> Back</button></Link>
                        {(stateLogin && !statePreview) && <button className="bt edit-info-btn" onClick={() => setStateModal(true)}>Edit Information</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;

