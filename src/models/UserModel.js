const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
}, {timestamps: true,})

const User = mongoose.model('UserAmazon', userSchema)

module.exports = User