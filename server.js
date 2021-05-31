const express = require('express');
const cookieParser = require('cookie-parser');
const cors =require('cors');
const path =require("path");
const mongose = require('mongoose');
//const { Mongoose } = require('mongoose');
conts routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongose.connect('mongodb://localhost:27017/curso-basico-mearn'),{
  useUnifieldTopology:true,
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






