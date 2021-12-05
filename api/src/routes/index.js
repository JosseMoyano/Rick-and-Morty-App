const { Router } = require('express');
const character  = require('./characters')
const location  = require('./locations')

const router = Router();

router.use('/character', character);
router.use('/location', location);

module.exports = router;