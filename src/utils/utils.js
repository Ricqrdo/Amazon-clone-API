const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (user => {
 return jwt.sign({
    _id: user._id, 
    name: user.name, 
    email: user.email, 
    isAdmin: user.isAdmin
  }, process.env.TOKEN_SECRET, {expiresIn: '30d'})
})

module.exports = generateToken