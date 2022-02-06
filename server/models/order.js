const mongoose = require("mongoose");

const orderSchema = require("../schema/order");

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
