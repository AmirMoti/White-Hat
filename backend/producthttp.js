// JavaScript source code
const express = require('express');
const Product = require('./product.model');

const products = express.Router();

products.get("/products", (req, res, next) => {
  /*
  productLogic.getAllProduct().then(documents => {
    return res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
*/
  console.log('a');
  Product.find().then(documents => {
    return res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
});


products.post("/products", (req, res, next) => {
  /*
  productLogic.getAllProduct().then(documents => {
    return res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
*/
  if (req.body.name) {
    Product.find({ name:req.body.name}).then(documents => {
      return res.status(200).json({
        message: 'Products fetched successfully!',
        products: documents
      });
    })
  }
  else {
    const err = new Error('empty string in search bar');
    err.status = 400;
    return next(err);
  }
});

module.exports = products;

