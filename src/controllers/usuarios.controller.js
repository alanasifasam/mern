
const Usuario = require ('../models/usuario.model');

 
module.exports = {
    //busca todas as informações no banco 
   async index(req,res){
        const user = await Usuario.find();
        res.json(user);
      }, 

            // recebe as informações do corpo do front coloca na tabela. 
          async create(req,res){
          const {nome_usuario,email_usuario,tipo_usuario,senha_usuario} = req.body;
          let data = {};
          let user = await Usuario.findOne({email_usuario});// verifica se o email já existe
          // caso não exista o email, salva em user novo usuario.
          if(!user){ 
              data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
              // espera executar primeiro data porque é assincrona
              user = await Usuario.create(data); 

               return res.status(200).json(user); 
          }else{
              return res.status(500).json(user);

          }
      },// busca informações no banco apenas de 1 passando parametro de _id. 
      async details(req,res){
        const {_id} = req.params;
        const user = await Usuario.findOne({_id});
        res.json(user);
      }, 
      // função deletar 
      async delete(req,res){
        const {_id} = req.params;
        const user = await Usuario.findByIdAndDelete({_id});
        return res.json(user);
      },
      //atualização de informações
      async update(req,res){
          const {_id,nome_usuario,email_usuario,senha_usuario,tipo_usuario}  = req.body;
          const data = { nome_usuario,email_usuario,senha_usuario,tipo_usuario};
          const user = await Usuario.findOneAndUpdate({_id},data,{new:true});
         res.json(user);
      },


}