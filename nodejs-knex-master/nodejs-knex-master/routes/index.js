const express = require('express');
const router = express.Router();
const Products = require('../store/Products');

/* GET home page. */
router.get('/', function(_, res) {
  Products.get()
    .then(function(products) {      
      res.render('index', { products });
    })
});

router.post('/delete',function(req,res){
    var produto = { id:req.body.produtoId };
    Products.delete(produto).then(function(){
      res.redirect("back");
    });
});

router.get('/products/:id',function(req,res){
  var produto = {id: req.params.id}

  Products.getProduto(produto).then(function(listProdutos){
    if(listProdutos != null && listProdutos.length > 0)
        res.render('detalhe', {listProdutos});
  });
  

  
});




module.exports = router;
