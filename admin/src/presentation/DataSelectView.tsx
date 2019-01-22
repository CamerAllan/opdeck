import * as React from "react";
import * as basicCSS from "src/styles/basicStyles";
import * as css from "src/styles/dataSelectStyles";
import DataSelectLimitView from "./DataSelectLimitView"
import Select from "react-select";
import { IGame } from "src/store/store";
interface IDataSelectStateProps {
  game?: IGame;
  cardOptions: Array<{ value: string; label: string }>;
  selectActions: {
    card: {
      select: (ids: string[]) => void;
    };
    filter: {
      updateFilter: (pillar: string, value: number, moreThan: boolean) => void
    };
  };
}

class DataSelectView extends React.Component<IDataSelectStateProps> {
  public render() {

    const cardList = (
      <div >
        <div style={basicCSS.headerFontCentered}>
          Cards:
        </div>
        <Select
          closeMenuOnSelect={false}
          isMulti={true}
          onChange={this.handleCardChange}
          options={this.props.cardOptions}
        />
      </div>
    );

    const pillarFilters: any = [];
    if (this.props.game) {
      Object.keys(this.props.game.pillars).forEach((pillarName) => {
        if (this.props.game) {
          const pillar = this.props.game.pillars[pillarName];
          pillarFilters.push(<DataSelectLimitView key={pillarName} pillar={pillar} pillarName={pillarName} filter={this.props.selectActions.filter.updateFilter} />);
        }
      })
    }

    return (
      <div style={css.selectMenu}>
        <div style={css.selectCont}>
          {cardList}
          <div style={basicCSS.headerFontCentered}>
            Pillars:
          </div>
          {pillarFilters}
        </div>
      </div>
    );
  }



  private handleCardChange = (selectedOptions: any) => {
    this.props.selectActions.card.select(
      selectedOptions.map((e: any) => e.label)
    );
  };
}

export default DataSelectView;
