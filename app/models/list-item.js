const mongoose = require('mongoose')

const listItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // complete feature two 
  boolean: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('ListItem', listItemSchema)
