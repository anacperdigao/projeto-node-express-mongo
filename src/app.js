// importando o framework express
import express from "express";

// Criando uma instância do express
const app = express();

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

// Preciso exportar a instancia do express para poder usar em outro lugar
export default app

// Depois daqui vou para o arquivo server e modificar lá