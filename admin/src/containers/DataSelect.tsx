import * as React from "react";
import DataSelectView from "../presentation/DataSelectView";
import { ThunkDispatch } from "redux-thunk";
import { IStore } from "src/store/store";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { selectCard } from "src/actions/actions";

interface IDataSelectStateProps {
  data: any;
  selectedData: any;
  cardStats: any;
}

interface IDataSelectDispatchProps {
  selectItemsDispatch: (
    ids: string[],
    action: (ids: string[]) => AnyAction
  ) => void;
}

type IDataSelectProps = IDataSelectStateProps & IDataSelectDispatchProps;

class DataSelect extends React.Component<IDataSelectProps> {
  constructor(props: IDataSelectProps) {
    super(props);
  }

  public render() {
    return (
      <DataSelectView
        {...this.props}
        selectActions={{
          card: { select: this.selectCard }
        }}
      />
    );
  }

  private selectCard = (ids: string[]) => {
    this.props.selectItemsDispatch(ids, selectCard);
  };
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  selectItemsDispatch: (ids: string[], action: (ids: string[]) => AnyAction) =>
    dispatch(action(ids))
});

export default connect<IDataSelectStateProps, IDataSelectDispatchProps>(
  null,
  mapDispatchToProps
)(DataSelect);
