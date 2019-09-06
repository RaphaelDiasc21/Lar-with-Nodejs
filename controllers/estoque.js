const ProdutoService = require("../services/produto");
const EstoqueService = require('../services/estoque');
exports.index = (req,res,next) =>{ // Controller que renderiza para a página principal do sistema, onde mostra os produtos em estoque
    res.render('main.ejs',{css:"main.css"});
}

exports.update = (req,res,next) =>{ // Controller que renderiza para a página que atualiza o estoque
    ProdutoService.listAll().then((products_produto)=>{
        EstoqueService.getEstoque().then((products_estoque)=>{
            let message = message_about_estoque;
            message_about_estoque = null;
            console.log(products_estoque);
            console.log(products_produto);
            res.render('atualizar.ejs',{products_produto:products_produto,products_estoque:products_estoque,css:"atualizar.css", message:message});
        })

    })
}

exports.update_insert = (req,res,next)=>{
    EstoqueService.insertEstoque(req.body.nome, req.body.quantidade).then((respost)=>{
        message_about_estoque = "Produto inserido no estoque";
        res.redirect('/atualizar-estoque');
    }).catch((err)=>{
        let errMessage = err.sqlMessage.split(" ");
        if(errMessage[0] == 'Duplicate'){
            message_about_estoque = "Produto ja existe em estoque";
            res.redirect('/atualizar-estoque');
        }
    })
}

exports.update_quantity = (req,res,next)=>{
    EstoqueService.updateQuantity(req.body.nome, req.body.quantidade).then((respost)=>{
        message_about_estoque = "Quantidade alterada";
        res.redirect('/atualizar-estoque');
    }).catch((err)=>{
            message_about_estoque = "Quantidade não alterada" + err;
            res.redirect('/atualizar-estoque');
    })
}