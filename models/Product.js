const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "stone head Russel"
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  photo: {
    type: String,
    required: true,
    default: "ugly"
  }  
});

module.exports = mongoose.model('products', productSchema);