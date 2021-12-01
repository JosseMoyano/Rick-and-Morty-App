const { Router } = require('express');
const character  = require('./characters')

const router = Router();

router.use('/character', character);

module.exports = router;