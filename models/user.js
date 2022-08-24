const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化模板
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = Users = mongoose.model('users', UserSchema)