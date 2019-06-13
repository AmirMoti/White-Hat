// product schema for documents
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    defult: 0
  }
});

module.exports = mongoose.model('product', productSchema);
