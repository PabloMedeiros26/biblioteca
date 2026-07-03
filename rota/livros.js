const express = require('express')
const rota = express.Router()
const {listarLivros, buscarPorId} = require('../controllers/livrosController.js')

rota.get('/livros', listarLivros)

rota.get('/livros/:id', buscarPorId)

module.exports = rota
