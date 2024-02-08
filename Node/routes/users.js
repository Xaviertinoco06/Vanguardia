var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_CONNECTION);
async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// async function getWeather() {
//   let options = {
//     method: "GET",
//     url:
//       "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=" +
//       process.env.WEATHER_API,
//   };
//   };
//   const response = await axios.request(options);
//   return response.data;
// }

router.get("/envtest", async function (req, res, next) {
  res.send({
    env: process.env.WEATHER_API,
    response: await getWeather(),
  });
});

module.exports = router;
