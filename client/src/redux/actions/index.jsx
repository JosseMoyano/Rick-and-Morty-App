import axios from "axios"

export const GET_CHARACTERS = 'GET CHARACTERS';
export const GET_CHARACTER = 'GET CHARACTER';
export const CLEAN_CHARACTER = 'CLEAN CHARACTER';
export const SEARCH_CHARACTERS = 'SEARCH CHARACTERS';
export const CLEAN_SEARCHED_CHARACTER = 'CLEAN SEARCHED CHARACTER';
export const GET_LOCATIONS = 'GET LOCATIONS';
export const GET_EPISODES = 'GET EPISODES';

export const getCharacters = (status, gender, name) => {
        return async dispatch => {
            try {
                const json = await axios(`http://localhost:3001/character?gender=${gender}&status=${status}&name=${name}`);
                dispatch({
                    type: GET_CHARACTERS,
                    payload: json.data
                });            
            } catch (error) {
                console.error(error)
            }
        }
}

export const getCharacter = (url) => {
        return async dispatch => {
            try {
                const json = await axios(`${url}`);
                dispatch({
                    type: GET_CHARACTER,
                    payload: json.data
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

export const cleanSearchedCharacter = () => {
        return {
            type: CLEAN_SEARCHED_CHARACTER,
            
        }
}

export const searchCharacter = (name) => {
        return async dispatch => {
            try {
                const json = await axios(`http://localhost:3001/character/search?name=${name}`);
                dispatch({
                    type: SEARCH_CHARACTERS,
                    payload: json.data
                });            
            } catch (error) {
                console.error(error)
            }
        }
}

export const getLocations = (name, adicional) => {
    return async dispatch => {
        try {
            const json = await axios(`http://localhost:3001/location?name=${name}&type=${adicional}`);
            dispatch({
                type: GET_LOCATIONS,
                payload: json.data
            });            
        } catch (error) {
            console.error(error)
        }
    }
}

export const getEpisodes = (name, adicional) => {
    return async dispatch => {
        try {
            const json = await axios(`http://localhost:3001/episode?name=${name}&episode=${adicional}`);
            dispatch({
                type: GET_EPISODES,
                payload: json.data
            });            
        } catch (error) {
            console.error(error)
        }
    }
}

