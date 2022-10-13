import './App.css';
import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';
import Header from './components/Header';
import BookDetail from './components/BookDetail';
import ModalEdit from './components/ModalEdit';
import { Route, Routes } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<BooksList/>}/>
        <Route path='/add-book' element={<BooksForm btonName={'Add Book'}/>}/>
        <Route path='/book-detail/:id' element={<BookDetail/>}/>
        <Route path='/book-detail/:id/edit' element={<div className='div-experimental'><ModalEdit/></div>}/>

        <Route path='*' element={<div><h2>ERROR 404: Not Found</h2></div>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
