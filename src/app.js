// importando o framework express
import express from "express";

// fazendo a conexao com o mongodb
import db from "./config/dbConnect.js";
db.on("error", console.log.bind(console, 'Erro de conexão'))

// Aqui vou abrir a conexão com o banco
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso.')
})

// Criando uma instância do express
const app = express();

// Isso vai fazer interpretar o que eu for mandar via post e via put como json
app.use(express.json())

// Fiz uma const só pra poder ter um array com alguns livros
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"}
]

// Aqui é o que eu quero que aconteça quando eu fizer uma requisição para uma determinada rota
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

// Função auxiliar dos metodos get por id, put e delete, pq é pra achar o id certo dentro do array
function buscaLivro (id) {
    return livros.findIndex(livro => livro.id == id)
}

// Preciso exportar a instancia do express para poder usar em outro lugar
export default app

// Depois daqui vou para o arquivo server e modificar lá