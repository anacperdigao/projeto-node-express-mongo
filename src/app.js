// Importando o framework express
import express from "express";

// Criando uma instância do express
const app = express();

// Fazendo a conexao com o mongodb
import db from "./config/dbConnect.js";
db.on("error", console.log.bind(console, 'Erro de conexão'))

// Aqui vou abrir a conexão com o banco
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso.')
})

// Aqui vou importar as rotas
import routes from "./routes/index.js";
routes(app)


// Preciso exportar a instancia do express para poder usar em outro lugar
export default app
