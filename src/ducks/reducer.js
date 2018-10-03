const initialState = {
    AllBooks:[]
}

// //Action types 

const SET_BOOKS = 'SET_BOOKS';


export default function reducer (state=initialState, action) {
    console.log('REDUCER HIT ---', action.type);
    switch(action.type){
        case SET_BOOKS: 
            return Object.assign({}, state, {AllBooks: action.payload});

        default: return state;
    }
}

export function setAllBooks(AllBooks){
    return{
        type: SET_BOOKS,    
        payload: AllBooks 
    }
}
    
