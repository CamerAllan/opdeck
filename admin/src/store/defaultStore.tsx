import { IStore } from "./store";


const defaultStore: IStore = {
  data: [],
  selectedData: { cards: [], users: [], filter: {} },
  updateRate: 500
};

export default defaultStore;
