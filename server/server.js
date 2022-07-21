require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const runDB = require("./config/db");

const app = express();

app.use(bodyParser.json());

// Run DB
runDB();

app.use("/", productRouter);
app.use("/", orderRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("public"));
  app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
} else {
  app.get("/", (req, res) => res.send("API Running"));
}

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log("Running on port 5001");
});
