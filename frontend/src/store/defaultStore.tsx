import { HoverLoc, IStore } from "./store";

const defaultStore: IStore = {
  userData: {},
  interfaceData: {
    hoverLoc: HoverLoc.ELSE,
    gameInProgress: false
  }
};

export default defaultStore;
