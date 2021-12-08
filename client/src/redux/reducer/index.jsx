import { CLEAN_CHARACTER, CLEAN_SEARCHED_CHARACTER, GET_CHARACTER, GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS, SEARCH_CHARACTERS } from '../actions';

const initialState = {
   characters : undefined,
   character: [],
   searchedCharacter: undefined,
   locations: undefined,
   episodes: undefined
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters:action.payload,
            } 
        case GET_CHARACTER:
            return {
                ...state,
                character: !state.character.includes(action.payload) ? [...state.character, action.payload] : null,
            } 
        case CLEAN_CHARACTER:
            return {
                ...state,
                character: [],
            } 
        case CLEAN_SEARCHED_CHARACTER:
            return {
                ...state,
                searchedCharacter: [],
            } 
        case SEARCH_CHARACTERS:
            return {
                ...state,
                searchedCharacter: action.payload
            }
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.payload
            }
        case GET_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }
        default:
            return state;
    }
}