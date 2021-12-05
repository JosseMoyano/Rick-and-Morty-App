const { Router } = require('express');
const character  = require('./characters')
const location  = require('./locations')
const episode  = require('./episodes')

const router = Router();

router.use('/character', character);
router.use('/location', location);
router.use('/episode', episode);

module.exports = router;