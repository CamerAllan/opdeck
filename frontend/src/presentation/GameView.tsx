import * as React from "react";
import Card from "../containers/Card";
import Pillars from "../containers/Pillars";
import Response from "../containers/Response";
import { HoverLoc, IGame } from "../store/store";
import * as css from "../styles/basicStyles";

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
    return (<div style={{
      paddingTop: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
    }}>
      <div style={{
        border: "solid",
        borderRadius: "5px",
        borderWidth: "5",
        borderColor: css.DARK2,
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
        marginBottom: "20px"
      }}>
        <Pillars
          pillars={this.props.gameData.pillars}
          effectWeightings={effectWeightings}
        />
      </div>
      <div style={{
        border: "solid",
        borderRadius: "5px",
        borderWidth: "5",
        borderColor: css.DARK2,
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom: "20px"
      }}>

        <Card contents={card.contents} pillars={this.props.gameData.pillars} />
        <Response {...this.props} />
      </div>
    </div>
    );
  }
}

export default GameView;
