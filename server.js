// A principio eu quero criar um servidor local para escutar tudo numa porta e eu fazer as minhas requisições

// Crisei uma constante e disse que quero que seja do tipo http
const http = require("http")  

// Aqui defino qual a porta que ele vai ficar escutando
const port = 3000

// Aqui de fato criei o servidor e defini o que ele vai escutar e como vai acontecer a comunicação
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Curso de Node')
})

// Aqui vou fazer esse link entre o servidor que criei e a porta que ele vai escutar 
// a requisição e mandar a resposta
server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})