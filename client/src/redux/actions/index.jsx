export const GET_CHARACTERS = 'GET CHARACTERS';
export const SEARCH_CHARACTERS = 'SEARCH CHARACTERS';

export const getCharacters = (status, gender, name) => {
        return async dispatch => {
            try {
                const response = await fetch(`http://localhost:3001/character?gender=${gender}&status=${status}&name=${name}`);
                const json = await response.json();
                dispatch({
                    type: GET_CHARACTERS,
                    payload: json
                });            
            } catch (error) {
                console.error(error)
            }
        }
}

export const searchCharacter = (name) => {
        return async dispatch => {
            try {
                const response = await fetch(`http://localhost:3001/character/search?name=${name}`);
                const json = await response.json();
                dispatch({
                    type: SEARCH_CHARACTERS,
                    payload: json
                });            
            } catch (error) {
                console.error(error)
            }
        }
}

