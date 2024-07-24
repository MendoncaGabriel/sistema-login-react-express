const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const database = [];
const secret = "123"

router.post('/create', (req, res) => {
    try {
        const {user, pass} = req.body;
    
        // Criptografar senha
        const salt = bcrypt.genSaltSync(10);
        const passHash = bcrypt.hashSync(pass, salt);
        
        // Gerar Token de acesso
        const payload = {user}
        const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
        })

        const newUsser = {
            id: database.length,
            user: user,
            pass: passHash,
            token: token
        }

        database.push(newUsser)
    
        res.status(200).json({msg: "Criado com sucesso!", newUsser})
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.post('/login', (req, res) => {
    try {
        const {user, pass} = req.body;

        // Veridicar se usuario existe
        const userExists = database.find(e => e.user == user)
        if(!userExists) res.status(404).json({msg: "Usuário não encontrado!"})

        // Verificando senhas
        const resultComparePass = bcrypt.compareSync(pass, userExists.pass)
        if(!resultComparePass) res.status(401).json({msg: "Senha errada!"})

        // Gerar Token de acesso
        const payload = {user, pass}
        const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
        })

        res.status(200).json({msg: "Autenticado com sucesso!", token})

    } catch (error) {
        res.status(500).json({error:error})
    }
})

module.exports = router
