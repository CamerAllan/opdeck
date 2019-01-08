const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Datastore = require("nedb");
const logger = require("morgan");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

const gameDB = new Datastore({ filename: "./gameData.db", autoload: true });
const errCallback = (err, newDoc) => {
  if (err) {
    res.status(400);
    return res.send();
  }
};

app.post("/addUser", (req, res) => {
  const userDoc = { userId: req.body["userId"], games: {} };
  gameDB.insert(userDoc, errCallback);
  res.status(200);
  return res.send();
});

app.post("/addGame", (req, res) => {
  const stringToPush = "games." + req.body["gameId"];
  gameDB.update(
    { userId: req.body["userId"] },
    { $set: { [stringToPush]: { turns: {} } } },
    {},
    errCallback
  );
  res.status(200);
  return res.send();
});

app.post("/addTurn", (req, res) => {
  const stringToPush =
    "games." + req.body["gameId"] + ".turns." + req.body["turnNum"];

  gameDB.update(
    {
      userId: req.body["userId"]
    },
    {
      $set: {
        [stringToPush]: req.body
      }
    },
    {},
    (err, newDoc) => {
      if (err) {
        res.status(400);
        return res.send();
      }
    }
  );
  res.status(200);
  return res.send();
});

function getString() {}

app.listen(process.env.PORT || 8080);
