const express = require('express')
const rota = express.Router()
const {listarLivros, buscarPorId, criarLivros, atualizarLivro, deletarLivro} = require('../controllers/livrosController.js')

rota.get('/livros', listarLivros)

rota.get('/livros/:id', buscarPorId)

rota.post('/livros', criarLivros)

rota.put('/livros/:id', atualizarLivro)

rota.delete('/livros/:id', deletarLivro)

module.exports = rota
