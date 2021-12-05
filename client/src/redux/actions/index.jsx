export const GET_CHARACTERS = 'GET CHARACTERS';
export const GET_CHARACTER = 'GET CHARACTER';
export const CLEAN_CHARACTER = 'CLEAN CHARACTER';
export const GET_LOCATIONS = 'GET LOCATIONS';
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

export const getCharacter = (url) => {
        return async dispatch => {
            try {
                const response = await fetch(`${url}`);
                const json = await response.json();
                dispatch({
                    type: GET_CHARACTER,
                    payload: json
                });            
            } catch (error) {
                console.error(error)
            }
        }
}

export const cleanCharacter = () => {
        return {
            type: CLEAN_CHARACTER,
            
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

export const getLocations = (type, name) => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:3001/location?type=${type}&name=${name}`);
            const json = await response.json();
            dispatch({
                type: GET_LOCATIONS,
                payload: json
            });            
        } catch (error) {
            console.error(error)
        }
    }
}

