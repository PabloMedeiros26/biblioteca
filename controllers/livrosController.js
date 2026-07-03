const fs = require('fs')


function listarLivros(req, res) {
    const dados = fs.readFileSync('./data/livros.json')
    const requi = JSON.parse(dados)
    res.json(requi)
}
module.exports = {listarLivros}