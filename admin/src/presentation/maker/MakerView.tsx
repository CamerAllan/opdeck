import * as React from "react";
import Select from "../../containers/common/Select";
import MakerVis from "../../containers/maker/MakerVis";
import MakerAdd from "../../containers/maker/MakerAdd";
import * as css from "../../styles/adminStyles";
import * as makerCSS from "../../styles/maker/makerVisStyles";
import { ISelectedData, ICards, IPillars, Menu } from "../../store/store";
import MakerAddCard from "../../containers/maker/MakerAddCard";
import MakerAddPillar from "../../containers/maker/MakerAddPillar";
interface IMakerStateProps {
  selectedData: ISelectedData;
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
            <MakerAdd />
            <Select
              selectedCards={this.props.selectedData.cards}
              pillars={this.props.pillars}
              cards={this.props.cards}
            />
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
        <div style={makerCSS.visContainer}>
          <MakerVis {...this.props} />
        </div>
      </div>
    );
  }
}

export default MakerView;
