import { IStore } from "./store";


const defaultStore: IStore = {
  data: [],
  selectedData: { cards: [], users: [], filter: {} }
};

export default defaultStore;
