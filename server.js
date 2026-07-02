// Importa o framework Express, que facilita criar servidores e rotas HTTP
const express = require('express')

// Cria a aplicação Express - é essa variável "app" que vamos usar
// pra configurar rotas, middlewares e subir o servidor
const app = express()

// Middleware: permite que o servidor entenda requisições com corpo em JSON
// Sem isso, req.body ficaria undefined em requisições POST/PUT
app.use(express.json())

// Rota de teste - responde a requisições GET na raiz ("/")
// Serve pra confirmar que o servidor está rodando corretamente
app.get('/', (req, res) => {
    res.send('API rodando')
})

// Define a porta do servidor:
// - usa a variável de ambiente PORT se ela existir (útil em produção/deploy)
// - caso contrário, usa 3000 como padrão (desenvolvimento local)
const porta = process.env.PORT || 3000

// Coloca o servidor pra "escutar" requisições na porta definida
// O callback só roda uma vez, confirmando que o servidor subiu
app.listen(porta, function(){
    console.log('Servidor Rodando')
})