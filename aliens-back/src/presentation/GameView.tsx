import * as React from "react";
import Card from "../containers/Card";
import Pillars from "../containers/Pillars";
import Response from "../containers/Response";
import { IGameData } from "../store/store";

interface IGameViewProps {
  gameData: IGameData;
  drawCard: () => void;
}

class GameView extends React.Component<IGameViewProps> {
  public render() {
    const card = this.props.gameData.cards[this.props.gameData.currentCard];
    return (
      <div>
        <Pillars pillars={this.props.gameData.pillars} />
        <Card {...card} />
        <Response {...this.props} />
      </div>
    );
  }
}

export default GameView;
