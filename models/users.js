const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: false
  },
  accountId: {
    type: Number,
    required: false
  },
  provider: {
    type: String,
    required: false
  },
  createdAt: {
    type: Number,
    default: Date.now, 
  }
})

const User = mongoose.model("User", userSchema)
module.exports = User