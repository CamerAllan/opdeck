import Game from "../games/baseGame";
import { HoverLoc, IStore } from "./store";

const defaultStore: IStore = {
  userData: {},
  game: Game,
  interfaceData: {
    hoverLoc: HoverLoc.ELSE,
    gameInProgress: false
  }
};

export default defaultStore;
