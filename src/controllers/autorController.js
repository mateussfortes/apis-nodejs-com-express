import autor from "../models/Autor.js";

class AutorController {
    
    static async listarAutores(req, res) {

        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }
        catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }

    }

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }
        catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso",
                autor: novoAutor
            });
        } catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar autor`
            });
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado."});
        }
        catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha na atualização`
            });
        }
    }

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído."});
        }
        catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha na exclusão`
            });
        }
    }


}

export default AutorController;