const mongoose = require("mongoose");
const data = require("../models/DataModel");

exports.getRecords = async (req, res) => {
  const {
    IndustryVertical,
    SubVertical,
    Location,
    InvestmentType,
    page,
    pageSize,
  } = req.query;

  let filters = {};

  if (IndustryVertical !== undefined && IndustryVertical !== "") {
    filters.IndustryVertical = IndustryVertical;
  }
  if (SubVertical !== undefined && SubVertical !== "") {
    filters.SubVertical = SubVertical;
  }
  if (Location !== undefined && Location !== "") {
    filters.CityLocation = Location;
  }
  if (InvestmentType !== undefined && InvestmentType !== "") {
    filters.InvestmentType = InvestmentType;
  }

  const skip = (page - 1) * pageSize;
  const limit = parseInt(pageSize);

  let records = await data.find(filters).skip(skip).limit(limit);

  res.json(records);
};
