const express = require('express');
const cookieParser = require('cookie-parser');
const cors =require('cors');
const path =require("path");
const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

const atlas_connection_string = 'mongodb+srv://root:1234@alana01.w65ds.mongodb.net/curso-basico-mern?retryWrites=true&w=majority';
//mongodb://localhost:27017/curso-basico-mearn

mongoose.connect(atlas_connection_string),{
  useUnifiedTopology:true,
  useNewUrlParser : true,
  useFindAndModify :false
}, function(err){
  if(err){
    console.log(err)
  }else{
     console.log('MongoDB CONECTADO COM SUCESSO !!')
  }
  }

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/',function(req,res){
  res.json({message:'hello world'});
});

app.use(routes);

app.listen(port,function(){
  console.log(`Server runing on port ${port}`)
})






