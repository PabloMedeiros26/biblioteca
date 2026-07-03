const express = require('express')
const rota = express.Router()
const {listarLivros} = require('../controllers/livrosController.js')

rota.get('/livros', listarLivros)

module.exports = rota