import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{
    id: "1",
    title: "100 años de soledad",
    author: "Gabriel García Márquez",
    yearOfPublication: "ni idea",
    srcImage: "imagen/jeje/aca/hola.jpg",
    description: "Un libro larguisimo que nunca lei",
    isbn: "no se si esta"
},
{
    id: "2",
    title: "Relatos de un náufrago",
    author: "Gabriel García Márquez",
    yearOfPublication: "ni idea",
    srcImage: "imagen/jeje/aca/naufragio.jpg",
    description: "Este si lo leí, esta buenardo",
    isbn: "no se si esta"
}
]
export const booksSlice = createSlice({//reducers es el que va a contener multiples funciones 
    name: 'books',
    initialState,
    reducers:{
        addBook: (state, action) =>{
            //console.log(state, action)
            state.push(action.payload);
        }
    }
})
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
