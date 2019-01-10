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

console.log("Backend live");

app.post("/addUser", (req, res) => {
  gameDB.find({ userId: req.body["userId"] }, (err, docs) => {
    if (Object.keys(docs).length == 0) {
      console.log("Creating new user " + req.body["userId"]);
      const userDoc = { userId: req.body["userId"], games: {} };
      gameDB.insert(userDoc, errCallback);
      res.status(200);
      return res.send();
    }
  });
});

app.get("/addGame/:user", (req, res) => {
  gameDB.find({ userId: req.params.user }, (err, docs) => {
    console.log(docs);
    const newGameId = Object.keys(docs[0].games).length + 1;
    const stringToPush = `games.${newGameId}`;
    gameDB.update(
      { userId: req.params["user"] },
      { $set: { [stringToPush]: { turns: {} } } },
      {},
      errCallback
    );
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      newGameId
    }))
  });
});

app.post("/addTurn", (req, res) => {
  const stringToPush =
    `games.${req.body["gameId"]}.turns.${req.body["turnNum"]}`;

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

app.get("/all", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  gameDB.find({}, (err, docs) => { res.status(200); res.send(JSON.stringify(docs)) });
})


app.listen(process.env.PORT || 8080);
