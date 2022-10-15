import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "0495ebad-0a9f-43c4-827c-525195c5a80",
        title: "100 años de soledad",
        author: ["Gabriel García Márquez"],
        yearOfPublication: "ni idea",
        srcImage: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/medium",
        description: "Cien años de soledad trata un siglo en la vida de la familia Buendía, cuyo patriarca, José Arcadio Buendía, fundó el pueblo ficticio de Macondo, en Colombia. La novela es considerada una obra maestra de la literatura latinoamericana y uno de los ejemplos clásicos del realismo mágico.",
        isbn: "no se si esta"
    },
    {
        id: "0495ebad-0a9f-4567-s276-t2yui5csa80",
        title: "El reino del dragón de oro",
        author: ["Isabel Allende"],
        yearOfPublication: "ni idea",
        srcImage: "https://www.lanormal.com.ar/media/libros/29a3f71a76e6a40bf93a29e41c0edf89.jpg",
        description: "La estatua del Dragón de Oro permanece oculta en un reino pequeño y misterioso, enclavado en la cordillera del Himalaya. Y según cuenta la leyenda, este magnífico objeto, un poderoso instrumento de adivinación incrustado de piedras preciosas, preserva la paz de estas tierras.",
        isbn: "no se si esta"
    },
    {
        id: "0495ebad-0a9f-44c1-s27c-t2yui5csa80",
        title: "Relatos de un náufrago",
        author: ["Gabriel García Márquez"],
        yearOfPublication: "ni idea",
        srcImage: "https://contentv2.tap-commerce.com/cover/large/9789871138036_1.jpg?id_com=1113",
        description: "Relato de un náufrago​ es un reportaje novelado de Gabriel García Márquez que relata la historia de Luis Alejandro Velasco Sánchez, un náufrago que fue proclamado héroe de Colombia, pero tras la versión distribuida por el diario El Espectador de Bogotá, quedó olvidado; este relato obligó a que su autor se diera al .",
        isbn: "no se si esta"
    }
    ,
    {
        id: "0495ebad-0a9f-44c1-s27c-t2quirssa80",
        title: "Eloquent Javascript 3rd Edition",
        author: ["Marin Haversdads"],
        yearOfPublication: "ni idea",
        srcImage: "https://isdicoders.com/wp-content/uploads/migrate/los-mejores-libros-para-aprender-javascript.jpg",
        description: "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications. JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon.",
        isbn: "no se si esta"
    }
]
export const booksSlice = createSlice({//reducers es el que va a contener multiples funciones 
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            //console.log(state, action)
            state.push(action.payload);
        },
        updateBook: (state, action) => {
            const { id, title, author, yearOfPublication, srcImage, description, isbn } = action.payload;

            const foundBook = state.find(book => book.id === id);

            if (foundBook) {
                foundBook.title = title;
                foundBook.author = author;
                foundBook.yearOfPublication = yearOfPublication;
                foundBook.srcImage = srcImage;
                foundBook.description = description;
                foundBook.isbn = isbn;
            }

        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },

    }
})
export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
