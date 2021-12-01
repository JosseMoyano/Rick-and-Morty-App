import { GET_CHARACTERS } from '../actions';

const initialState = {
   characters : undefined,
}

export default function reducer (state = initialState, action){
    switch(action.type){

        case GET_CHARACTERS:
            return {
                ...state,
                characters:action.payload,
            } 
        
        default:
            return state;
    }
}