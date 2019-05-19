const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Connection = require('../store/Connection');
const Comment = require('../store/comment');

/* GET home page. */
router.get('/', function (_, res) {
  Products.get()
    .then(function (products) {
      res.render('index', { products });
    })
});

router.post('/delete', function (req, res) {
  var produto = { id: req.body.produtoId };
  Products.delete(produto).then(function () {
    res.redirect("/");
  });
});

router.get('/products/:id', function (req, res) {
  var produto = { id: req.params.id }

  Products.getProduto(produto).then(function (listProdutos) {
    if (listProdutos != null && listProdutos.length > 0)
      res.render('detalhe', { listProdutos });
  });
});

router.post('/atualizar', function (req, res) {
  var produto = { id: req.body.id, name: req.body.nome, description: req.body.desc, price: parseFloat(req.body.preco) };
  Products.update(produto).then(function (callback) {
    res.redirect("/products/" + req.body.id);
  });
});

router.get('/comentario', function (req, res) { 
  Connection.openConnection();
  Comment.find({produtoId:"1"}).then(function(prd){
      var p = prd;
  });
  
  res.send('ok');
  // var produto = { id: req.body.id, name: req.body.nome, description: req.body.desc, price: parseFloat(req.body.preco)};
  // Products.update(produto).then(function(callback){
  //   res.redirect("/products/"+ req.body.id );
  // });
});




module.exports = router;
