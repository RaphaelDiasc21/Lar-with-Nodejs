const conn = require('../database/connection');

exports.getEstoque = ()=>{ return new Promise((resolve,reject)=>{
    conn.query("select produto.NOME, estoque.QUANTIDADE FROM Produto as produto INNER JOIN Estoque as estoque ON produto.ID = estoque.ID_PRODUTO;",
     function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})
}
exports.insertEstoque = (nome,quantidade) =>{ return new Promise((resolve,reject)=>{
    conn.query("INSERT INTO Estoque(id_produto,quantidade)VALUES((SELECT id FROM Produto WHERE nome = ?),?)",
    [
        nome,
        quantidade
    ], function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})

}

exports.updateQuantity = (nome,quantidade) =>{ return new Promise((resolve,reject)=>{
    conn.query("update Estoque as estoque INNER JOIN Produto as produto ON estoque.ID_PRODUTO = produto.ID set estoque.QUANTIDADE = ? WHERE produto.NOME = ?",
    [
        quantidade,
        nome
    ], function(err,results){
        if(!err){
            resolve(results);
        }else{

            reject(err);
        }
    })
})

}