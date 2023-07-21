const express = require('express')
const bcrypt = require('bcrypt')
const expressJwt = require('express-jwt')
const jwt = require('jsonwebtoken')
const User = require('../entities/User')

const validateJwt = expressJwt( { secret: 'mi-secret', algorithms: ['HS256']} )

const signToken = _id => jwt.sign({_id}, 'mi-secret')

const findAndAssignUser = async (req, res, next) => {
    //Comprobamos que existe el usuario y lo asignamos
    try{
        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(401).end()
        }
        req.user = user
        next()
    }catch (e){
        next(e)
    }
}



const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)

//Controlador
const Auth = {
    login: async (req, res) => {
        const {body} = req
        try{
            const user = await User.findOne({email: body.email})
            if(!user){
                res.status(401).send('Incorrect user or password')
            }else{
                //Usamos bcrypt.compare y le pasamos la contraseña sin encriptar y la contraseña encriptada del user que acabamos de buscar, devuelve un bool
                const isMatch = await bcrypt.compare(body.password, user.password)
                if(isMatch){
                    //Firmamos el jwt y enviamos ese token (es lo que usamos en Bearer)
                    const signed = signToken(user._id)
                    res.status(200).send(signed)
                }else{
                    res.status(401).send('user or password invalid')
                }
            }
        }catch(e){
            res.status(500).send(e.message)  
        }
    },
    register: async (req, res) => {
        const { body } = req

        try {
            const isUser = await User.findOne({email : body.email})
            if(isUser){
                return res.status(403).send('Usuario ya existe')
            }

            //Generamos el salt para el encrypt de la contraseña 
            const salt = await bcrypt.genSalt()
            const encryptedPass = await bcrypt.hash(body.password, salt)
            const user = await User.create({ email: body.email, password: encryptedPass, salt: salt})

            //Ahora hacemos como en PA, cada vez que un usuario quiera realizar una petición tiene que mandar en el header su id encriptado
            //Y nosotros desencriptarlo para saber si tiene o no acceso y permisos a la API
            //a jwt.sign le pasamos el objeto que querermos encriptar (el id), y un string secreto (podemos elegir el que queramos)
            //Pasarlo a función cuando rehaga la app, porque se usa bastantes veces 
            // const signToken = _id => jwt.sign({ _id }, 'mi-string-secreto')
            // const signed = signToken(user._id)
            const signed = signToken(user._id)
            res.status(201).send(signed)

        }catch (err) {
            res.status(500).send(err.message)
        }
    }
}

module.exports = {Auth, isAuthenticated}