const express = require('express')
const rota = express.Router()
const {listarLivros, buscarPorId, criarLivros} = require('../controllers/livrosController.js')

rota.get('/livros', listarLivros)

rota.get('/livros/:id', buscarPorId)

rota.post('/livros', criarLivros)

module.exports = rota
