const router = require('express').Router()
const expressAsynCHandler = require('express-async-handler')
const data = require('../../data')
const User = require('../models/UserModel')

router.get('/seed', expressAsynCHandler(async (_req, res) => {
  const createdUsers = await User.insertMany(data.users)
  res.send({createdUsers})
}))

module.exports = router