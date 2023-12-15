const { getRecords } = require("../controllers/DataController");

const Router = require("express").Router();

Router.route("/get").get(getRecords);

module.exports = Router;
