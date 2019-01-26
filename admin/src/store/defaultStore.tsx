import { IStore, Menu } from "./store";

const defaultStore: IStore = {
  cards: {},
  turns: [],
  pillars: {},
  selectedData: { cards: [], users: [], pillars: {}, pillar: null, card: null },
  updateRate: 500,
  menu: Menu.VIS
};

export default defaultStore;
