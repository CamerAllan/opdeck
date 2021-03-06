import * as React from "react";
import MakerVis from "../../containers/maker/MakerVis";
import * as css from "../../styles/adminStyles";
import { ISelectedData, ICards, IPillars, Menu } from "../../store/store";
import MakerAddCard from "../../containers/maker/MakerAddCard";
import MakerAddPillar from "../../containers/maker/MakerAddPillar";
import GameSelector from "src/containers/GameSelector";
interface IMakerStateProps {
  selectedData: ISelectedData;
  startingDeck: string[];
  cards: ICards;
  pillars: IPillars;
  menu: Menu;
}

class MakerView extends React.Component<IMakerStateProps> {
  public render() {
    let leftComponent;
    switch (this.props.menu) {
      case Menu.VIS: {
        leftComponent = (
          <>
            <GameSelector
              gameId={
                this.props.selectedData.game ? this.props.selectedData.game : ""
              }
              game={{
                id: this.props.selectedData.game
                  ? this.props.selectedData.game
                  : "",
                currentCard: "changemee",
                cards: this.props.cards,
                pillars: this.props.pillars,
                playDeck: this.props.startingDeck,
                reserveDeck: []
              }}
            />
          </>
        );
        break;
      }
      case Menu.ADD_CARD: {
        leftComponent = (
          <MakerAddCard
            cards={this.props.cards}
            pillars={this.props.pillars}
            selectedCard={this.props.selectedData.card}
          />
        );
        break;
      }
      case Menu.ADD_PILLAR: {
        leftComponent = (
          <MakerAddPillar
            pillars={this.props.pillars}
            selectedPillar={this.props.selectedData.pillar}
          />
        );
        break;
      }
    }

    return (
      <div style={css.adminTopLevel}>
        <div style={css.adminLeftCont}>{leftComponent}</div>
        <div style={{ ...css.adminVisCont, flexFlow: "column" }}>
          <MakerVis {...this.props} />
        </div>
      </div>
    );
  }
}

export default MakerView;
