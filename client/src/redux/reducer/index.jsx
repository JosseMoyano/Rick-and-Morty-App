import { GET_CHARACTERS, SEARCH_CHARACTERS } from '../actions';

const initialState = {
   characters : undefined,
   searchedCharacter: undefined
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters:action.payload,
            } 
        case SEARCH_CHARACTERS:
            return {
                ...state,
                searchedCharacter: action.payload
            }
        default:
            return state;
    }
}