export const GET_CHARACTERS = 'GET CHARACTERS';

export const getCharacters = () => {
        return async dispatch => {
            try {
                const response = await fetch('localhost:3001/character');
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