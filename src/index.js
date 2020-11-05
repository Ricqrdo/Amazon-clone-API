const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const data = require('../data')
require("dotenv").config();

// router
const UserRouter = require('./routes/User.routes')

// config
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (_req, res) => {
  res.send('hi')
});

app.get('/api/products', (_req, res) => {
  res.json(data.products)
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id)
  if(product) {
    res.send(product)
  } else {
    res.status(404).send({message: 'Product not found'})
  }
})

app.use('/api/users', UserRouter)

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message})
})

// server run
app.listen(app.get("port"), ()=>{
  console.log('running api')
});

// DB connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => console.log("connected to DB")
);