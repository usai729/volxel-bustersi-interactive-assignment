const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  SNo: {
    type: Number,
  },
  Date: {
    type: String,
  },
  StartupName: {
    type: String,
  },
  IndustryVertical: {
    type: String,
  },
  SubVertical: {
    type: String,
  },
  CityLocation: {
    type: String,
  },
  InvestorsName: {
    type: String,
  },
  InvestmentType: {
    type: String,
  },
  AmountInUSD: {
    type: String,
  },
});

const data = mongoose.model("data", dataSchema);

module.exports = data;

/***
 * This model can be used to add new startups to the already given list
 *
 */
