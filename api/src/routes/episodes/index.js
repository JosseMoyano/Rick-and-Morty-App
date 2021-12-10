const { Router } = require('express');
const router = Router();
const { Episode } = require('../../db');
const { Op } = require('sequelize');

router.get('/', async (req, res, next) => {
    try {
        let { name, episode } = req.query;
        if (episode !== '') episodeOK = episode.toUpperCase()
        if (name !== '') {
            nameMayus = name.replace(/\b\w/g, l => l.toUpperCase()); 
            if (episode !== '' ){
                let episodio = await Episode.findAll({
                    where: {
                        name: { 
                            [Op.or]: {
                                [Op.startsWith]: nameMayus,
                                [Op.endsWith]: name,
                                [Op.substring]: name
                            }
                        },
                        episode: {
                            [Op.or]: {
                                [Op.startsWith]: episodeOK,
                                [Op.endsWith]: episode,
                                [Op.substring]: episode
                            }
                        },
                    },
                })
                if(episodio.length > 0) return res.json(episodio)
                return res.json('No hay coincidencias') 
            } else if (episode === '') {
                let episodio = await Episode.findAll({
                    where: {
                        name: { 
                            [Op.or]: {
                                [Op.startsWith]: nameMayus,
                                [Op.endsWith]: name,
                                [Op.substring]: name
                            }
                        },
                    },
                })
                if(episodio.length > 0) return res.json(episodio)
                return res.json('No hay coincidencias') 
            } else {
                let episodio = await Episode.findAll({
                })
                if(episodio.length > 0) return res.json(episodio)
                return res.json('No hay coincidencias') 
            }
        } else {
            if (episode !== ''){
                let episodio = await Episode.findAll({
                    where: {
                        episode: {
                            [Op.or]: {
                                [Op.startsWith]: episodeOK,
                                [Op.endsWith]: episode,
                                [Op.substring]: episode
                            }
                        }
                    }
                })
                if(episodio.length > 0) return res.json(episodio)
                return res.json('No hay coincidencias') 
            } else {
                let episodio = await Episode.findAll({
                })
                if(episodio.length > 0) return res.json(episodio)
                return res.json('No hay coincidencias') 
            }
        }
    } catch (error) {
        next(error)
    }
});

module.exports = router;