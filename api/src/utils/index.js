const { Character, Episode, Location }  = require('../db');

const guardarCharacters = async (id, name, status, gender, locationName, locationUrl, image, url) => {
    await Character.create({id, name, status, gender, locationName, locationUrl, image, url})
}; 

const guardarEpisodes = async (id, name, air_date, episode, characters, url) => {
    await Episode.create({id, name, air_date, episode, characters, url})
}; 

const guardarLocations = async (id, name, type, dimension, residents, url) => {
    await Location.create({id, name, type, dimension, residents, url})
}; 

module.exports = {
    guardarCharacters,
    guardarEpisodes,
    guardarLocations,
}
