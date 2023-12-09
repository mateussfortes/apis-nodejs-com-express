import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
// routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/autores", AutorController.cadastrarAutor);
// routes.put("/livros/:id", LivroController.atualizarLivro);
// routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;
