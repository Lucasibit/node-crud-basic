const Produto = require('../models/Produto')

module.exports = {
    async List(req, res){
        try {
            const produtos = await Produto.findAll();
            return res.json(produtos);
        } catch (error) {
            console.error(`Erro no async List: ${error}`);
        }
    },

    async Create(req, res){
        try {
            const produto = await Produto.create(
                {
                    Id: req.body.Id,
                    Descricao: req.body.Descricao,
                    DataCriacao: new Date(),
                    DataAtualizacao: null
                }
            );

            return res.json(produto);
        } catch (error) {
            console.error(`Erro no async Create: ${error}`);
        }
    },

    async Update(req, res){
        try {

            const produto = await Produto.findByPk(req.body.Id);
            if (produto){
                produto.Descricao = req.body.Descricao,
                produto.DataAtualizacao = Date.now();
                await produto.save();
            }

            return res.json(produto);
        } catch (error) {
            console.error(`Erro no async Update: ${error}`);
        }
    },

    async GetOne(req, res){

        try {
            const produto = await Produto.findByPk(req.params.id);
            return res.json(produto);
        } catch (error) {
            console.error(`Erro no async GetOne: ${error}`);
        }
    },

    async Delete(req, res){

        try {
            const produto = await Produto.findByPk(req.body.Id);
            await produto.destroy();
            return res.json(produto);
        } catch (error) {
            console.error(`Erro no async Delete: ${error}`);
        }
    },
}