const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const TinyDB = require("tinydb");
const app = express();

test_db = new TinyDB("./test.db");

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
test_db.onReady = () => {
  console.log("Database ready");
};

app.post("/choose", function(req, res) {
  test_db.setInfo(req.body["cardId"], req.body["choice"], function(
    err,
    key,
    value
  ) {
    if (err) {
      res.status(400);
      return res.send();
    }
    console.log("[setInfo] " + key + " : " + value);
  });
  res.status(200);
  return res.send();
});

app.listen(process.env.PORT || 8080);

// // set info to DB
// test_db.setInfo("title", "Test DB", function(err, key, value) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("[setInfo] " + key + " : " + value);
// });

// // get info from DB
// test_db.getInfo("title", function(err, key, value) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("[getInfo] " + key + " : " + value);
// });

// // do other things below
// test_db.forEach(function(err, item) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   for (var key in item) {
//     console.log(key + " : " + item[key]);
//   }
// });
