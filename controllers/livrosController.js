const fs = require('fs')


function listarLivros(req, res) {
    const dados = fs.readFileSync('./data/livros.json')
    const requi = JSON.parse(dados)
    res.json(requi)
}

function buscarPorId(req, res) {
    const nome = Number(req.params.id)
    const dados = fs.readFileSync('./data/livros.json')
    const requi = JSON.parse(dados)
    const resultado = requi.find(function(livros) {
        return livros.id === nome
    })
    
    if(!resultado) {
        return res.status(404).json({erro: 'Livro nao encontrado'})
    } 

    res.json(resultado)
}

function criarLivros(req, res) {
    const dados = fs.readFileSync('./data/livros.json')
    const requi = JSON.parse(dados)
    const ids = requi.map(function(livros) {
        return livros.id
    })
    const maiorId = Math.max(...ids)
    const novoId = maiorId + 1
    const novoLivro = {
        id: novoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        genero: req.body.genero,
        ano: req.body.ano,
        status: req.body.status,
        avaliacao: req.body.avaliacao
    }

    requi.push(novoLivro)
    const converter = JSON.stringify(requi, null, 2)
    fs.writeFileSync('./data/livros.json', converter)
    res.status(201).json(novoLivro)
}
module.exports = {listarLivros, buscarPorId, criarLivros}

