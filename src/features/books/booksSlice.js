import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{
    id: "0495ebad-0a9f-43c4-827c-525195c5a80",
    title: "100 años de soledad",
    author: ["Gabriel García Márquez"],
    yearOfPublication: "ni idea",
    srcImage: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/medium",
    description: "Un libro larguisimo que nunca lei",
    isbn: "no se si esta"
},
{
    id: "0495ebad-0a9f-4567-s276-t2yui5csa80",
    title: "El reino del dragón de oro",
    author: ["Isabel Allende"],
    yearOfPublication: "ni idea",
    srcImage: "https://www.lanormal.com.ar/media/libros/29a3f71a76e6a40bf93a29e41c0edf89.jpg",
    description: "Unos pibes van al himalaya a encontrar aventuras y cosas magicas",
    isbn: "no se si esta"
},
{
    id: "0495ebad-0a9f-44c1-s27c-t2yui5csa80",
    title: "Relatos de un náufrago",
    author: ["Gabriel García Márquez"],
    yearOfPublication: "ni idea",
    srcImage: "https://contentv2.tap-commerce.com/cover/large/9789871138036_1.jpg?id_com=1113",
    description: "Este si lo leí, esta buenardo",
    isbn: "no se si esta"
}
,
{
    id: "0495ebad-0a9f-44c1-s27c-t2quirssa80",
    title: "Eloquent Javascript 3rd Edition",
    author: ["Marin Haversdads"],
    yearOfPublication: "ni idea",
    srcImage: "https://isdicoders.com/wp-content/uploads/migrate/los-mejores-libros-para-aprender-javascript.jpg",
    description: "Un libro amarillo de javascript para aprender a programar",
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
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
          },
    }
})
export const { addBook,deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
