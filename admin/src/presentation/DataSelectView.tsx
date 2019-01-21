import * as React from "react";
import * as css from "src/styles/dataSelectStyles";
import { ISelectedData } from "src/store/store";
import Select from "react-select";

interface IDataSelectStateProps {
  data: any;
  selectedData: ISelectedData;
  cardStats: any;
  selectActions: {
    card: {
      select: (ids: string[]) => void;
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
          onChange={this.handleChange}
          options={cardOptions}
        />
      </div>
    );

    return (
      <div style={css.selectMenu}>
        <div style={css.selectCont}>{cardList}</div>
      </div>
    );
  }

  private handleChange = (selectedOptions: any) => {
    this.props.selectActions.card.select(
      selectedOptions.map((e: any) => e.label)
    );
  };
}

export default DataSelectView;
