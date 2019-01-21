import * as React from "react";
import * as css from "src/styles/dataSelectStyles";
import { ISelectedData, IGame } from "src/store/store";
import DataSelectLimitView from "./DataSelectLimitView"
import Select from "react-select";
interface IDataSelectStateProps {
  game?: IGame;
  data: any;
  selectedData: ISelectedData;
  cardStats: any;
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
    const cardOptions: Array<{ value: string; label: string }> = [];

    this.props.cardStats.forEach((card: any) => {
      cardOptions.push({ value: card, label: card.id });
    });

    const cardList = (
      <div>
        Cards:
        <Select
          isMulti={true}
          onChange={this.handleCardChange}
          options={cardOptions}
        />
      </div>
    );

    const pillarFilters: any = [];
    if (this.props.game) {
      Object.keys(this.props.game.pillars).forEach((pillarName) => {
        if (this.props.game) {
          const pillar = this.props.game.pillars[pillarName];
          pillarFilters.push(<DataSelectLimitView pillar={pillar} pillarName={pillarName} filter={this.props.selectActions.filter.updateFilter} />);
        }
      })
    }

    return (
      <div style={css.selectMenu}>
        <div style={css.selectCont}>{cardList}{pillarFilters}</div>
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
