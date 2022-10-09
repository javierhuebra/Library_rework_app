
const Book = ({ title, firstAuthor, srcImage }) =>{
   return(
    <div>
        <h2>{title}</h2>
        <h3>{firstAuthor}</h3>
        <img src={srcImage} alt="Book image"/>
    </div>
    ) 
}

export default Book;