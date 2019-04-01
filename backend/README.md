# Add User

Used to add a user to the user database.

**URL** : `<endpoint>/addUser`

**Method** : `POST`

**Data constraints**

```json
{
  "userId": "[valid username]"
}
```

**Request example**

```json
{
  "userId": "testuser"
}
```

## Success Response

**Code** : `200 OK`

# Start game

Adds the beginning of a game to a given user and returns the definition for that game.

**URL** : `<endpoint>/addGame/user/<userId>/game/<gameId>`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

## Example Response

```json
{
   "newGameId":1,
   "newGameDef":{
      "id":"alienTest",
      "currentCard":"goodMorning",
      "pillars":{
         "Army":{
            "value":0,
            "min":0,
            "max":10,
            "description":"A measure of the strength of your army",
            "colour":"#f45342"
         },
         "Science":{
            "value":0,
            "min":0,
            "max":10,
            "description":"A measure of the your scientific advancement",
            "colour":"#fcff75"
         },
         "Popularity":{
            "value":0,
            "min":0,
            "max":10,
            "description":"A measure of how much the people like you",
            "colour":"#6bdcff"
         },
         "Money":{
            "value":0,
            "min":0,
            "max":10,
            "description":"A measure of the wealth of your country",
            "colour":"#75ff75"
         }
      },
      "playDeck":[
         "goodMorning"
      ],
      "reserveDeck":[

      ],
      "cards":{
         "goodMorning":{
            "weightings":{

            },
            "contents":{
               "name":"Good morning",
               "text":"You awake to find yourself ruler of a small nation",
               "responses":{
                  "accept":{
                     "text":"I rule with an iron fist",
                     "cardsAdded":[
                        "infection",
                        "recruitment",
                        "raid",
                        "speech",
                        "labBroke",
                        "electionInterfere",
                        "renewables",
                        "goodDeed",
                        "scienceBribe",
                        "loanOffer",
                        "recruitmentDrive",
                        "warStart"
                     ],
                     "cardsRemoved":[
                        "goodMorning"
                     ],
                     "effects":{
                        "Army":6,
                        "Money":5,
                        "Science":5,
                        "Popularity":4
                     }
                  },
                  "reject":{
                     "text":"I am a benevolent leader",
                     "cardsAdded":[
                        "infection",
                        "recruitment",
                        "raid",
                        "speech",
                        "labBroke",
                        "electionInterfere",
                        "renewables",
                        "goodDeed",
                        "scienceBribe",
                        "loanOffer",
                        "recruitmentDrive",
                        "warStart"
                     ],
                     "cardsRemoved":[
                        "goodMorning"
                     ],
                     "effects":{
                        "Army":4,
                        "Money":5,
                        "Science":5,
                        "Popularity":6
                     }
                  }
               }
            }
         },
         .
         .
         .
      }
   }
}
```
# Add Turn

Adds a turn to the user database.

**URL** : `<endpoint>/addTurn`

**Method** : `POST`

**Data constraints**

```json
{
  "userId": "[valid username]"
}
```

**Request example**

```json
{
   "userId":"testUsername",
   "gameId":1,
   "cardId":"goodMorning",
   "turnNum":0,
   "pillars":{
      "Army":{
         "value":5,
         "min":0,
         "max":10,
         "description":"A measure of the strength of your army",
         "colour":"#f45342"
      },
      "Science":{
         "value":3,
         "min":0,
         "max":10,
         "description":"A measure of the your scientific advancement",
         "colour":"#fcff75"
      },
      "Popularity":{
         "value":9,
         "min":0,
         "max":10,
         "description":"A measure of how much the people like you",
         "colour":"#6bdcff"
      },
      "Money":{
         "value":3,
         "min":0,
         "max":10,
         "description":"A measure of the wealth of your country",
         "colour":"#75ff75"
      }
   },
   "answer":false
}
```

## Success Response

**Code** : `200 OK`

# Get All Turns

Returns all data stored in the user turns database.

**URL** : `<endpoint>/all`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Response example**

```json
[
   {
      "userId":"j",
      "games":{
         "1":{
            "turns":{
               "0":{
                  "userId":"j",
                  "gameId":1,
                  "cardId":"goodMorning",
                  "turnNum":0,
                  "pillars":{
                     "Army":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of the strength of your army",
                        "colour":"#f45342"
                     },
                     "Science":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of the your scientific advancement",
                        "colour":"#fcff75"
                     },
                     "Popularity":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of how much the people like you",
                        "colour":"#6bdcff"
                     },
                     "Money":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of the wealth of your country",
                        "colour":"#75ff75"
                     }
                  },
                  "answer":false
               }
               .
               .
               .
            }
         }
         .
         .
         .
      }
   }
]
```

# Get Games

Get a list of all game definitions ids.

**URL** : `<endpoint>/games`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Response example**

```json
[
    "alienTest",
    "test game 2",
    "Test Game: Battle Royale"
]
```

# Update Game

Add or update game

**URL** : `<endpoint>/game/<gameId>`

**Method** : `POST`

**Reqest example**


```json
[
   {
      "userId":"j",
      "games":{
         "1":{
            "turns":{
               "0":{
                  "userId":"j",
                  "gameId":1,
                  "cardId":"goodMorning",
                  "turnNum":0,
                  "pillars":{
                     "Army":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of the strength of your army",
                        "colour":"#f45342"
                     },
                     "Science":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of the your scientific advancement",
                        "colour":"#fcff75"
                     },
                     "Popularity":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of how much the people like you",
                        "colour":"#6bdcff"
                     },
                     "Money":{
                        "value":0,
                        "min":0,
                        "max":10,
                        "description":"A measure of the wealth of your country",
                        "colour":"#75ff75"
                     }
                  },
                  "answer":false
               }
               .
               .
               .
            }
         }
         .
         .
         .
      }
   }
]
```

## Success Response

**Code** : `200 OK`

