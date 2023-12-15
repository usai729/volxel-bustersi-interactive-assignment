const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

module.exports = connect = async () => {
  await mongoose.connect(process.env.DB);

  console.log(`Connected to db at ${process.env.DB}`);
};
