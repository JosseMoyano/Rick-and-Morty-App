const server = require('./src/app.js');
const { conn } = require('./src/db');
const axios = require('axios');
const { guardarCharacters } = require('./src/utils');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Conectado a la Base de Datos')
  server.listen(3001, async () => {
    try {
      let i = 1
      while (i < 43) {
        const respuesta = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
        respuesta.data.results.forEach(c => guardarCharacters(c.id, c.name, c.status, c.gender, c.location.name , c.location.url, c.image, c.url))
        i++
      }
    } catch (error) {
      console.log(error)
    }
    console.log('Datos cargados con exito');
  });

});