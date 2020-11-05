const router = require('express').Router()
const expressAsynCHandler = require('express-async-handler')
const data = require('../../data')
const Product = require('../models/ProductModel')

router.get('/seed', expressAsynCHandler(async (_req, res) => {
  const createdProducts = await Product.insertMany(data.products)
  res.send({createdProducts})
}))

router.get('/', expressAsynCHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
}))

router.get('/:id', expressAsynCHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if(product) {
    res.json(product)
  } else {
    res.status(404).send({message: 'Product not found'})
  }
}))

module.exports = router