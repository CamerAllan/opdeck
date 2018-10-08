import Game from "../games/baseGame";
import { HoverLoc, IStore } from "./store";

const defaultStore: IStore = {
  userData: {},
  gameData: Game,
  interfaceData: {
    hoverLoc: HoverLoc.ELSE
  }
};

export default defaultStore;
