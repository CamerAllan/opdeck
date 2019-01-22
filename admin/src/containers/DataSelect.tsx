import * as React from "react";
import DataSelectView from "../presentation/DataSelectView";
import { ThunkDispatch } from "redux-thunk";
import { IStore, IGame } from "src/store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { selectCards, filterPillars } from "src/actions/actions";

interface IDataSelectStateProps {
  game?: IGame;
  data: any;
  selectedData: any;
  cardStats: any;
}

interface IDataSelectDispatchProps {
  selectItemsDispatch: (
    ids: string[],
    action: (ids: string[]) => AnyAction
  ) => void;
  updateFilterDispatch: (
    pillar: string,
    value: number,
    moreThan: boolean
  ) => void;
}

type IDataSelectProps = IDataSelectStateProps & IDataSelectDispatchProps;

class DataSelect extends React.Component<IDataSelectProps> {
  constructor(props: IDataSelectProps) {
    super(props);
  }

  public render() {

    const cardOptions = this.formatOptions(this.props.cardStats)

    return (
      <DataSelectView
        game={this.props.game}
        cardOptions={cardOptions}
        selectActions={{
          card: { select: this.selectCard },
          filter: { updateFilter: this.props.updateFilterDispatch }
        }}
      />
    );
  }

  private formatOptions = (cardStats: any) => {
    const cardOptions: Array<{ value: string; label: string }> = []
    cardStats.forEach((card: any) => {
      if (this.props.selectedData.cards.indexOf(card.id) < 0) {
        cardOptions.push({ value: card.id, label: card.id });
      }
    });
    return cardOptions;
  }

  private selectCard = (ids: string[]) => {
    this.props.selectItemsDispatch(ids, selectCards);
  };
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  selectItemsDispatch: (ids: string[], action: (ids: string[]) => AnyAction) =>
    dispatch(action(ids)),
  updateFilterDispatch: (pillar: string, value: number, moreThan: boolean) => {
    const comparator = moreThan ? "moreThan" : "lessThan";
    return dispatch(filterPillars({ [pillar]: { [comparator]: value } }));
  }
});

export default connect<IDataSelectStateProps, IDataSelectDispatchProps>(
  null,
  mapDispatchToProps
)(DataSelect);
