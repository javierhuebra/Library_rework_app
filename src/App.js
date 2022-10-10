import './App.css';
import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<div> <BooksForm/> <BooksList/></div>}/>
        <Route path='/book-detail' element={<div><h2>Book Detail in Progress</h2></div>}/>

        <Route path='*' element={<div><h2>ERROR 404: Not Found</h2></div>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
