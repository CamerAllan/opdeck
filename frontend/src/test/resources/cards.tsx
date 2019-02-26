export const tc1 = {
  weightings: {
    Popularity: {
      moreThan: 5,
      lessThan: 7
    },
    Money: { lessThan: 4 }
  },
  contents: {
    name: "tc1",
    text: "First test card",
    image: "www.this-card-has-no-image.com",
    responses: {
      accept: {
        text: "A",
        cardsAdded: [],
        cardsRemoved: [],
        effects: { Popularity: -2 }
      },
      reject: {
        text: "R",
        cardsAdded: [],
        cardsRemoved: [],
        effects: { Money: -1, Popularity: 1 }
      }
    }
  }
};

export const tc2 = {
  weightings: {
    Popularity: {
      moreThan: 5,
      lessThan: 7
    },
    Money: { moreThan: 4 }
  },
  contents: {
    name: "tc2",
    text: "Second test card",
    image: "www.this-card-has-no-image.com",
    responses: {
      accept: {
        text: "A",
        cardsAdded: [],
        cardsRemoved: [],
        effects: {
          Popularity: 2,
          Money: -1
        }
      },
      reject: {
        text: "R",
        cardsAdded: [],
        cardsRemoved: [],
        effects: { Popularity: -1 }
      }
    }
  }
};

export const tcAll = {
  tc1,
  tc2
};
