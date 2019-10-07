const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json()); //Permite o envio de dados para a aplicação no formato de Json
app.use(cors());

app.get('/',(req, res) => {
  res.send('Home da Aplicação')
})

//Iniciando o DB
mongoose.connect(
  'mongodb+srv://ciia:ciia123@ciia-banco-de-teste-2ndoa.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);
//Testando DB
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded")
});

requireDir('./src/models');

//"use" aceita todos os tipos de requisição
app.use('/api', require("./src/routes"));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Servidor funcionando em ' + port);
});