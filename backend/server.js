const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("nedb");
const logger = require("morgan");
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

const userData = new db({ filename: "./userData.db", autoload: true });
const gameData = new db({ filename: "./gameData.db", autoload: true });
const errCallback = (err, newDoc) => {
  if (err) {
    res.status(400);
    return res.send();
  }
};

// Load any new locally defined games
// TODO: validate on load
var normalizedPath = require("path").join(__dirname, "games");
fs.readdirSync(normalizedPath).forEach(function (file) {
  const game = require("./games/" + file).game;
  gameData.update(
    { id: game.id },
    game,
    { upsert: true }, // Don't re-add existing game
    (err, newDoc) => {
      if (err) {
        console.error("Could not insert game definition into database: " + err);
      }
    }
  );
});

console.log("Backend live");

// Routes

// User routes
app.post("/addUser", (req, res) => {
  userData.find({ userId: req.body["userId"] }, (err, docs) => {
    if (Object.keys(docs).length == 0) {
      console.log("Creating new user " + req.body["userId"]);
      const userDoc = { userId: req.body["userId"], games: {} };
      userData.insert(userDoc, errCallback);
      res.status(200);
      return res.send();
    }
  });
});

app.get("/addGame/user/:user/game/:gameName", (req, res) => {
  const response = {}
  const userFind = new Promise((resolve, reject) => {
    userData.find({ userId: req.params.user }, (err, docs) => {
      const newGameId = Object.keys(docs[0].games).length + 1;
      const stringToPush = `games.${newGameId}`;
      userData.update(
        { userId: req.params["user"] },
        { $set: { [stringToPush]: { turns: {} } } },
        {},
        errCallback
      );
      resolve(newGameId);
    })
  }).then((val) => { response.newGameId = val }).catch((reason) => console.log(reason));

  const gameFind = new Promise((resolve, reject) => {
    gameData.find({ id: req.params.gameName }, (err, docs) => {
      if (err) {
        reject(err);
      }
      if (docs.length == 0) {
        reject("Game definition not found");
      }
      if (docs.length > 1) {
        reject("Game definition id duplicate detected");
      }
      else {
        resolve(docs[0]);
      }
    });
  }).then((val) => { response.newGameDef = val }).catch((reason) => console.log(reason));;

  Promise.all([gameFind, userFind]).then(() => {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      newGameId: response.newGameId, newGameDef: response.newGameDef
    }));
  }).catch((reason) => console.log(reason));

});

app.post("/addTurn", (req, res) => {
  const stringToPush =
    `games.${req.body["gameId"]}.turns.${req.body["turnNum"]}`;

  userData.update(
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
  userData.find({}, (err, docs) => { res.status(200); res.send(JSON.stringify(docs)) });
})


// Game routes
app.get("/games", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  gameData.find({}, (err, docs) => {
    if (err || docs.length == 0) {
      res.status(500);
      res.send(JSON.stringify(err))
    }
    else {
      const availableGames = [];
      docs.forEach(g => { availableGames.push(g.id) })
      res.status(200);
      res.send(JSON.stringify(availableGames))
    }
  });
});

app.get("/game/:gameId", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  gameData.find({ id: req.params.gameId }, (err, docs) => {
    if (err || docs.length == 0) {
      res.status(404);
      res.send(JSON.stringify(err))
    }
    else {
      res.status(200);
      res.send(JSON.stringify(docs))
    }
  });
})

app.listen(process.env.PORT || 8080);
