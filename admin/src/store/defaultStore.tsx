import { IStore } from "./store";


const defaultStore: IStore = {
  cards: {},
  turns: [],
  pillars: {},
  selectedData: { cards: [], users: [], pillars: {} },
  updateRate: 500
};

export default defaultStore;
