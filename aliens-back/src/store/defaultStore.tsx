import Game from "../games/baseGame";
import { HoverLoc, IStore } from "./store";

const defaultStore: IStore = {
  userData: {},
  game: Game,
  gameData: { ...Game, gameId: "yett", settings: { deckSize: 420 } },
  interfaceData: {
    hoverLoc: HoverLoc.ELSE
  }
};

export default defaultStore;
