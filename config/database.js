const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("db connection established");
    })
    .catch((err) => {
      console.log("db connection error");
      console.error(err);
      process.exit(1);
    });
};
