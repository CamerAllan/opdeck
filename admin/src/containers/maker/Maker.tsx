import * as React from "react";
import MakerView from "../../presentation/maker/MakerView";
import { IStore } from "src/store/store";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getAllData, getGameData } from "src/actions/actions";

interface IMakerDispatchProps {
  getAllDataDispatch: () => void;
  getGameDataDispatch: (game: string) => void;
}

type IMakerProps = IMakerDispatchProps & IStore;

class Maker extends React.Component<IMakerProps> {
  constructor(props: IMakerProps) {
    super(props);
  }

  public render() {
    if (!(this.props.cards && this.props.pillars && this.props.turns)) {
      return <div>loading...</div>;
    }

    return (
      <MakerView
        menu={this.props.menu}
        selectedData={this.props.selectedData}
        cards={this.props.cards}
        pillars={this.props.pillars}
      />
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, any, AnyAction>
) => ({
  getAllDataDispatch: () => dispatch(getAllData()),
  getGameDataDispatch: (game: string) => dispatch(getGameData(game))
});

const mapStateToProps = (state: IStore): IStore => {
  return { ...state };
};

export default connect<IStore, IMakerDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Maker);
