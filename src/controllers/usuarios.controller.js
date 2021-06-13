
const Usuario = require ('../models/usuario.model');
const jwt = require("jsonwebtoken");

const secret = "mysecret";


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



     async login (req,res){
       const{ email, senha } = req.body;
       Usuario.findOne( {email_usuario: email, function (err, user){
         if(err){
           console.log(err);
            res.status(200).json({erro: "Erro no Servidor. Por favor, tente novamente"});
         }else if (!user){
           res.status(200).json({status:2, error: 'E-mail não encontrado no banco de dados'});
          }else {
            user.isCorrectPassword(senha,async function(err,same){
              if(err){
                res.status(200).json({error: "Erro no servidor. Por Favor, tente novamente"});
              }else if (!same){
                res.status(200).json({status:2, error: "A senha não confere"});
              } else{
                const payload = {email};
                const token = jwt.sign(payload, secret,{
                expiresIn:'24h'
            })
              res.cookie('token', token, {httpOnly:true});
              res.status(200).json({status:1, auth: true, token:token, id_client: user._id, user_name:user.nome_usuario, user_type:user.tipo_usuario});
              }

            }) 
          }
          }      
        })


            },
            async checkToken(req,res){
              const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
              
              if(!token){
                res.json({status:401,msg:'Não autorizado: Token inexistente !!'});
              }else {
                jwt.verify(token, secret, function(err,decoded){
                  if(err){
                    res.json({status:401,msg:'Não autorizado: Token inválido!!'});
                  }else {
                   
                    res.json({status:200})
                  }
                })
              }
            }
 
}

