const router = require('express').Router()
const expressAsynCHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/utils')
const data = require('../../data')
const User = require('../models/UserModel')

router.get('/seed', expressAsynCHandler(async (_req, res) => {
  const createdUsers = await User.insertMany(data.users)
  res.send({createdUsers})
}))

router.post('/signin', expressAsynCHandler(async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email: email})
  if(user){
    if(bcrypt.compareSync(password, user.password)){
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
      })
      return
    }
  }
  res.status(401).send({message: 'Invalid user or password'})
}))

module.exports = router