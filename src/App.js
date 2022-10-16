import './App.css';
import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';
import Header from './components/Header';
import BookDetail from './components/BookDetail';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [stateModal, setStateModal] = useState(false);
  const [stateLogin, setStateLogin] = useState(true);

  //console.log("BooksList: ", books);

  //ESTO ES PARA DESACTIVAR EL SCROLL SI SE ABRE EL MODAL (MODAL CASERITO, HAND MADE, PARA PRACTICAR JE)
  if(stateModal){
       document.body.style.overflow = 'hidden'; 
  }else{
      document.body.style.overflow = 'unset'; 
  }


  return (
    <div className="App">
      <Header 
        setStateModal={setStateModal}
        stateLogin={stateLogin}
        setStateLogin={setStateLogin}/>
      <Routes>
        <Route path='/' 
          element={<BooksList stateModal={stateModal}
          setStateModal={setStateModal}
          stateLogin={stateLogin}/>}/>
        <Route path='/book-detail/:id' element={<BookDetail stateLogin={stateLogin}/>}/>
        <Route path='*' element={<div><h2>ERROR 404: Not Found</h2></div>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
