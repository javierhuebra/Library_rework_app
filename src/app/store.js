import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice'; //importo el booksSlice de features/books


export const store = configureStore({
    reducer:{
        books: booksReducer
        }
    
})

//los reducers se pueden pensar con el set state, la tipica funcion que actualiza un estado


