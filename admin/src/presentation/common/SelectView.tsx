import * as React from "react";
import * as basicCSS from "src/styles/basicStyles";
import * as css from "src/styles/dataSelectStyles";
import SelectLimitView from "./SelectLimitView"
import Select from "react-select";
import { IPillars } from "src/store/store";

interface ISelectStateProps {
  pillars?: IPillars;
  selectableCards: Array<{ label: string, value: string }>;
  selectActions: {
    card: {
      select: (ids: string[]) => void;
    };
    filter: {
      updateFilter: (pillar: string, value: number, moreThan: boolean) => void
    };
  };
}

class SelectView extends React.Component<ISelectStateProps> {
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
          options={this.props.selectableCards}
        />
      </div>
    );

    const pillarFilters: any = [];
    if (this.props.pillars) {
      Object.keys(this.props.pillars).forEach((pillarName) => {
        if (this.props.pillars) {
          const pillar = this.props.pillars[pillarName];
          pillarFilters.push(<SelectLimitView key={pillarName} pillar={pillar} pillarName={pillarName} filter={this.props.selectActions.filter.updateFilter} />);
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

export default SelectView;
