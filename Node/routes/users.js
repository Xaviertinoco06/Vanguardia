const { axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/weather', function (req, res, next) {
  try {
      axios.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f94178af25220bccb09bfe6d231ca04"
          + process.env.WHEATHER_API)
          .then(response => {
              res.send(response.data);
          })
  } catch (error) {
      console.error(error);
    }
});
module.exports = router;

