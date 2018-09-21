import { IGameData } from "../store/store";

export default {
  currentCard: "000",
  settings: {
    deckSize: 2
  },
  pillars: {
    Army: {
      value: 5,
      min: 0,
      max: 10,
      description: "A measure of the strength of your army"
    },
    Religion: {
      value: 5,
      min: 0,
      max: 10,
      description: "A measure of the religiousness of the people"
    },
    Popularity: {
      value: 5,
      min: 0,
      max: 10,
      description: "A measure of how much the people like you"
    },
    Money: {
      value: 5,
      min: 0,
      max: 10,
      description: "A measure of the wealth of your country"
    }
  },
  playDeck: ["000"],
  reserveDeck: ["000"],
  cards: {
    "000": {
      weightings: {
        Army: 1,
        Religion: 2,
        Popularity: 3,
        Money: 4
      },
      contents: {
        name: "Starting card",
        text: "This is the first card you will see",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Congrats",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {}
          },
          reject: {
            text: "Noo",
            cardsAdded: ["001"],
            cardsRemoved: ["000"],
            effects: { Army: 1 }
          }
        }
      }
    },
    "001": {
      weightings: {
        Army: 0,
        Religion: 0,
        Popularity: 0,
        Money: 0
      },
      contents: {
        name: "Second card",
        text: "This is the second card you will see",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Congrats",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {}
          },
          reject: {
            text: "Noo",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Army: 1 }
          }
        }
      }
    }
  }
} as IGameData;
