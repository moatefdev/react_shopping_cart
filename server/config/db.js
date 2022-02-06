const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/react-shopping-cart";
function runDB() {
  mongoose
    .connect(connectionString)
    .then((res) => console.log("Connection Done"));
}

module.exports = runDB;
