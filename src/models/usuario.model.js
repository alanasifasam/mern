const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');  


const DataSchema = new mongoose.Schema({
    nome_usuario:String,
    email_usuario:String,
    tipo_usuario:{type:Number,default:1},
    senha_usuario:String,
},{
    timestamps:true // faz duas funçoes createdat e updatedat

});
// antes de salvar, cod já criptografa a senha. 
DataSchema.pre('save', function(next){
 if(!this.isModified("senha_usuario")){
     return next();
 }    
     this.senha_usuario = bcrypt.hashSync(this.senha_usuario,10);
     next();
});
//atualização de senha criptografada 
DataSchema.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().senha_usuario+'';
    if(password.length<55){
        this.getUpdate().senha_usuario =bcrypt.hashSync(password,10);
    }
    next();
})

// exporta a função 
const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;
