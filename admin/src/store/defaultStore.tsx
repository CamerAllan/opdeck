import { IStore, Menu } from "./store";

const defaultStore: IStore = {
  startingDeck: [],
  cards: {},
  turns: [],
  pillars: {},
  selectedData: {
    game: null,
    cards: [],
    users: [],
    pillars: {},
    pillar: null,
    card: null
  },
  updateRate: 5000,
  menu: Menu.VIS,
  games: []
};

export default defaultStore;
