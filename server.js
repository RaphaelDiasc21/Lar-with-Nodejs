const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const BodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.use(BodyParser.json());
app.use(BodyParser.urlencoded());

const produto = require('./routes/produto');
const estoque = require('./routes/estoque');
global.message_about_estoque = null;
app.use(express.static(__dirname + '/static'));
app.use("/",produto);
app.use("/",estoque);
// var conn = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'8625251#Ra',
//     database:'Teste'
// });
// DELETE Estoque FROM Estoque INNER JOIN Produto ON Produto.ID = Estoque.ID_PRODUTO WHERE Produto.NOME = 'Arroz';


// conn.connect();

// conn.query('SELECT produto.NOME, produto.DESCRICAO, estoque.QUANTIDADE FROM Estoque as estoque INNER JOIN Produto as produto ON estoque.id_produto = produto.id;',
// (err,rows,fields)=>{
//     let p = rows[0]["NOME"];
//     console.log(p);
// })

app.listen(3555,()=>{
    console.log("Running");
})