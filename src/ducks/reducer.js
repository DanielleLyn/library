const initialState = {
    books:[]
   
}

// //Action types 

const SET_BOOKS = 'SET_BOOKS';
const ADD_BOOK = 'ADD_BOOK';


export default function reducer (state=initialState, action) {
    console.log('REDUCER HIT ---', action.type);
    switch(action.type){
        case SET_BOOKS: 
            return Object.assign({}, state, {books: action.payload});
        // case ADD_BOOK:
        //     return Object.assign({}, state, {counter: counter +1})

        default: return state;
    }
}

//Action creators

export function setBooks(books){
    return{
        type: SET_BOOKS,    
        payload: {
            books
        }
       
    }
}

// export function AddNewBook(){
//     return{
//         type: ADD_BOOK,
//         payload: AddBook
            

//     } 
        

// }
    
