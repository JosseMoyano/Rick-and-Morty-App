const { Router } = require('express');
const router = Router();
const { Character } = require('../../db');
const { Op } = require('sequelize');

router.get('/', async (req, res, next) => {
    try {
        let { gender, status, name }= req.query
        genderOK = gender.replace(/\b\w/g, l => l.toUpperCase()); 
        statusOK = status !== 'unknown' ? status.replace(/\b\w/g, l => l.toUpperCase()) : status = 'unknown' 
        if (name !== '') {
            nameMayus = name.replace(/\b\w/g, l => l.toUpperCase()); 
            if (gender !== 'any' && status !== 'any'){
                let personaje = await Character.findAll({
                    where: {
                        name: { 
                            [Op.or]: {
                                [Op.startsWith]: nameMayus,
                                [Op.endsWith]: name,
                                [Op.substring]: name
                            }
                        },
                        gender: genderOK,
                        status: statusOK
                    },
                })
                return res.json(personaje)
            } else if (gender !== 'any' && status === 'any') {
                let personaje = await Character.findAll({
                    where: {
                        name: { 
                            [Op.or]: {
                                [Op.startsWith]: nameMayus,
                                [Op.endsWith]: name,
                                [Op.substring]: name
                            }
                        },
                        gender: genderOK,
                    },
                })
                return res.json(personaje)
            } else if (gender === 'any' && status !== 'any') {
                let personaje = await Character.findAll({
                    where: {
                        name: { 
                            [Op.or]: {
                                [Op.startsWith]: nameMayus,
                                [Op.endsWith]: name,
                                [Op.substring]: name
                            }
                        },
                        status: statusOK
                    },
                })
                return res.json(personaje)
            } else if (gender === 'any' && status === 'any') {
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
                })
                return res.json(personaje)
            } else {
                let personajes = await Character.findAll({
                    attributes: ['id', 'name', 'status', 'gender', 'locationName', 'locationUrl', 'image', 'url']
                })
                return res.json(personajes)
            }
        } else {
            if (gender !== 'any' && status !== 'any'){
                let personaje = await Character.findAll({
                    where: {
                        gender: genderOK,
                        status: statusOK
                    },
                })
                return res.json(personaje)
            } else if (gender !== 'any' && status === 'any') {
                let personaje = await Character.findAll({
                    where: {
                        gender: genderOK,
                    },
                })
                return res.json(personaje)
            } else if (gender === 'any' && status !== 'any') {
                let personaje = await Character.findAll({
                    where: {
                        status: statusOK
                    },
                })
                return res.json(personaje)
            } else {
                let personajes = await Character.findAll({
                    attributes: ['id', 'name', 'status', 'gender', 'locationName', 'locationUrl', 'image', 'url']
                })
                return res.json(personajes)
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
                limit: 4
            })
            if(personaje.length > 0) return res.json(personaje)
            return res.json('No hay coincidencias') 
        }
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;