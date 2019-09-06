const mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'8625251#Ra',
    database:'Teste'
});

conn.connect();

module.exports = conn;
