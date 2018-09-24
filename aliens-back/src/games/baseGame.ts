import { IGameData } from "../store/store";

export default {
  currentCard: "goodMorning",
  settings: {
    deckSize: 2
  },
  pillars: {
    Army: {
      value: 0,
      min: 0,
      max: 10,
      description: "A measure of the strength of your army"
    },
    Religion: {
      value: 0,
      min: 0,
      max: 10,
      description: "A measure of the religiosity of the people"
    },
    Popularity: {
      value: 0,
      min: 0,
      max: 10,
      description: "A measure of how much the people like you"
    },
    Money: {
      value: 0,
      min: 0,
      max: 10,
      description: "A measure of the wealth of your country"
    }
  },
  playDeck: [],
  reserveDeck: [
    "goodMorning",
    "infection",
    "recruitment",
    "raid",
    "speech",
    "churchSpire",
    "electionInterfere",
    "renewables",
    "goodDeed",
    "churchBribe",
    "loanOffer",
    "recruitmentDrive",
    "warStart"
  ],
  cards: {
    // START
    goodMorning: {
      weightings: {},
      contents: {
        name: "Good morning",
        text: "You awake to find yourself ruler of a small nation",
        responses: {
          accept: {
            text: "I rule with an iron fist",
            cardsAdded: [],
            cardsRemoved: ["goodMorning"],
            effects: { Army: 6, Money: 5, Religion: 5, Popularity: 4 }
          },
          reject: {
            text: "I am a benevolent leader",
            cardsAdded: [],
            cardsRemoved: ["goodMorning"],
            effects: { Army: 4, Money: 5, Religion: 5, Popularity: 6 }
          }
        }
      }
    },
    // MISC
    recruitment: {
      weightings: {},
      contents: {
        name: "Recruitment",
        text: "Mercenaries are offering to join your army for a fee",
        responses: {
          accept: {
            text: "Accept",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Army: 1, Money: -1 }
          },
          reject: {
            text: "Decline",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {}
          }
        }
      }
    },
    infection: {
      weightings: {},
      contents: {
        name: "Infection",
        text: "Infection is spreading, what should we do?",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Quarantine the infected",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Popularity: -2 }
          },
          reject: {
            text: "Spend more on care",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Money: -1, Popularity: 1 }
          }
        }
      }
    },
    speech: {
      weightings: {},
      contents: {
        name: "Speech",
        text: "You're asked to make a speech in a rough part of town",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Hire extra security",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {
              Popularity: 2,
              Money: -1
            }
          },
          reject: {
            text: "I Refuse",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Popularity: -1 }
          }
        }
      }
    },
    churchBribe: {
      weightings: {},
      contents: {
        name: "A Bribe?",
        text: "The church want more power, and they're willing to pay for it",
        responses: {
          accept: {
            text: "But of course",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {
              Religion: 2,
              Money: 2
            }
          },
          reject: {
            text: "I refuse",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Religion: -1 }
          }
        }
      }
    },
    churchSpire: {
      weightings: {},
      contents: {
        name: "Church Spire",
        text: "The spire of the church was destroyed in a tornado",
        responses: {
          accept: {
            text: "Pay to fix it",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {
              Religion: 1,
              Money: -1
            }
          },
          reject: {
            text: "They'll manage",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Religion: -1 }
          }
        }
      }
    },
    electionInterfere: {
      weightings: {},
      contents: {
        name: "Interference",
        text: "A politician offers you money to secretly meddle in an election",
        responses: {
          accept: {
            text: "Why not?",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Money: 2 }
          },
          reject: {
            text: "I refuse",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {}
          }
        }
      }
    },
    goodDeed: {
      weightings: {},
      contents: {
        name: "A Good Deed",
        text: "Your press office are doing a good job",
        responses: {
          accept: {
            text: "Excellent",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Popularity: 1 }
          },
          reject: {
            text: "Fantastic",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Popularity: 1 }
          }
        }
      }
    },
    raid: {
      weightings: {},
      contents: {
        name: "Raid",
        text:
          "A small village in the east is being raided by thugs, will you help?",
        responses: {
          accept: {
            text: "Yes",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Army: -1, Popularity: 1 }
          },
          reject: {
            text: "No",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Popularity: -2 }
          }
        }
      }
    },
    // RECRUITMENT CAMPAIGN
    recruitmentDrive: {
      weightings: {},
      contents: {
        name: "Recruitment drive",
        text:
          "A recruitment campaign could be beneficial to our army in the long term",
        responses: {
          accept: {
            text: "Of course",
            cardsAdded: ["recruitmentPaidOff"],
            cardsRemoved: ["recruitmentDrive"],
            effects: { Money: -1 }
          },
          reject: {
            text: "We can't afford that",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {}
          }
        }
      }
    },
    recruitmentPaidOff: {
      weightings: {},
      contents: {
        name: "Recruitment drive success",
        text: "Our campaign seems to have been a success",
        responses: {
          accept: {
            text: "Great news, end it there",
            cardsAdded: ["recruitmentDrive"],
            cardsRemoved: ["recruitmentPaidOff"],
            effects: { Army: 2 }
          },
          reject: {
            text: "Let's keep it going",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Army: 2, Money: -1 }
          }
        }
      }
    },
    // LOAN
    loanOffer: {
      weightings: {
        Money: { lessThan: 4 }
      },
      contents: {
        name: "Payday",
        text: "The bank is offering you a loan",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Take it",
            cardsAdded: ["loanRepay"],
            cardsRemoved: ["loanOffer"],
            effects: { Money: 2 }
          },
          reject: {
            text: "No thanks",
            cardsAdded: [],
            cardsRemoved: [],
            effects: {}
          }
        }
      }
    },
    loanRepay: {
      weightings: {},
      contents: {
        name: "Repayday",
        text: "The bank wants their money back",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Fine",
            cardsAdded: ["loanOffer"],
            cardsRemoved: ["loanRepay"],
            effects: { Money: -2 }
          },
          reject: {
            text: "Refuse",
            cardsAdded: ["loanRetake"],
            cardsRemoved: ["loanRepay"],
            effects: {}
          }
        }
      }
    },
    loanRetake: {
      weightings: {},
      contents: {
        name: "Retakingourstuffday",
        text: "The bank took their money back, plus extra",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Aw no",
            cardsAdded: ["loanOffer"],
            cardsRemoved: ["loanRetake"],
            effects: { Money: -3 }
          },
          reject: {
            text: "Aw no",
            cardsAdded: ["loanOffer"],
            cardsRemoved: ["loanRetake"],
            effects: { Money: -3 }
          }
        }
      }
    },
    // WAR
    warStart: {
      weightings: {
        Army: { moreThan: 7 }
      },
      contents: {
        name: "War",
        text:
          "Our army is much stronger than that of the west, shall we invade?",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Yes",
            cardsAdded: ["warWithdraw", "warDefeat"],
            cardsRemoved: ["warStart"],
            effects: {
              Popularity: -2,
              Money: 3
            }
          },
          reject: {
            text: "No",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Popularity: 1 }
          }
        }
      }
    },
    warWithdraw: {
      weightings: {
        Army: { lessThan: 5 }
      },
      contents: {
        name: "Withdrawal",
        text:
          "Our forces are spread too thin, we risk losing the war in the west, shall we withdraw?",
        responses: {
          accept: {
            text: "Yes",
            cardsAdded: ["warStart"],
            cardsRemoved: ["warWithdraw", "warDefeat"],
            effects: {
              Popularity: 1,
              Money: -1
            }
          },
          reject: {
            text: "No",
            cardsAdded: [],
            cardsRemoved: [],
            effects: { Money: 1 }
          }
        }
      }
    },
    warDefeat: {
      weightings: { Army: { lessThan: 4 } },
      contents: {
        name: "Defeat in war",
        text: "The last of our forces in the west have been captured",
        responses: {
          accept: {
            text: "We are all deeply saddened by this news",
            cardsAdded: ["warStart"],
            cardsRemoved: ["warWithdraw", "warDefeat"],
            effects: { Popularity: -2 }
          },
          reject: {
            text: "Pay the right people to keep this quiet",
            cardsAdded: ["warStart", "warDefeatDiscover"],
            cardsRemoved: ["warWithdraw", "warDefeat"],
            effects: {}
          }
        }
      }
    },
    warDefeatDiscover: {
      weightings: { Money: { lessThan: 3 } },
      contents: {
        name: "Discovery of defeat",
        text:
          "You can no longer afford to pay the right people to keep quite. A leak reveales the extent of your defeat in the west",
        responses: {
          accept: {
            text: "Oh dear",
            cardsAdded: [],
            cardsRemoved: ["warDefeatDiscover"],
            effects: { Popularity: -3 }
          },
          reject: {
            text: "Whoops",
            cardsAdded: [],
            cardsRemoved: ["warDefeatDiscover"],
            effects: { Popularity: -3 }
          }
        }
      }
    },
    // RENEWABLES
    renewables: {
      weightings: {},
      contents: {
        name: "Clean energy",
        text: "The people want to see more investment in renewable energy",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "Invest heavily",
            cardsAdded: ["greenFingers"],
            cardsRemoved: ["renewables"],
            effects: {
              Popularity: 3,
              Money: -2
            }
          },
          reject: {
            text: "Coal will do just fine",
            cardsAdded: ["dirtyFingers"],
            cardsRemoved: ["renewables"],
            effects: { Popularity: -1 }
          }
        }
      }
    },
    greenFingers: {
      weightings: {},
      contents: {
        name: "",
        text:
          "Your nation has one of the lowest carbon footprints in the world",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "This is good news",
            cardsAdded: ["greenerFingers"],
            cardsRemoved: ["greenFingers"],
            effects: {
              Popularity: 1
            }
          },
          reject: {
            text: "We must look to the future",
            cardsAdded: ["greenerFingers"],
            cardsRemoved: ["greenFingers"],
            effects: { Popularity: 1 }
          }
        }
      }
    },
    greenerFingers: {
      weightings: {},
      contents: {
        name: "",
        text:
          "A neighbouring country offers you a large sum to dump their waste in your waters",
        image: "www.this-card-has-no-image.com",
        responses: {
          accept: {
            text: "We need the cash",
            cardsAdded: [],
            cardsRemoved: ["greenerFingers"],
            effects: {
              Money: 2
            }
          },
          reject: {
            text: "Our future is not for sale",
            cardsAdded: [],
            cardsRemoved: ["greenerFingers"],
            effects: {}
          }
        }
      }
    }
  }
} as IGameData;
