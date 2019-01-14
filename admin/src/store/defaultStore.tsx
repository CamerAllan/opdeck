import { IStore } from "./store";


const defaultStore: IStore = {
  data: [],
  selectedData: { cards: [], users: [] }
};

export default defaultStore;
