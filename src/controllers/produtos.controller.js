
const Produto = require ('../models/produto.model');

 
module.exports = {
    //busca todas as informações no banco 
   async index(req,res){
        const procuct = await Produto.find();
        res.json(procuct);
      }, 

            // recebe as informações do corpo do front coloca na tabela. 
          async create(req,res){
          const {nome_prodto,descricao_produto,preco_produto,qtd_produto} = req.body;
          let data = {};

         
          if(!product){ 
              data = {nome_prodto,descricao_produto,preco_produto,qtd_produto};
              product = await Produto.create(data); 
               return res.status(200).json(product); 
          }else{
              return res.status(500).json(product);

          }
      },// busca informações no banco apenas de 1 passando parametro de _id. 
      async details(req,res){
        const {_id} = req.params;
        const product = await Produto.findOne({_id});
        res.json(product);
      }, 
      // função deletar 
      async delete(req,res){
        const {_id} = req.params;
        const product = await Produto.findByIdAndDelete({_id});
        return res.json(product);
      },
      //atualização de informações
      async update(req,res){
          const {_id,nome_prodto,descricao_produto,preco_usuario,qtd_produto}  = req.body;
          const data = {nome_prodto,descricao_produto,preco_usuario,qtd_produto};
          const product = await Produto.findOneAndUpdate({_id},data,{new:true});
         res.json(product);
      },


}