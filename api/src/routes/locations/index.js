const { Router } = require('express');
const router = Router();
const { Location } = require('../../db');
const { Op } = require('sequelize');

router.get('/', async (req, res, next) => {
    try {
        let { type, name }= req.query;
        if (type !== undefined) typeOK = type.replace(/\b\w/g, l => l.toUpperCase())
        if (name !== '') {
            nameMayus = name.replace(/\b\w/g, l => l.toUpperCase()); 
            if (type !== '' ){
                let ubicacion = await Location.findAll({
                    where: {
                        name: { 
                            [Op.or]: {
                                [Op.startsWith]: nameMayus,
                                [Op.endsWith]: name,
                                [Op.substring]: name
                            }
                        },
                        type: {
                            [Op.or]: {
                                [Op.startsWith]: typeOK,
                                [Op.endsWith]: type,
                                [Op.substring]: type
                            }
                        },
                    },
                })
                return res.json(ubicacion)
            } else if (type === '') {
                let ubicacion = await Location.findAll({
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
                return res.json(ubicacion)
            } else {
                let ubicacion = await Location.findAll({
                    attributes: ['id', 'name', 'type', 'dimension', 'residents', 'url']
                })
                return res.json(ubicacion) 
            }
        } else {
            if (type !== ''){
                let ubicacion = await Location.findAll({
                    where: {
                        type: {
                            [Op.or]: {
                                [Op.startsWith]: typeOK,
                                [Op.endsWith]: type,
                                [Op.substring]: type
                            }
                        }
                    }
                })
                return res.json(ubicacion)
            } else {
                let ubicacion = await Location.findAll({
                    attributes: ['id', 'name', 'type', 'dimension', 'residents', 'url']
                    // attributes: ['id', 'name', 'status', 'gender', 'locationName', 'locationUrl', 'image', 'url']
                })
                return res.json(ubicacion)
            }
        }
    } catch (error) {
        next(error)
    }
});

router.get('/search', async (req, res, next) => {
    try {
        let { name } = req.query; 
        if (name !== ''){
            nameMayus = name.replace(/\b\w/g, l => l.toUpperCase()); 
            let ubicacion = await Location.findAll({
                where: {
                    name: { 
                        [Op.or]: {
                            [Op.startsWith]: nameMayus,
                            [Op.endsWith]: name,
                            [Op.substring]: name
                        }
                    }
                },
                limit: 4
            })
            if(ubicacion.length > 0) return res.json(ubicacion)
            return res.json('No hay coincidencias') 
        }
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;