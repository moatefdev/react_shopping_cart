const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const runDB = require("./config/db");

const app = express();

app.use(bodyParser.json());
app.use("/", productRouter);
app.use("/", orderRouter);

// Run DB
runDB();

app.listen(5001, () => {
  console.log("Running on port 5001");
});
