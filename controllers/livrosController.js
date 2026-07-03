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
module.exports = {listarLivros, buscarPorId}

