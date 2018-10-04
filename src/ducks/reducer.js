const initialState = {
    books:[],
    image:'',
    title:'',
    author:'',
    genre:'',
    description:''
   
}

// //Action types 

const SET_BOOKS = 'SET_BOOKS';


const CHANGE_IMAGE = 'CHANGE_IMAGE';
const CHANGE_TITLE = 'CHANGE_TITLE';
const CHANGE_AUTHOR = 'CHANGE_AUTHOR';
const CHANGE_GENRE = 'CHANGE_GENRE';
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';


export default function reducer (state=initialState, action) {
    console.log('REDUCER HIT ---', action.type);
    switch(action.type){
        case SET_BOOKS: 
            return Object.assign({}, state, {books: action.payload});
        // case ADD_BOOK:
        //     return Object.assign({}, state, {counter: counter +1})
        case CHANGE_IMAGE:
            return {...state, image: action.payload};
        case CHANGE_TITLE:
            return {...state, title: action.payload};
        case CHANGE_AUTHOR:
            return {...state, author: action.payload};
        case CHANGE_GENRE: 
            return {...state, genre: action.payload};
        case CHANGE_DESCRIPTION:
            return {...state, description: action.payload}

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

export function handleChange(type,value) {
    switch(type) {
        case 'image':
        return{
            type: CHANGE_IMAGE,
            payload: value
        }
        case 'title':
        return{
            type: CHANGE_TITLE,
            payload: value
        }
        case 'author':
        return{
            type:CHANGE_AUTHOR,
            payload: value
        }
        case 'genre':
        return{
            type:CHANGE_GENRE,
            payload: value
        }
        case 'description':
        return{
            type:CHANGE_DESCRIPTION,
            payload: value
        }

        default: 
        return value;
    }
}
   

