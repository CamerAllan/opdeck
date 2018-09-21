import Game from "../games/baseGame";
import { IStore } from "./store";

const defaultStore: IStore = {
  userData: {},
  gameData: Game
};

export default defaultStore;
