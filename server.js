const express = require('express');
const cookieParser = require('cookie-parser');
const cors =require('cors');
const path =require("path");
const mongoose = require('mongoose');
const routes = require('./src/routes');


const app = express();
const port = process.env.PORT || 5000;


const MongoClient = require('mongodb').MongoClient;
 const uri = "mongodb+srv://root:1234@alana01.w65ds.mongodb.net/curso-basico-mern?retryWrites=true&w=majority";
  
 const client = new MongoClient(uri, {
 useNewUrlParser: true, 
 useUnifiedTopology: true });
  
  client.connect(err => {
  const collection = client.db("test").collection("devices");

    client.close();
  
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.get('/',function(req,res){
  res.json({message:'hello world'});
});

app.use(routes);

app.listen(port,function(){
  console.log(`Server runing on port ${port}`)
})






