import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router()

router
    .get("/livros", LivroController.listarLivros)
    // A ordem dos gets importa, sendo primeiro a rota mais especifica e depois a mais generica
    // Assim que fica na consulta do POSTMAN http://localhost:3000/livros/busca?editora=Alura
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)


export default router