const express = require("express");
const cors = require("cors");
const _ = require("dotenv").config();
const csvtojson = require("csvtojson");

const db = require("./config/DbCon");
db();

const DataRoute = require("./routes/DataRoute");
const data = require("./models/DataModel");

const app = express();

app.use(express.json());
app.use(cors());

//This will insert the data if the no of records are 0 only
async function insert_data() {
  let count = await data.countDocuments();

  if (count === 0) {
    csvtojson()
      .fromFile("../startup_funding.csv")
      .then(async (json) => {
        await data.insertMany(json);
      });
  }
}

insert_data();

app.use("/api", DataRoute);

app.listen(process.env.PORT, () => {
  console.log(`Connected@http://localhost:${process.env.PORT}`);
});
