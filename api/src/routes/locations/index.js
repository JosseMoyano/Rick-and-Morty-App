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
                if(ubicacion.length > 0) return res.json(ubicacion)
                return res.json('No hay coincidencias')
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
                if(ubicacion.length > 0) return res.json(ubicacion)
                return res.json('No hay coincidencias')
            } else {
                let ubicacion = await Location.findAll({
                })
                if(ubicacion.length > 0) return res.json(ubicacion)
                return res.json('No hay coincidencias') 
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
                if(ubicacion.length > 0) return res.json(ubicacion)
                return res.json('No hay coincidencias')
            } else {
                let ubicacion = await Location.findAll({
                })
                if(ubicacion.length > 0) return res.json(ubicacion)
                return res.json('No hay coincidencias')
            }
        }
    } catch (error) {
        next(error)
    }
});

module.exports = router;