const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsController=require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productsController.addProduct);

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
