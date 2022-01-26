const mongoose = require("mongoose");

const productSchema = require("../schema/product");

const Product = mongoose.model("product", productSchema);

module.exports = Product;
