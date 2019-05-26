const express = require('express');
const productsController = require('./productsController');
const router = express.Router();

/* GET product page. */
router.get('/', productsController.get);
router.get('/:id', productsController.getById);
router.post('/',productsController.inserir);
router.delete('/:id', productsController.deletar)

module.exports = router;