const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// router
const UserRouter = require('./routes/User.routes')
const ProductRouter = require('./routes/Product.routes')

// config
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRouter)
app.use('/api/products', ProductRouter)

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