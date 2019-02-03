import * as React from "react";
import * as formCSS from "src/styles/formStyles";
import SelectLimitView from "./SelectLimitView";
import Select from "react-select";
import { IPillars } from "src/store/store";

interface ISelectStateProps {
  pillars?: IPillars;
  selectableCards: Array<{ label: string; value: string }>;
  selectActions: {
    card: {
      select: (ids: string[]) => void;
    };
    filter: {
      updateFilter: (pillar: string, value: number, moreThan: boolean) => void;
    };
  };
}

class SelectView extends React.Component<ISelectStateProps> {
  public render() {
    const cardList = (
      <Select
        closeMenuOnSelect={false}
        isMulti={true}
        onChange={this.handleCardChange}
        options={this.props.selectableCards}
      />
    );

    const pillarFilters: any = [];
    if (this.props.pillars) {
      Object.keys(this.props.pillars).forEach(pillarName => {
        if (this.props.pillars) {
          const pillar = this.props.pillars[pillarName];
          pillarFilters.push(
            <div style={formCSS.formGroupElement}>
              <div style={formCSS.formLabel}> {pillarName}: </div>
              <div style={formCSS.horFormGroupContainer}>
                <SelectLimitView
                  key={pillarName}
                  pillar={pillar}
                  pillarName={pillarName}
                  filter={this.props.selectActions.filter.updateFilter}
                />
              </div>
            </div>
          );
        }
      });
    }

    return (
      <>
        <div style={formCSS.vertFormGroupContainer}>
          <div style={formCSS.formGroupElement}>
            <div style={formCSS.formLabel}>Cards:</div>
            {cardList}
          </div>
          <div style={formCSS.formGroupElement}>
            <div style={formCSS.formLabel}>Pillars:</div>
            {pillarFilters}
          </div>
        </div>
      </>
    );
  }

  private handleCardChange = (selectedOptions: any) => {
    this.props.selectActions.card.select(
      selectedOptions.map((e: any) => e.label)
    );
  };
}

export default SelectView;
