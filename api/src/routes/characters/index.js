const { Router } = require('express');
const router = Router();
const { Character } = require('../../db');
const { Op } = require('sequelize');

router.get('/', async (req, res, next) => {
    try {
        let { name } = req.query; 
        if (name){
            nameMayus = name.replace(/\b\w/g, l => l.toUpperCase()); 
            let personaje = await Character.findAll({
                where: {
                    name: { 
                        [Op.or]: {
                            [Op.startsWith]: nameMayus,
                            [Op.endsWith]: name,
                            [Op.substring]: name
                        }
                    }
                },
                // include: [Activity]
            })
            if(personaje.length > 0) return res.json(personaje)
            return res.json('No hay coincidencias')    
        } else {
            let personajes = await Character.findAll({
                attributes: ['id', 'name', 'status', 'gender', 'locationName', 'locationUrl', 'image', 'url']
                // include: [Activity],
                // limit: 10
            })
            return res.json(personajes)
        }
    } catch (error) {
        next(error)
    }
});

module.exports = router;