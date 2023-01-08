// A principio eu quero criar um servidor local para escutar tudo numa porta e eu fazer as minhas requisições
// Aqui está a primeira diferença usando o express, porque não vou usar o tipo http, vou apenas importar o que 
// eu fiz em app.js
import app from './src/app.js'

// Aqui defino qual a porta que ele vai ficar escutando
// Já vamos deixar com essa boa prática de diferenciar ou a porta no ambiente de produção ou a porta fixa 3000
const port = process.env.PORT || 3000

// Aqui vou fazer esse link entre o servidor que criei e a porta que ele vai escutar a requisição e mandar a resposta
app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})




/*----------------------------------- FORMA ANTERIOR SEM TER O EXPRESS INSTALADO --------------------------------
// A principio eu quero criar um servidor local para escutar tudo numa porta e eu fazer as minhas requisições

// Crisei uma constante e disse que quero que seja do tipo http
const http = require("http")  

// Aqui defino qual a porta que ele vai ficar escutando
const port = 3000

// Aqui vou criar as rotas
// Nesse momento eu instalo com npm install nodemon pq ele vai escutar toda vez que eu mudar a rota 
// e vai dar um live reload@
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores'
}

// Aqui de fato criei o servidor e defini o que ele vai escutar e como vai acontecer a comunicação
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

// Aqui vou fazer esse link entre o servidor que criei e a porta que ele vai escutar 
// a requisição e mandar a resposta
server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
*/