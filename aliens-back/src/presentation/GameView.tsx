import * as React from "react";
import Card from "../containers/Card";
import Pillars from "../containers/Pillars";
import Response from "../containers/Response";
import { HoverLoc, IGame } from "../store/store";

interface IGameViewProps {
  gameData: IGame;
  drawCard: () => void;
  hoverLoc: HoverLoc;
}

class GameView extends React.Component<IGameViewProps> {
  public render() {
    const card = this.props.gameData.cards[this.props.gameData.currentCard];
    let effectWeightings;
    switch (this.props.hoverLoc) {
      case HoverLoc.ACCEPT: {
        effectWeightings = card.contents.responses.accept.effects;
        break;
      }
      case HoverLoc.REJECT: {
        effectWeightings = card.contents.responses.reject.effects;
        break;
      }
      default: {
        effectWeightings = {};
        break;
      }
    }
    return (
      <div>
        <Pillars
          pillars={this.props.gameData.pillars}
          effectWeightings={effectWeightings}
        />
        <Card {...card} />
        <Response {...this.props} />
      </div>
    );
  }
}

export default GameView;
