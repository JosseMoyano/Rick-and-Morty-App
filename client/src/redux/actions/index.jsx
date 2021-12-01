export const GET_CHARACTERS = 'GET CHARACTERS';

export const getCharacters = () => {
    console.log('entre al action')
        return async dispatch => {
            try {
                const response = await fetch('http://localhost:3001/character');
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