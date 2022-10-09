import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{
    id: "1",
    title: "100 años de soledad",
    author: "Gabriel García Márquez",
    yearOfPublication: "ni idea",
    srcImage: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/medium",
    description: "Un libro larguisimo que nunca lei",
    isbn: "no se si esta"
},
{
    id: "2",
    title: "Relatos de un náufrago",
    author: "Gabriel García Márquez",
    yearOfPublication: "ni idea",
    srcImage: "https://contentv2.tap-commerce.com/cover/large/9789871138036_1.jpg?id_com=1113",
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
