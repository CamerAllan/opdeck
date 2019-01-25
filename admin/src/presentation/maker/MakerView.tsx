import * as React from "react";
// import Select from "../../containers/common/Select";
import MakerVis from "../../containers/maker/MakerVis";
import * as css from "../../styles/adminStyles";
// import * as makerCSS from "../../styles/maker/makerVisStyles";
import {
  ISelectedData,
  ICards,
  IPillars,
  Menu,
  ICard
} from "../../store/store";
import MakerAddCard from "../../containers/maker/MakerAddCard";
import MakerAddPillar from "../../containers/maker/MakerAddPillar";
import CardView from "../common/CardView";
interface IMakerStateProps {
  selectedData: ISelectedData;
  cards: ICards;
  pillars: IPillars;
  menu: Menu;
}

class MakerView extends React.Component<IMakerStateProps> {
  public render() {
    const selectedCard: ICard = this.props.cards[this.props.selectedData.card];
    let leftComponent;
    switch (this.props.menu) {
      case Menu.VIS: {
        leftComponent = (
          <>
            {/* <Select
              selectedCards={this.props.selectedData.cards}
              pillars={this.props.pillars}
              cards={this.props.cards}
            /> */}
            {selectedCard ? (
              <CardView id={this.props.selectedData.card} card={selectedCard} />
            ) : null}
          </>
        );
        break;
      }
      case Menu.ADD_CARD: {
        leftComponent = (
          <MakerAddCard cards={this.props.cards} pillars={this.props.pillars} />
        );
        break;
      }
      case Menu.ADD_PILLAR: {
        leftComponent = <MakerAddPillar pillars={this.props.pillars} />;
        break;
      }
    }

    return (
      <div style={css.adminTopLevel}>
        <div style={css.adminSelectCont}>{leftComponent}</div>
        <div style={{ ...css.adminVisCont, flexFlow: "column" }}>
          <MakerVis {...this.props} />
        </div>
      </div>
    );
  }
}

export default MakerView;
