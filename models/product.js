// models/Kulaklik.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    heading: String,
    company: String,
    headphoneType: String,
    price: Number,
    color: String,
    available: String,
    brand: String,
    imageUrl: String,
    imageUrl1: String,
    imageUrl2: String,
    li1: String,
    li2: String,
    li3: String,
    li4: String,
    li5: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
