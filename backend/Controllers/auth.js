const express = require('express');

const crearUsuario = (req, res = express.request) => {
    const { name, email, password } = req.body;
    res.status(200).json({
        ok: true, 
        name, email, password
    })
}

const loginUsuario = (req, res = express.request) => {
    const { email, password } = req.body;
    res.status(200).json({
        ok: true, 
        email, password
    })
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}