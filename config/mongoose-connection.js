const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/e-commerce`)
  .then(function () {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
console.log(process.env.NODE_ENV)
module.exports = mongoose.connection;
