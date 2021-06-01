const Usuario = require ('../models/usuario.model');


module.exports = {
    index(req,res){
        res.json({message:'hello world from controller de usuarios'});
      }, 

      create(req,res){
          const {nome_usuario,email_usuario,tipo_usuario,senha_usuario} = req.body;
          let data = {};
          let user = Usuario.findOne({email_usuario});
          if(!user){
              data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
          }
      }
}