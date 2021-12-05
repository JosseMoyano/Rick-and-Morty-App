const server = require('./src/app.js');
const { conn } = require('./src/db');
const axios = require('axios');
const { guardarCharacters, guardarLocations, guardarEpisodes } = require('./src/utils');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Conectado a la Base de Datos')
  server.listen(3001, async () => {
    try {
      let i = 1
      while (i < 43) {
        let respuesta = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
        respuesta.data.results.forEach(c => guardarCharacters(c.id, c.name, c.status, c.gender, c.location.name , c.location.url, c.image, c.url))
        i++
      }
      let j = 1
      while (j < 8 ) {
        let respuesta = await axios(`https://rickandmortyapi.com/api/location?page=${j}`)
        respuesta.data.results.forEach(c => guardarLocations(c.id, c.name, c.type, c.dimension, c.residents , c.url))
        j++
      }
      let h = 1
      while (h < 4 ) {
        let respuesta = await axios(`https://rickandmortyapi.com/api/episode?page=${h}`)
        respuesta.data.results.forEach(c => guardarEpisodes( c.id, c.name, c.air_date, c.episode, c.characters, c.url))
        h++
      }
    } catch (error) {
      console.log(error)
    }
    console.log('Datos cargados con exito');
  });

});